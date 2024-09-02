import './styles/index.scss';
import { Link } from 'react-router-dom';
import { AppRouter } from './providers/router';

const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Главная</Link>
      <Link to={'/about'}>О сайте</Link>
      <AppRouter />
    </div>
  );
};

export default App;
