// Данные продуктов:
const products = [
    // 1. Сладкая девочка — больше белого/розового
    {
        id: 1,
        name: 'Набор "Сладкая девочка"',
        description: 'На фото размер 9 ягод',
        fullDescription: 'Набор "Сладкая девочка" - идеальный выбор. Каждая сочная клубника обволакивается нежным белым и розовым шоколадом, украшается кокосовой стружкой.',
        image: '12.JPG',
        composition: 'Клубника, белый и розовый шоколад, кокосовая стружка, посыпка шарики',
        sizes: '6 ягод | 8 ягод | 9 ягод | 12 ягод | 16 ягод | 18 ягод | 24 ягоды | 27 ягоды',
        quantities: [
            { label: '6 ягод',  value: '6',  price: 397000 },
            { label: '8 ягод',  value: '8',  price: 529000 },
            { label: '9 ягод',  value: '9',  price: 595000 },
            { label: '12 ягод', value: '12', price: 793000 },
            { label: '16 ягод', value: '16', price: 1057000 },
            { label: '18 ягод', value: '18', price: 1190000 },
            { label: '24 ягоды', value: '24', price: 1586000 },
            { label: '27 ягоды', value: '27', price: 1784000 }
        ]
    },

    // 2. Golden Strawberry — больше молочного
    {
        id: 2,
        name: 'Набор "Golden Strawberry"',
        description: 'На фото размер 9 ягод',
        fullDescription: 'Эксклюзивный набор клубники, покрытой белым и молочным шоколадом с добавлением съедобного золота.',
        image: '14.JPG',
        composition: 'Клубника, молочный шоколад, белый шоколад, пищевое золото',
        sizes: '6 ягод | 8 ягод | 9 ягод | 12 ягод | 16 ягод | 18 ягод | 24 ягоды | 27 ягоды',
        quantities: [
            { label: '6 ягод',  value: '6',  price: 372000 },
            { label: '8 ягод',  value: '8',  price: 497000 },
            { label: '9 ягод',  value: '9',  price: 559000 },
            { label: '12 ягод', value: '12', price: 745000 },
            { label: '16 ягод', value: '16', price: 993000 },
            { label: '18 ягод', value: '18', price: 1117000 },
            { label: '24 ягоды', value: '24', price: 1490000 },
            { label: '27 ягоды', value: '27', price: 1676000 }
        ]
    },

    // 3. Клубничная драма — микс, берём «среднюю» между milk и white
    {
        id: 3,
        name: 'Набор "Клубничная драма"',
        description: 'На фото размер 12 ягод',
        fullDescription: 'Идеальный подарок для любителей изысканных десертов с миксом тёмного, молочного, белого и розового шоколада.',
        image: '15.JPG',
        composition: 'Клубника, тёмный шоколад, молочный шоколад, белый шоколад, розовый шоколад, декор',
        sizes: '6 ягод | 8 ягод | 9 ягод | 12 ягод | 16 ягод | 18 ягод | 24 ягоды | 27 ягоды',
        quantities: [
            { label: '6 ягод',  value: '6',  price: 385000 },
            { label: '8 ягод',  value: '8',  price: 513000 },
            { label: '9 ягод',  value: '9',  price: 577000 },
            { label: '12 ягод', value: '12', price: 771000 },
            { label: '16 ягод', value: '16', price: 1025000 },
            { label: '18 ягод', value: '18', price: 1153000 },
            { label: '24 ягоды', value: '24', price: 1538000 },
            { label: '27 ягоды', value: '27', price: 1730000 }
        ]
    },

    // 4. Люкс — много тёмного шоколада
    {
        id: 4,
        name: 'Набор "Люкс"',
        description: 'На фото размер 9 ягод',
        fullDescription: 'Премиальный набор с клубникой, покрытой тёмным и молочным шоколадом и украшенной орехами, кокосом и золотой посыпкой.',
        image: '17.JPG',
        composition: 'Клубника, тёмный шоколад, молочный шоколад, кокосовая стружка, золотая посыпка',
        sizes: '6 ягод | 8 ягод | 9 ягод | 12 ягод | 16 ягод | 18 ягод | 24 ягоды | 27 ягоды',
        quantities: [
            { label: '6 ягод',  value: '6',  price: 373000 },
            { label: '8 ягод',  value: '8',  price: 498000 },
            { label: '9 ягод',  value: '9',  price: 560000 },
            { label: '12 ягод', value: '12', price: 747000 },
            { label: '16 ягод', value: '16', price: 996000 },
            { label: '18 ягод', value: '18', price: 1120000 },
            { label: '24 ягоды', value: '24', price: 1493000 },
            { label: '27 ягоды', value: '27', price: 1680000 }
        ]
    },

    // 5. Страсть пополам — ближе к milk
    {
        id: 5,
        name: 'Набор "Страсть пополам"',
        description: 'На фото размер 9 ягод',
        fullDescription: 'Набор из клубники в молочном и белом шоколаде с посыпкой и печеньем.',
        image: '13.JPG',
        composition: 'Клубника, молочный шоколад, белый шоколад, печенье, розовый декор',
        sizes: '6 ягод | 8 ягод | 9 ягод | 12 ягод | 16 ягод | 18 ягод | 24 ягоды | 27 ягоды',
        quantities: [
            { label: '6 ягод',  value: '6',  price: 372000 },
            { label: '8 ягод',  value: '8',  price: 497000 },
            { label: '9 ягод',  value: '9',  price: 559000 },
            { label: '12 ягод', value: '12', price: 745000 },
            { label: '16 ягод', value: '16', price: 993000 },
            { label: '18 ягод', value: '18', price: 1117000 },
            { label: '24 ягоды', value: '24', price: 1490000 },
            { label: '27 ягоды', value: '27', price: 1676000 }
        ]
    },

    // 6. Райское наслаждение — микс dark + milk
    {
        id: 6,
        name: 'Набор "Райское наслаждение"',
        description: 'На фото размер 9 ягод',
        fullDescription: 'Сочетание сочной клубники с нежным тёмным и молочным шоколадом, украшенной кокосовой стружкой.',
        image: '16.JPG',
        composition: 'Клубника, молочный шоколад, тёмный шоколад, кокосовая стружка',
        sizes: '6 ягод | 8 ягод | 9 ягод | 12 ягод | 16 ягод | 18 ягод | 24 ягоды | 27 ягоды',
        quantities: [
            { label: '6 ягод',  value: '6',  price: 373000 },
            { label: '8 ягод',  value: '8',  price: 498000 },
            { label: '9 ягод',  value: '9',  price: 560000 },
            { label: '12 ягод', value: '12', price: 747000 },
            { label: '16 ягод', value: '16', price: 996000 },
            { label: '18 ягод', value: '18', price: 1120000 },
            { label: '24 ягоды', value: '24', price: 1493000 },
            { label: '27 ягоды', value: '27', price: 1680000 }
        ]
    },

    // 7. Шоколадная симфония — белый + розовый + молочный
    {
        id: 7,
        name: 'Набор "Шоколадная симфония"',
        description: 'На фото размер 9 ягод',
        fullDescription: 'Изящная коллекция клубники в белом и молочном шоколаде с разными видами декора: от воздушной кокосовой стружки до нежных сахарных жемчужин и золотых акцентов.',
        image: '11.JPG',
        composition: 'Клубника, белый шоколад, молочный шоколад, кокосовая стружка, посыпка шарики, золото',
        sizes: '6 ягод | 8 ягод | 9 ягод | 12 ягод | 16 ягод | 18 ягод | 24 ягоды | 27 ягоды',
        quantities: [
            { label: '6 ягод',  value: '6',  price: 385000 },
            { label: '8 ягод',  value: '8',  price: 513000 },
            { label: '9 ягод',  value: '9',  price: 583000 },
            { label: '12 ягод', value: '12', price: 771000 },
            { label: '16 ягод', value: '16', price: 1025000 },
            { label: '18 ягод', value: '18', price: 1153000 },
            { label: '24 ягоды', value: '24', price: 1538000 },
            { label: '27 ягоды', value: '27', price: 1730000 }
        ]
    },

    // 8. Классика — dark + white + немного gold
    {
        id: 8,
        name: 'Набор "Классика"',
        description: 'На фото размер 9 ягод',
        fullDescription: 'Набор из ягод в тёмном, молочном и белом шоколаде с аккуратным декором и золотым акцентом.',
        image: '18.JPG',
        composition: 'Клубника, тёмный шоколад, белый шоколад, молочный шоколад, золотая посыпка',
        sizes: '6 ягод | 8 ягод | 9 ягод | 12 ягод | 16 ягод | 18 ягод | 24 ягоды | 27 ягоды',
        quantities: [
            { label: '6 ягод',  value: '6',  price: 385000 },
            { label: '8 ягод',  value: '8',  price: 513000 },
            { label: '9 ягод',  value: '9',  price: 571000 },
            { label: '12 ягод', value: '12', price: 761000 },
            { label: '16 ягод', value: '16', price: 1011000 },
            { label: '18 ягод', value: '18', price: 1138000 },
            { label: '24 ягоды', value: '24', price: 1515000 },
            { label: '27 ягоды', value: '27', price: 1707000 }
        ]
    }
];

