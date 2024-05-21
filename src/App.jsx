import "./App.css";
import Shop from "./Components/Shop/Shop";

function App() {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold bg-green-600 text-black p-2">
        Own Your PC Today!
      </h1>
      <div className="w-[90%] mx-auto mt-4 mb-4">
        <Shop></Shop>
      </div>
    </div>
  );
}

export default App;
