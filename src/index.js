import React from 'react';
import ReactDOM from 'react-dom';
import HelloMessage from './components/HelloMessage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloMessage/>, document.getElementById('root'));

registerServiceWorker();
