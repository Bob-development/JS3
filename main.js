'use strict'

let isUserHeightValide = false;


while(!isUserHeightValide){
  var userHeight = prompt("Hey, my dear, enter ur height in meters");

    if(userHeight.indexOf('.') >= 0){
      isUserHeightValide = true;
      break;
    }
    else if(userHeight.indexOf(',') >= 0){
      isUserHeightValide = true;

      userHeight = userHeight.replace(',', '.')
    }
}

userHeight = parseFloat(userHeight);
const userWeight = parseInt(prompt("Sunshine, enter ur weight"));

var imtResult = userWeight/Math.pow(userHeight, 2);
imtResult = imtResult.toFixed(1);

console.log("Ur IMT num " + imtResult);

if (imtResult > 16 && imtResult < 18.5){
  alert("Underweight")
}
else if(imtResult > 18.5 && imtResult < 25){
  alert("That`s normal")
}
else if(imtResult > 25 && imtResult < 30){
  alert("Overweight")
}
else if(imtResult > 30 && imtResult < 35){
  alert("Obesity 1st degree")
}
else if(imtResult > 35 && imtResult < 40){
  alert("Obesity 2st degree")
}
else if(imtResult > 40){
  alert("Obesity 3st degree")
}