// ===== КОРЗИНА И ОБЩИЕ ПЕРЕМЕННЫЕ =====
let cart = [];
const savedCart = localStorage.getItem('cart');
if (savedCart) {
    try {
        cart = JSON.parse(savedCart);
        updateCart();
    } catch (error) {
        console.error('Ошибка загрузки корзины:', error);
        cart = [];
    }
}

let favorites = [];
let currentDetailProduct = null;
let detailCounter = 1;

// Форматирование цен с разделителями
function formatPrice(value) {
    return value.toLocaleString('ru-RU'); // 1 493 000
}

// ===== ОТРИСОВКА ТОВАРОВ НА ГЛАВНОЙ =====
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
                    ${formatPrice(product.quantities[0].price)} ₫
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
                            <option value="${q.value}" data-price="${q.price}">
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

// ===== МОДАЛКА ТОВАРА =====
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    currentDetailProduct = product;
    detailCounter = 1;

    document.getElementById('detailModalImage').innerHTML =
        `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">`;
    document.getElementById('detailModalTitle').textContent = product.name;
    document.getElementById('detailModalPrice').textContent =
        `${formatPrice(product.quantities[0].price)} ₫`;
    document.getElementById('detailDescription').textContent = product.fullDescription;
    document.getElementById('detailSizes').innerHTML =
        product.sizes + '<br>Точное количество ягод зависит от размера ягоды';
    document.getElementById('detailComposition').textContent = product.composition;
    document.getElementById('detailSelectIcon').innerHTML =
        `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 5px;">`;
    document.getElementById('detailSelectedText').textContent = product.quantities[0].label;
    document.getElementById('detailCounter').textContent = '1';

    const favBtn = document.getElementById('detailFavoriteBtn');
    if (favorites.includes(productId)) {
        favBtn.textContent = '❤️';
        favBtn.classList.add('active');
    } else {
        favBtn.textContent = '🤍';
        favBtn.classList.remove('active');
    }

    const select = document.getElementById('detailQuantitySelect');
    select.innerHTML = product.quantities.map((q, index) => `
        <option value="${q.value}" data-price="${q.price}" ${index === 0 ? 'selected' : ''}>
            ${q.label}
        </option>
    `).join('');

    select.onchange = function() {
        const selectedOption = this.options[this.selectedIndex];
        document.getElementById('detailSelectedText').textContent = selectedOption.text;
        detailCounter = 1;
        document.getElementById('detailCounter').textContent = '1';
        updateDetailTotalPrice();
    };

    document.getElementById('productDetailModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeDetailModal() {
    document.getElementById('productDetailModal').classList.remove('active');
    document.body.style.overflow = 'auto';
    currentDetailProduct = null;
}

