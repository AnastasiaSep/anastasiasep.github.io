// Данные продуктов
const products = [
    {
        id: 1,
        name: 'Набор "Симфония"',
        description: 'На фото букет L (55-57ягод)',
        fullDescription: 'Букет "Симфония" - идеальный выбор. Каждая сочная клубника обволакивается нежным белым и молочным Бельгийским шоколадом, украшается кокосовой стружкой и посыпкой, создавая волшебную атмосферу. Нежный букет из клубники, покрытый молочным шоколадом. Подарите своим близким незабываемые моменты.',
        price: 3290,
        image: '1.jpg',
        composition: 'Клубника, шоколад молочный, шоколад белый, кокосовая стружка, посыпка звездочки и сердечки',
        sizes: 'S (18-20 ягод) | M (35-37 ягод) | L (55-57 ягод) ',
        quantities: [
            { label: 'S (18-20)', value: 's', priceModifier: 1 },
            { label: 'M (35-37)', value: 'm', priceModifier: 1.5 },
            { label: 'L (55-57)', value: 'l', priceModifier: 2 }
        ]
    },
    {
        id: 2,
        name: 'Набор "Golden Strawberry"',
        description: 'Клубника в золотом шоколаде',
        fullDescription: 'Эксклюзивный набор клубники, покрытой золотым бельгийским шоколадом с добавлением съедобного золота. Роскошный подарок для особенных случаев.',
        price: 1890,
        priceOld: 2100,
        image: '2.jpg',
        composition: 'Клубника, шоколад молочный, пищевое золото, орехи',
        sizes: '9-12 ягод | 18-20 ягод | 25-30 ягод',
        quantities: [
            { label: '9-12 ягод', value: '9-12', priceModifier: 1 },
            { label: '18-20 ягод', value: '18-20', priceModifier: 1.8 },
            { label: '25-30 ягод', value: '25-30', priceModifier: 2.5 }
        ]
    },
    {
        id: 3,
        name: 'Набор "Сладкий сюрприз"',
        description: 'Клубника с макарунами',
        fullDescription: 'Нежное сочетание клубники в шоколаде и французских макарун. Идеальный подарок для любителей изысканных десертов.',
        price: 2890,
        image: '3.jpg',
        composition: 'Клубника, шоколад, макаруны, декор',
        sizes: 'XS (13 ягод) | S (20-25 ягод) | M (35-40 ягод)',
        quantities: [
            { label: 'XS (13)', value: 'xs', priceModifier: 1 },
            { label: 'S (20-25)', value: 's', priceModifier: 1.4 },
            { label: 'M (35-40)', value: 'm', priceModifier: 2 }
        ]
    },
    {
        id: 4,
        name: 'Набор "Люкс"',
        description: 'С орехами и золотой посыпкой',
        fullDescription: 'Премиальный набор с отборной клубникой, покрытой бельгийским шоколадом и украшенной орехами, кокосом и золотой посыпкой.',
        price: 3500,
        image: '4.jpg',
        composition: 'Клубника, шоколад премиум, орехи, кокос, золотая посыпка',
        sizes: '12 ягод | 24 ягоды | 36 ягод',
        quantities: [
            { label: '12 ягод', value: '12', priceModifier: 1 },
            { label: '24 ягоды', value: '24', priceModifier: 1.9 },
            { label: '36 ягод', value: '36', priceModifier: 2.8 }
        ]
    },
    {
        id: 5,
        name: 'Набор "Романтик"',
        description: 'В подарочной коробке с декором',
        fullDescription: 'Романтический букет из клубники в шоколаде, оформленный в элегантной подарочной коробке. Идеален для признаний в любви.',
        price: 2200,
        image: '5.jpg',
        composition: 'Клубника, шоколад молочный и белый, розовый декор',
        sizes: 'Small (15 ягод) | Medium (25 ягод) | Large (40 ягод)',
        quantities: [
            { label: 'Small (15 ягод)', value: 'small', priceModifier: 1 },
            { label: 'Medium (25 ягод)', value: 'medium', priceModifier: 1.6 },
            { label: 'Large (40 ягод)', value: 'large', priceModifier: 2.5 }
        ]
    },
    {
        id: 6,
        name: 'Набор "Праздничный"',
        description: 'С индивидуальным дизайном',
        fullDescription: 'Праздничный набор с уникальным дизайном под ваш заказ. Возможно оформление под любую тематику: день рождения, юбилей, корпоратив.',
        price: 4200,
        image: '6.jpg',
        composition: 'Клубника, шоколад ассорти, индивидуальный декор',
        sizes: '20 ягод | 35 ягод | 50 ягод',
        quantities: [
            { label: '20 ягод', value: '20', priceModifier: 1 },
            { label: '35 ягод', value: '35', priceModifier: 1.7 },
            { label: '50 ягод', value: '50', priceModifier: 2.3 }
        ]
    }
];

// Корзина
let cart = [];
let favorites = [];
let currentDetailProduct = null;
let detailCounter = 1;

