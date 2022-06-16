import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import { UserProvider } from './UserContext/UserContext';
import Delete from './components/Delete/Delete';
import Read from './components/Read/Read';
import Create from './components/Create/Create';
import Edit from './components/Edit/Edit';
import Search from './components/Search/Search';

function App() {
  return (
    <div className="app">
      <UserProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/delete/:id" element={<Delete/>} />
            <Route path="/read/:id" element={<Read/>} />
            <Route path="/create" element={<Create/>} />
            <Route path="/edit/:id" element={<Edit/>} />
            <Route path="/search" element={<Search/>} />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
