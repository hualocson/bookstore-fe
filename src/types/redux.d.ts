import { store } from "@/store";
import { TypedUseSelectorHook } from "react-redux";

/**
 * @see https://react-redux.js.org/using-react-redux/usage-with-typescript#typing-the-useselector-hook
 */
export declare type RootState = ReturnType<typeof store.getState>;
export declare type AppDispatch = typeof store.dispatch;

export declare type UseAppSelector = TypedUseSelectorHook<RootState>
export declare type UseAppDispatch = () => AppDispatch