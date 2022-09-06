import Header from "./components/Header";
import { library } from '@fortawesome/fontawesome-svg-core';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import Library from "./components/Library";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Allphotos from "./Allphotos";
import Architecture from "./Architecture";
const iconList = Object.keys(Icons)
  .filter((key) => key !== 'fas' && key !== 'prefix')
  .map((icon) => Icons[icon]);

library.add(...iconList);
function App() {
  return (<Router>
    <div className="app">
      <Header />
      <Library />  <Routes>
        <Route path="/" element={<Allphotos />} />
        <Route path="/architect" element={<Architecture/>} />
      </Routes>
   </div>
    </Router>
  );
}

export default App;
