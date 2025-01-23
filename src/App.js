import Navbar from "./components/Navbar/Navbar";
import {
  Routes,Route,
} from "react-router-dom"
import "./App.css";
import ProductDetailPage from"./conatiner/ProductDetailPage/page"
import Homepage from "./conatiner/Homepage/page"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="zula">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/apps" element={<ProductDetailPage/>}/>
      </Routes>
    
         <Footer/>
    </div>
  );
}

export default App;
