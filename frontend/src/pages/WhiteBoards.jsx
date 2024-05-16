import React, { useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import Board from "../components/Board";

function WhiteBoards() {
  const [brushColor, setBrushColor] = useState("black");
  const [brushSize, setBrushSize] = useState(5);
  return (
    <DefaultLayout>
      <div className="bg-gradient-to-b from-blue-500 via-purple-500 to-yellow-300 h-screen w-full p-12 flex flex-col items-center">
        <h1 className="mb-4 text-center">Collaborative Whiteboard</h1>
        <div>
          <Board brushColor={brushColor} brushSize={brushSize} />
          <div className="hidden lg:flex lg:flex-row lg:items-center flex-row justify-around items-center w-full p-4 bg-black text-white">
            <div>
              <span className="font-medium">Color: </span>
              <input
                className="mx-1"
                type="color"
                value={brushColor}
                onChange={(e) => setBrushColor(e.target.value)}
              />
            </div>
            <div>
              <span>Size: </span>
              <input
                type="range"
                color="#fac176"
                min="1"
                max="100"
                value={brushSize}
                onChange={(e) => setBrushSize(Number(e.target.value))}
              />
              <span>{brushSize}</span>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}

export default WhiteBoards;
