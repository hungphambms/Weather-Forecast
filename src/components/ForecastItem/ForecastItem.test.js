import { render, cleanup, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';

import ForecastItem from './index';

const SAMPLE_PROPS = {
  dt: 1615006800,
  sunrise: 1614985544,
  sunset: 1615028631,
  temp: {
    day: 309.15,
    min: 295.47,
    max: 309.15,
    night: 297.99,
    eve: 301.63,
    morn: 295.47,
  },
  feels_like: {
    day: 309.14,
    night: 299.5,
    eve: 300.95,
    morn: 297.64,
  },
  pressure: 1013,
  humidity: 28,
  dew_point: 288.26,
  wind_speed: 2.11,
  wind_deg: 64,
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01d",
    },
  ],
  clouds: 0,
  pop: 0,
  uvi: 13.87,
};

afterEach(cleanup);

describe('ForecastItem rendering', () => {
  it('renders ForecastItem without crashing', () => {
    const render = renderer.create(<ForecastItem item={SAMPLE_PROPS} />);
    const tree = render.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correct items', async() => {
    const component = render(<ForecastItem item={SAMPLE_PROPS} />);
    expect(component).not.toBeNull();
  });
});
