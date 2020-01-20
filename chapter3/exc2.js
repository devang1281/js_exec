function isEven(num1)
{
	if (num1<0)
		return(isEven(-num1))
	if (num1==1)
		return (false)
	if (num1==0)
		return (true)
	else
		return isEven(num1-2)
}

console.log(isEven(process.argv[2]/*50*/));
console.log(isEven(75));
console.log(isEven(-1));
