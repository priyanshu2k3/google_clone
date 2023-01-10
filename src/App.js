import Home from './components/pages/Home';
import { BrowserRouter ,Route,Routes} from 'react-router-dom';
import Result from './components/pages/Result';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
        <Route path="/result" element={<Result/>}/>
        <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
      </header>
    </div>
  );
}

export default App;