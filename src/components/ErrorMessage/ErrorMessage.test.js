import { render } from "@testing-library/react";
import renderer from "react-test-renderer";

import ErrorMessage from "./index";

const MESSAGE_PROPS = { message: "Have error" };

describe("ErrorMessage rendering", () => {
  it("renders ErrorMessage component without crashing", () => {
    const component = renderer.create(<ErrorMessage {...MESSAGE_PROPS} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("show correct error message", () => {
    const { getByText, unmount } = render(<ErrorMessage {...MESSAGE_PROPS} />);

    const headingContainer = getByText(MESSAGE_PROPS.message);
    expect(headingContainer.textContent).toBe(MESSAGE_PROPS.message);

    unmount();
  });
});
