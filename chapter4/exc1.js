function range(start,end,step=1)
{
	let arr =[]//=[start];
	if (step<0)
	{
		step=Math.abs(step)
		for (let i=end;i<=start;i+=step)
			arr.unshift(Number(i))
	}
	else
	{
	for(let i=start;i<=end;i+=step)
		arr.push(Number(i));
	}
	return arr;
}

function sum(arr)
{
	s=0;
	for (let i=0;i<arr.length;i++)
	{
		s+=arr[i];
	}
	return s;
}
console.log(range(5,2,-1))
console.log(sum(range(5,2,-1)))

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55