function closeDetailModalOnOverlay(event) {
    if (event.target.id === 'productDetailModal') {
        closeDetailModal();
    }
}

// Кастомный dropdown в модалке
function toggleDetailDropdown() {
    const select = document.getElementById('detailQuantitySelect');
    const wrapper = document.querySelector('.detail-select-with-icon');

    document.querySelectorAll('.custom-dropdown').forEach(d => d.remove());

    const dropdown = document.createElement('div');
    dropdown.className = 'custom-dropdown';

    const rect = wrapper.getBoundingClientRect();
    dropdown.style.position = 'fixed';
    dropdown.style.top = (rect.bottom + 5) + 'px';
    dropdown.style.left = rect.left + 'px';
    dropdown.style.width = rect.width + 'px';

    Array.from(select.options).forEach(option => {
        const item = document.createElement('div');
        item.textContent = option.text;
        item.onclick = function() {
            select.value = option.value;
            select.dispatchEvent(new Event('change'));

            const selectedTextDiv = document.getElementById('detailSelectedText');
            if (selectedTextDiv) selectedTextDiv.textContent = option.text;

            dropdown.remove();
        };
        dropdown.appendChild(item);
    });

    document.body.appendChild(dropdown);

    setTimeout(() => {
        document.addEventListener('click', function closeDropdown(e) {
            if (!dropdown.contains(e.target) && !wrapper.contains(e.target)) {
                dropdown.remove();
                document.removeEventListener('click', closeDropdown);
            }
        });
    }, 0);
}

