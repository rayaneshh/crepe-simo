const menuData = [
    {
        id: 1,
        name: "Nutella",
        category: "crepes-sucrees",
        price: 17,
        description: "Crêpe sucrée avec pâte à tartiner Nutella",
        image: "/img_1934.png"
    },
    {
        id: 2,
        name: "Oreo",
        category: "crepes-sucrees",
        price: 20,
        description: "Crêpe sucrée avec biscuits Oreo écrasés",
        image: "/img_1934.png"
    },
    {
        id: 3,
        name: "Banane",
        category: "crepes-sucrees",
        price: 20,
        description: "Crêpe sucrée avec banane fraîche",
        image: "/img_1934.png"
    },
    {
        id: 4,
        name: "Lotus",
        category: "crepes-sucrees",
        price: 28,
        description: "Crêpe sucrée avec crème Lotus",
        image: "/img_1934.png"
    },
    {
        id: 5,
        name: "Caramel",
        category: "crepes-sucrees",
        price: 20,
        description: "Crêpe sucrée avec sauce caramel",
        image: "/img_1934.png"
    },
    {
        id: 6,
        name: "Citron - Crème Citron",
        category: "crepes-sucrees",
        price: 20,
        description: "Crêpe sucrée avec crème au citron",
        image: "/img_1934.png"
    },
    {
        id: 7,
        name: "Kinder - Crème Kinder",
        category: "crepes-sucrees",
        price: 30,
        description: "Crêpe sucrée avec crème Kinder",
        image: "/img_1934.png"
    },
    {
        id: 8,
        name: "Pistache Nutella",
        category: "crepes-sucrees",
        price: 30,
        description: "Crêpe avec crème pistache et Nutella",
        image: "/img_1934.png"
    },
    {
        id: 9,
        name: "Pistache et Konafa",
        category: "crepes-sucrees",
        price: 35,
        description: "Crêpe avec crème pistache et konafa",
        image: "/img_1934.png"
    },
    {
        id: 10,
        name: "Fruits Secs",
        category: "crepes-sucrees",
        price: 35,
        description: "Crêpe avec mélange de fruits secs",
        image: "/img_1934.png"
    },
    {
        id: 11,
        name: "Miel au Noix",
        category: "crepes-sucrees",
        price: 20,
        description: "Crêpe avec miel et noix",
        image: "/img_1934.png"
    },
    {
        id: 12,
        name: "Caramel Noisettes",
        category: "crepes-sucrees",
        price: 20,
        description: "Crêpe avec caramel et noisettes",
        image: "/img_1934.png"
    },
    {
        id: 13,
        name: "Amlou",
        category: "crepes-sucrees",
        price: 20,
        description: "Crêpe avec pâte Amlou traditionnelle",
        image: "/img_1934.png"
    },
    {
        id: 14,
        name: "Nutella Brownie",
        category: "crepes-sucrees",
        price: 35,
        description: "Crêpe avec Nutella et brownies",
        image: "/img_1934.png"
    },
    {
        id: 15,
        name: "Ferrero Rocher",
        category: "crepes-sucrees",
        price: 30,
        description: "Crêpe avec Ferrero Rocher",
        image: "/img_1934.png"
    },
    {
        id: 16,
        name: "Dutch Pancake",
        category: "crepes-sucrees",
        price: 17,
        description: "Pancake hollandais moelleux",
        image: "/img_1934.png"
    },
    {
        id: 17,
        name: "Crêpe Salée",
        category: "crepes-salees",
        price: 40,
        description: "Champignon, charcuterie, fromage, sauce béchamel, sauce bravo",
        image: "/img_1934.png"
    },
    {
        id: 18,
        name: "Crêpe Salée Dinde",
        category: "crepes-salees",
        price: 45,
        description: "Dinde, champignon, charcuterie, fromage, sauce béchamel, sauce bravo",
        image: "/img_1934.png"
    },
    {
        id: 19,
        name: "Crêpe Mixte",
        category: "crepes-sucrees",
        price: 45,
        description: "Nutella, Banane, Oreo, Lotus",
        image: "/img_1934.png"
    },
    {
        id: 20,
        name: "Crêpe Mixte Complète",
        category: "crepes-sucrees",
        price: 55,
        description: "Nutella, Banane, Oreo, Lotus, Kitkat, Fruits Secs, Kinder",
        image: "/img_1934.png"
    },
    {
        id: 21,
        name: "Crêpe SIMO",
        category: "crepes-sucrees",
        price: 65,
        description: "La spécialité maison complète",
        image: "/img_1934.png"
    },
    {
        id: 22,
        name: "Gaufre Nutella",
        category: "gaufres",
        price: 20,
        description: "Gaufre croustillante avec Nutella",
        image: "/img_1934.png"
    },
    {
        id: 23,
        name: "Gaufre Oreo",
        category: "gaufres",
        price: 23,
        description: "Gaufre croustillante avec Oreo",
        image: "/img_1934.png"
    },
    {
        id: 24,
        name: "Gaufre Banane",
        category: "gaufres",
        price: 23,
        description: "Gaufre croustillante avec banane",
        image: "/img_1934.png"
    },
    {
        id: 25,
        name: "Gaufre Lotus",
        category: "gaufres",
        price: 30,
        description: "Gaufre croustillante avec crème Lotus",
        image: "/img_1934.png"
    },
    {
        id: 26,
        name: "Gaufre Caramel",
        category: "gaufres",
        price: 20,
        description: "Gaufre croustillante avec sauce caramel",
        image: "/img_1934.png"
    },
    {
        id: 27,
        name: "Gaufre Citron",
        category: "gaufres",
        price: 25,
        description: "Gaufre croustillante avec crème citron",
        image: "/img_1934.png"
    },
    {
        id: 28,
        name: "Gaufre Kinder",
        category: "gaufres",
        price: 30,
        description: "Gaufre croustillante avec crème Kinder",
        image: "/img_1934.png"
    },
    {
        id: 29,
        name: "Gaufre Pistache Nutella",
        category: "gaufres",
        price: 30,
        description: "Gaufre avec pistache et Nutella",
        image: "/img_1934.png"
    },
    {
        id: 30,
        name: "Gaufre Pistache Konafa",
        category: "gaufres",
        price: 40,
        description: "Gaufre avec pistache et konafa",
        image: "/img_1934.png"
    },
    {
        id: 31,
        name: "Gaufre Fruits Secs",
        category: "gaufres",
        price: 30,
        description: "Gaufre avec fruits secs",
        image: "/img_1934.png"
    },
    {
        id: 32,
        name: "Gaufre Miel au Noix",
        category: "gaufres",
        price: 20,
        description: "Gaufre avec miel et noix",
        image: "/img_1934.png"
    },
    {
        id: 33,
        name: "Gaufre Caramel Noisettes",
        category: "gaufres",
        price: 20,
        description: "Gaufre avec caramel et noisettes",
        image: "/img_1934.png"
    },
    {
        id: 34,
        name: "Gaufre Amlou",
        category: "gaufres",
        price: 20,
        description: "Gaufre avec pâte Amlou",
        image: "/img_1934.png"
    },
    {
        id: 35,
        name: "Gaufre Nutella Brownie",
        category: "gaufres",
        price: 35,
        description: "Gaufre avec Nutella et brownies",
        image: "/img_1934.png"
    },
    {
        id: 36,
        name: "Gaufre Ferrero Rocher",
        category: "gaufres",
        price: 30,
        description: "Gaufre avec Ferrero Rocher",
        image: "/img_1934.png"
    },
    {
        id: 37,
        name: "Gaufre Nutella Banane",
        category: "gaufres",
        price: 13,
        description: "Gaufre avec Nutella et banane",
        image: "/img_1934.png"
    },
    {
        id: 38,
        name: "Gaufre Pistache Creme",
        category: "gaufres",
        price: 15,
        description: "Gaufre avec crème pistache",
        image: "/img_1934.png"
    },
    {
        id: 39,
        name: "Tiramisu Oreo",
        category: "desserts",
        price: 15,
        description: "Tiramisu au goût Oreo",
        image: "/img_1934.png"
    },
    {
        id: 40,
        name: "Tiramisu Citron",
        category: "desserts",
        price: 20,
        description: "Tiramisu au citron",
        image: "/img_1934.png"
    },
    {
        id: 41,
        name: "Tiramisu Lotus",
        category: "desserts",
        price: 20,
        description: "Tiramisu au Lotus",
        image: "/img_1934.png"
    },
    {
        id: 42,
        name: "Tiramisu Pistache",
        category: "desserts",
        price: 25,
        description: "Tiramisu à la pistache",
        image: "/img_1934.png"
    },
    {
        id: 43,
        name: "Tiramisu Kinder",
        category: "desserts",
        price: 20,
        description: "Tiramisu au Kinder",
        image: "/img_1934.png"
    },
    {
        id: 44,
        name: "Tiramisu Fraise",
        category: "desserts",
        price: 20,
        description: "Tiramisu à la fraise",
        image: "/img_1934.png"
    },
    {
        id: 45,
        name: "Chocolat Dubai Petit",
        category: "desserts",
        price: 30,
        description: "Petit chocolat Dubai",
        image: "/img_1934.png"
    },
    {
        id: 46,
        name: "Chocolat Dubai Moyen",
        category: "desserts",
        price: 60,
        description: "Chocolat Dubai moyen",
        image: "/img_1934.png"
    },
    {
        id: 47,
        name: "Fraicheur - Fraise, Pêche, Pomme",
        category: "boissons",
        price: 28,
        description: "Cocktail de fruits frais",
        image: "/img_1935.png"
    },
    {
        id: 48,
        name: "Pabama - Mangue, Banane, Fruit de Passion",
        category: "boissons",
        price: 35,
        description: "Smoothie tropical",
        image: "/img_1935.png"
    },
    {
        id: 49,
        name: "Tom Tkin - Ananas, Orange, Citron",
        category: "boissons",
        price: 30,
        description: "Cocktail vitaminé",
        image: "/img_1935.png"
    },
    {
        id: 50,
        name: "Early Gold",
        category: "boissons",
        price: 30,
        description: "Mangue, ananas, citron, grenadine",
        image: "/img_1935.png"
    },
    {
        id: 51,
        name: "Bora Bora",
        category: "boissons",
        price: 32,
        description: "Citron, ananas, fruits de passion, strawberry",
        image: "/img_1935.png"
    },
    {
        id: 52,
        name: "Vitamine C",
        category: "boissons",
        price: 28,
        description: "Banane, kiwi, fruit de passion, purée de vanille",
        image: "/img_1935.png"
    },
    {
        id: 53,
        name: "Tahiti",
        category: "boissons",
        price: 35,
        description: "Mangue, orange, ananas, yaourt, banane",
        image: "/img_1935.png"
    },
    {
        id: 54,
        name: "Smoothie Banana",
        category: "boissons",
        price: 30,
        description: "Yaourt, orange, banane, grenadine",
        image: "/img_1935.png"
    },
    {
        id: 55,
        name: "Graick",
        category: "boissons",
        price: 30,
        description: "Avocat, mangue, noix, datte, miel, amande",
        image: "/img_1935.png"
    },
    {
        id: 56,
        name: "Milkshake au Choix",
        category: "boissons",
        price: 25,
        description: "Fraise, chocolat, vanille, caramel",
        image: "/img_1935.png"
    },
    {
        id: 57,
        name: "Mojito",
        category: "boissons",
        price: 20,
        description: "Citron, fraise, framboise, menthe, orange",
        image: "/img_1935.png"
    },
    {
        id: 58,
        name: "Mojito Mixte",
        category: "boissons",
        price: 25,
        description: "Mix de saveurs mojito",
        image: "/img_1935.png"
    },
    {
        id: 59,
        name: "Frappuccino",
        category: "boissons",
        price: 25,
        description: "Caramel, vanille, noisette",
        image: "/img_1935.png"
    },
    {
        id: 60,
        name: "Ice Tea",
        category: "boissons",
        price: 15,
        description: "Pêche, citron, framboise",
        image: "/img_1935.png"
    },
    {
        id: 61,
        name: "Jus Orange",
        category: "boissons",
        price: 15,
        description: "Jus d'orange frais",
        image: "/img_1935.png"
    },
    {
        id: 62,
        name: "Jus Banane",
        category: "boissons",
        price: 15,
        description: "Jus de banane",
        image: "/img_1935.png"
    },
    {
        id: 63,
        name: "Jus Pomme",
        category: "boissons",
        price: 15,
        description: "Jus de pomme",
        image: "/img_1935.png"
    },
    {
        id: 64,
        name: "Jus Citron",
        category: "boissons",
        price: 15,
        description: "Jus de citron",
        image: "/img_1935.png"
    },
    {
        id: 65,
        name: "Jus Ananas",
        category: "boissons",
        price: 25,
        description: "Jus d'ananas",
        image: "/img_1935.png"
    },
    {
        id: 66,
        name: "Jus Fraise",
        category: "boissons",
        price: 25,
        description: "Jus de fraise",
        image: "/img_1935.png"
    },
    {
        id: 67,
        name: "Jus Avocat",
        category: "boissons",
        price: 25,
        description: "Jus d'avocat",
        image: "/img_1935.png"
    },
    {
        id: 68,
        name: "Café Noir",
        category: "boissons",
        price: 12,
        description: "Café noir classique",
        image: "/img_1935.png"
    },
    {
        id: 69,
        name: "Café Crème",
        category: "boissons",
        price: 12,
        description: "Café avec crème",
        image: "/img_1935.png"
    },
    {
        id: 70,
        name: "Lait au Café",
        category: "boissons",
        price: 12,
        description: "Lait chaud au café",
        image: "/img_1935.png"
    },
    {
        id: 71,
        name: "Cappuccino",
        category: "boissons",
        price: 12,
        description: "Cappuccino classique",
        image: "/img_1935.png"
    },
    {
        id: 72,
        name: "Café Américain",
        category: "boissons",
        price: 12,
        description: "Café américain",
        image: "/img_1935.png"
    },
    {
        id: 73,
        name: "Lait au Chocolat",
        category: "boissons",
        price: 12,
        description: "Lait chaud au chocolat",
        image: "/img_1935.png"
    },
    {
        id: 74,
        name: "Chocolat Fondu",
        category: "boissons",
        price: 30,
        description: "Nutella, lotus, chocolat, caramel",
        image: "/img_1935.png"
    },
    {
        id: 75,
        name: "Ice Coffee",
        category: "boissons",
        price: 20,
        description: "Nutella, lotus, chocolat, caramel",
        image: "/img_1935.png"
    }
];

