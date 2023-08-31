import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Image from "/2hands.jpg";
import Picture from "/computer.jpeg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />

      <Body
        img={Picture}
        Title="Engineer"
        Description="TAI-powered robots are augmented with a variety of sensors
      (including vision devices such as 2D/3D cameras, vibration sensors,
      proximity sensors, accelerometers, and other environmental sensors,)
      that feed them with sensing data they can analyze and act upon in
      real-time."
      />

      <Body
        img={Image}
        Title="Artificial Engineer"
        Description="Across industries, robots and artificial intelligence (AI) have
        enabled innovative solutions to the challenges faced by businesses
        of all sizes. Intel provides the technologies, tools, and partner
        relationships required to realize the full potential of robots and
        AI."
      />

      <Footer />
    </div>
  );
}

export default App;
