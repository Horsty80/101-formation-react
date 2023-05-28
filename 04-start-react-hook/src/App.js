import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import TopBar from "./components/TopBar";
import useToggleNavigation from "./hooks/useToggleNavigation";
const games = [
  { title: "zelda breath of the wild", plateform: "switch" },
  { title: "guardians of the galaxy", plateform: "ps4" },
];
const gamesTwo = [
  { title: "zelda breath of the wild", plateform: "switch" },
  { title: "guardians of the galaxy", plateform: "ps4" },
  { title: "Last of us", plateform: "ps4" },
  { title: "God of war", plateform: "ps4" },
];

function App() {
  const { isToggle } = useToggleNavigation();
  const activeStyle = isToggle
    ? "left-[80px] w-[calc(100%-80px)]"
    : "left-[300px] w-[calc(100%-300px)]";

  const [videoGames, setVideoGames] = useState([]);

  let myGames = games;
  const setMyGames = (jeux) => {
    myGames = jeux;
    console.log({ myGames });
  };

  setTimeout(() => {
    setMyGames(games);
  }, 2000);

  useEffect(() => {
    setTimeout(() => {
      setVideoGames(games);
    }, 2000);
  }, [setVideoGames]);

  return (
    <div>
      <Navigation />
      {/* main */}
      <div className={`${activeStyle} absolute min-h-[100vh] bg-white transition-all duration-500`}>
        <TopBar />
        <div className="p-5">
          <div className="border-sky-100 border p-10 flex justify-between">
            <h3>With hook</h3>
            <div className="flex-row">
              {videoGames.map((videoGame, index) => (
                <div className="list-item" key={index}>
                  {videoGame.title} {videoGame.plateform}
                </div>
              ))}
            </div>
            <>
              <button
                className="border border-sky-200 p-4 rounded-md"
                onClick={() => setVideoGames(gamesTwo)}
              >
                Refresh
              </button>
            </>
          </div>
          <div className="border-sky-100 border p-10 mt-10  flex justify-between">
            <h3>without hook</h3>
            <div className="flex-row">
              {myGames.map((videoGame, index) => (
                <div className="list-item" key={index}>
                  {videoGame.title} {videoGame.plateform}
                </div>
              ))}
            </div>
            <>
              <button
                className="border border-sky-400 p-4 rounded-md"
                onClick={() => setMyGames(gamesTwo)}
              >
                Refresh
              </button>
            </>
          </div>
          {/* topbar */}
          {/* cardboxs */}
          {/* details tables */}
        </div>
      </div>
    </div>
  );
}

export default App;
