function pallin(str){
    var stack=[]
    for(var i=0;i<str.length;i++){
        stack.push(str[i])
    }
    console.log(stack)
    var i=0;
    while(stack.length !=0){
        if(str[i] != stack[stack.length-1])
        {
        return "not a pallindrome"

    }
    else{
        i+=1
        stack.pop();
    }
}
return "pallindrome"
}
pallin("abcddcba")
pallin("abfecba")