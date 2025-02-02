// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  // Step 1 Create two variables
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');

  // Step 2 extracting the specific values from variables
  console.log(price.innerText);
  console.log(quantity.value);

  // Step 3 Calculate the subtotal price
  const subtotalPrice = (Number(price.innerText) * quantity.value)
  console.log(subtotalPrice);

  // Step 4 Get DOM element that should hold the subtotal
  const subtotal = product.querySelector('.subtotal span')
  console.log(subtotal.innerText);
  
  // Step 5 Set the subtotal price to the corresponding DOM element
  subtotal.innerText = subtotalPrice;
  
  return subtotal
}

function calculateAll() {
  
// ITERATION 2 + ITERATION 3

  let products = document.getElementsByClassName('product');
  let subtotal = 0; 

  for (let i = 0; i < products.length; i++) {
    subtotal = subtotal + updateSubtotal(products[i]);
    console.log(subtotal);
  
//ITERATION 3 Put value to right place: 
    
  document.getElementById('total-value').innerText = subtotal
  }
  }





// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
