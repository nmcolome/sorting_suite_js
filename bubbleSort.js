function bubbleSort(list, counter = 0){
  let n = list.length;
  for(i=0; i < n; i++) {
    let previous = list[i];
    let current = list[i+1];
    if(current < previous) {
      list[i] = current;
      list[i+1] = previous;
    }
  }
  counter++;
  if(counter < n) {
  bubbleSort(list, counter);
  }
  return list;
}

module.exports = bubbleSort
