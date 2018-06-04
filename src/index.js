import React from 'react';
import { render } from 'react-dom';
import Input from './Input';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Input />
  </div>
);

render(<App />, document.getElementById('root'));
