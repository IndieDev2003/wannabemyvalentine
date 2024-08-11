import './App.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Background from './components/Background';
import { negativeTexts, positiveTexts } from './buttonTexts';

function App() {
  const navigate = useNavigate();
  // No button
  const [size, setSize] = useState(1);
  const [textIndex, setTextIndex] = useState(0);
  // Yes button
  const [yesClicks, setYesClicks] = useState(0);
  const [yesText, setYesText] = useState(0);

  const handleNoClick = () => {
    if (size < 0) {
      return;
    }
    setSize((prevSize) => Math.round((prevSize - 0.05) * 100) / 100);
    setTextIndex((prevIndex) => (prevIndex + 1) % negativeTexts.length);
  };

  const handleYesClick = () => {
    setYesClicks((prevClick) => prevClick + 1);
    setYesText((prevText) => prevText + 1);
    if (yesClicks === positiveTexts.length - 1) {
      // Alert message
      alert('You have been warned.');
      navigate('/yes');
    }
  };

  return (
    <>
      <div className="max-w-screen h-screen overflow-hidden relative my-[0] p-8 text-center">
        <Background />
        <div className="flex flex-col gap-24 md:mt-44 mt-32 justify-center">
          <h1 className="text-3xl md:text-6xl mb-14 md:mb-0 z-50 white-shadow">
            Wanna be my Wife?
          </h1>
          <div className="flex  justify-around xl:justify-center xl:gap-32 z-50">
            <h1 className="kreep">
              <button
                onClick={handleYesClick}
                className=" bg-green-600 text-slate-100 border-2 border-solid border-green-800 xl:p-16 p-12 text-center no-underline inline-block text-xs md:text-2xl mx-0.5 my-1 duration-[400ms] cursor-pointer rounded-[20%] hover:bg-green-800 hover:animate-none link buzz-out-on-hover"
              >
                <b>{positiveTexts[yesText]}</b>
              </button>
            </h1>
            <div>
              <button
                className={`cursor-pointer [transition:all_0.3s_ease-in-out] bg-red-600 text-slate-100 border-2 border-solid border-red-800 rounded-[20%] xl:p-16 p-12 text-center no-underline inline-block text-xs md:text-2xl mx-0.5 my-1`}
                onClick={handleNoClick}
                onMouseOver={() => setSize((prevSize) => prevSize - 0.05)}
                onMouseOut={() => setSize((prevSize) => prevSize + 0.05)}
                style={{ transform: `scale(${size})` }}
              >
                {negativeTexts[textIndex]}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
