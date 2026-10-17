import Navbar from './Components/Navbar.jsx';
import Another from './Pages/Another.jsx';
import AnotherT from './Pages/AnotherT.jsx';
import Main from './Pages/Main.jsx';
import Timeless from './Pages/Timeless.jsx';
function App() {
  return (
    <div className="w-full h-screen ">
      <Navbar />
      <Main />

      <Timeless />
      <Another />
      <AnotherT/>
    </div>
  );
}

export default App
