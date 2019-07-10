function findMinAndRemoveSorted(myArray){
  let minValue = myArray[0]
  for (let i = 0; myArray.length >i; i++){
    if (minValue > myArray[i]){
      minValue = myArray[i]
    }
  }
  myArray.shift() // don't need to keep track of index to remove 1st min
  return minValue
}

function merge(array1, array2){
  let newArr = []
  while (array1.length != 0 && array2.length != 0){
    if (array1[0] < array2[0]){
       newArr.push(findMinAndRemoveSorted(array1))
    }else{
      newArr.push(findMinAndRemoveSorted(array2))
    }
  }
  return newArr.concat(array1).concat(array2)
}



function mergeSort(myArray){
  let midPoint = myArray.length/2
  let firstHalf = myArray.slice(0, midPoint)
  let secondHalf = myArray.slice(midPoint, myArray.length)
  let sorted
  if (myArray.length < 2){
    return myArray
  }else{
    sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
  }
  return sorted
}
