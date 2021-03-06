import api from "./index";
import getCity from "./getCity";

jest.mock("./index");

describe("function getCity with AXIOS", () => {
  test("fetches successfully data from an API", async () => {
    const sampleData = { name: "Ho Chi Minh city" };
    api.get.mockImplementationOnce(() => Promise.resolve(sampleData));

    const data = await getCity("Ho Chi Minh");
    expect(data).toBe(sampleData);
  });
});
