import { ClientAddress } from "./exOnts7";

class Client {
    cid:number;
    clientName:string;
    caddrs:ClientAddress;


    constructor(cid:number,clientName:string,caddrs:ClientAddress){
       this.cid=cid;
       this.clientName=clientName;
       this.caddrs=caddrs;
    }
 
    getClientDetails(){
       console.log(this.cid+" "+this.clientName+" "+this.caddrs.city);
    }

}

let caddrs = new ClientAddress();
caddrs.city="lucknow"
caddrs.state="UP";

let cobj = new Client(1212,"Naman",caddrs)

cobj.getClientDetails()



