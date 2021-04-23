/**
 * @ Author: Muniz
 * @ Create Time: 2020-06-10 09:55:59
 * @ Modified by: Muniz
 * @ Modified time: 2020-07-16 18:37:36
 * @ Description: popup.html chrome 扩展插件, 弹出框的页面展示入口
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from '_src/pages/Home';

const Root = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
