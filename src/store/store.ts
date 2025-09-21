import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { itemDetailSlice } from './slices/item-detail-slice';
import { cartSlice } from './slices/cart-slice';

//slices

const Store = configureStore({
  reducer: {
    itemDetails: itemDetailSlice.reducer,
    cart: cartSlice.reducer,
  },
});

export { Store };
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;