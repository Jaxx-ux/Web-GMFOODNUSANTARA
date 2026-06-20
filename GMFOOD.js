/* =========================================
   DATA PRODUK GM FOOD NUSANTARA
   ========================================= */
const products = [
    {
        id: 1,
        name: "Paket Rames Hemat (Anak Kos)",
        category: "paket",
        price: 15000,
        rating: 4.8,
        desc: "Nasi putih + 1 Sayur + 1 Lauk Sederhana (Telur/Tempe) + Sambal. Murah, kenyang, pas di kantong!",
        image: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 2,
        name: "Paket Ayam Goreng Kremes",
        category: "paket",
        price: 25000,
        rating: 4.9,
        desc: "Nasi putih + 1 Ayam Goreng,Lengkap sambel terasi dan lalapan. Nutrisi lengkap untuk energi seharian!",
        image: "Assets/Nasi ayam goreng kremes.webp"
    },
    {
        id: 3,
        name: "Paket Lauk Pauk (Porsi Keluarga)",
        category: "paket",
        price: 45000,
        rating: 4.7,
        desc: "Bebas pilih 3 porsi lauk utama tanpa nasi untuk dibawa pulang. Solusi lauk harian keluarga tanpa repot.",
        image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 4,
        name: "Paket Nasi Kotak (Event)",
        category: "paket",
        price: 35000,
        rating: 4.9,
        desc: "Nasi box premium untuk kebutuhan meeting, syukuran, atau event kantor. Kemasan rapi, bersih, dan higienis.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 5,
        name: "Pecak Ikan Nila",
        category: "ala-carte",
        price: 30000,
        rating: 4.9,
        desc: "Hidangan khas Nusantara dengan kuah pecak segar, asam pedas gurih, dan tekstur ikan nila garing lembut.",
        image: "Assets/pecak ikan nila.webp"
    },
    {
        id: 6,
        name: "Sayur Asem spesial",
        category: "ala-carte",
        price: 18000,
        rating: 4.8,
        desc: "Kombinasi klasik sayur asem hangat, ikan asin renyah, tempe goreng gurih, lengkap sambal terasi & lalapan.",
        image: "Assets/paket sayur asem.webp"
    },
    {
        id: 7,
        name: "Ayam Goreng Serundeng Lengkuas",
        category: "ala-carte",
        price: 17000,
        rating: 4.7,
        desc: "Ayam goreng bumbu kuning empuk ditaburi serundeng lengkuas kelapa parut melimpah yang renyah gurih.",
        image: "https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 8,
        name: "Semur Jengkol Betawi Asli",
        category: "ala-carte",
        price: 20000,
        rating: 4.6,
        desc: "Jengkol pilihan dimasak empuk dengan bumbu semur manis gurih rempah Betawi tradisional, bebas bau menyengat.",
        image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 9,
        name: "Sop Iga Sapi",
        category: "ala-carte",
        price: 25000,
        rating: 4.7,
        desc: "Iga sapi yang dimasak hingga empuk dalam kuah bening bersama sayuran segar seperti wortel dan kentang.",
        image: "Assets/Sup Iga Sapi.webp"
    },
    {
        id: 10,
        name: "Pindang Patin",
        category: "ala-carte",
        price: 18000,
        rating: 4.7,
        desc: "Ikan patin dimasak dalam kuah bening bercita rasa asam, gurih, dan sedikit pedas dengan tomat sebagai pelengkap.",
        image: "Assets/Pindang Patin.webp"
    },
    {
        id: 11,
        name: "Sop Buntut",
        category: "ala-carte",
        price: 25000,
        rating: 4.7,
        desc: "Sup buntut sapi dengan kuah bening yang gurih, dilengkapi wortel, kentang, tomat, dan seledri sehingga terasa hangat sekaligus menyegarkan.",
        image: "Assets/Sop Buntut.webp"
    },
    {
        id: 11,
        name: "Es Teh Manis Melati (Jumbo)",
        category: "beverage",
        price: 5000,
        rating: 4.8,
        desc: "Es teh manis dengan aroma bunga melati yang harum menyegarkan, disajikan dalam gelas ukuran jumbo.",
        image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 12,
        name: "Es Jeruk Peras Alami",
        category: "beverage",
        price: 7000,
        rating: 4.7,
        desc: "Es jeruk murni diperas dari buah jeruk lokal segar pilihan, rasa manis alami tanpa pemanis buatan.",
        image: "https://images.unsplash.com/photo-1613478223719-2ab802602423?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
        id: 13,
        name: "Es Cendol Nangka Gula Aren",
        category: "beverage",
        price: 10000,
        rating: 4.9,
        desc: "Cendol kenyal pandan asli dipadukan santan gurih, potongan nangka wangi, dan sirup gula aren kental.",
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
];

/* =========================================
   STATE MANAGEMENT
   ========================================= */
let cart = [];
let currentFilter = 'all';

/* =========================================
   FORMATTER
   ========================================= */
const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(number);
};

