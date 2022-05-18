import "./App.css";
import Character from "./components/Character";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  AOS.init()
  return (
    <main className="font-roboto min-h-screen bg-cover bg-center bg-mobile sm:bg-desktop flex flex-col justify-between py-10 sm:py-14">
      <Header/>
      <Character/>
      <Footer/>
    </main>
  );
}

export default App;
