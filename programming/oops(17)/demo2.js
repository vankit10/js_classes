const person= {
    PrintValue:function PrintValue(name,gender,age,mail){
        console.log("name: "+name,"age : "+age,"gender : "+gender,"mail : "+mail)
    }
    

}
const person1=Object.create(person);    // create object of the variable person
person1.PrintValue("ANkit","Male",24,"vani@gmail.com");