let num=1;
for (num;num<=100;num++){
	a=num%3;
	b=num%5;
	switch(a + "|" + b){
		case("0|0"):console.log("FizzBuzz");
			break;
		case("0|"+b):console.log("Fizz");
			break;
		case(a+"|0"):console.log("Buzz");
			break;
		default:console.log(num);
	}
}	