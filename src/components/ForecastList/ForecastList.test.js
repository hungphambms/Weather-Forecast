import { render, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';

import {MOCK_DATA} from "./mock";

import ForecastList from './index';

describe('ForecastList rendering', () => {
  it('renders ForecastList without crashing', () => {
    const render = renderer.create(<ForecastList items={MOCK_DATA.daily} />);
    const tree = render.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correct items', async() => {
    const component = await waitFor(() => render(<ForecastList items={MOCK_DATA.daily} />));
    const listItems = component.getAllByLabelText('item');

    expect(listItems).toHaveLength(MOCK_DATA.daily.length);
  });

  it('renders null when item is null', () => {
    const component = render(<ForecastList />);
    expect(component.textContent).toBe(undefined);
  });
});
