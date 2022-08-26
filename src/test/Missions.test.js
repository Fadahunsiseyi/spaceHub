import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import React from 'react';
import Missions from '../pages/Missions';
import store from '../redux/configureStore';

describe('Pages renders correctly', () => {
  it('Missions page renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      )
      .toJSON();
    render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    const element = document.querySelector('.mission-container-list');
    expect(element).toBeTruthy();
    expect(tree).toMatchSnapshot();
  });
});
