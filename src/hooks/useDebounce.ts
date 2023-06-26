import debounce from 'lodash/debounce';
import { useEffect, useMemo, useRef } from "react";

type Callback = () => void;

const useDebounce = (callback: Callback, ms = 400) => {
  const ref = useRef<Callback>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo<Callback>(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, ms);
  }, [ms]);

  return debouncedCallback;
};

export default useDebounce;
