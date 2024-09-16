import Navbar from "./Navbar";
import Routers from "./Routers";
import dogs from "./dogs";
/* import "./App.css"; */

function App() {
  /* let dog = useActionData(); */
  return (
    <>
      <Navbar dogs={dogs} />
      <div className="container">
        <Routers dogs={dogs} />
      </div>
    </>
  );
}

export default App;
