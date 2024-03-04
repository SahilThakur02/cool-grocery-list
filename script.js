let items = [];

    function renderItems() {
        const itemsContainer = document.getElementById('items-container');
        itemsContainer.innerHTML = '';

        items.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item');
            itemDiv.innerHTML = `
                <span>${item.name} - Quantity: ${item.quantity}</span>
                <button class="btn btn-danger rounded-pill" onclick="deleteItem(${index})">Delete</button>

            `;
            itemsContainer.appendChild(itemDiv);
        });
    }

    function addItem() {
        const itemName = document.getElementById('item-input').value.trim();
        const quantity = document.getElementById('quantity-input').value.trim();

        if (itemName === '') {
            alert('Please enter an item');
            return;
        }
        if (!isValidQuantity(quantity)) {
            alert('Please enter a valid quantity (e.g., 2 or 2 kg)');
            return;
        }

        const newItem = { name: itemName, quantity: quantity };
        items.push(newItem);
        renderItems();
        document.getElementById('item-input').value = '';
        document.getElementById('quantity-input').value = '';
    }

    function deleteItem(index) {
        items.splice(index, 1);
        renderItems();
    }

    function isValidQuantity(quantity) {
        // Using a regular expression to validate the quantity
        const regex = /^(\d+(\.\d+)?\s*\w*)|(\d+(\.\d+)?)$/;
        return regex.test(quantity);
    }