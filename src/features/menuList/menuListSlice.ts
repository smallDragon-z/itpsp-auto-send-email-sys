import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { MenuProps } from 'antd';
import React from 'react';
type MenuItem = Required<MenuProps>['items'][number];
export interface MenuListState {
  label: string;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: string;
}
export interface CounterState {
  data: MenuListState[];
}

const initialState: CounterState = {
  data: [],
};

export const menuListSlice = createSlice({
  name: 'menuList',
  initialState,
  reducers: {
    updateMenuList: (state, action: PayloadAction<MenuListState[]>) => {
      state.data = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateMenuList } = menuListSlice.actions;

export default menuListSlice.reducer;
