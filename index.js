function findMinAndRemoveSorted(sortedArray) {
  return sortedArray.shift();
}

function merge(firstHalf, secondHalf) {
  let sorted = [];

  while (firstHalf.length > 0 && secondHalf.length > 0) {
    let minOne = findMinAndRemoveSorted(firstHalf);
    let minTwo = findMinAndRemoveSorted(secondHalf);

    if (minOne < minTwo) { // better to compare firstHalf[0] and secondHalf[0] then run findmin findMinAndRemoveSorted

      sorted.push(minOne);
      secondHalf.unshift(minTwo);
    } else {
      sorted.push(minTwo);
      firstHalf.unshift(minOne);
    }
  }
  return sorted.concat(firstHalf).concat(secondHalf);
}

function mergeSort(array) {
  let midpoint = array.length / 2;
  let firstHalf = array.slice(0, midpoint);
  let secondHalf = array.slice(midpoint, array.length);
  let sorted;

  if (array.length < 2) {
    return array;
  } else {
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }

  return sorted;
}
