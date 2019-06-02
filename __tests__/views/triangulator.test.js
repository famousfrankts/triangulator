import React from 'react';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import configureStore from 'redux-mock-store';

import Triangulator from '../../src/views/triangulator';

const mockStore = configureStore();

describe('<Triangulator />', () => {
  describe('Rendering', () => {
    test ('it renders the component', () => {
      const store = mockStore({
        triangle: { a: 10, b: 10, c: 10 },
      });
      const component = mount(<Triangulator store={store} />);

      expect(toJson(component)).toMatchSnapshot();
    });
  });
});
