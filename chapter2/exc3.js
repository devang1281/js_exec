let pri="",size=9,ctr=0,ctr2=0;

for (ctr=0;ctr<size;ctr++)
{
	for (ctr2=0;ctr2<size;ctr2++)
	{
		if((ctr+ctr2)%2==0)
			pri+=" ";
		else
			pri+="#";
	}
	pri+="\n";
}
console.log(pri);