// Отрисовка продуктов
function renderProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image-wrapper">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="favorite-icon ${favorites.includes(product.id) ? 'active' : ''}" onclick="toggleFavorite(${product.id}, event)">
                    ${favorites.includes(product.id) ? '❤️' : '🤍'}
                </div>
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">
                    ${product.price} ₽
                    ${product.priceOld ? `<span class="product-price-old">${product.priceOld} ₽</span>` : ''}
                </div>
                
                <div class="quantity-selector">
                    <label class="quantity-label">Кол-во ягод</label>
                    <div class="select-with-icon" onclick="toggleDropdown(${product.id})">
                        <div class="select-icon">
                            <img src="${product.image}" alt="${product.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 5px;">
                        </div>
                        <div class="select-text" id="selected-${product.id}">
                            ${product.quantities[0].label}
                        </div>
                        <div class="select-arrow">▼</div>
                    </div>
                    <select id="quantity-${product.id}" style="display: none;">
                        ${product.quantities.map(q => `
                            <option value="${q.value}" data-price="${(product.price * q.priceModifier).toFixed(0)}">
                                ${q.label}
                            </option>
                        `).join('')}
                    </select>
                </div>

                <div class="product-actions">
                    <button class="btn-details" onclick="openProductDetail(${product.id})">Подробнее</button>
                    <button class="btn-add-to-cart" onclick="addToCart(${product.id})">
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Открыть модальное окно с деталями продукта
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentDetailProduct = product;
    detailCounter = 1;

    // Заполнить данные модального окна
    document.getElementById('detailModalImage').innerHTML = `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">`;
    document.getElementById('detailModalTitle').textContent = product.name;
    document.getElementById('detailModalPrice').textContent = `${product.price} ₽`;
    document.getElementById('detailDescription').textContent = product.fullDescription;
    document.getElementById('detailSizes').innerHTML = product.sizes + '<br>Точное количество ягод зависит от размера ягоды';
    document.getElementById('detailComposition').textContent = product.composition;
    document.getElementById('detailSelectIcon').innerHTML = `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px;">`;
    document.getElementById('detailSelectedText').textContent = product.quantities[0].label;
    document.getElementById('detailCounter').textContent = '1';

    // Обновить иконку избранного
    const favBtn = document.getElementById('detailFavoriteBtn');
    if (favorites.includes(productId)) {
        favBtn.textContent = '❤️';
        favBtn.classList.add('active');
    } else {
        favBtn.textContent = '🤍';
        favBtn.classList.remove('active');
    }

    // Заполнить селектор
    const select = document.getElementById('detailQuantitySelect');
    select.innerHTML = product.quantities.map((q, index) => `
        <option value="${q.value}" data-price="${(product.price * q.priceModifier).toFixed(0)}" ${index === 0 ? 'selected' : ''}>
            ${q.label}
        </option>
    `).join('');

    // РАБОТАЮЩИЙ ОБРАБОТЧИК для селектора
    select.onchange = function() {
        const selectedOption = this.options[this.selectedIndex];
        
        // Обновляем текст
        document.getElementById('detailSelectedText').textContent = selectedOption.text;
        
        // Сбрасываем счётчик
        detailCounter = 1;
        document.getElementById('detailCounter').textContent = '1';
        
        // Обновляем цену с учётом счётчика
        updateDetailTotalPrice();
    };


    // Показать модальное окно
    document.getElementById('productDetailModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Закрыть модальное окно с деталями
function closeDetailModal() {
    document.getElementById('productDetailModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    currentDetailProduct = null;
}

// Закрыть при клике на overlay
function closeDetailModalOnOverlay(event) {
    if (event.target.id === 'productDetailModal') {
        closeDetailModal();
    }
}

// Переключение выпадающего списка в модальном окне
function toggleDetailDropdown() {
    const select = document.getElementById('detailQuantitySelect');
    const wrapper = document.querySelector('.detail-select-with-icon');
    
    // Удаляем старые dropdown
    document.querySelectorAll('.custom-dropdown').forEach(d => d.remove());
    
    // Создаём кастомный dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'custom-dropdown';
    
    const rect = wrapper.getBoundingClientRect();
    
    dropdown.style.cssText = `
        position: fixed;
        top: ${rect.bottom + 5}px;
        left: ${rect.left}px;
        width: ${rect.width}px;
        background: white;
        border: 2px solid #ff4d6d;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 9999;
        max-height: 250px;
        overflow-y: auto;
    `;
    
    Array.from(select.options).forEach((option, index) => {
        const item = document.createElement('div');
        item.textContent = option.text;
        item.style.cssText = `
            padding: 1rem;
            cursor: pointer;
            transition: all 0.2s;
            ${index === select.selectedIndex ? 'background: #ffe0e5; font-weight: 600;' : ''}
        `;
        
        item.onmouseover = () => item.style.background = '#ffe0e5';
        item.onmouseout = () => {
            if (index !== select.selectedIndex) item.style.background = 'white';
        };
        
        item.onclick = () => {
        select.selectedIndex = index;
        
        // Обновляем текст
        document.getElementById('detailSelectedText').textContent = option.text;
        
        // Сбрасываем счётчик при смене размера
        detailCounter = 1;
        document.getElementById('detailCounter').textContent = '1';
        
        // Обновляем цену
        updateDetailTotalPrice(); // ← вместо прямого обновления
        
        dropdown.remove();
    };

        
        dropdown.appendChild(item);
    });
    
    document.body.appendChild(dropdown);
    
    setTimeout(() => {
        document.addEventListener('click', function close(e) {
            if (!dropdown.contains(e.target) && !wrapper.contains(e.target)) {
                dropdown.remove();
                document.removeEventListener('click', close);
            }
        });
    }, 0);
}

// Увеличить счетчик в модальном окне
function increaseDetailCounter() {
    detailCounter++;
    document.getElementById('detailCounter').textContent = detailCounter;
    updateDetailTotalPrice(); // ← добавили
}

// Уменьшить счетчик в модальном окне
function decreaseDetailCounter() {
    if (detailCounter > 1) {
        detailCounter--;
        document.getElementById('detailCounter').textContent = detailCounter;
        updateDetailTotalPrice(); // ← добавили
    }
}

// НОВАЯ ФУНКЦИЯ - обновление итоговой цены
function updateDetailTotalPrice() {
    const select = document.getElementById('detailQuantitySelect');
    const selectedOption = select.options[select.selectedIndex];
    const basePrice = parseInt(selectedOption.dataset.price);
    const totalPrice = basePrice * detailCounter;
    
    document.getElementById('detailModalPrice').textContent = `${totalPrice} ₽`;
}

// Переключить избранное в модальном окне
function toggleDetailFavorite() {
    if (!currentDetailProduct) return;
    
    const favBtn = document.getElementById('detailFavoriteBtn');
    const productId = currentDetailProduct.id;
    
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
        favBtn.textContent = '🤍';
        favBtn.classList.remove('active');
    } else {
        favorites.push(productId);
        favBtn.textContent = '❤️';
        favBtn.classList.add('active');
    }

    // Обновить иконку на карточке
    renderProducts();
}

// Добавить в корзину из модального окна
function addToCartFromDetail() {
    if (!currentDetailProduct) return;

    const select = document.getElementById('detailQuantitySelect');
    const selectedOption = select.options[select.selectedIndex];
    const selectedQuantity = selectedOption.text;
    const selectedPrice = parseInt(selectedOption.dataset.price);

    const cartItem = {
        id: `${currentDetailProduct.id}-${selectedOption.value}`,
        productId: currentDetailProduct.id,
        name: currentDetailProduct.name,
        quantity: detailCounter,
        price: selectedPrice,
        emoji: '🍓',
        size: selectedQuantity
    };

    const existingItem = cart.find(item => item.id === cartItem.id);

    if (existingItem) {
        existingItem.quantity += detailCounter;
    } else {
        cart.push(cartItem);
    }

    updateCart();
    
    // Показать уведомление
    const btn = document.querySelector('.btn-add-to-cart-detail');
    const originalText = btn.textContent;
    btn.textContent = '✓ Добавлено в корзину';
    btn.style.background = '#4CAF50';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);

    // Закрыть модальное окно через 1 секунду
    setTimeout(() => {
        closeDetailModal();
    }, 1500);
}

