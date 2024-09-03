import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar/ui/Navbar';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
