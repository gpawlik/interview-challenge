import * as React from "react";
import renderer from "react-test-renderer";

import { MenuItem } from "../";

jest.mock("../styles", () => ({
  Container: "Container",
  Title: "Title",
  InfoRow: "InfoRow",
  RemoveButton: "RemoveButton",
}));

const initialProps = {
  name: "Item 123",
  dietaries: ["ab", "cd", "ef"],
  onPress: () => {},
};

const mockComponent = (props) => {
  const finalProps = {
    ...initialProps,
    ...props,
  };

  return renderer.create(<MenuItem {...finalProps} />);
};

describe("MenuItem", () => {
  it("renders correctly default version", () => {
    const tree = mockComponent().toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with delete button", () => {
    const tree = mockComponent({ onDelete: () => {} }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