// Переключение избранного
function toggleFavorite(productId, event) {
    event.stopPropagation();
    const icon = event.currentTarget;
    
    if (favorites.includes(productId)) {
        favorites = favorites.filter(id => id !== productId);
        icon.textContent = '🤍';
        icon.classList.remove('active');
    } else {
        favorites.push(productId);
        icon.textContent = '❤️';
        icon.classList.add('active');
    }
}

// Переключение выпадающего списка
function toggleDropdown(productId) {
    const product = products.find(p => p.id === productId);
    const select = document.getElementById(`quantity-${productId}`);
    const wrapper = select.previousElementSibling;
    const textElement = document.getElementById(`selected-${productId}`);
    const priceElement = wrapper.closest('.product-card').querySelector('.product-price');
    
    document.querySelectorAll('.custom-dropdown').forEach(d => d.remove());
    
    const dropdown = document.createElement('div');
    dropdown.className = 'custom-dropdown';
    
    const rect = wrapper.getBoundingClientRect();
    
    dropdown.style.cssText = `
        position: fixed;
        top: ${rect.bottom + 5}px;
        left: ${rect.left}px;
        width: ${rect.width}px;
        background: white;
        border: 2px solid #ff4d6d;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        z-index: 9999;
        max-height: 250px;
        overflow-y: auto;
    `;
    
    Array.from(select.options).forEach((option, index) => {
        const item = document.createElement('div');
        item.textContent = option.text;
        item.style.cssText = `
            padding: 1rem;
            cursor: pointer;
            transition: all 0.2s;
            ${index === select.selectedIndex ? 'background: #ffe0e5; font-weight: 600;' : ''}
        `;
        
        item.onmouseover = () => item.style.background = '#ffe0e5';
        item.onmouseout = () => {
            if (index !== select.selectedIndex) item.style.background = 'white';
        };
        
        item.onclick = () => {
            select.selectedIndex = index;
            textElement.textContent = option.text;
            
            // ОБНОВЛЯЕМ ЦЕНУ
            const newPrice = option.dataset.price;
            const priceText = priceElement.childNodes[0];
            priceText.textContent = `${newPrice} ₽ `;
            
            dropdown.remove();
        };
        
        dropdown.appendChild(item);
    });
    
    document.body.appendChild(dropdown);
    
    setTimeout(() => {
        document.addEventListener('click', function close(e) {
            if (!dropdown.contains(e.target) && !wrapper.contains(e.target)) {
                dropdown.remove();
                document.removeEventListener('click', close);
            }
        });
    }, 0);
}

