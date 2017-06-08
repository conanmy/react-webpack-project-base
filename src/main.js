import ReactDOM from 'react-dom';

require('./styles/main.scss');

import routes from './routes';

ReactDOM.render(
    routes,
    document.getElementById('appContainer')
);