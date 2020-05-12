import { ADD_ITEM, REMOVE_ITEM } from "./constants";

import items from "./items";

export const initialState = {
  items,
  selected: [],
};

export const menu = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const { payload } = action;
      return {
        ...state,
        selected: [...state.selected, payload],
      };
    }

    case REMOVE_ITEM: {
      const { payload } = action;
      return {
        ...state,
        selected: state.selected.filter((item) => item !== payload),
      };
    }

    default: {
      return state;
    }
  }
};
