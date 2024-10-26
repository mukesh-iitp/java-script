//find ------ findIndex

const inputs6 = [
  22, 13, 15, 77, 65, 98, 76, 44, 55, 65,
];

const find1 = inputs6.find((num) => num == 64);
console.log(find1);

const find2 = inputs6.findIndex(
  (num) => num == 64
);
console.log(find2);

//every, fill, findLast, findLastIndex, forEach


const productList = [
  { id: "p1", name: "Apples", category: "Fruits", price: 2.5, inStock: true },
  {
    id: "p2",
    name: "Oranges",
    category: "Fruits",
    price: 1.99,
    inStock: false
  },
  {
    id: "p3",
    name: "Blueberries",
    category: "Fruits",
    price: 4.99,
    inStock: true
  },
  {
    id: "p4",
    name: "Carrots",
    category: "Vegetables",
    price: 1.0,
    inStock: true
  },
  {
    id: "p5",
    name: "Tomatoes",
    category: "Vegetables",
    price: 1.5,
    inStock: true
  }
];
function searchAndBuyProduct(productList, productName) {
// Use the find method to search for the product object whose name matches the productName parameter
const product = productList.find(p => p.name === productName);

// Check if the product is in stock
if (product && product.inStock) {
    // If the product is in stock, set the inStock property to false and return true
    product.inStock = false;
    return true;
} else {
    // If the product is not in stock, return false
    return false;
}
}