// Счётчик в модалке
function increaseDetailCounter() {
    detailCounter++;
    document.getElementById('detailCounter').textContent = detailCounter;
    updateDetailTotalPrice();
}

function decreaseDetailCounter() {
    if (detailCounter > 1) {
        detailCounter--;
        document.getElementById('detailCounter').textContent = detailCounter;
        updateDetailTotalPrice();
    }
}

// Пересчёт цены в модалке
function updateDetailTotalPrice() {
    const select = document.getElementById('detailQuantitySelect');
    const selectedOption = select.options[select.selectedIndex];
    const basePrice = parseInt(selectedOption.dataset.price);
    const totalPrice = basePrice * detailCounter;

    document.getElementById('detailModalPrice').textContent =
        `${formatPrice(totalPrice)} ₫`;
}

// Избранное в модалке
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

    renderProducts();
}

// Добавление в корзину из модалки
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

    const btn = document.querySelector('.btn-add-to-cart-detail');
    const originalText = btn.textContent;
    btn.textContent = '✓ Добавлено в корзину';
    btn.style.background = '#4CAF50';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1500);

    setTimeout(() => {
        closeDetailModal();
    }, 1500);
}

// ===== ИЗБРАННОЕ НА КАРТОЧКАХ =====
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

// ===== КАСТОМНЫЙ ДРОПДАУН НА ГЛАВНОЙ (КАРТОЧКИ) =====
function toggleDropdown(id) {
    const card = document.querySelector(`.product-card button[onclick="addToCart(${id})"]`).closest('.product-card');
    const select = card.querySelector('select');
    const wrapper = card.querySelector('.select-with-icon');
    const priceElement = card.querySelector('.product-price');

    document.querySelectorAll('.custom-dropdown').forEach(d => d.remove());

    const dropdown = document.createElement('div');
    dropdown.className = 'custom-dropdown';

    const rect = wrapper.getBoundingClientRect();
    dropdown.style.position = 'absolute';
    dropdown.style.top = (rect.bottom + window.scrollY + 5) + 'px';
    dropdown.style.left = (rect.left + window.scrollX) + 'px';
    dropdown.style.width = rect.width + 'px';

    Array.from(select.options).forEach(option => {
        const item = document.createElement('div');
        item.textContent = option.text;

        item.onclick = function() {
            select.value = option.value;

            const textDiv = card.querySelector('.select-text');
            if (textDiv) textDiv.textContent = option.text;

            const newPrice = parseInt(option.dataset.price);
            priceElement.textContent = `${formatPrice(newPrice)} ₫`;

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

// ===== КОРЗИНА =====
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

    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Добавлено';
    btn.style.background = '#4CAF50';
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 1000);
}

function updateCart() {
    const cartCount = document.getElementById('cartCount');
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = `${formatPrice(totalPrice)}₫`;

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
                    <div class="cart-item-price">${formatPrice(item.price)}₫</div>
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
    localStorage.setItem('cart', JSON.stringify(cart));
}

function increaseQuantity(itemId) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity++;
        updateCart();
    }
}