/* =========================================
   RENDER MENU
   ========================================= */
const menuGrid = document.getElementById('menu-grid');
const menuResultText = document.getElementById('menu-result-text');

function renderProducts(items) {
    if (!menuGrid) return;
    menuGrid.innerHTML = '';

    if (items.length === 0) {
        menuGrid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 40px; color: var(--text-light);">Menu tidak ditemukan. Silakan coba kata kunci lain.</div>';
        return;
    }

    items.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'menu-card visible';
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <div class="menu-img-container">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
            </div>
            <div class="menu-details">
                <div class="menu-header-row">
                    <span class="menu-badge-cat">${item.category === 'paket' ? 'Paket Rames' : item.category === 'ala-carte' ? 'Ala Carte' : 'Minuman'}</span>
                    <div class="menu-rating">
                        <i class="fa-solid fa-star"></i>
                        <span>${item.rating}</span>
                    </div>
                </div>
                <h3 class="menu-title">${item.name}</h3>
                <p class="menu-desc">${item.desc}</p>
                <div class="menu-bottom">
                    <span class="menu-price">${formatRupiah(item.price)}</span>
                    <button class="btn-add" onclick="addToCart(${item.id})" aria-label="Tambahkan ke Keranjang">
                        <i class="fa-solid fa-plus"></i> Tambah
                    </button>
                </div>
            </div>
        `;
        menuGrid.appendChild(card);
    });
}

/* =========================================
   FILTER & SEARCH
   ========================================= */
const categoryCards = document.querySelectorAll('.category-card');
const searchInput = document.getElementById('search-input');

if (categoryCards) {
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            categoryCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');

            currentFilter = card.dataset.filter;
            if (searchInput) searchInput.value = '';
            filterMenu();
        });
    });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        filterMenu(e.target.value);
    });
}

function filterMenu(searchTerm = '') {
    let filtered = products;

    if (currentFilter !== 'all') {
        filtered = filtered.filter(item => item.category === currentFilter);
        if (menuResultText) {
            let label = currentFilter === 'paket' ? 'Paket Rames' : currentFilter === 'ala-carte' ? 'Lauk Ala Carte' : 'Minuman Segar';
            menuResultText.innerText = `Menampilkan menu kategori: ${label}`;
        }
    } else {
        if (menuResultText) menuResultText.innerText = `Menampilkan semua menu`;
    }

    if (searchTerm.trim() !== '') {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(item =>
            item.name.toLowerCase().includes(term) ||
            item.desc.toLowerCase().includes(term)
        );
        if (menuResultText) menuResultText.innerText = `Hasil pencarian untuk: "${searchTerm}"`;
    }

    renderProducts(filtered);
}

/* =========================================
   CART LOGIC
   ========================================= */
const cartToggleBtn = document.getElementById('cart-toggle');
const closeCartBtn = document.getElementById('close-cart');
const cartSidebar = document.getElementById('cart-sidebar');
const cartOverlay = document.getElementById('cart-overlay');
const cartCount = document.getElementById('cart-count');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const orderDetailsTextarea = document.getElementById('order-details');

if (cartToggleBtn) {
    cartToggleBtn.addEventListener('click', () => {
        if (cartSidebar) cartSidebar.classList.add('active');
        if (cartOverlay) cartOverlay.classList.add('active');
    });
}

const closeCart = () => {
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (cartOverlay) cartOverlay.classList.remove('active');
};

if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

window.addToCart = (id) => {
    const product = products.find(p => p.id === id);
    const existingItem = cart.find(item => item.id === id);

    if (existingItem) {
        existingItem.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    showToast(`Berhasil menambahkan ${product.name} ke keranjang!`);

    if (cartCount) {
        cartCount.style.transform = 'scale(1.5)';
        setTimeout(() => { cartCount.style.transform = 'scale(1)'; }, 200);
    }
};

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    if (cartCount) cartCount.innerText = totalItems;

    if (cart.length === 0) {
        if (cartItemsContainer) cartItemsContainer.innerHTML = '<div class="cart-empty-msg">Keranjang Anda masih kosong. Yuk, pesan lauk nusantara pilihanmu!</div>';
        if (cartTotalPrice) cartTotalPrice.innerText = formatRupiah(0);
        if (orderDetailsTextarea) orderDetailsTextarea.value = '';
        return;
    }

    if (cartItemsContainer) cartItemsContainer.innerHTML = '';
    let total = 0;
    let orderText = 'Rincian Pesanan:\n';

    cart.forEach(item => {
        const subtotal = item.price * item.qty;
        total += subtotal;
        orderText += `- ${item.qty}x ${item.name} (${formatRupiah(subtotal)})\n`;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-img">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatRupiah(item.price)}</div>
                <div class="cart-qty-controls">
                    <button class="qty-btn" onclick="updateQty(${item.id}, -1)">-</button>
                    <span class="qty-val">${item.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${item.id}, 1)">+</button>
                    <button class="remove-item" onclick="removeItem(${item.id})" aria-label="Hapus item"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `;
        if (cartItemsContainer) cartItemsContainer.appendChild(cartItem);
    });

    orderText += `\nTotal: ${formatRupiah(total)}`;
    if (cartTotalPrice) cartTotalPrice.innerText = formatRupiah(total);

    // Auto-update order details textarea in the form
    if (orderDetailsTextarea) {
        orderDetailsTextarea.value = orderText;
    }
}

