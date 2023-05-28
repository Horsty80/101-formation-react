import Navigation from "./components/Navigation";
import TopBar from "./components/TopBar";
import useToggleNavigation from "./hooks/useToggleNavigation";

function App() {
  const { isToggle } = useToggleNavigation();
  const activeStyle = isToggle
    ? "left-[80px] w-[calc(100%-80px)]"
    : "left-[300px] w-[calc(100%-300px)]";
  return (
    <div>
      <Navigation />
      {/* main */}
      <div
        className={`${activeStyle} absolute min-h-[100vh] bg-white transition-all duration-500`}
      >
        <TopBar />
        {/* topbar */}
        {/* cardboxs */}
        {/* details tables */}
      </div>
    </div>
  );
}

export default App;
