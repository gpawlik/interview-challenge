import * as React from "react";
import renderer from "react-test-renderer";

import { Summary } from "../";

jest.mock("react-redux", () => ({
  useSelector: (item) => item(),
}));

jest.mock("../../../../../components/badge", () => ({
  Badge: "Badge",
}));

jest.mock("../../../../../state/menu/selectors", () => ({
  getSelectedItemsCount: () => 5,
  getSummaryArray: () => {
    return [
      { label: "aa", count: 2 },
      { label: "bb", count: 3 },
      { label: "cc", count: 1 },
    ];
  },
}));

jest.mock("../styles", () => ({
  SummaryLeft: "SummaryLeft",
  SummaryRight: "SummaryRight",
}));

const initialProps = {};

const mockComponent = (props) => {
  const finalProps = {
    ...initialProps,
    ...props,
  };

  return renderer.create(<Summary {...finalProps} />);
};

describe("Summary", () => {
  it("renders correctly default version", () => {
    const tree = mockComponent().toJSON();

    expect(tree).toMatchSnapshot();
  });
});
