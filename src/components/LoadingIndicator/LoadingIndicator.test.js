/* eslint-disable jsx-a11y/no-redundant-roles */
import { render, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";

import LoadingIndicator from "./index";

afterEach(cleanup);

describe("LoadingIndicator component rendering", () => {
  it("renders LoadingIndicator component without crashing", () => {
    const component = renderer.create(
      <LoadingIndicator isLoading>
        <h1>Sample Children Content</h1>
      </LoadingIndicator>
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render children", () => {
    const component = render(
      <LoadingIndicator isLoading={false}>
        <h1 role="heading">Sample Children Content</h1>
      </LoadingIndicator>
    );

    const headingContainer = component.getByRole("heading");
    expect(headingContainer.textContent).toBe("Sample Children Content");
  });
});
