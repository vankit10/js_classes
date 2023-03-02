function half(str){
    for(var i=0;i<str.length/2;i++)
    {
        process.stdout.write(""+str[i]);
    }
}
half("abcdbcsd")