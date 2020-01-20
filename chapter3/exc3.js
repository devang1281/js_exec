/*function countBs(str1)
{
	i=0;
	count=0;
	for (i;i<str1.length;i++)
	{
		if(str1[i]=='B')
			count++
	}
	return count;
}*/

function countBs(str1)
{
	return(countChar(str1,'B'))
}
function countChar(str1,chr)
{
	i=0;
	count=0;
	for (i;i<str1.length;i++)
	{
		if(str1[i]==chr)
			count++
	}
	return count;
}
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));
