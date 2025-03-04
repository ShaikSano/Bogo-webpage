const radioButtons = document.querySelectorAll('input[name="unit"]');
const totalPriceElement = document.getElementById('totalPrice');
const expandableOptions = document.querySelectorAll('.expandable');

// Update total price based on selected option
radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
        const selectedPrice = radio.getAttribute('data-price');
        totalPriceElement.textContent = `$${selectedPrice} USD`;
    });
});

// Expand/Collapse boxes on click
expandableOptions.forEach(option => {
    option.addEventListener('click', () => {
        expandableOptions.forEach(opt => {
            if (opt !== option) {
                opt.classList.remove('expanded');
            }
        });
        option.classList.toggle('expanded');
    });
});
