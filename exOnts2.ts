class Product{
    private pid:number;
    protected productName:string;
   public price:number;

    constructor(pid:number,productName:string,price:number){
      this.pid=pid;
      this.productName=productName;
      this.price=price;
    }
   
    getProductDetails(){
        console.log(this.pid+" "+this.productName+" "+this.price);
    }

}//ended

let pobj =new Product(1011,"mouse",800);

//console.log(pobj.pid); //private : we can access with in the access
//console.log(pobj.productName)//protected: we can access with in the class and its sub class
console.log(pobj.price)
pobj.getProductDetails();