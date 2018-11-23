import React, { Fragment }  from 'react'
import { render } from 'react-dom';
import App from './components/App'
import { createGlobalStyle } from 'styled-components';
import {primary, secondary} from "./components/Pallete";

const ResetCSS = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${primary.hexa()};
  }
  * {
    box-sizing: border-box;
  }
`;

const wrapper = document.createElement('main');
document.body.appendChild(wrapper);

render(
    <Fragment>
        <ResetCSS />
        <App />
    </Fragment>,
    wrapper
);

