import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ReactifComponent from "./Components/ReactifComponent";
import Simpson from "./Components/Simpson.js";
import family from "./Components/Family.js";

function App() {
  return (
    <div className="App">
      <Header />
      <h3>Hello From my App React</h3>
      <ReactifComponent name="simon" age="30" />
      <div className="family">
        <h1>The Simpson Family From the B.D.🏗️</h1>
        {family.map((fam) => (
          <Simpson
            image={fam.image}
            lastName={fam.lastName}
            firstName={fam.firstName}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
