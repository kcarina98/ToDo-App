import { useContext } from "react";
import { ThemeContext } from "../../Context";

export default function Theme(props) {
  const { setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((pizza) => !pizza);
  };

  return (
    <div className="theme" onClick={toggleTheme}>
      💡
    </div>
  );
}
