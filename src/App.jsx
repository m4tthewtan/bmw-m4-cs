import Design from "./components/Design";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import Nav from "./components/Nav";
import Parallax from "./components/Parallax";
import Technical from "./components/Technical";

const App = () => {
  return (
    <main>
      <Nav />

      <Hero />

      <Introduction />

      <Parallax imgUrl="/car-track.jpg" text="DESIGNED FOR THE RACETRACK." />

      <Technical />

      <Parallax imgUrl="/car-rear.jpg" text="AN M KNOWS NO LIMITS." />

      <Design />
    </main>
  );
};

export default App;
