import React, { useState, useEffect } from "react";
const Game = () => {
  const [gridnum, setGridNum] = useState(3);
  const [mainArr, setMainArr] = useState([]);
  const [firstPerson, setFirstPerson] = useState(true);
  useEffect(() => {
    let mainArr = [];
    for (let i = 0; i < gridnum; i++) {
      let minarr = [];
      for (let j = 0; j < gridnum; j++) {
        minarr.push("");
      }
      mainArr.push(minarr);
    }
    setMainArr(mainArr);
  }, []);
  function handleChange(e, index, upperIndex) {
    const tempArray = mainArr;
    tempArray[upperIndex][index] = firstPerson ? "X" : "O";
    setFirstPerson(!firstPerson);
    setMainArr(tempArray);
  }
  const Checkwinner = () => {
    let totalChances = [];
    let arr2 = [];
    for (let i = 0; i < gridnum; i++) {
      let arr = [],
        arr1 = [];  //const  ,avoid let var
      arr2.push(mainArr[i][i]);
      for (let j = 0; j < gridnum; j++) {
        arr.push(mainArr[i][j]);
        arr1.push(mainArr[j][i]);
      }
      totalChances.push(arr);
      totalChances.push(arr1);
    }
    totalChances.push(arr2);
    for (let arr in totalChances) {
      if (new Set(totalChances[arr]).size === 1 && totalChances[arr][0] != "") {
        return totalChances[arr][0];
      }
    }
  };
  const playAgain = () => {
    setMainArr(Array(gridnum).fill(Array(gridnum).fill("")));
  };
  const WinningPerson = Checkwinner();
  console.log(`${WinningPerson} is the winner`);
  return (
    <div className="flex justify-center">
      {WinningPerson ? (
        <>
          <div className="flex justify-center flex-col">
            <h1 className="text-center mt-10">Tik Toc Toe Game</h1>

            <h3>Winner is {WinningPerson} </h3>

            <button className="bg-blue-400 rounded-md p-3" onClick={playAgain}>
              Play again
            </button>
          </div>
        </>
      ) : (
        <div className="flex justify-center my-10 flex-col  ">
          <h1 className="">Tik Toc Toe Game</h1>

          {mainArr.map((grid, upperIndex) => {
            return (
              <>
                <div className="flex flex-row" key={upperIndex}>
                  {grid.map((insideGrid, index) => {
                    return (
                      <>
                        <div
                          className="border border-2 h-16 w-16 pt-4 pb-2 pr-2"
                          onClick={(e) => handleChange(e, index, upperIndex)}
                          key={index}
                        >
                          {insideGrid}
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Game;
