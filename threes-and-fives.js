/*
This block of code iterates from 1 to 1000 and prints out whether they are divisible by
3, divisible by 5, or divisible by both 3 and 5 and logs all that in the console. 
*/
var sum = 0;

for (var i = 0;i < 1000;i++) {
	if(i % 3 === 0) {
		console.log(i + " is divisible by 3");
    sum = sum + i;
	} else if (i % 5 === 0) {
		console.log(i + " is divisible by 5");
    sum = sum + i;
	} else if (i % 3 === 0 && i % 5 === 0) {
  	console.log(i + " is divisible by both 3 and 5!");
    sum = sum + i;
  } else {
  	console.log(i + " is NOT divisible by either!!!!")
    }
  }