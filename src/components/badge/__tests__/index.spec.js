import * as React from "react";
import renderer from "react-test-renderer";

import { Badge } from "../";

jest.mock("../styles", () => ({
  Container: "Container",
}));

const initialProps = {
  text: "Hello World",
};

const mockComponent = (props) => {
  const finalProps = {
    ...initialProps,
    ...props,
  };

  return renderer.create(<Badge {...finalProps} />);
};

describe("Badge", () => {
  it("renders correctly default version", () => {
    const tree = mockComponent().toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with no text", () => {
    const tree = mockComponent({ text: "" }).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
