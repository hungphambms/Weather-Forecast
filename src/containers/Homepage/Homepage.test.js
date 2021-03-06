import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";

import renderer from "react-test-renderer";

import Homepage from "./index";
import getWeather from "../../api/getWeather";
import { MOCK_WEATHER } from "../../api/getWeather.mock";


jest.mock("../../api/getWeather");

afterEach(cleanup);

describe("Homepage rendering", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders Homepage without crashing", () => {
    let render = null;

    renderer.act(() => {
      render = renderer.create(<Homepage />);
    });

    const tree = render.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders ForecastList component after fetch success", async () => {
    getWeather.mockResolvedValueOnce(MOCK_WEATHER);

    const wrapper = render(<Homepage />);
    const searchInputContainer = await waitFor(() =>
      wrapper.getByLabelText("search-input")
    );

    renderer.act(() => {
      fireEvent.change(searchInputContainer, { target: { value: "redux" } });
    });

    await waitFor(() => {
      expect(getWeather).toHaveBeenCalledWith("redux");
    });

    expect(wrapper.getAllByLabelText("item")).toHaveLength(
      MOCK_WEATHER.daily.length
    );
  });
});
