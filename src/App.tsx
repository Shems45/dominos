import { useState } from "react";
import { HeartsRain } from "./HeartsRain";
import "./App.css"; // Zorg dat je CSS geladen wordt!

export default function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => setNoCount(noCount + 1);

  const getNoButtonText = () => {
    const phrases = [
      "Nee 😢",
      "Zeker nboi? 🤨",
      "Stpppppppp digga 🥺",
      "Pizza en dessert? 🍕🍨",
      ":((((" + " 💔",
      "Aleeeeeee bolleke 😭",
      "Anders ben ik emo :(" + " 🖤",
      "nboi ..." + " 😩",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div
      className="flex flex-col items-center justify-center w-full"
      style={{ minHeight: "100vh" }}
    >
      <HeartsRain show={yesPressed} />
      {yesPressed ? (
        <>
          <img
            src="https://media1.tenor.com/m/ohpuLM-J-gAAAAAC/rizz.gif"
            className="rounded-3xl shadow-xl"
            alt="Love"
          />
          <div className="my-4 text-4xl font-bold text-pink-600 drop-shadow-md animate-pulse">
            Love you 🫶
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px] rounded-3xl shadow-xl"
            src="https://media1.tenor.com/m/IsrvL0bL63AAAAAd/groundhog-eating.gif"
            alt="Vragen"
          />
          <h1 className="my-4 text-4xl text-pink-600 font-extrabold drop-shadow">
            Zaterdag Dominos ???🥺🥺
          </h1>
          <div className="flex items-center">
            <button
              className="mr-4 rounded-2xl bg-pink-500 px-6 py-3 font-bold text-white shadow-lg hover:bg-pink-600 transition-all duration-200"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Ja! 🍕
            </button>
            <button
              onClick={handleNoClick}
              className="rounded-2xl bg-purple-400 px-6 py-3 font-bold text-white shadow-lg hover:bg-purple-600 transition-all duration-200"
            >
              {noCount === 0 ? "No 😭" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