// Добавление в корзину
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const select = document.getElementById(`quantity-${productId}`);
    const selectedOption = select.options[select.selectedIndex];
    const selectedQuantity = selectedOption.text;
    const selectedPrice = parseInt(selectedOption.dataset.price);

    const cartItem = {
        id: `${productId}-${selectedOption.value}`,
        productId: productId,
        name: product.name,
        quantity: 1,
        price: selectedPrice,
        emoji: '🍓',
        size: selectedQuantity
    };

    const existingItem = cart.find(item => item.id === cartItem.id);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push(cartItem);
    }

    updateCart();
    
    // Анимация добавления
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Добавлено';
    btn.style.background = '#4CAF50';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1000);
}

// Обновление корзины
function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = `${totalPrice}₽`;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <div class="empty-cart-icon">🛒</div>
                <p>Корзина пуста</p>
            </div>
        `;
    } else {
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.emoji}</div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p style="font-size: 0.85rem; color: #999; margin-bottom: 0.3rem;">${item.size}</p>
                    <div class="cart-item-price">${item.price}₽</div>
                    <div class="cart-item-controls">
                        <button onclick="decreaseQuantity('${item.id}')">−</button>
                        <span class="cart-item-quantity">${item.quantity}</span>
                        <button onclick="increaseQuantity('${item.id}')">+</button>
                    </div>
                </div>
                <span class="remove-item" onclick="removeFromCart('${item.id}')">×</span>
            </div>
        `).join('');
    }
}

// Увеличить количество
function increaseQuantity(itemId) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity++;
        updateCart();
    }
}

// Уменьшить количество
function decreaseQuantity(itemId) {
    const item = cart.find(item => item.id === itemId);
    if (item && item.quantity > 1) {
        item.quantity--;
        updateCart();
    }
}

// Удалить из корзины
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

// Переключение корзины
function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    const cartOverlay = document.getElementById('cartOverlay');
    cartModal.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

// Оформление заказа
// function checkout() {
//     if (cart.length === 0) {
//         alert('Корзина пуста!');
//         return;
//     }

//     const orderDetails = cart.map(item => 
//         `${item.name} (${item.size}) x${item.quantity} - ${item.price * item.quantity}₽`
//     ).join('\n');

//     const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//     alert(`Ваш заказ:\n\n${orderDetails}\n\nИтого: ${total}₽\n\nСпасибо за заказ! Мы свяжемся с вами в ближайшее время.`);
    
//     cart = [];
//     updateCart();
//     toggleCart();
// }
function checkout() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }

    const orderDetails = cart.map(item => 
        `${item.name} (${item.size}) x${item.quantity} - ${item.price * item.quantity}₽`
    ).join('\n');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const botToken = '7949643409:AAGmGqoAS2DR0tSYyesvNkpGidaRyCSOU9Q';
    const chatId = '530003189';
    const message = `🛒 Новый заказ!\n\n${orderDetails}\n\n💰 Итого: ${total}₽`;

    fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    }).then(() => {
        alert('Заказ отправлен!');
        cart = [];
        updateCart();
        toggleCart();
    });
}



// Отправка формы
function submitOrder() {
    const name = document.getElementById('nameInput').value;
    const phone = document.getElementById('phoneInput').value;
    const email = document.getElementById('emailInput').value;
    const message = document.getElementById('messageInput').value;

    if (!name || !phone || !email || !message) {
        alert('Пожалуйста, заполните все поля!');
        return;
    }

    alert(`Спасибо, ${name}! Ваше сообщение отправлено. Мы свяжемся с вами по телефону ${phone}.`);
    
    document.getElementById('nameInput').value = '';
    document.getElementById('phoneInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('messageInput').value = '';
}

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Закрытие модального окна по ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeDetailModal();
    }
});

// Инициализация
renderProducts();