let cart = [];

function initializeApp() {
    loadCartFromStorage();
    displayMenu('tous');
    setupEventListeners();
    updateCartUI();
}

function setupEventListeners() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            displayMenu(btn.dataset.category);
        });
    });

    document.getElementById('cartBtn').addEventListener('click', openCartModal);
    document.getElementById('closeCart').addEventListener('click', closeCartModal);
    document.getElementById('orderBtn').addEventListener('click', sendWhatsAppOrder);
    document.getElementById('closeProduct').addEventListener('click', closeProductModal);

    document.getElementById('cartModal').addEventListener('click', (e) => {
        if (e.target.id === 'cartModal') {
            closeCartModal();
        }
    });

    document.getElementById('productModal').addEventListener('click', (e) => {
        if (e.target.id === 'productModal') {
            closeProductModal();
        }
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

function displayMenu(category) {
    const menuGrid = document.getElementById('menuGrid');
    const filteredMenu = category === 'tous'
        ? menuData
        : menuData.filter(item => item.category === category);

    menuGrid.innerHTML = filteredMenu.map(item => `
        <div class="menu-item" data-id="${item.id}">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image" onerror="this.src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400'">
            <div class="menu-item-content">
                <div class="menu-item-header">
                    <h3 class="menu-item-name">${item.name}</h3>
                    <span class="menu-item-price">${item.price} DH</span>
                </div>
                <p class="menu-item-description">${item.description}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${item.id})">
                    Ajouter au panier
                </button>
            </div>
        </div>
    `).join('');
}

function addToCart(productId) {
    const product = menuData.find(item => item.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCartToStorage();
    updateCartUI();
    
    // --- L'AJOUT EST ICI ---
    openCartModal(); 
    // -----------------------

    showNotification('Produit ajouté au panier');
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCartToStorage();
        updateCartUI();
    }
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartEmpty = document.getElementById('cartEmpty');
    const cartTotal = document.getElementById('cartTotal');

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;

    if (cart.length === 0) {
        cartItems.style.display = 'none';
        cartEmpty.style.display = 'block';
        cartTotal.textContent = '0 DH';
        return;
    }

    cartItems.style.display = 'flex';
    cartEmpty.style.display = 'none';

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400'">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">${item.price} DH × ${item.quantity} = ${item.price * item.quantity} DH</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                    <span class="quantity-value">${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">Supprimer</button>
                </div>
            </div>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `${total} DH`;
}

function openCartModal() {
    document.getElementById('cartModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCartModal() {
    document.getElementById('cartModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function closeProductModal() {
    document.getElementById('productModal').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function sendWhatsAppOrder() {
    if (cart.length === 0) {
        alert('Votre panier est vide');
        return;
    }

    const phoneNumber = '212XXXXXXXXX';

    let message = '🍽️ *Nouvelle Commande - CREPE SIMO 48*\n\n';

    cart.forEach(item => {
        message += `• ${item.name}\n`;
        message += `  Quantité: ${item.quantity}\n`;
        message += `  Prix: ${item.price * item.quantity} DH\n\n`;
    });

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    message += `*Total: ${total} DH*\n\n`;
    message += '_Merci pour votre commande!_';

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, '_blank');
}

function saveCartToStorage() {
    localStorage.setItem('crepeSimo48Cart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('crepeSimo48Cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

function showNotification(message) {
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) {
        existingNotif.remove();
    }

    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #4caf50;
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', initializeApp);
