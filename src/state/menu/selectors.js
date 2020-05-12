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

export const getSelectedItemsCount = createSelector(
  getSelectedItems,
  (items) => items.length
);

export const getCategorySummary = createSelector(getSelectedItems, (items) =>
  items.reduce((acc, item) => {
    return item.dietaries.reduce((acc, dietary) => {
      return acc[dietary]
        ? { ...acc, [dietary]: acc[dietary] + 1 }
        : { ...acc, [dietary]: 1 };
    }, acc);
  }, {})
);

export const getSummaryArray = createSelector(getCategorySummary, (items) =>
  Object.keys(items)
    .map((label) => ({ label, count: items[label] }))
    .sort((a, b) => {
      if (b.label > a.label) {
        return -1;
      }
      if (a.label > b.label) {
        return 1;
      }
      return 0;
    })
);
