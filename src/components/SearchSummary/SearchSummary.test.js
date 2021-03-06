import { render } from "@testing-library/react";
import renderer from "react-test-renderer";
import { MOCK_DATA } from "./mock";

import SearchSummary from "./index";

const SEARCH_SUMMARY_PROPS = MOCK_DATA;

describe("SearchSummary rendering", () => {
  it("renders SearchSummary component without crashing", () => {
    const component = renderer.create(<SearchSummary summary={SEARCH_SUMMARY_PROPS} />);
    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders SearchSummary component when passed correct props", () => {
    const { getByLabelText, unmount } = render(<SearchSummary summary={SEARCH_SUMMARY_PROPS} />);

    const headingContainer = getByLabelText("search-summary");
    expect(headingContainer.textContent).not.toBeNull();

    unmount();
  });
});
