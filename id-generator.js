/*
The following function implements the roll of a die;
 it returns a random number between 1 and 6 each time it is called.
 */

function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var position = 0;

  return function () {
   if (position >= list.length) { 
   	position = 0; 
   }
 	return list[position++] 
	}
}

var rollLoadedDie = makeLoadedDie();

console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6