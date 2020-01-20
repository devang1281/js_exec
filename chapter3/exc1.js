function min(num1,num2)
{
	if (num1<num2)
		return(num1)
	if (num2<num1)
		return(num2)
	else
		return("same\t" + num1)
}
a=process.argv[2]
console.log(min(a,20))