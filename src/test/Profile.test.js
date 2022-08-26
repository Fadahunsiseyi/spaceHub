import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Profile from '../components/Profile';

describe('To test Profile components', () => {
  it('To Test Profile components renders successfully!', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Profile />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});
