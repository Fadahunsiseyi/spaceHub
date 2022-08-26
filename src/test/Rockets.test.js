import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import RocketList from '../pages/Rockets';

describe('Run the test for the reserved list of rockets', () => {
  it('To Test Rockets component renders successfully', () => {
    const app = renderer.create(
      <Provider store={store}>
        <RocketList />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
