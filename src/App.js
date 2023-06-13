import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Posts from './components/Posts/Posts';
import PostID from './components/Posts/[id]/[id]';
import CommentsFromID from './components/Posts/[id]/Comments';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/posts">
            <Route index element={<Posts />} />
            <Route path=":id">
              <Route index element={<PostID />} />
              <Route path="comments" element={<CommentsFromID />} />
            </Route>
          </Route>
          <Route path="/comments" element={<>Comments</>} />
          <Route path="/todos" element={<>Todos</>} />
          <Route path="/users" element={<>Users</>} />
          <Route path="*" element={<b>Page Not Found</b>} />
        </Routes>
      </BrowserRouter>
      <footer>
        <p>Copyright &copy; {new Date().getFullYear()}</p>
      </footer>
    </div >
  );
}

export default App;
