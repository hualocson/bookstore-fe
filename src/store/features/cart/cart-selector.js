/**
 *
 * @param {import("@/types/redux.d.ts").RootState} state
 * @returns
 */
export const getCartLength = (state) => state.cart.length;
/**
 *
 * @param {import("@/types/redux.d.ts").RootState} state
 * @returns
 */
export const getCart = (state) => state.cart;
