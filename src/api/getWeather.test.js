import getWeather from "./getWeather";

import { MOCK_WEATHER } from "./getWeather.mock";

jest.mock("./getWeather");

test("shoud fetch weather when have data", async () => {
  const sampleData = { ...MOCK_WEATHER };
  getWeather.mockResolvedValue(sampleData);

  const data = await getWeather();
  expect(data.daily).toHaveLength(sampleData.daily.length);
});
