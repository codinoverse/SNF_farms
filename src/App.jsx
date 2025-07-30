import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeDashboard from './components/HomeDashboard';
import AboutmeDashboard from './components/AboutmeDasboard';
import ProductsSection from './components/ProductSection';
import ContactBlog from './components/Contact';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeDashboard/>} />
        <Route path="/aboutme" element={<AboutmeDashboard/>} />
        <Route path='/products' element={<ProductsSection/>} />
        <Route path='/contact' element={<ContactBlog/>}/>
      </Routes>
    </Router>
  );
}

export default App;