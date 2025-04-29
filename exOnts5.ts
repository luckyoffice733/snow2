class Customer {
     cid:number;
     customerName:string;
     addrs:Address; //class will acts as user defined datatype

     constructor(cid:number,customerName:string,addrs:Address){
        this.cid=cid;
        this.customerName=customerName;
        this.addrs=addrs;
     }
  
     getCustomerDetails(){
        console.log(this.cid+" "+this.customerName+" "+this.addrs.street+" "+this.addrs.city);
     }

}

class Address{
    street:string;
    city:string;
    state:string;
}

let aobj = new Address();
aobj.street="chruch stree",
aobj.city="perungudi",
aobj.state="TamilNadu"

let custobj = new Customer(23232,"harshit",aobj);

custobj.getCustomerDetails();




