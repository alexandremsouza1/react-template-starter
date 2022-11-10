import { Header } from '@/components/Header';
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Posts from "@/pages/Posts";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='app'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
  </BrowserRouter>
  );
};

export default App;
