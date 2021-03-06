import { render, cleanup, fireEvent } from "@testing-library/react";
import renderer from "react-test-renderer";

import SearchForm from "./index";

const INPUT_CHANGE_EVENT = {
  target: { value: "AAA" },
};

afterEach(cleanup);

describe("SearchForm component rendering", () => {
  it("renders SearchForm component without crashing", () => {
    const component = renderer.create(
      <SearchForm onSearch={(value) => console.log(value)} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("text in state is changed when input changed", () => {
    const { getByLabelText } = render(
      <SearchForm onSearch={(value) => console.log(value)} />
    );
    const inputContainer = getByLabelText("search-input");

    expect(inputContainer.value).toBe("");
    fireEvent.change(inputContainer, INPUT_CHANGE_EVENT);
    expect(inputContainer.value).toBe(INPUT_CHANGE_EVENT.target.value);
  });
});
