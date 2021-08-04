let carts= document.querySelectorAll('.add-to-cart');

let products=[
    {
        name:'Mahindra and Mahindra',
        tag:"https://resize.indiatvnews.com/en/resize/newbucket/715_-/2020/06/mahindra-logo-1024x623-1584868456-1592293212.jpg",
        price:  800,
        inCart:0
    },
    {
        name:'Tesla',
        tag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd9-uo5fCrmSJ7WUMGhjeNwtUgFa8ARMbVsZG8R1Tl8QyiEz5UDYghbJAIR4evDWVgw5I&usqp=CAU",
        price: 599,
        inCart:0
    },
    {
        name:'Apple Inc',
        tag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9Nr6U86QJJz5KEGBqfZE_cQKl2_3Avz6-cX2rNAExb8NHrvld7LCwH88GwVzhzMzdMU&usqp=CAU",
        price: 125.89,
        inCart:0
    },
    {
        name:'Union Bank',
        tag:"https://www.pacificgrove.org/thumb_cache/725x525/3e0c53f32a6fb61affe26d13a66003d6.jpg",
        price: 35,
        inCart:0
    },
    {
        name:'Amazon',
        tag:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvHaU5_ygid63x_ruhJm3X8a_lgeaGTyaxNzUfF5cCucrkg_uhcrxblXLHrizHQWBjYFY&usqp=CAU",
        price: 3206,
        inCart:0
    },
    {
        name:'Central Bank',
        tag:"",
        price: 21.3,
        inCart:0
    },
    {
        name:'Volkswagen Group',
        tag:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Logo_European_Central_Bank.svg/1242px-Logo_European_Central_Bank.svg.png",
        price: '238$',
        inCart:0
    }

]

for(let i=0; i< carts.length; i++){
    carts[i].addEventListener('click',()=> {

        cartNumbers(products[i]);
        totalCost(products[i]);
      
    } )
}


function onLoadCartNumbers(){
    let productNumbers=localStorage.getItem('cartNumbers');
    if(productNumbers) {
        document.querySelectorAll('#sp span').textContent= productNumbers ;
    }
}


function cartNumbers(products){
    let productNumbers=localStorage.getItem('cartNumbers');
  //  console.log(productNumbers);
 //   console.log(typeof productNumbers);
    productNumbers=parseInt(productNumbers);


    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);
        document.querySelectorAll('#sp span').textContent=productNumbers+1 ;
    } else {
        localStorage.setItem('cartNumbers',1);
        document.querySelector('#sp span').textContent=1;
    }

    setItems(products);    

}

function setItems(products){
    let productsInCart;
    let cartItems=localStorage.getItem('productsInCart');
    cartItems= JSON.parse(cartItems);
   console.log(productsInCart);


if(cartItems!= null){

    if(cartItems[products.name]== undefined){
        cartItems={
            ...cartItems,
            [products.name]:products
        }
    }

    cartItems[products.name].inCart +=1;
}else{
 
    products.inCart=1;
   
     cartItems={
        [products.name]:products
    };
}

 
    localStorage.setItem('productsInCart',JSON.stringify(cartItems));

}


function totalCost(products){
// console.log(products.price);

let cartCost=localStorage.getItem('totalCost');


if(cartCost != null){
    
cartCost=parseInt(cartCost);
localStorage.setItem('totalCost',cartCost + products.price);

}else{

    localStorage.setItem('totalCost',products.price);
}



}




function displayCart(){

    let cartItems=localStorage.getItem('productsInCart');
    cartItems=JSON.parse(cartItems);
        let productContainer= document.querySelector('.proizvodi');
console.log(cartItems);

    if(cartItems && productContainer  ){

        

        
        productContainer.innerHTML='';
        Object.values(cartItems).map(item=>{
            productContainer.innerHTML+=`
            <div class="proizvodi" style="width:100%; height:80px;" >
            <div id="pr" style="width:100%;">
            <div id="ime" style="width:35%;float:left;margin-left:10px;">${item.name}</div>
            <div id="cena" style="width:25%;float:left;margin-left:10px;" >$${item.price}</div>
             <div id="broj"  style="width:15%;float:right;margin-right:10px;">${item.inCart}</div>
             <div id="ukupno" style="width:15%;float:right;margin-right:10px;">$${item.inCart*item.price}</div>  
            </div>
            </div>
            `;
        })

    }

}








onLoadCartNumbers();
displayCart();
