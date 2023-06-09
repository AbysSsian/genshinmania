import "./styles.css";
import videoBg from "../assets/inazuma-live.mp4";
import icon from "../assets/icon.png";
import React from "react";
import { Navigate } from "react-router-dom";
import bgm from "../assets/inazuma-bgm.mp3";

export default function Inazuma() {
  const [goToMenu, setGoToMenu] = React.useState(false);

  if (goToMenu) {
    return <Navigate to="/Menu" />;
  }

  return (
    <body>
      <audio src={bgm} autoPlay loop />
      <nav className="nav">
        <div
          className="site-title"
          onClick={() => {
            setGoToMenu(true);
          }}
        >
          GenshinMania
        </div>
        <img src={icon} />
      </nav>
      <div className="video">
        <video src={videoBg} autoPlay loop muted className="outer-image" />
      </div>
      <img
        src={`https://api.genshin.dev/characters/raiden/portrait`}
        className="inner-image"
      />
      <div class="text-topright-inazuma">
        <p>
          The City of Eternity.
          <br />
          <br /> An Isolated Archipelago Far East of Teyvat Overcome endless
          thunderstorms and set foot on the islands of red maple and cherry
          blossoms. On winding shores and towering cliffs, and in forests and
          mountains full <br /> of secrets, witness the Eternity pursued by Her
          Excellency, the Almighty Narukami Ogosho.
        </p>
      </div>
    </body>
  );
}
