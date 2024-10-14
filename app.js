
const unitPrice = 999; // price per pillow
let quantity = 3; // initial quantity

const updatePrice = () => {
    let subtotal = unitPrice * quantity;
    document.getElementById('product-price').textContent = subtotal.toFixed(2);
    document.getElementById('subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('total-price').textContent = subtotal.toFixed(2);
    document.getElementById('summary-total').textContent = subtotal.toFixed(2);
    document.getElementById('item-count').textContent = quantity;
    document.getElementById('summary-item-count').textContent = quantity;
}

document.querySelectorAll('.quantity-btn').forEach(button => {
    button.addEventListener('click', function() {
        let currentValue = parseInt(document.getElementById('quantity').value);
        
        if (this.textContent === '+') {
            quantity = currentValue + 1;
        } else if (this.textContent === '-' && currentValue > 1) {
            quantity = currentValue - 1;
        }
        
        document.getElementById('quantity').value = quantity;
        updatePrice();
    });
});

// Initialize the prices based on default values
updatePrice();
