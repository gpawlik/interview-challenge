import { createSelector } from "reselect";

export const getState = (state) => state.menu;

export const getAvailableItems = createSelector(
  getState,
  (state) => state.items || []
);

export const getSelectedIds = createSelector(
  getState,
  (state) => state.selected || []
);

export const getSelectedItems = createSelector(
  [getAvailableItems, getSelectedIds],
  (items, ids) => ids.map((id) => items.find((item) => item.id === id)) || []
);
