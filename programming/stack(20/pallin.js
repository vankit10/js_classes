function pallin(string){
let rev="";
for(var i=string.length-1;i>=0;i--){
    rev+=string[i]
}

if(string===rev)
{
    console.log("palindrome")
}
else
{
    console.log("not a pallindrome")}
}
pallin("abcdba");
pallin("abccba");