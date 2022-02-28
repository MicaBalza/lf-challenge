import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../../screens/Home';
import Navbar from '../Navbar';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
