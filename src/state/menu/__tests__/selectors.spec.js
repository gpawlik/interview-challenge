import {
  getAvailableItems,
  getSelectedIds,
  getSelectedItems,
  getSelectedItemsCount,
  getCategorySummary,
  getSummaryArray,
} from "../selectors";

const defaultState = {
  menu: {
    items: [
      {
        id: 1001,
        name:
          "Kale Caesar Pasta, Turmeric Satay Broccoli & Lemon Cashew Greens",
        dietaries: ["v", "ve", "df", "gf", "n!"],
      },
      {
        id: 1002,
        name: "Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots",
        dietaries: ["gf", "df", "rsf"],
      },
      {
        id: 1003,
        name:
          "Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots",
        dietaries: ["gf", "df", "v", "ve"],
      },
    ],
    selected: [1002, 1003],
  },
};

describe("Menu #selectors", () => {
  describe("select correct values", () => {
    it("should return correct value of getSelectedItems", () => {
      const selected = getSelectedItems(defaultState);
      expect(selected).toEqual([
        {
          id: 1002,
          name: "Hake & Smoky Chickpeas, Brown Rice & Quinoa, Roasted Roots",
          dietaries: ["gf", "df", "rsf"],
        },
        {
          id: 1003,
          name:
            "Dill & Swiss Chard Potato Cakes, Summer Tabbouleh & Roasted Roots",
          dietaries: ["gf", "df", "v", "ve"],
        },
      ]);
    });

    it("should return correct value of getSelectedItemsCount", () => {
      const selected = getSelectedItemsCount(defaultState);
      expect(selected).toEqual(2);
    });

    it("should return correct value of getCategorySummary", () => {
      const selected = getCategorySummary(defaultState);
      expect(selected).toEqual({ gf: 2, df: 2, rsf: 1, v: 1, ve: 1 });
    });

    it("should return correct value of getSummaryArray", () => {
      const selected = getSummaryArray(defaultState);
      expect(selected).toEqual([
        { label: "df", count: 2 },
        { label: "gf", count: 2 },
        { label: "rsf", count: 1 },
        { label: "v", count: 1 },
        { label: "ve", count: 1 },
      ]);
    });
  });
});
