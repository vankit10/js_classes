var n=5;
for(var i=0;i<n;i++){
    for(var j=0;j<=n;j++)
    {
        if(j<=(n-i-1)){
            process.stdout.write("*  ");
        }
        else {
            process.stdout.write("  " );
        }
    }
    console.log()
}

for(var i=0;i<n;i++){
    for(var j=0;j<=n;j++)
    {
        if(j<=(n-i-1)){
            process.stdout.write("  ");
        }
        else {
            process.stdout.write(" *  ");
        }
    }
    console.log()
}