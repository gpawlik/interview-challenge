import * as React from "react";
import renderer from "react-test-renderer";

import { HomeScreen } from "../";

jest.mock("../components/item-picker", () => ({
  ItemPicker: "ItemPicker",
}));
jest.mock("../components/menu-preview", () => ({
  MenuPreview: "MenuPreview",
}));
jest.mock("../components/summary", () => ({
  Summary: "Summary",
}));

jest.mock("../styles", () => ({
  Wrapper: "Wrapper",
  MenuSummary: "MenuSummary",
  MenuBuilder: "MenuBuilder",
}));

describe("HomeScreen", () => {
  it("renders correctly", () => {
    const component = renderer.create(<HomeScreen />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });
});
