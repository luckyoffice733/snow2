//inhertiance

class Parent{  //superclass or parent class 
    name:string;
    age:number;
      
    getParentDetails(){
        console.log(this.name+" "+this.age)
    }

}
  //child class /subclasses by using keyword extends
class Child extends Parent{ //inheritance
      childName:string;
      childAge:number;
    
      getChildDetails(){
        console.log(this.childName+" "+this.childAge);
      }
    
}

let cobj = new Child();

//initalizing the properties of parent and child
cobj.name="elonmusk";
cobj.age=41
cobj.childName="grok";
cobj.childAge=14;

cobj.getParentDetails();
cobj.getChildDetails();





