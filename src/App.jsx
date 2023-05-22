import { useMediaQuery } from "react-responsive";
import rea from '../public/vite.svg'

function App() {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
  const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  const Yes = () => <span style={{ color: "#5cb85c" }}>YES</span>;
  const No = () => <span style={{ color: "#d9534f" }}>NO</span>;

  return (
    <div className="bg-gray-900 text-blue-600 h-screen flex flex-col justify-center items-center text-3xl">
      <img src={rea} alt="" className="w-80 my-5 animate-bounce" />
      <div>Is Desktop : {isDesktop ? <Yes /> : <No />}</div>
      <div>Is Tablet : {isTablet ? <Yes /> : <No />}</div>
      <div>Is Mobile : {isMobile ? <Yes /> : <No />}</div>
      <div>Is Not Mobile : {isNotMobile ? <Yes /> : <No />}</div>
      <div>Is Portrait : {isPortrait ? <Yes /> : <No />}</div>
      <div>Is Retina : {isRetina ? <Yes /> : <No />}</div>
    </div>
  );
}

export default App;