function decreaseQuantity(itemId) {
    const item = cart.find(item => item.id === itemId);
    if (item && item.quantity > 1) {
        item.quantity--;
        updateCart();
    }
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCart();
}

function toggleCart() {
    const cartModal = document.getElementById('cartModal');
    const cartOverlay = document.getElementById('cartOverlay');
    cartModal.classList.toggle('active');
    cartOverlay.classList.toggle('active');
}

// ===== ФОРМА ОБРАТНОЙ СВЯЗИ (НЕ ЗАКАЗ) =====
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

// ===== ПРОКРУТКА, ESC, ЧЕК-АУТ, КОНТАКТЫ =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeDetailModal();
    }
});

// Инициализация каталога
renderProducts();

// Модалка оформления заказа
function openCheckoutModal() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    document.querySelector('.cart-modal').classList.remove('active');
    document.querySelector('.cart-overlay').classList.remove('active');

    document.getElementById('checkoutModal').style.display = 'flex';
    document.getElementById('checkoutOverlay').style.display = 'block';
}

function closeCheckoutModal() {
    document.getElementById('checkoutModal').style.display = 'none';
    document.getElementById('checkoutOverlay').style.display = 'none';
}

document.getElementById('checkoutForm').onsubmit = async function(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const contact = form.contact.value;
    const date = form.date.value;
    const address = form.address.value;

    let orderDetails = cart.map(item =>
        `${item.name} (${item.size}) x${item.quantity} - ${formatPrice(item.price*item.quantity)}₫`
    ).join('\n');
    let total = cart.reduce((sum,item)=>sum+item.price*item.quantity, 0);

    try {
        const response = await fetch('https://muddy-feather-8439.nastyadelonge554.workers.dev', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                contact,
                date,
                address,
                orderDetails,
                total
            })
        });

        const data = await response.json();

        if (data.ok) {
            alert('Заказ отправлен! Мы свяжемся с вами.');
            cart = [];
            localStorage.removeItem('cart');
            updateCart();
            closeCheckoutModal();
            toggleCart();
        } else {
            alert(data.error || 'Ошибка отправки заказа!');
        }
    } catch (error) {
        alert('Ошибка: заказ не отправлен.');
        console.error(error);
    }
};

// Нижняя контактная форма
document.getElementById('contactSubmitBtn').onclick = async function() {
    const name = document.getElementById('nameInput').value.trim();
    const contact = document.getElementById('contactInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();

    const nameIsValid = /^[a-zA-Zа-яА-ЯёЁ\s\-]{2,30}$/.test(name);
    if(!nameIsValid) {
        alert('Введите корректное имя');
        return;
    }

    if (!contact) {
        alert('Введите телефон или Telegram для связи!');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Введите корректный email!');
        return;
    }

    if (!name || !contact) {
        alert('Пожалуйста, заполните имя и контакты!');
        return;
    }

    try {
        const response = await fetch('https://muddy-feather-8439.nastyadelonge554.workers.dev', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, contact, email, message })
        });

        const data = await response.json();

        if (data.ok) {
            alert('Спасибо! Ваше сообщение отправлено 😊');
            clearContactForm();
        } else {
            alert(data.error || 'Ошибка отправки сообщения!');
        }
    } catch (error) {
        alert('Ошибка сети. Попробуйте позже!');
        console.error(error);
    }
};

function clearContactForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('contactInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('messageInput').value = '';
}












