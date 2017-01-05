import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';

const root = document.getElementById('root');

ReactDOM.render((
    <Root />
), root);

if (module.hot) {
    module.hot.accept();
    module.hot.dispose(function() {
        
    });
}
