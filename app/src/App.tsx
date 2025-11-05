import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Starfield from "./components/ui/Starfield";
import { PageInfo } from "./constants/PageInfo";

export function App() {
  return (
    <div >
      <Navbar />
      <Starfield
        speedFactor={0.05}
        backgroundColor="black"
        starColor={[255, 255, 255]}
        starCount={5000}
      />
      <Routes>
        {PageInfo.map((item) => (
          <Route key={item.link} path={item.link} element={<item.pageElement />} />
        ))}
      </Routes>
    </div>
  );
}
