import { Store, MutationPayload } from "vuex";
import merge from "deepmerge";
import * as shvl from "shvl";

interface Storage {
  getItem: (key: string) => any;
  setItem: (key: string, value: any) => void;
  removeItem: (key: string) => void;
}

interface Options<State> {
  key?: string;
  paths?: string[];
  reducer?: (state: State, paths: string[]) => object;
  subscriber?: (
    store: Store<State>
    ) => (handler: (mutation: any, state: State) => void) => void;
  storage?: Storage;
  getState?: (key: string, storage: Storage) => any;
  setState?: (key: string, state: any, storage: Storage) => void;
  filter?: (mutation: MutationPayload) => boolean;
  arrayMerger?: (state: any[], saved: any[]) => any;
  rehydrated?: (store: Store<State>) => void;
  fetchBeforeUse?: boolean;
  overwrite?: boolean;
  assertStorage?: (storage: Storage) => void | Error;
}

export default function <State>(
  options?: Options<State>
): (store: Store<State>) => void {
  options = options || {};

  const storage = options.storage || (window && window.localStorage);
  const key = options.key || "vuex";

  function getState(key, storage) {
    const value = storage.getItem(key);

    try {
      return (typeof value === "string")
        ? JSON.parse(value) : (typeof value === "object")
        ? value : undefined;
    } catch (err) {}

    return undefined;
  }

  function filter() {
    return true;
  }

  function setState(key, state, storage) {
    return storage.setItem(key, JSON.stringify(state));
  }

  function reducer(state, paths) {
    console.log("reducer");
    console.log(state);
    console.log(paths);

    return Array.isArray(paths)
      ? paths.reduce(function (substate, path) {
          return shvl.set(substate, path, shvl.get(state, path));
        }, {})
      : state;
  }

  function subscriber(store) {
    console.log("[vuex-p]subscriber store");
    console.log(store);
    return function (handler) {
      console.log("[vuex-p]subscriber handler");
      console.log(store.subscribe(handler));
      return store.subscribe(handler);
    };
  }

  const assertStorage =
    options.assertStorage ||
    (() => {
      console.log("[vuex-p]test");
      storage.setItem("@@", 1);
      storage.removeItem("@@");
    });

  assertStorage(storage);

  const fetchSavedState = () => (options.getState || getState)(key, storage);

  let savedState;

  if (options.fetchBeforeUse) {
    savedState = fetchSavedState();
  }

  return function (store: Store<State>) {
    if (!options.fetchBeforeUse) {
      savedState = fetchSavedState();
    }
    console.log("[vuex-p]savedState");
    console.log(savedState);

    console.log("[vuex-p]store");
    console.log(store);
    console.log(store.state);
    console.log("[vuex-p]options.overwrite");
    console.log(options.overwrite);

    if (typeof savedState === "object" && savedState !== null) {
      store.replaceState(
        options.overwrite
          ? savedState
          : merge(store.state, savedState, {
              arrayMerge:
                options.arrayMerger ||
                function (store, saved) {
                  return saved;
                },
              clone: false,
            })
      );
      (options.rehydrated || function () {})(store);
    }
    console.log("[vuex-p]subscriber");
    console.log(subscriber(store));

    (options.subscriber || subscriber)(store)(function (mutation, state) {
      console.log("[vuex-p]state");
      console.log(state);
      console.log("[vuex-p]options");
      console.log(options);
      console.log("[vuex-p]filter");
      console.log(filter);
      console.log("[vuex-p]options.filter");
      console.log(options.filter);
      console.log("[vuex-p]setState");
      console.log(setState);
      console.log("[vuex-p]options.setState");
      console.log(options.setState);
      console.log("[vuex-p]options.reducer");
      console.log(options.reducer);
      console.log("[vuex-p]reducer");
      console.log(reducer);
      console.log("[vuex-p]options.paths");
      console.log(options.paths);

      if ((options.filter || filter)(mutation)) {
        console.log("[vuex-p]in filter");
        (options.setState || setState)(
          key,
          (options.reducer || reducer)(state, options.paths),
          storage
        );
      }
    });
  };
}
