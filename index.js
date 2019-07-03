
function findMinAndRemoveSorted(array){
  return array.shift()
}

function merge (firstHalf, secondHalf){
  let sorted = []
  while (firstHalf.length !== 0 && secondHalf.length !== 0){
    if(firstHalf[0]<secondHalf[0]){
      sorted.push(findMinAndRemoveSorted(firstHalf))
    }else {
      sorted.push(findMinAndRemoveSorted(secondHalf))
    }
  }
  return sorted.concat(firstHalf).concat(secondHalf)
}

function mergeSort(array){
  let midpoint = array.length/2
  let first = array.slice(0, midpoint)
  let second = array.slice(midpoint)
  let sorted

  if (array.length < 2){
    return array
  } else {
    sorted = merge(mergeSort(first), mergeSort(second))
  }
  return sorted
}
