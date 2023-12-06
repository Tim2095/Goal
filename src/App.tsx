import Header from "./components/Header";
import headerLogo from "../src/assets/goal.jpg";

function App() {
  return (
    <main>
      <Header image={{ src: headerLogo, alt: "header logo" }}>
        <h1>The Header</h1>
      </Header>
    </main>
  );
}

export default App;
