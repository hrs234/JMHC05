let data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// left rotator
let leftRotateOne = arrData => {
  let a;
  let temp = arrData[0];
  for (a = 0; a <= arrData.length - 1; a++) {
    arrData[a] = arrData[a + 1];
  }
  arrData[a - 1] = temp;
};

// right rotator
let rightRotateOne = arrData => {
  let a;
  let temp = arrData[arrData.length - 1];
  for (a = arrData.length - 1; a >= 0; a--) {
    arrData[a] = arrData[a - 1];
  }
  arrData[0] = temp;
};

let rotator = (mode, many) => {
  for (let rotate = 0; rotate < many; rotate++) {
    if (mode === "right") {
      rightRotateOne(data);
    } else {
      leftRotateOne(data);
    }
  }
};

let moveDetection = key => {
  if (key.length >= 100 && key.length <= 0) {
    return "angka melebihi dari 100 atau kurang dari 0";
  }

  let move = "left";
  let secondKeyArr = [];
  let counter = 0;

  for (let initKey = 0; initKey <= key.length - 2; initKey++) {
    secondKeyArr.push(key[initKey + 1]);
  }

  for (let initKey = 0; initKey <= key.length - 2; initKey++) {
    rotator(move, key[initKey]);
    if (data[1] != secondKeyArr[initKey]) {
      move = "right";
      counter++;
    }
    data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  }

  return counter;
};

console.log("12345: ", moveDetection("12345"));
console.log("2121: ", moveDetection("2121"));
console.log("981: ", moveDetection("981"));