//         // Данные продуктов
//         const products = [
//             {
//                 id: 1,
//                 name: 'Набор "Симфония"',
//                 description: 'На фото букет L (55-57ягод)',
//                 fullDescription: 'Букет "Симфония" - идеальный выбор. Каждая сочная клубника обволакивается нежным белым и молочным Бельгийским шоколадом, украшается кокосовой стружкой и посыпкой, создавая волшебную атмосферу. Нежный букет из клубники, покрытый молочным шоколадом. Подарите своим близким незабываемые моменты.',
//                 price: 3290,
//                 image: '1.jpg',
//                 composition: 'Клубника, шоколад молочный, шоколад белый, кокосовая стружка, посыпка звездочки и сердечки',
//                 sizes: 'S (18-20 ягод) | M (35-37 ягод) | L (55-57 ягод) ',
//                 quantities: [
//                     { label: 'S (18-20)', value: 's', priceModifier: 1 },
//                     { label: 'M (35-37)', value: 'm', priceModifier: 1.5 },
//                     { label: 'L (55-57)', value: 'l', priceModifier: 2 }
//                 ]
//             },
//             {
//                 id: 2,
//                 name: 'Набор "Golden Strawberry"',
//                 description: 'Клубника в золотом шоколаде',
//                 fullDescription: 'Эксклюзивный набор клубники, покрытой золотым бельгийским шоколадом с добавлением съедобного золота. Роскошный подарок для особенных случаев.',
//                 price: 1890,
//                 priceOld: 2100,
//                 image: '2.jpg',
//                 composition: 'Клубника, шоколад молочный, пищевое золото, орехи',
//                 sizes: '9-12 ягод | 18-20 ягод | 25-30 ягод',
//                 quantities: [
//                     { label: '9-12 ягод', value: '9-12', priceModifier: 1 },
//                     { label: '18-20 ягод', value: '18-20', priceModifier: 1.8 },
//                     { label: '25-30 ягод', value: '25-30', priceModifier: 2.5 }
//                 ]
//             },
//             {
//                 id: 3,
//                 name: 'Набор "Сладкий сюрприз"',
//                 description: 'Клубника с макарунами',
//                 fullDescription: 'Нежное сочетание клубники в шоколаде и французских макарун. Идеальный подарок для любителей изысканных десертов.',
//                 price: 2890,
//                 image: '3.jpg',
//                 composition: 'Клубника, шоколад, макаруны, декор',
//                 sizes: 'XS (13 ягод) | S (20-25 ягод) | M (35-40 ягод)',
//                 quantities: [
//                     { label: 'XS (13)', value: 'xs', priceModifier: 1 },
//                     { label: 'S (20-25)', value: 's', priceModifier: 1.4 },
//                     { label: 'M (35-40)', value: 'm', priceModifier: 2 }
//                 ]
//             },
//             {
//                 id: 4,
//                 name: 'Набор "Люкс"',
//                 description: 'С орехами и золотой посыпкой',
//                 fullDescription: 'Премиальный набор с отборной клубникой, покрытой бельгийским шоколадом и украшенной орехами, кокосом и золотой посыпкой.',
//                 price: 3500,
//                 image: '4.jpg',
//                 composition: 'Клубника, шоколад премиум, орехи, кокос, золотая посыпка',
//                 sizes: '12 ягод | 24 ягоды | 36 ягод',
//                 quantities: [
//                     { label: '12 ягод', value: '12', priceModifier: 1 },
//                     { label: '24 ягоды', value: '24', priceModifier: 1.9 },
//                     { label: '36 ягод', value: '36', priceModifier: 2.8 }
//                 ]
//             },
//             {
//                 id: 5,
//                 name: 'Набор "Романтик"',
//                 description: 'В подарочной коробке с декором',
//                 fullDescription: 'Романтический букет из клубники в шоколаде, оформленный в элегантной подарочной коробке. Идеален для признаний в любви.',
//                 price: 2200,
//                 image: '5.jpg',
//                 composition: 'Клубника, шоколад молочный и белый, розовый декор',
//                 sizes: 'Small (15 ягод) | Medium (25 ягод) | Large (40 ягод)',
//                 quantities: [
//                     { label: 'Small (15 ягод)', value: 'small', priceModifier: 1 },
//                     { label: 'Medium (25 ягод)', value: 'medium', priceModifier: 1.6 },
//                     { label: 'Large (40 ягод)', value: 'large', priceModifier: 2.5 }
//                 ]
//             },
//             {
//                 id: 6,
//                 name: 'Набор "Праздничный"',
//                 description: 'С индивидуальным дизайном',
//                 fullDescription: 'Праздничный набор с уникальным дизайном под ваш заказ. Возможно оформление под любую тематику: день рождения, юбилей, корпоратив.',
//                 price: 4200,
//                 image: '6.jpg',
//                 composition: 'Клубника, шоколад ассорти, индивидуальный декор',
//                 sizes: '20 ягод | 35 ягод | 50 ягод',
//                 quantities: [
//                     { label: '20 ягод', value: '20', priceModifier: 1 },
//                     { label: '35 ягод', value: '35', priceModifier: 1.7 },
//                     { label: '50 ягод', value: '50', priceModifier: 2.3 }
//                 ]
//             }
//         ];

//         // Корзина
//         let cart = [];
//         let favorites = [];
//         let currentDetailProduct = null;
//         let detailCounter = 1;

//         // Отрисовка продуктов
//         function renderProducts() {
//             const productGrid = document.getElementById('productGrid');
//             productGrid.innerHTML = products.map(product => `
//                 <div class="product-card">
//                     <div class="product-image-wrapper">
//                         <div class="product-image">
//                             <img src="${product.image}" alt="${product.name}">
//                         </div>

//                         <div class="favorite-icon ${favorites.includes(product.id) ? 'active' : ''}" onclick="toggleFavorite(${product.id}, event)">
//                             ${favorites.includes(product.id) ? '❤️' : '🤍'}
//                         </div>
//                     </div>
//                     <div class="product-info">
//                         <h3>${product.name}</h3>
//                         <p class="product-description">${product.description}</p>
//                         <div class="product-price">
//                             ${product.price} ₽
//                             ${product.priceOld ? `<span class="product-price-old">${product.priceOld} ₽</span>` : ''}
//                         </div>
                        
//                         <div class="quantity-selector">
//                             <label class="quantity-label">Кол-во ягод</label>
//                             <div class="select-with-icon" onclick="toggleDropdown(${product.id})">
//                                 <div class="select-icon">
//                                     <img src="${product.image}" alt="${product.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 5px;">
//                                 </div>

