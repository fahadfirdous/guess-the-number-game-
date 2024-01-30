


class product{

    product_name;
    price;
    brand;
    discription;


    constructor(p , pr , b , d){
        this.product_name = p;
        this.price = pr;
        this.brand = b;
        this.discription = d;
    }


    // intro(){

    //     console.log("hello")
    // }


    productDetail(){

        document.write("product name is "+this.product_name+ "<br>");
        document.write("product price is "+this.price+ "<br>");
        document.write("product brand is "+this.brand+ "<br>");
        document.write("product discription is "+this.discription+ "<br>");


    }


}


    var produc1 = new product("mobile",30000,"samsung","agufsagasufgu"+ "<br>");

    produc1.productDetail();

    var produc2 = new product("mobile",30000,"samsung","agufsagasufgu");

    produc2.productDetail();