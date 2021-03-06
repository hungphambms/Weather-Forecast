import renderer from "react-test-renderer";

import App from "./App";

test("render App component without crashing", () => {
  const component = renderer.create(<App />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
