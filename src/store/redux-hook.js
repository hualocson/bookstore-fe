import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

/**
 * @type {import("@/types/redux").UseAppDispatch}
 */
export const useDispatch = useReduxDispatch;
/**
 * @type {import("@/types/redux").UseAppSelector}
 */
export const useSelector = useReduxSelector;
