
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddPost from './components/Addpost';
// hshbishjbx
import './index.css'; 
import Profile from './components/Profile';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Addpost" element={<AddPost />} />
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