//                                 <div class="select-text" id="selected-${product.id}">
//                                     ${product.quantities[0].label}
//                                 </div>
//                                 <div class="select-arrow">▼</div>
//                             </div>
//                             <select id="quantity-${product.id}" style="display: none;">
//                                 ${product.quantities.map(q => `
//                                     <option value="${q.value}" data-price="${(product.price * q.priceModifier).toFixed(0)}">
//                                         ${q.label}
//                                     </option>
//                                 `).join('')}
//                             </select>
//                         </div>


//                         <div class="product-actions">
//                             <button class="btn-details" onclick="openProductDetail(${product.id})">Подробнее</button>
//                             <button class="btn-add-to-cart" onclick="addToCart(${product.id})">
//                                 В корзину
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             `).join('');
//         }

//         // Открыть модальное окно с деталями продукта
//         function openProductDetail(productId) {
//             const product = products.find(p => p.id === productId);
//             if (!product) return;

//             currentDetailProduct = product;
//             detailCounter = 1;

//             // Заполнить данные модального окна
//             document.getElementById('detailModalImage').innerHTML = `<img src="${product.image}" alt="${product.name}" style="max-width: 90%; max-height: 400px; width: auto; height: auto; object-fit: contain; display: block; margin: 0 auto; transform: rotate(0deg) !important;">`;
//             document.getElementById('detailModalTitle').textContent = product.name;
//             document.getElementById('detailModalPrice').textContent = `${product.price} ₽`;
//             document.getElementById('detailDescription').textContent = product.fullDescription;
//             document.getElementById('detailSizes').innerHTML = product.sizes + '<br>Точное количество ягод зависит от размера ягоды';
//             document.getElementById('detailComposition').textContent = product.composition;
//             document.getElementById('detailSelectIcon').innerHTML = `<img src="${product.image}" alt="${product.name}" style="width: 40px; height: 40px; object-fit: cover; border-radius: 5px;">`;
//             document.getElementById('detailSelectedText').textContent = product.quantities[0].label;
//             document.getElementById('detailCounter').textContent = '1';

//             // Обновить иконку избранного
//             const favBtn = document.getElementById('detailFavoriteBtn');
//             if (favorites.includes(productId)) {
//                 favBtn.textContent = '❤️';
//                 favBtn.classList.add('active');
//             } else {
//                 favBtn.textContent = '🤍';
//                 favBtn.classList.remove('active');
//             }

//             // Заполнить селектор
//             const select = document.getElementById('detailQuantitySelect');
//                 select.innerHTML = product.quantities.map((q, index) => `
//                     <option value="${q.value}" data-price="${(product.price * q.priceModifier).toFixed(0)}" ${index === 0 ? 'selected' : ''}>
//                         ${q.label}
//                     </option>
//                 `).join('');



// // Добавь обработчик изменения цены
// select.onchange = function() {
//     const selectedOption = this.options[this.selectedIndex];
//     const newPrice = selectedOption.dataset.price;
//     document.getElementById('detailModalPrice').textContent = `${newPrice} ₽`;
//     document.getElementById('detailSelectedText').textContent = selectedOption.text;
// };


//             // Показать модальное окно
//             document.getElementById('productDetailModal').classList.add('active');
//             document.body.style.overflow = 'hidden';
//         }

//         // Закрыть модальное окно с деталями
//         function closeDetailModal() {
//             document.getElementById('productDetailModal').classList.remove('active');
//             document.body.style.overflow = 'auto';
//             currentDetailProduct = null;
//         }

//         // Закрыть при клике на overlay
//         function closeDetailModalOnOverlay(event) {
//             if (event.target.id === 'productDetailModal') {
//                 closeDetailModal();
//             }
//         }

//         // Переключение выпадающего списка в модальном окне
//         function toggleDetailDropdown() {
//             const select = document.getElementById('detailQuantitySelect');
//             select.focus();
//         }

//         // Обработка изменения селектора в модальном окне
//         document.addEventListener('change', function(e) {
//             if (e.target.id === 'detailQuantitySelect') {
//                 const selectedOption = e.target.options[e.target.selectedIndex];
//                 document.getElementById('detailSelectedText').textContent = selectedOption.text;
//                 const newPrice = selectedOption.dataset.price;
//                 document.getElementById('detailModalPrice').textContent = `${newPrice} ₽`;
//             }
//         });

//         // Увеличить счетчик в модальном окне
//         function increaseDetailCounter() {
//             detailCounter++;
//             document.getElementById('detailCounter').textContent = detailCounter;
//         }

//         // Уменьшить счетчик в модальном окне
//         function decreaseDetailCounter() {
//             if (detailCounter > 1) {
//                 detailCounter--;
//                 document.getElementById('detailCounter').textContent = detailCounter;
//             }
//         }

//         // Переключить избранное в модальном окне
//         function toggleDetailFavorite() {
//             if (!currentDetailProduct) return;
            
//             const favBtn = document.getElementById('detailFavoriteBtn');
//             const productId = currentDetailProduct.id;
            
//             if (favorites.includes(productId)) {
//                 favorites = favorites.filter(id => id !== productId);
//                 favBtn.textContent = '🤍';
//                 favBtn.classList.remove('active');
//             } else {
//                 favorites.push(productId);
//                 favBtn.textContent = '❤️';
//                 favBtn.classList.add('active');
//             }

