function insertionSort(arr) {
  sortedArray = [arr[0]];
  
  for(i=1; i < arr.length; i++){
    let current = arr[i];
  
    for(j=0; j < sortedArray.length; j++) {
      if(current < sortedArray[j]){
        sortedArray.splice(j, 0, current);
        break;
      }
    }
    if(sortedArray.length === i) {
      sortedArray.push(current);
    }
  }
  return sortedArray;
}

module.exports = insertionSort
