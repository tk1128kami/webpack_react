import React from "react";
import ReactDOM from "react-dom";
import Article from './component/article.jsx';
import reactLogo from '../images/react-logo.png';
import '../scss/style.scss';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <>
    <Article
      title={'Success! welcome to react'}
      content='React Set UP'
      logo={reactLogo}
    />
  </>
);