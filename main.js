'use strict'

const space = ' ';
const star = '* ';
const grid = '# ';

let isRuning = true;

while (isRuning) {
  const pyramidType = prompt("Would u like to make Dima`s pyramid or another one? \n" + "y)Dima`s;    n)Another;");

  if(pyramidType.toLowerCase() === "y") {
    dimaPyramid();
    isRuning = false;
  }else if(pyramidType.toLowerCase() === "n") {
    anotherPyramid();
    isRuning = false;
  }
}

function dimaPyramid() {
  const counterFloorPyramid = parseInt(prompt("Which length should be?"));
  for (let i = counterFloorPyramid, j = 1; i > 0, j < counterFloorPyramid + 1; i--, j++) {
    let resultSpace = space.repeat(i);
    let resultStar = star.repeat(j);
    console.log(resultSpace + resultStar);
  }
}

function anotherPyramid() {
  const counterEvenPyramid = parseInt(prompt("Which length even should be?"));
  const counterOddPyramid = parseInt(prompt("Which length odd should be?"));
  const counterHeightPyramid = parseInt(prompt("Which height should be?"));

  for(let i = 1; i < counterHeightPyramid + 1; i++){
    let resultEven = grid.repeat(counterEvenPyramid);
    let resultOdd = grid.repeat(counterOddPyramid);

    if(i % 2 === 0) console.log(resultEven);
    else console.log(space + resultOdd);
  }
}
