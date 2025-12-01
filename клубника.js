
// Данные продуктов
const products = [
    {
        id: 1,
        name: 'Набор "Сладкая девочка"',
        description: 'На фото размер L (55-57ягод)',
        fullDescription: 'Набор "Сладкая девочка" - идеальный выбор. Каждая сочная клубника обволакивается нежным белым и молочным Бельгийским шоколадом, украшается кокосовой стружкой.  Подарите своим близким незабываемые моменты.',
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
        name: 'Набор "Клубничная драма"',
        description: 'Клубника с сердцечками',
        fullDescription: 'Идеальный подарок для любителей изысканных десертов.',
        price: 2890,
        image: '3.jpg',
        composition: 'Клубника, шоколад, декор',
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
        name: 'Набор "Страсть пополам"',
        description: 'В подарочной коробке с декором',
        fullDescription: 'Романтический набор из клубники в шоколаде, оформленный в элегантной подарочной коробке. Идеален для признаний в любви.',
        price: 2200,
        image: '6.jpg',
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
        fullDescription: 'Праздничный набор с уникальным дизайном под ваш заказ. Возможно оформление под любую тематику.',
        price: 4200,
        image: '5.jpg',
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
// Загрузка корзины из localStorage
let cart = [];
const savedCart = localStorage.getItem('cart');
if (savedCart) {
    try {
        cart = JSON.parse(savedCart);
        updateCart(); // Обновляем отображение корзины
    } catch (error) {
        console.error('Ошибка загрузки корзины:', error);
        cart = [];
    }
}

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

    // ОБРАБОТЧИК для селектора
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

    // Удаляем старые dropdown, если есть
    document.querySelectorAll('.custom-dropdown').forEach(d => d.remove());

    // Если уже был открыт и мы кликнули снова — закрываем (удаление уже произошло выше)
    // Можно добавить проверку, если нужно переключение, но пока оставим простую логику "пересоздания"
    
    // Создаём кастомный dropdown
    const dropdown = document.createElement('div');
    dropdown.className = 'custom-dropdown';

    const rect = wrapper.getBoundingClientRect();

    // Задаем ТОЛЬКО позиционирование. Всё остальное (цвета, рамки) берем из CSS
    // Важно: используем absolute относительно документа или fixed, но с правильными координатами
    dropdown.style.position = 'fixed'; 
    dropdown.style.top = (rect.bottom + 5) + 'px';
    dropdown.style.left = rect.left + 'px';
    dropdown.style.width = rect.width + 'px';
    
    // Остальные стили убраны, они подтянутся из CSS класса .custom-dropdown

    // Заполняем опциями
    Array.from(select.options).forEach(option => {
        const item = document.createElement('div');
        item.textContent = option.text;
        item.onclick = function() {
            select.value = option.value;
            select.dispatchEvent(new Event('change')); // Триггерим изменение
            
            // Обновляем текст в селекте
            const selectedTextDiv = document.getElementById('detailSelectedText');
            if (selectedTextDiv) selectedTextDiv.textContent = option.text;
            
            dropdown.remove(); // Закрываем
        };
        dropdown.appendChild(item);
    });

    // Добавляем в body, чтобы не зависеть от overflow родителя
    document.body.appendChild(dropdown);

    // Закрытие при клике вне
    setTimeout(() => {
        document.addEventListener('click', function closeDropdown(e) {
            if (!dropdown.contains(e.target) && !wrapper.contains(e.target)) {
                dropdown.remove();
                document.removeEventListener('click', closeDropdown);
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

// Обновление итоговой цены
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

// // Переключение выпадающего списка
// function toggleDropdown(productId) {
//     const product = products.find(p => p.id === productId);
//     const select = document.getElementById(`quantity-${productId}`);
//     const wrapper = select.previousElementSibling;
//     const textElement = document.getElementById(`selected-${productId}`);
//     const priceElement = wrapper.closest('.product-card').querySelector('.product-price');
    
//     document.querySelectorAll('.custom-dropdown').forEach(d => d.remove());
    
//     const dropdown = document.createElement('div');
//     dropdown.className = 'custom-dropdown';
    
//     const rect = wrapper.getBoundingClientRect();
    
//     dropdown.style.cssText = `
//         position: fixed;
//         top: ${rect.bottom + 5}px;
//         left: ${rect.left}px;
//         width: ${rect.width}px;
//         background: white;
//         border: 2px solid #ff4d6d;
//         border-radius: 10px;
//         box-shadow: 0 4px 20px rgba(0,0,0,0.15);
//         z-index: 9999;
//         max-height: 250px;
//         overflow-y: auto;
//     `;
    
//     Array.from(select.options).forEach((option, index) => {
//         const item = document.createElement('div');
//         item.textContent = option.text;
//         item.style.cssText = `
//             padding: 1rem;
//             cursor: pointer;
//             transition: all 0.2s;
//             ${index === select.selectedIndex ? 'background: #ffe0e5; font-weight: 600;' : ''}
//         `;
        
//         item.onmouseover = () => item.style.background = '#ffe0e5';
//         item.onmouseout = () => {
//             if (index !== select.selectedIndex) item.style.background = 'white';
//         };
        
//         item.onclick = () => {
//             select.selectedIndex = index;
//             textElement.textContent = option.text;
            
//             // ОБНОВЛЯЕМ ЦЕНУ
//             const newPrice = option.dataset.price;
//             const priceText = priceElement.childNodes[0];
//             priceText.textContent = `${newPrice} ₽ `;
            
//             dropdown.remove();
//         };
        
//         dropdown.appendChild(item);
//     });
    
//     document.body.appendChild(dropdown);
    
//     setTimeout(() => {
//         document.addEventListener('click', function close(e) {
//             if (!dropdown.contains(e.target) && !wrapper.contains(e.target)) {
//                 dropdown.remove();
//                 document.removeEventListener('click', close);
//             }
//         });
//     }, 0);
// }



// Функция для выпадающего списка в КАТАЛОГЕ (карточки товаров)
function toggleDropdown(id) {
    const card = document.querySelector(`.product-card button[onclick="addToCart(${id})"]`).closest('.product-card');
    const select = card.querySelector('select');
    const wrapper = card.querySelector('.select-with-icon');
    
    // Закрываем другие открытые списки
    document.querySelectorAll('.custom-dropdown').forEach(d => d.remove());

    const dropdown = document.createElement('div');
    dropdown.className = 'custom-dropdown'; // Используем наш класс с темными стилями

    const rect = wrapper.getBoundingClientRect();

    // Задаем ТОЛЬКО позицию. Цвета и стили берутся из CSS (.custom-dropdown)
    // Используем absolute относительно документа + scrollY, чтобы при прокрутке список не уезжал
    dropdown.style.position = 'absolute';
    dropdown.style.top = (rect.bottom + window.scrollY + 5) + 'px'; 
    dropdown.style.left = (rect.left + window.scrollX) + 'px';
    dropdown.style.width = rect.width + 'px';
    
    // Если position:absolute работает некорректно из-за родительских блоков, можно попробовать fixed:
    // dropdown.style.position = 'fixed';
    // dropdown.style.top = (rect.bottom + 5) + 'px';
    // dropdown.style.left = rect.left + 'px';

    Array.from(select.options).forEach(option => {
        const item = document.createElement('div');
        item.textContent = option.text;
        
        // Логика клика по элементу списка
        item.onclick = function() {
            select.value = option.value;
            // Обновляем текст и иконку в карточке
            const textDiv = card.querySelector('.select-text');
            if(textDiv) textDiv.textContent = option.text;

            // Если нужно менять иконку (опционально)
            const iconDiv = card.querySelector('.select-icon img');
            // Здесь можно добавить логику смены картинки, если у options есть data-icon
            
            dropdown.remove();
        };
        dropdown.appendChild(item);
    });

    document.body.appendChild(dropdown);

    // Закрытие при клике вне
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
        localStorage.setItem('cart', JSON.stringify(cart));
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



// document.getElementById('checkoutForm').onsubmit = function(e) {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const contact = form.contact.value;  // ← ИЗМЕНИЛИ
//     const date = form.date.value;
//     const address = form.address.value;
    
//     let orderDetails = cart.map(item =>
//         `${item.name} (${item.size}) x${item.quantity} - ${item.price*item.quantity}₽`
//     ).join('\n');
//     let total = cart.reduce((sum,item)=>sum+item.price*item.quantity, 0);

//     const botToken = '7949643409:AAGmGqoAS2DR0tSYyesvNkpGidaRyCSOU9Q';
//     const chatId = '530003189';

//     const message = `🛒 Новый заказ!\n\n${orderDetails}\n\nИмя: ${name}\nКонтакт: ${contact}\nДата доставки: ${date}\nАдрес: ${address}\n💰 Итого: ${total}₽`;

//     fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
//         method: 'POST',
//         headers: {'Content-Type':'application/json'},
//         body: JSON.stringify({ chat_id: chatId, text: message })
//     })
//     .then(resp=>resp.json())
//     .then(data=>{
//         if (data.ok) {
//             alert('Заказ отправлен! Мы свяжемся с вами.');
//             cart = [];
//             localStorage.removeItem('cart'); // ОЧИЩАЕМ LOCALSTORAGE
//             updateCart();
//             closeCheckoutModal();
//             toggleCart();
//         }
//                     updateCart();
//             closeCheckoutModal();
//             toggleCart();
//         } else {
//             alert('Ошибка отправки заказа. Проверь chat_id/token!');
//             console.log(data);
//         }
//     })
//     .catch(err=>{
//         alert('Ошибка: заказ не отправлен. См. консоль.');
//         console.error(err);
//     });
// };


// document.getElementById('checkoutForm').onsubmit = async function(e) {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value;
//     const contact = form.contact.value;
//     const date = form.date.value;
//     const address = form.address.value;
    
//     if (!name || !contact || !date || !address) {
//         alert('Заполните все поля!');
//         return;
//     }
    
//     let orderDetails = cart.map(item =>
//         `${item.name} (${item.size}) x${item.quantity} - ${item.price*item.quantity}₽`
//     ).join('\n');
//     let total = cart.reduce((sum,item)=>sum+item.price*item.quantity, 0);

//     // Показываем индикатор загрузки
//     const submitBtn = form.querySelector('button[type="submit"]');
//     const originalText = submitBtn.textContent;
//     submitBtn.textContent = 'Отправка...';
//     submitBtn.disabled = true;

//     try {
//         const response = await fetch('https://muddy-feather-8439.nastyadelonge554.workers.dev', {
//             method: 'POST',
//             headers: { 
//                 'Content-Type': 'application/json',
//                 'Accept': 'application/json'
//             },
//             body: JSON.stringify({ 
//                 name, 
//                 contact, 
//                 date, 
//                 address, 
//                 orderDetails, 
//                 total 
//             })
//         });

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
        
//         if (data.ok) {
//             alert('✅ Заказ отправлен! Мы свяжемся с вами.');
//             cart = [];
//             localStorage.removeItem('cart');
//             updateCart();
//             closeCheckoutModal();
//             toggleCart();
//         } else {
//             throw new Error(data.error || 'Ошибка отправки заказа');
//         }
//     } catch (error) {
//         console.error('Ошибка:', error);
//         alert('❌ Ошибка отправки заказа. Попробуйте ещё раз или свяжитесь с нами напрямую.');
//     } finally {
//         submitBtn.textContent = originalText;
//         submitBtn.disabled = false;
//     }
// };
function openCheckoutModal() {
    if (cart.length === 0) {
        alert('Корзина пуста!');
        return;
    }
    // Закрываем корзину (убираем класс .active)
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
        `${item.name} (${item.size}) x${item.quantity} - ${item.price*item.quantity}₽`
    ).join('\n');
    let total = cart.reduce((sum,item)=>sum+item.price*item.quantity, 0);

    // ОТПРАВКА ЧЕРЕЗ WORKER
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


document.getElementById('contactSubmitBtn').onclick = async function() {
    const name = document.getElementById('nameInput').value.trim();
    const contact = document.getElementById('contactInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();

    // Валидация имени
    const nameIsValid = /^[a-zA-Zа-яА-ЯёЁ\s\-]{2,30}$/.test(name);
    if(!nameIsValid) {
        alert('Введите корректное имя');
        return;
    }

    // Проверка контакта
    if (!contact) {
        alert('Введите телефон или Telegram для связи!');
        return;
    }

    // Валидация email
    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Введите корректный email!');
        return;
    }

    // // Проверка сообщения
    // if (!message) {
    //     alert('Введите ваше сообщение!');
    //     return;
    // }

       // Проверка на заполненность
    if (!name || !contact) {
        alert('Пожалуйста, заполните имя и контакты!');
        return;
    }

    // ОТПРАВКА ЧЕРЕЗ WORKER
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
}

function clearContactForm() {
    document.getElementById('nameInput').value = '';
    document.getElementById('contactInput').value = '';
    document.getElementById('emailInput').value = '';
    document.getElementById('messageInput').value = '';
}