//             // Обновить иконку на карточке
//             renderProducts();
//         }

//         // Добавить в корзину из модального окна
//         function addToCartFromDetail() {
//             if (!currentDetailProduct) return;

//             const select = document.getElementById('detailQuantitySelect');
//             const selectedOption = select.options[select.selectedIndex];
//             const selectedQuantity = selectedOption.text;
//             const selectedPrice = parseInt(selectedOption.dataset.price);

//             const cartItem = {
//                 id: `${currentDetailProduct.id}-${selectedOption.value}`,
//                 productId: currentDetailProduct.id,
//                 name: currentDetailProduct.name,
//                 quantity: detailCounter,
//                 price: selectedPrice,
//                 emoji: currentDetailProduct.emoji,
//                 size: selectedQuantity
//             };

//             const existingItem = cart.find(item => item.id === cartItem.id);

//             if (existingItem) {
//                 existingItem.quantity += detailCounter;
//             } else {
//                 cart.push(cartItem);
//             }

//             updateCart();
            
//             // Показать уведомление
//             const btn = document.querySelector('.btn-add-to-cart-detail');
//             const originalText = btn.textContent;
//             btn.textContent = '✓ Добавлено в корзину';
//             btn.style.background = '#4CAF50';
//             setTimeout(() => {
//                 btn.textContent = originalText;
//                 btn.style.background = '';
//             }, 1500);

//             // Закрыть модальное окно через 1 секунду
//             setTimeout(() => {
//                 closeDetailModal();
//             }, 1500);
//         }

//         // Переключение избранного
//         function toggleFavorite(productId, event) {
//             event.stopPropagation();
//             const icon = event.currentTarget;
            
//             if (favorites.includes(productId)) {
//                 favorites = favorites.filter(id => id !== productId);
//                 icon.textContent = '🤍';
//                 icon.classList.remove('active');
//             } else {
//                 favorites.push(productId);
//                 icon.textContent = '❤️';
//                 icon.classList.add('active');
//             }
//         }

//         // Переключение выпадающего списка (опционально)
//             // Переключение выпадающего списка (ИСПРАВЛЕНО)
//            function toggleDropdown(productId) {
//             const product = products.find(p => p.id === productId);
//             const select = document.getElementById(`quantity-${productId}`);
//             const wrapper = select.previousElementSibling;
//             const textElement = document.getElementById(`selected-${productId}`);
//             const priceElement = wrapper.closest('.product-card').querySelector('.product-price');
            
//             document.querySelectorAll('.custom-dropdown').forEach(d => d.remove());
            
//             const dropdown = document.createElement('div');
//             dropdown.className = 'custom-dropdown';
            
//             const rect = wrapper.getBoundingClientRect();
            
//             dropdown.style.cssText = `
//                 position: fixed;
//                 top: ${rect.bottom + 5}px;
//                 left: ${rect.left}px;
//                 width: ${rect.width}px;
//                 background: white;
//                 border: 2px solid #ff4d6d;
//                 border-radius: 10px;
//                 box-shadow: 0 4px 20px rgba(0,0,0,0.15);
//                 z-index: 9999;
//                 max-height: 250px;
//                 overflow-y: auto;
//             `;
            
//             Array.from(select.options).forEach((option, index) => {
//                 const item = document.createElement('div');
//                 item.textContent = option.text;
//                 item.style.cssText = `
//                     padding: 1rem;
//                     cursor: pointer;
//                     transition: all 0.2s;
//                     ${index === select.selectedIndex ? 'background: #ffe0e5; font-weight: 600;' : ''}
//                 `;
                
//                 item.onmouseover = () => item.style.background = '#ffe0e5';
//                 item.onmouseout = () => {
//                     if (index !== select.selectedIndex) item.style.background = 'white';
//                 };
                
//                 item.onclick = () => {
//                     select.selectedIndex = index;
//                     textElement.textContent = option.text;
                    
//                     // ОБНОВЛЯЕМ ЦЕНУ
//                     const newPrice = option.dataset.price;
//                     const priceText = priceElement.childNodes[0];
//                     priceText.textContent = `${newPrice} ₽ `;
                    
//                     dropdown.remove();
//                 };
                
//                 dropdown.appendChild(item);
//             });
            
//             document.body.appendChild(dropdown);
            
//             setTimeout(() => {
//                 document.addEventListener('click', function close(e) {
//                     if (!dropdown.contains(e.target) && !wrapper.contains(e.target)) {
//                         dropdown.remove();
//                         document.removeEventListener('click', close);
//                     }
//                 });
//             }, 0);
//         }




//         // Обновление текста выбранного количества
//         document.addEventListener('change', function(e) {
//             if (e.target.tagName === 'SELECT' && e.target.id.startsWith('quantity-')) {
//                 const productId = e.target.id.split('-')[1];
//                 const selectedOption = e.target.options[e.target.selectedIndex];
//                 const textElement = document.getElementById(`selected-${productId}`);
//                 if (textElement) {
//                     textElement.textContent = selectedOption.text;
//                 }
//             }
//         });

