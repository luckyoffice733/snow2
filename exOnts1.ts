class Employee{
    //properties 
    empId:number;
    empName:string;
    empSal:number;

    constructor(empId:number,empName:string,empSal:number){
      this.empId=empId;
      this.empName=empName;
      this.empSal=empSal;
    }
    getEmployeeDetails():string{
      return "The employee details are "+this.empId+" "+this.empName+" "+this.empSal;
    }
}

let eobj = new Employee(12121,"martin",5000);  //it will for the constructor-> constructor(number,string,number)

//acccessing the object properties
//objectRefereName.propertyName
console.log(eobj.empName);

//accessing the methods
//objectRefereName.methodName();

let resp=eobj.getEmployeeDetails();
console.log(resp)