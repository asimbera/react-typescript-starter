import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RecoilRoot } from 'recoil';

const root = document.getElementById('root');

ReactDOM.render(
  <RecoilRoot>
    <App />
  </RecoilRoot>,
  root
);
