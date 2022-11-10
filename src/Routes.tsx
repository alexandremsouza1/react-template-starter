import { BrowserRouter as Router, Routes as Rotas, Route } from 'react-router-dom'

import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import Posts from "@/pages/Posts";

const Routes = () => {
  return (
    <Router>
      <div className="App">
        <Rotas>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="*" element={<NotFound />} />
        </Rotas>
      </div>
    </Router>
  );
};

export default Routes;

