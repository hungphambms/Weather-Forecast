import api from "./index";
import getDaily from "./getDaily";

jest.mock("./index");

describe("function getDaily with AXIOS", () => {
  test("fetches successfully data from an API", async () => {
    const sampleData = {
      timezone: "Asia/Ho_Chi_Minh",
      current: {
        dt: 1615014591,
      },
      daily: [
        {
          dt: 1615006800,
        },
        {
          dt: 1615093200,
        },
      ],
    };
    api.get.mockImplementationOnce(() => Promise.resolve(sampleData));

    const data = await getDaily(1, 2);
    expect(data).toBe(sampleData);
  });
});
