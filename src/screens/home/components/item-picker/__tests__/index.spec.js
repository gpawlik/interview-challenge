import * as React from "react";
import renderer from "react-test-renderer";

import { ItemPicker } from "../";

jest.mock("react-redux", () => ({
  useDispatch: () => {},
  useSelector: (item) => item(),
}));

jest.mock("../../../../../components/menu-item", () => ({
  MenuItem: "MenuItem",
}));

jest.mock("../../../../../state/menu/selectors", () => ({
  getAvailableItems: () => {
    return [
      { id: 1, name: "Text A", dietaries: [] },
      { id: 2, name: "Text B", dietaries: [] },
    ];
  },
}));

jest.mock("../styles", () => ({
  Container: "Container",
}));

const initialProps = {};

const mockComponent = (props) => {
  const finalProps = {
    ...initialProps,
    ...props,
  };

  return renderer.create(<ItemPicker {...finalProps} />);
};

describe("ItemPicker", () => {
  it("renders correctly default version", () => {
    const tree = mockComponent().toJSON();

    expect(tree).toMatchSnapshot();
  });
});
