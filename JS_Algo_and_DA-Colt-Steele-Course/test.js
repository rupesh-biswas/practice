function countZeros(array) {
  // add whatever parameters you deem necessary - good luck!!!
  let newArray = array;
  let leftIndex = 0;
  let rightIndex = array.length;
  let middlePoint = 0;
  while (leftIndex < rightIndex) {
    middlePoint = Math.floor((leftIndex + rightIndex) / 2);

    if (newArray[middlePoint] === 1) {
      leftIndex = middlePoint + 1;
    } else {
      rightIndex = middlePoint;
    }
  }

  return array.length - leftIndex;
}