//         // Добавление в корзину
//         function addToCart(productId) {
//             const product = products.find(p => p.id === productId);
//             const select = document.getElementById(`quantity-${productId}`);
//             const selectedOption = select.options[select.selectedIndex];
//             const selectedQuantity = selectedOption.text;
//             const selectedPrice = parseInt(selectedOption.dataset.price);

//             const cartItem = {
//                 id: `${productId}-${selectedOption.value}`,
//                 productId: productId,
//                 name: product.name,
//                 quantity: 1,
//                 price: selectedPrice,
//                 emoji: product.emoji,
//                 size: selectedQuantity
//             };

//             const existingItem = cart.find(item => item.id === cartItem.id);

//             if (existingItem) {
//                 existingItem.quantity++;
//             } else {
//                 cart.push(cartItem);
//             }

//             updateCart();
            
//             // Анимация добавления
//             const btn = event.target;
//             const originalText = btn.textContent;
//             btn.textContent = '✓ Добавлено';
//             btn.style.background = '#4CAF50';
//             setTimeout(() => {
//                 btn.textContent = originalText;
//                 btn.style.background = '';
//             }, 1000);
//         }

//         // Обновление корзины
//         function updateCart() {
//             const cartCount = document.getElementById('cartCount');
//             const cartItemsContainer = document.getElementById('cartItemsContainer');
//             const cartTotal = document.getElementById('cartTotal');

//             const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//             const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//             cartCount.textContent = totalItems;
//             cartTotal.textContent = `${totalPrice}₽`;

//             if (cart.length === 0) {
//                 cartItemsContainer.innerHTML = `
//                     <div class="empty-cart">
//                         <div class="empty-cart-icon">🛒</div>
//                         <p>Корзина пуста</p>
//                     </div>
//                 `;
//             } else {
//                 cartItemsContainer.innerHTML = cart.map(item => `
//                     <div class="cart-item">
//                         <div class="cart-item-image">${item.emoji}</div>
//                         <div class="cart-item-info">
//                             <h4>${item.name}</h4>
//                             <p style="font-size: 0.85rem; color: #999; margin-bottom: 0.3rem;">${item.size}</p>
//                             <div class="cart-item-price">${item.price}₽</div>
//                             <div class="cart-item-controls">
//                                 <button onclick="decreaseQuantity('${item.id}')">−</button>
//                                 <span class="cart-item-quantity">${item.quantity}</span>
//                                 <button onclick="increaseQuantity('${item.id}')">+</button>
//                             </div>
//                         </div>
//                         <span class="remove-item" onclick="removeFromCart('${item.id}')">×</span>
//                     </div>
//                 `).join('');
//             }
//         }

//         // Увеличить количество
//         function increaseQuantity(itemId) {
//             const item = cart.find(item => item.id === itemId);
//             if (item) {
//                 item.quantity++;
//                 updateCart();
//             }
//         }

//         // Уменьшить количество
//         function decreaseQuantity(itemId) {
//             const item = cart.find(item => item.id === itemId);
//             if (item && item.quantity > 1) {
//                 item.quantity--;
//                 updateCart();
//             }
//         }

//         // Удалить из корзины
//         function removeFromCart(itemId) {
//             cart = cart.filter(item => item.id !== itemId);
//             updateCart();
//         }

//         // Переключение корзины
//         function toggleCart() {
//             const cartModal = document.getElementById('cartModal');
//             const cartOverlay = document.getElementById('cartOverlay');
//             cartModal.classList.toggle('active');
//             cartOverlay.classList.toggle('active');
//         }

//         // Оформление заказа
//         function checkout() {
//             if (cart.length === 0) {
//                 alert('Корзина пуста!');
//                 return;
//             }

//             const orderDetails = cart.map(item => 
//                 `${item.name} (${item.size}) x${item.quantity} - ${item.price * item.quantity}₽`
//             ).join('\n');

//             const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

//             alert(`Ваш заказ:\n\n${orderDetails}\n\nИтого: ${total}₽\n\nСпасибо за заказ! Мы свяжемся с вами в ближайшее время.`);
            
//             cart = [];
//             updateCart();
//             toggleCart();
//         }

//         // Отправка формы
//         function submitOrder() {
//             const name = document.getElementById('nameInput').value;
//             const phone = document.getElementById('phoneInput').value;
//             const email = document.getElementById('emailInput').value;
//             const message = document.getElementById('messageInput').value;

//             if (!name || !phone || !email || !message) {
//                 alert('Пожалуйста, заполните все поля!');
//                 return;
//             }

//             alert(`Спасибо, ${name}! Ваше сообщение отправлено. Мы свяжемся с вами по телефону ${phone}.`);
            
//             document.getElementById('nameInput').value = '';
//             document.getElementById('phoneInput').value = '';
//             document.getElementById('emailInput').value = '';
//             document.getElementById('messageInput').value = '';
//         }

//         // Плавная прокрутка
//         document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//             anchor.addEventListener('click', function (e) {
//                 e.preventDefault();
//                 const target = document.querySelector(this.getAttribute('href'));
//                 if (target) {
//                     target.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                 }
//             });
//         });

//         // Закрытие модального окна по ESC
//         document.addEventListener('keydown', function(e) {
//             if (e.key === 'Escape') {
//                 closeDetailModal();
//             }
//         });

//         // Инициализация
//         renderProducts();
//  