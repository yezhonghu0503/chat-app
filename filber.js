// import React from "react";
import React from 'react';
import ReactDom from 'react-dom';

const element = (
  <div id="1">
    <div id="2" />
    <div id="3" />
  </div>
);
console.log(element);

ReactDom.render(element, document.getElementById('app'));
