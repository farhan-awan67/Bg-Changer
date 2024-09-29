import { useState } from "react";

function App() {
  const [color, setColor] = useState("black");

  return (
    <div className="w-full h-screen" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center items-center gap-1 rounded-full bg-white px-2 py-2 bottom-11 mx-3 md:mx-16 md:gap-2">
        <button
          className="bg-white text-black rounded-full px-4 py-1 shadow-lg"
          onClick={() => setColor("white")}
        >
          Black
        </button>
        <button
          className="bg-red-800 text-white rounded-full px-4 py-1 shadow-lg"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="bg-pink-800 text-white rounded-full px-4 py-1 shadow-lg"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="bg-yellow-800 text-white rounded-full px-4 py-1 shadow-lg"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="bg-green-800 text-white rounded-full px-4 py-1 shadow-lg"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="bg-[#fb8500] text-white rounded-full px-4 py-1 shadow-lg"
          onClick={() => setColor("#fb8500")}
        >
          Orange
        </button>
        <button
          className="bg-blue-800 text-white rounded-full px-4 py-1 shadow-lg"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="bg-[#00FFFF] text-black rounded-full px-4 py-1 shadow-lg"
          onClick={() => setColor("#00FFFF")}
        >
          Aqua
        </button>
        <button
          className="bg-[#FA8072] text-white rounded-full px-4 py-1 shadow-lg"
          onClick={() => setColor("#FA8072")}
        >
          Salmon
        </button>
        <button
          className="bg-[#F4A460] text-white rounded-full px-4 py-1 shadow-lg"
          onClick={() => setColor("#F4A460")}
        >
          Sandy Brown
        </button>
        <button
          className="bg-[#808000] text-white rounded-full px-4 py-1 shadow-lg"
          onClick={() => setColor("#808000")}
        >
          Olive
        </button>
        <button
          className="bg-[#FFDAB9] text-black rounded-full px-4 py-1 shadow-lg"
          onClick={() => setColor("#FFDAB9")}
        >
          Peach Puff
        </button>
        <button
          className="bg-[#E6E6FA] text-black rounded-full px-4 py-1 shadow-lg"
          onClick={() => setColor("#E6E6FA")}
        >
          Lavender
        </button>
        <button
          className="bg-[#4B0082] text-white rounded-full px-4 py-1 shadow-lg"
          onClick={() => setColor("#4B0082")}
        >
          Indigo
        </button>
      </div>
    </div>
  );
}

export default App;
