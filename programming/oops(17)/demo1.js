class Person{
    constructor(name,email,age,gender){
        this.name=name;
        this.email=email;
        this.age=age;
        this.gender=gender;

    }


print(){
    console.log("name: " +this.name,"email: " +this.email,"age : " +this.age,"gemder : "+this.gender)

}
}

var man=new Person("Ankit","vank@gmail.com",24,"male")   //create object of class
man.print();       //calling function of the class