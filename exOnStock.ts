class Product{
   
    id: number;
    name: string;
    price: number;
    stock: number; //30

    constructor(id:number,name:string,price:number,stock:number){
        this.id=id;
        this.name=name;
        this.price=price;
        this.stock=stock;
    }
    updateStock(quantity: number):void{ //20
        this.stock=this.stock+quantity; //10+20=30
    }
    sell(quantity: number){ //10
        this.stock=this.stock-quantity;
    }
    getInfo(){
        console.log("ProductName: "+this.name+" "+"Current Stock: "+this.stock)
    }
}

let p1= new Product(1,"mobile",10000,50); //current stock value= 50
console.log("Before Stock updated : "+p1.stock);
//adding new stock 10
p1.updateStock(10); //current stock is 60 once updated
console.log("Once Stock updated : "+p1.stock);//60

//after selling 5 mobiles:
p1.sell(5);
p1.getInfo();


let p2= new Product(2,"TV",10000,10); //current stock value= 10
console.log("Before Stock updated : "+p2.stock);
//adding new stock 10
p2.updateStock(10); //current stock is 10 once updated
console.log("Once Stock updated : "+p2.stock);//20

//after selling 5 mobiles:
p2.sell(5);
p2.getInfo(); //15