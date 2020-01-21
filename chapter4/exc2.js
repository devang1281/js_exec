function reverseArray (arr)
{
	let rev=[]
	let len=arr.length;
	for(let i=0;i<len;i++)
		rev.push(arr.pop());
	return(rev);
}

function reverseArrayInPlace(arr)
{
	let len=arr.length
	for(let i=0;i<len/2;i++)
	{
		let temp=arr[i]
		arr[i]=arr[len-1-i]
		arr[len-1-i]=temp
	}
}

console.log(reverseArray(["A", "B", "C"]));

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);