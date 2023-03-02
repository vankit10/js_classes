class vehicel{
    constructor(numberoftyre,numberofMirror,isEngineavailable,isBreakavailable){
        this.numberoftyre=numberoftyre;
        this.numberofMirror=numberofMirror;
        this.isEngineavailable=isEngineavailable;
        this.isBreakavailable=isBreakavailable;

    }
    PrintDetails(){

        console.log("number of tyres is " +this.numberoftyre,this.numberofMirror,this.isEngineavailable,this.isBreakavailable)
    }

}
var car=new vehicel(41,4,true,true)
car.PrintDetails();