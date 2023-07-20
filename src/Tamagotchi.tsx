import "./styles.css";
import { ScreenArea, ButtonArea } from "./components/areas/areas";

const Tamagotchi = () => {
  return (
    <div className="tamagotchi">
      <ScreenArea />
      <ButtonArea />
    </div>
  );
};

export default Tamagotchi;
