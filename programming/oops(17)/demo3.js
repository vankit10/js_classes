/*class MathematicalOperations {
    constructor(num1,num2){
        this.num1=num1;
        this.num2=num2
    }
    add(num1,num2){
        console.log("addition is : "+(this.num1+this.num2));
    }
    subtract(num1,num2){
        console.log("subtraction is : "+(this.num1-this.num2))
    }
    multiply(num1,num2){
        console.log("multiplication is : "+(this.num1*this.num2))
    }
    divide(num1,num2){
        console.log("division  is : "+(this.num1/this.num2))
    }


}
var operaition= new MathematicalOperations(10,5)
operaition.add();                   // in this we did the all thee operations with the same value
operaition.subtract();
operaition.multiply();
operaition.divide();*/


class MathematicalOperations {
    add(num1,num2){
        console.log("additiomn is : "+(num1+num2))
    }
    subtract(num1,num2){
        console.log("subtraction is : "+(num1-num2))
    }
    multiply(num1,num2){
        console.log("multiplication is : "+(num1*num2))
    }
    divide(num1,num2){
        console.log("division  is : "+(num1/num2))
    }
    MOD1(num1,num2){
        console.log("MOD is : " +(num1%num2))
    }
    
}
var operaition=new MathematicalOperations()
operaition.add(5,2);
operaition.subtract(15,2);
operaition.multiply(15,9);
operaition.divide(525,5)
operaition.MOD1(85,9)
