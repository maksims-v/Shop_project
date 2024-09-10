import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'app/providers/StoreProvider';

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
