import * as actions from "../actions";
import { menu as reducer } from "../";

const initialState = {
  items: [
    {
      id: 1001,
      name: "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
      dietaries: ["v", "ve", "df", "gf", "n!"],
    },
    {
      id: 1003,
      name: "Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots",
      dietaries: ["gf", "df", "v", "ve"],
    },
  ],
  selected: [1001],
};

describe("Menu #reducer", () => {
  describe("ADD_ITEM action", () => {
    it("returns correct state for non existing id", () => {
      const payload = 1002;
      const result = reducer(initialState, actions.addItem(payload));
      expect(result.selected).toEqual([1001, 1002]);
    });

    it("returns correct state for existing id", () => {
      const payload = 1001;
      const result = reducer(initialState, actions.addItem(payload));
      expect(result.selected).toEqual([1001]);
    });
  });

  describe("REMOVE_ITEM action", () => {
    it("returns correct state for existing id", () => {
      const payload = 1001;
      const result = reducer(initialState, actions.removeItem(payload));
      expect(result.selected).toEqual([]);
    });

    it("returns correct state for non existing id", () => {
      const payload = 1003;
      const result = reducer(initialState, actions.removeItem(payload));
      expect(result.selected).toEqual([1001]);
    });
  });
});
