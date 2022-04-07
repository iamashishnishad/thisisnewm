 var arr =[];
 function Product(n, p, b, a){

    this.name =n;
    (this.price =p),  (this.brand= b); 

 }

 function storeProducts(e) {

    e.preventDefault();

    let form= document.getElementById("products");

    let name = form.name.value;

    let price = form.price.value;
    
    let brand =form.brand.value;

     let p1 = new Product(name, price, barnd);


    arr.push(p1);
    console.log("arr:", arr);
 }