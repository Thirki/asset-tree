import colored from "./componentColored.png";
import white from "./componentWhite.png";

export const ComponentIcon = ({ whiteComponent = false }) => {
  return <img src={whiteComponent ? white : colored} alt="component icon" />;
};
