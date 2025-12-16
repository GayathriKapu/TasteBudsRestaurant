let totalPrice = 0;

function addToCart(button) {
  const card = button.closest('.sandwich-card');
  const price = parseFloat(card.getAttribute('data-price'));
  const qtyInput = card.querySelector('.qty');
  const qty = parseInt(qtyInput.value);

  if (isNaN(qty) || qty < 1) {
    alert("Please enter a valid quantity before adding to cart!");
    return;
  }

  totalPrice += price * qty;
  document.getElementById('total').innerText = `Total Price: $${totalPrice.toFixed(2)}`;

  alert(`${qty} x ${card.querySelector('h3').innerText} added to cart!`);
  qtyInput.value = '';
}
