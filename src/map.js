var products = [
                {name: 'Tulsi Arka',price: 500},
                {name: 'Cow Dung Cake',price: 1000},
                {name: 'Doopam',price:50},
                {name: 'Basma' ,price: 100},
                {name: 'Kumkum', price: 1500},
                {name: 'Organic Lemon',price:250}
               ]



function productDetails (item){
console.log(item.name, item.price);
}
products.map(productDetails);
  
console.log("----------")