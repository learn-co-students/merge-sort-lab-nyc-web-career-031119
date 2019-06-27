function findMinAndRemove(array) {
  let min = array[0]
  let minIndex = 0
  for (let i = 0; i < array.length; i++) {
    if (min > array[i]) {
      min = array[i]
      minIndex = i
    }
  }
  array.splice(minIndex, 1)
  return min
}

function sortArray(array) {
  let sortedArray = []
  while (array.length !== 0) {
    sortedArray.push(findMinAndRemove(array))
  }
  return sortedArray
}

// assumes the array is already sorted
function findMinAndRemoveSorted(array) {
  return array.shift()
}

//assumes that the arrays are already sorted
function merge(firstHalf, secondHalf) {
  let sortedArray = []
  while (firstHalf.length !== 0 && secondHalf.length!== 0) {
    if (firstHalf[0] < secondHalf[0]) {
      sortedArray.push(findMinAndRemoveSorted(firstHalf))
    } else {
      sortedArray.push(findMinAndRemoveSorted(secondHalf))
    }
  }
  return sortedArray.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array) {
  let sortedArray = sortArray(array)
  let midpoint = sortedArray.length/2
  let firstHalf = sortedArray.slice(0, midpoint)
  let secondHalf = sortedArray.slice(midpoint, sortedArray.length)

  if (sortedArray.length > 2) {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
  } else {
    return sortedArray
  }
}
