import { Home } from "./pages/Home";
import Navbar from "./components/Navbar";
import Announcement from "./components/Announcement";
import Slider from "./components/Slider";
const App = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
    </>
  );
};

export default App;
