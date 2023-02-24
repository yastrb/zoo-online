import Header from "./components/header/header";
import Footer from "./components/main/Footer/footer";
import Main from "./components/main/main";
import './style/App.css';
import { Route, Routes } from "react-router-dom";
import Zoo from './components/zoo/zoo';
import NotFoundPage from "./components/main/NotFoundPage/notFoundPage";
import AboutUs from "./components/about_us/AboutUs";
import Map from './components/map/Map';
import Contact from './components/contact/Contact';
import React, {useState, useEffect} from "react";

function App() {

  const [theme, setTheme] = useState("")

  const toggleTheme = () => {
    theme === "" ? setTheme("dark-theme") : setTheme("")
  }

  useEffect (()=> {
    document.body.className = theme
  },[theme])

  return (
    <div className="body">
      <Header theme= {theme}  toggleTheme = {toggleTheme}/>
      <Routes>
        <Route index element={<Main theme= {theme} />} />
        <Route path="/" element={<Main theme= {theme} />} />
        <Route path="/zoos/*" element={<Zoo />}/>
        <Route path="/about" element={<AboutUs theme= {theme} />}/>
        <Route path="/map" element={<Map/>}/>
        <Route path="/contacts" element={<Contact/>}/>
        <Route path="*" element={<NotFoundPage/>}>
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