window.updateQty = (id, change) => {
    const item = cart.find(i => i.id === id);
    if (item) {
        item.qty += change;
        if (item.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
        updateCartUI();
    }
};

window.removeItem = (id) => {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
};

window.checkout = () => {
    if (cart.length === 0) {
        showToast("Keranjang Anda kosong!");
        return;
    }
    closeCart();
    // Scroll smoothly to order form and focus on the name field
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
            const nameInput = document.getElementById('order-name');
            if (nameInput) nameInput.focus();
        }, 800);
        showToast("Silakan lengkapi data pemesanan di form bawah ini.");
    }
};

/* =========================================
   TOAST NOTIFICATION
   ========================================= */
const toastContainer = document.getElementById('toast-container');

function showToast(message) {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fa-solid fa-circle-check"></i>
        <span>${message}</span>
    `;

    toastContainer.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 10);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

/* =========================================
   DARK MODE TOGGLE
   ========================================= */
const themeToggle = document.getElementById('theme-toggle');

if (themeToggle) {
    const iconTheme = themeToggle.querySelector('i');

    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        if (iconTheme) iconTheme.classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        if (document.body.classList.contains('dark-mode')) {
            if (iconTheme) iconTheme.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            if (iconTheme) iconTheme.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });
}

/* =========================================
   MOBILE MENU & STICKY HEADER
   ========================================= */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const navLinks = document.getElementById('nav-links');
const header = document.getElementById('header');

if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = mobileMenuBtn.querySelector('i');
        if (icon) {
            if (navLinks.classList.contains('active')) {
                icon.classList.replace('fa-bars', 'fa-xmark');
            } else {
                icon.classList.replace('fa-xmark', 'fa-bars');
            }
        }
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks) navLinks.classList.remove('active');
        if (mobileMenuBtn) {
            const icon = mobileMenuBtn.querySelector('i');
            if (icon) icon.classList.replace('fa-xmark', 'fa-bars');
        }
    });
});

window.addEventListener('scroll', () => {
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

/* =========================================
   FAQ ACCORDION
   ========================================= */
const faqItems = document.querySelectorAll('.faq-item');

if (faqItems) {
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            faqItems.forEach(faq => faq.classList.remove('active'));

            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/* =========================================
   SCROLL ANIMATION (FADE IN)
   ========================================= */
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in, .section-header').forEach(el => {
    observer.observe(el);
});

/* =========================================
   WHATSAPP ORDER FORM REDIRECT
   ========================================= */
const orderForm = document.getElementById('order-form');

if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('order-name').value;
        const phone = document.getElementById('order-phone').value;
        const service = document.getElementById('order-service').value;
        const datetime = document.getElementById('order-time').value;
        const details = document.getElementById('order-details').value;

        if (!name || !phone || !service || !datetime) {
            showToast("Harap isi semua kolom wajib!");
            return;
        }

        // Format Date Time beautifully
        let formattedDate = datetime.replace('T', ' Jam ');

        // Construct WA text
        let message = `Halo GM Food Nusantara,\n\nSaya ingin memesan menu lezat tanpa antre:\n\n`;
        message += `*Nama Lengkap:* ${name}\n`;
        message += `*Nomor WhatsApp:* ${phone}\n`;
        message += `*Pilihan Layanan:* ${service}\n`;
        message += `*Waktu Pengambilan/Pengiriman:* ${formattedDate}\n\n`;
        message += `*Rincian Pesanan:*\n${details}\n\n`;
        message += `Mohon segera diproses. Terima kasih!`;

        // URL encode message
        const encodedMessage = encodeURIComponent(message);

        // Admin WA number (configuration point)
        // Format: international prefix without + e.g. 628123456789
        const waNumber = "6281298765432";

        const waUrl = `https://wa.me/${waNumber}?text=${encodedMessage}`;

        showToast("Mengalihkan ke WhatsApp...");

        setTimeout(() => {
            window.open(waUrl, '_blank');
            // Clear cart after redirecting
            cart = [];
            updateCartUI();
            orderForm.reset();
        }, 1000);
    });
}

/* =========================================
   INIT
   ========================================= */
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCartUI();
});