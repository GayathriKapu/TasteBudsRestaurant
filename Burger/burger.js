document.addEventListener("DOMContentLoaded", () => {
  const addButtons = document.querySelectorAll(".add-btn");
  const totalDisplay = document.getElementById("total");
  let totalPrice = 0;

  addButtons.forEach((button) => {
    const card = button.parentElement;
    const price = parseFloat(card.getAttribute("data-price"));
    const quantityControls = card.querySelector(".quantity-controls");
    const quantityDisplay = card.querySelector(".quantity");
    const increaseBtn = card.querySelector(".increase");
    const decreaseBtn = card.querySelector(".decrease");
    let quantity = 0;

    button.addEventListener("click", () => {
      button.classList.add("hidden");
      quantityControls.classList.remove("hidden");
      quantity = 1;
      quantityDisplay.textContent = quantity;
      totalPrice += price;
      updateTotal();
    });

    increaseBtn.addEventListener("click", () => {
      quantity++;
      quantityDisplay.textContent = quantity;
      totalPrice += price;
      updateTotal();
    });

    decreaseBtn.addEventListener("click", () => {
      if (quantity > 1) {
        quantity--;
        quantityDisplay.textContent = quantity;
        totalPrice -= price;
        updateTotal();
      } else {
        quantity = 0;
        quantityControls.classList.add("hidden");
        button.classList.remove("hidden");
        totalPrice -= price;
        updateTotal();
      }
    });
  });

  function updateTotal() {
    totalDisplay.textContent = `Total Price: $${totalPrice.toFixed(2)}`;
  }
});
