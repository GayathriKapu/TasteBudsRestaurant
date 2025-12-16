const addButtons = document.querySelectorAll(".add");
const totalDisplay = document.getElementById("total");

let total = 0;

addButtons.forEach(button => {
    button.addEventListener("click", () => {
        const card = button.closest(".card");
        const price = parseFloat(card.dataset.price);
        const qtyInput = card.querySelector(".qty");
        const quantity = parseInt(qtyInput.value);

        if (isNaN(quantity) || quantity <= 0) {
            alert("Please enter a valid quantity!");
            return;
        }

        const subtotal = price * quantity;
        total += subtotal;

        totalDisplay.textContent = `Total Price: $${total.toFixed(2)}`;
        qtyInput.value = "";
    });
});
