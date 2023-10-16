import './App.css';
import Code from './components/taskCode';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <p className="AppP">Color Picker</p>
      <div className="d-flex justify-content-center">
        <Code />
      </div>
    </div>
  );
}

export default App;
