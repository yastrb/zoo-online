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

function App() {
  return (
    <div className="body">
      <Header />
      <Routes>
        <Route index element={<Main />} />
        <Route path="/zoo-online" element={<Main />} />
        <Route path="/zoos/*" element={<Zoo />}/>
        <Route path="/about" element={<AboutUs/>}/>
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
