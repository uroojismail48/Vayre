import { ReactLenis } from "lenis/react";
import Navbar from "./Components/Navbar.jsx";
import Another from "./Pages/Another.jsx";
import AnotherT from "./Pages/AnotherT.jsx";
import Main from "./Pages/Main.jsx";
import Timeless from "./Pages/Timeless.jsx";
import Watches from "./Pages/Watches.jsx";
function App() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 2.2,
        smoothWheel: true,
      }}
    >
      <div className="w-full h-screen ">
        <Navbar />
        <Main />

        <Timeless />
        <Another />
        <AnotherT />
        <Watches />
      </div>
    </ReactLenis>
  );
}

export default App;
