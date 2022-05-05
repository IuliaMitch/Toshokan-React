import play from "../../assets/icons/play.svg";
import pause from "../../assets/icons/pause.svg"
import { useState } from "react";
import lofi from "../../assets/audio/lofi.mp3";
import "./player.css";

const Player = () => {
  const [click, setClick] = useState(false);

  const switchState = (state) =>
    Boolean(state) ? setClick(false) : setClick(true);
  const audioRender = (canRender) =>
    Boolean(canRender) && <audio className="close" src={lofi} autoPlay controls></audio>;

    const playOrPause = (canRender) => Boolean(canRender) ? (<img src={pause} alt="Play de Música" />) : (<img src={play} alt="Play de Música" />) 

  return (
    <div className="player">
      <a onClick={() => switchState(click)}>
          {playOrPause(click)}
      </a>
      {audioRender(click)}
    </div>
  );
};
export default Player;
