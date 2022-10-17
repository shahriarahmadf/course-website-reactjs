import logo from './logo.svg';
import './App.css';
import Courses from './components/Courses/Courses';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className='main-page'>
      <Courses></Courses>
      <Dashboard></Dashboard>
    </div>
  );
}

export default App;
