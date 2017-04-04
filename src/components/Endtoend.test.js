import React from 'react';
import { expect } from 'chai';
import { render } from 'enzyme';

import App from './App';

describe('<App />', () => {

  it('renders the title', () => {
    const title = render(<App />);
    expect(title.text()).to.contain('Welcome to React Boilerplate');
  });

});
