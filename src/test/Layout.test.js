import React from 'react';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Layout from '../components/shared/Layout';

describe('Pages renders correctly', () => {
  it('Should redenders NavBar Component succefully', () => {
    const app = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Layout />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
