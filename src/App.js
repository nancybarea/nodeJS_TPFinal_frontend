import './App.css';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import ShowPost from './components/ShowPosts';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/create' element={<CreatePost/>} />
            <Route path='/edit' element={<EditPost/>} />
            <Route path='/show' element={<ShowPost/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
