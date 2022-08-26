import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import DragonList from '../pages/Dragons';

describe('Run the test for the reserved list of dragons', () => {
  it('To Test Dragons component renders successfully!', () => {
    const app = renderer.create(
      <Provider store={store}>
        <DragonList />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
