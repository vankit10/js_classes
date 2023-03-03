var number=496,i=0,remainder,sum,test;
test=number;
if(i<number)
{
    remainder=number%i;
    if(remainder==0)
    {
        sum=sum+i;
    }
}
if (sum==test)
{
    console.log("it is a perfect number");
}
else{
    console.log("it is not a perfect number");
}
