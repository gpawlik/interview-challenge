import * as React from "react";
import renderer from "react-test-renderer";

import { MenuPreview } from "../";

jest.mock("react-redux", () => ({
  useDispatch: () => {},
  useSelector: (item) => item(),
}));

jest.mock("../../../../../components/menu-item", () => ({
  MenuItem: "MenuItem",
}));

jest.mock("../../../../../state/menu/selectors", () => ({
  getSelectedItems: () => {
    return [
      { id: 1, name: "Text A", dietaries: [] },
      { id: 2, name: "Text B", dietaries: [] },
      { id: 3, name: "Text C", dietaries: [] },
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

  return renderer.create(<MenuPreview {...finalProps} />);
};

describe("MenuPreview", () => {
  it("renders correctly default version", () => {
    const tree = mockComponent().toJSON();

    expect(tree).toMatchSnapshot();
  });
});
