function every(array, test) {
  t=true;
  for (let element of array)
    t=test((element)||t);
  return t
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true