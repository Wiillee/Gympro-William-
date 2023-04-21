// JavaScript code for the shopping cart
const cart = document.querySelector('.cart tbody');
const addBtn = document.querySelector('.add');
const removeBtns = document.querySelectorAll('.remove');
const total = document.querySelector('.cart tfoot td:last-child');

// Function to update the total cost of the cart
function updateTotal() {
  let sum = 0;
  cart.querySelectorAll('tr').forEach(row => {
    const price = parseFloat(row.querySelector('td:nth-child(2)').innerText.substring(1));
    const quantity = parseInt(row.querySelector('td:nth-child(3) input').value);
    sum += price * quantity;
  });
  total.innerText = '$' + sum.toFixed(2);
}

// Add a new item to the cart
addBtn.addEventListener('click', () => {
  const newRow = document.createElement('tr');
  newRow.innerHTML = `
    <td>New Item</td>
    <td>$10</td>
    <td><input type="number" value="1" min="1"></td>
    <td>$10</td>
    <td><button class="remove">Remove</button></td>
  `;
  cart.appendChild(newRow);
  updateTotal();
});

// Remove an item from the cart
cart.addEventListener('click', (event) => {
  if (event.target.classList.contains('remove')) {
    event.target.parentNode.parentNode.remove();
    updateTotal();
  }
});

// Update the total cost when a quantity changes
cart.addEventListener('change', (event) => {
  if (event.target.tagName === 'INPUT') {
    const price = parseFloat(event.target.parentNode.previousElementSibling.innerText.substring(1));
    const quantity = parseInt(event.target.value);
    const totalCell = event.target.parentNode.nextElementSibling;
    totalCell.innerText = '$' + (price * quantity).toFixed(2);
    updateTotal();
  }
});

// Initialize the total cost
updateTotal();
// add to cart button function
function addToCart(item) {
    // get item information
    var itemName = item.parentElement.querySelector(".item-name").textContent;
    var itemPrice = item.parentElement.querySelector(".item-price").textContent;
    
    // create new cart item element
    var cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = itemName + " - " + itemPrice;
  
    // add cart item to cart
    var cartItems = document.querySelector(".cart-items");
    cartItems.appendChild(cartItem);
    
    // update cart total
    updateCartTotal();
  }
  
  // favorite button function
  function toggleFavorite(item) {
    item.classList.toggle("favorited");
  }
  