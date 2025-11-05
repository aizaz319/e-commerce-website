(function() {
  const STATE_KEY = 'myshop_cart_v1';
  const EMAIL_TO = 'orders@example.com'; // Change to your email
  const WHATSAPP_TO = '923149461171'; // Change to your WhatsApp phone with country code

  const products = [
    { id: 'f-burger', title: 'Classic Burger', price: 12.99, image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop', desc: 'Juicy beef patty with fresh veggies and special sauce.', badge: 'Bestseller' },
    { id: 'f-pizza', title: 'Margherita Pizza', price: 15.99, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop', desc: 'Fresh mozzarella, basil, and tomato sauce.', badge: 'Popular' },
    { id: 'f-pasta', title: 'Creamy Pasta', price: 13.50, image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=800&auto=format&fit=crop', desc: 'Rich and creamy pasta with parmesan cheese.', badge: 'New' },
    { id: 'f-salad', title: 'Fresh Garden Salad', price: 9.99, image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop', desc: 'Mixed greens, tomatoes, cucumbers, and vinaigrette.' },
    { id: 'f-chicken', title: 'Grilled Chicken', price: 14.99, image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=800&auto=format&fit=crop', desc: 'Tender grilled chicken breast with herbs.' },
    { id: 'f-sushi', title: 'Sushi Platter', price: 18.99, image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=800&auto=format&fit=crop', desc: 'Assorted fresh sushi with soy sauce and wasabi.', badge: 'Popular' },
    { id: 'f-tacos', title: 'Fish Tacos', price: 11.99, image: 'https://natashaskitchen.com/wp-content/uploads/2017/08/Easy-Fish-Tacos-with-the-Best-Fish-Taco-Sauce-4.jpg?q=80&w=800&auto=format&fit=crop', desc: 'Crispy fish with slaw and lime in soft tortillas.' },
    { id: 'f-ramen', title: 'Tonkotsu Ramen', price: 16.50, image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?q=80&w=800&auto=format&fit=crop', desc: 'Rich pork broth with noodles and soft-boiled egg.', badge: 'Bestseller' },
    { id: 'f-wrap', title: 'Chicken Wrap', price: 10.99, image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=800&auto=format&fit=crop', desc: 'Grilled chicken, lettuce, and mayo in tortilla wrap.' },
    { id: 'f-soup', title: 'Tomato Soup', price: 7.99, image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop', desc: 'Creamy tomato soup with fresh basil.' },
    { id: 'f-fries', title: 'Crispy Fries', price: 5.99, image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop', desc: 'Golden crispy fries with your choice of dipping sauce.' },
    { id: 'f-dessert', title: 'Chocolate Cake', price: 8.99, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop', desc: 'Rich chocolate cake with vanilla frosting.', badge: 'New' },
    { id: 'f-icecream', title: 'Ice Cream Sundae', price: 6.99, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=800&auto=format&fit=crop', desc: 'Vanilla ice cream with chocolate sauce and toppings.' },
    { id: 'f-drink', title: 'Fresh Lemonade', price: 4.99, image: 'https://www.themerchantbaker.com/wp-content/uploads/2015/08/Fresh-Lemonade-Third-REV-360x480.jpg?q=80&w=800&auto=format&fit=crop', desc: 'Freshly squeezed lemonade, ice cold and refreshing.' },
    { id: 'f-biryani', title: 'Chicken Biryani', price: 13.99, image: 'https://images.food52.com/VOfOuvcQe7fBeSqixNe1L-LhUBY=/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg?q=80&w=800&auto=format&fit=crop', desc: 'Aromatic basmati rice with spiced chicken.', badge: 'Popular' },
    { id: 'f-pepperoni', title: 'Pepperoni Pizza', price: 16.49, image: 'https://images.unsplash.com/photo-1548365328-9f547fb0951f?q=80&w=800&auto=format&fit=crop', desc: 'Loaded with pepperoni and mozzarella.', badge: 'Bestseller' },
    { id: 'f-cheeseburger', title: 'Cheese Burger', price: 13.49, image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop', desc: 'Beef patty topped with cheddar and pickles.', badge: 'Popular' },
    { id: 'f-fried-chicken', title: 'Fried Chicken Bucket', price: 17.99, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop', desc: 'Crispy golden fried chicken pieces.' },
    { id: 'f-shawarma', title: 'Chicken Shawarma', price: 10.49, image: 'https://images.unsplash.com/photo-1604908176997-4310d13f5a4f?q=80&w=800&auto=format&fit=crop', desc: 'Middle Eastern wrap with garlic sauce.' },
    { id: 'f-paneer', title: 'Paneer Tikka', price: 12.49, image: 'https://images.unsplash.com/photo-1625944528070-9752119bc9a9?q=80&w=800&auto=format&fit=crop', desc: 'Smoky grilled cottage cheese cubes.', badge: 'Vegetarian' },
    { id: 'f-butter-chicken', title: 'Butter Chicken', price: 15.49, image: 'https://images.unsplash.com/photo-1625944528025-8b3ad72037d2?q=80&w=800&auto=format&fit=crop', desc: 'Creamy tomato gravy with tender chicken.' },
    { id: 'f-steak', title: 'Grilled Steak', price: 19.99, image: 'https://images.unsplash.com/photo-1553163147-622ab57be1c7?q=80&w=800&auto=format&fit=crop', desc: 'Perfectly seared steak with herbs.' },
    { id: 'f-falafel', title: 'Falafel Wrap', price: 9.99, image: 'https://images.unsplash.com/photo-1604908554028-56a67b5248a6?q=80&w=800&auto=format&fit=crop', desc: 'Crispy falafel, hummus, and veggies.', badge: 'Vegetarian' },
    { id: 'f-caesar', title: 'Caesar Salad', price: 10.99, image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=800&auto=format&fit=crop', desc: 'Romaine, parmesan, croutons, and dressing.' },
    { id: 'f-garlic-bread', title: 'Garlic Bread', price: 5.49, image: 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?q=80&w=800&auto=format&fit=crop', desc: 'Toasted baguette with garlic butter.', badge: 'Popular' },
    { id: 'f-milkshake', title: 'Chocolate Milkshake', price: 6.49, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=800&auto=format&fit=crop', desc: 'Thick shake topped with whipped cream.' },
    { id: 'f-latte', title: 'Cafe Latte', price: 4.49, image: 'https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-us-cuisinart-sfra-Library/default/dw42dcae51/images/recipe-Images/cafe-latte1-recipe_resized.jpg?sw=1200&sh=1200&q=80&w=800&auto=format&fit=crop', desc: 'Smooth espresso with steamed milk.' }
  ];

  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const el = {
    header: document.querySelector('.site-header'),
    grid: $('#productGrid'),
    search: $('#searchInput'),
    openCartBtn: $('#openCartBtn'),
    openCartBtnFooter: $('#openCartBtnFooter'),
    closeCartBtn: $('#closeCartBtn'),
    backdrop: $('#cartBackdrop'),
    cartDrawer: $('#cartDrawer'),
    cartItems: $('#cartItems'),
    cartCount: $('#cartCount'),
    subtotalText: $('#subtotalText'),
    emailBtn: $('#emailOrderBtn'),
    waBtn: $('#whatsAppOrderBtn'),
    year: $('#year'),
    name: $('#customerName'),
    email: $('#customerEmail'),
    phone: $('#customerPhone'),
    address: $('#customerAddress'),
    productModal: document.getElementById('productModal'),
    productBackdrop: document.getElementById('productBackdrop'),
    productContent: document.getElementById('productContent'),
    productCloseBtn: document.getElementById('productCloseBtn')
  };

  function loadCart() {
    try { return JSON.parse(localStorage.getItem(STATE_KEY) || '{}'); } catch { return {}; }
  }
  function saveCart(cart) { localStorage.setItem(STATE_KEY, JSON.stringify(cart)); }

  function formatMoney(v) { return `$${v.toFixed(2)}`; }

  function renderProducts(list) {
    el.grid.innerHTML = list.map(p => `
      <article class="product-card" data-id="${p.id}">
        <div class="product-media">
          ${p.badge ? `<span class="badge">${p.badge}</span>` : ''}
          <img src="${p.image}" alt="${p.title}">
        </div>
        <div class="product-body">
          <h3 class="product-title">${p.title}</h3>
          <p class="product-desc">${p.desc || ''}</p>
          <div class="product-bottom">
            <span class="price">${formatMoney(p.price)}</span>
            <button class="add-to-cart" data-id="${p.id}">Add</button>
          </div>
        </div>
      </article>
    `).join('');

    // Open details modal on card/media/title/desc click
    $$('.product-card').forEach(card => {
      const id = card.getAttribute('data-id');
      const clickable = [
        card.querySelector('.product-media'),
        card.querySelector('.product-title'),
        card.querySelector('.product-desc')
      ].filter(Boolean);
      clickable.forEach(node => node.addEventListener('click', () => id && openProductModal(id)));
    });

    // Add button: add to cart only, do not open modal
    $$('.add-to-cart').forEach(btn => btn.addEventListener('click', (e) => {
      e.stopPropagation();
      addToCart(btn.dataset.id, 1);
    }));
  }

  function getProduct(productId) { return products.find(p => p.id === productId); }

  function addToCart(productId, qty) {
    const product = getProduct(productId);
    if (!product) return;
    const cart = loadCart();
    const current = cart[productId] || { id: productId, qty: 0, price: product.price };
    current.qty += qty;
    if (current.qty <= 0) delete cart[productId]; else cart[productId] = current;
    saveCart(cart);
    renderCart();
  }

  function cartEntries() {
    const cart = loadCart();
    return Object.values(cart).map(item => ({ ...item, product: getProduct(item.id) })).filter(x => x.product);
  }

  function cartSubtotal() {
    return cartEntries().reduce((sum, item) => sum + item.product.price * item.qty, 0);
  }

  function renderCart() {
    const entries = cartEntries();
    if (entries.length === 0) {
      el.cartItems.innerHTML = '<p class="muted" style="padding:12px;">Your cart is empty.</p>';
    } else {
      el.cartItems.innerHTML = entries.map(({ product, qty }) => `
        <div class="cart-item">
          <img src="${product.image}" alt="${product.title}">
          <div>
            <h4>${product.title}</h4>
            <div class="muted">${formatMoney(product.price)} each</div>
            <div class="qty" aria-label="Quantity controls for ${product.title}">
              <button data-action="dec" data-id="${product.id}" aria-label="Decrease quantity">−</button>
              <span>${qty}</span>
              <button data-action="inc" data-id="${product.id}" aria-label="Increase quantity">+</button>
            </div>
          </div>
          <div style="text-align:right;">
            <div><strong>${formatMoney(product.price * qty)}</strong></div>
            <button class="remove" data-action="remove" data-id="${product.id}">Remove</button>
          </div>
        </div>
      `).join('');
    }

    el.cartItems.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
      const id = b.getAttribute('data-id');
      const action = b.getAttribute('data-action');
      if (action === 'inc') addToCart(id, 1);
      if (action === 'dec') addToCart(id, -1);
      if (action === 'remove') { const cart = loadCart(); delete cart[id]; saveCart(cart); renderCart(); }
    }));

    const count = entries.reduce((n, e) => n + e.qty, 0);
    el.cartCount.textContent = String(count);
    el.subtotalText.textContent = formatMoney(cartSubtotal());
  }

  function syncBodyScrollLock() {
    const cartOpen = el.cartDrawer && el.cartDrawer.classList.contains('open');
    const modalOpen = el.productModal && el.productModal.classList.contains('open');
    if (cartOpen || modalOpen) document.body.classList.add('no-scroll'); else document.body.classList.remove('no-scroll');
  }

  function openCart() {
    el.cartDrawer.classList.add('open');
    el.cartDrawer.setAttribute('aria-hidden', 'false');
    if (el.backdrop) { el.backdrop.classList.add('open'); el.backdrop.setAttribute('aria-hidden', 'false'); }
    syncBodyScrollLock();
  }
  function closeCart() {
    el.cartDrawer.classList.remove('open');
    el.cartDrawer.setAttribute('aria-hidden', 'true');
    if (el.backdrop) { el.backdrop.classList.remove('open'); el.backdrop.setAttribute('aria-hidden', 'true'); }
    syncBodyScrollLock();
  }

  function renderProductModal(product) {
    if (!product || !el.productContent) return;
    el.productContent.innerHTML = `
      <div class="modal-media"><img src="${product.image}" alt="${product.title}"></div>
      <div class="modal-body">
        <h3 id="productTitle" class="modal-title">${product.title}</h3>
        <div class="modal-price-wrapper">
          <span class="modal-price">${formatMoney(product.price)}</span>
        </div>
        <p class="modal-desc">${product.desc || ''}</p>
        <div class="modal-bottom">
          <div class="modal-qty-section">
            <div class="qty-lg" aria-label="Quantity">
              <button data-pm-action="dec" aria-label="Decrease quantity">−</button>
              <span id="pmQty">1</span>
              <button data-pm-action="inc" aria-label="Increase quantity">+</button>
            </div>
            <button id="pmAddBtn" class="btn primary modal-add-btn">Add to cart</button>
          </div>
        </div>
      </div>
    `;
    let qty = 1;
    const qtySpan = document.getElementById('pmQty');
    const incBtn = el.productContent.querySelector('[data-pm-action="inc"]');
    const decBtn = el.productContent.querySelector('[data-pm-action="dec"]');
    const addBtn = document.getElementById('pmAddBtn');
    const updateQty = () => { qtySpan.textContent = String(qty); };
    incBtn.addEventListener('click', () => { qty += 1; updateQty(); });
    decBtn.addEventListener('click', () => { qty = Math.max(1, qty - 1); updateQty(); });
    addBtn.addEventListener('click', () => { 
      addToCart(product.id, qty); 
      closeProductModal(); 
    });
  }

  function openProductModal(productId) {
    const product = getProduct(productId);
    if (!product) return;
    renderProductModal(product);
    if (el.productModal) { el.productModal.classList.add('open'); el.productModal.setAttribute('aria-hidden', 'false'); }
    if (el.productBackdrop) { el.productBackdrop.classList.add('open'); el.productBackdrop.setAttribute('aria-hidden', 'false'); }
    syncBodyScrollLock();
  }
  function closeProductModal() {
    if (el.productModal) { el.productModal.classList.remove('open'); el.productModal.setAttribute('aria-hidden', 'true'); }
    if (el.productBackdrop) { el.productBackdrop.classList.remove('open'); el.productBackdrop.setAttribute('aria-hidden', 'true'); }
    syncBodyScrollLock();
  }

  function buildOrderText() {
    const items = cartEntries();
    const lines = [
      'New Food Order from My Food Shop',
      '',
      'Items:'
    ];
    for (const { product, qty } of items) {
      lines.push(`- ${product.title} x ${qty} @ ${formatMoney(product.price)} = ${formatMoney(product.price * qty)}`);
    }
    lines.push('', `Subtotal: ${formatMoney(cartSubtotal())}`, '');
    const name = el.name.value.trim();
    const email = el.email.value.trim();
    const phone = el.phone.value.trim();
    const address = el.address.value.trim();
    if (name) lines.push(`Name: ${name}`);
    if (email) lines.push(`Email: ${email}`);
    if (phone) lines.push(`Phone: ${phone}`);
    if (address) lines.push(`Address: ${address}`);
    return lines.join('\n');
  }

  function orderViaEmail() {
    const subject = encodeURIComponent('New Food Order from My Food Shop');
    const body = encodeURIComponent(buildOrderText());
    window.location.href = `mailto:${EMAIL_TO}?subject=${subject}&body=${body}`;
  }

  function orderViaWhatsApp() {
    const text = encodeURIComponent(buildOrderText());
    window.open(`https://wa.me/${WHATSAPP_TO}?text=${text}`, '_blank');
  }

  function attachEvents() {
    // Sticky header visual state
    const onScroll = () => {
      if (!el.header) return;
      if (window.scrollY > 8) el.header.classList.add('scrolled'); else el.header.classList.remove('scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    el.openCartBtn.addEventListener('click', openCart);
    el.openCartBtnFooter.addEventListener('click', (e) => { e.preventDefault(); openCart(); });
    el.closeCartBtn.addEventListener('click', closeCart);
    if (el.backdrop) el.backdrop.addEventListener('click', closeCart);
    if (el.productBackdrop) el.productBackdrop.addEventListener('click', closeProductModal);
    if (el.productCloseBtn) el.productCloseBtn.addEventListener('click', closeProductModal);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeCart(); closeProductModal(); } });
    el.emailBtn.addEventListener('click', () => { if (cartEntries().length) orderViaEmail(); });
    el.waBtn.addEventListener('click', () => { if (cartEntries().length) orderViaWhatsApp(); });
    el.search.addEventListener('input', () => {
      const q = el.search.value.toLowerCase();
      const filtered = products.filter(p => `${p.title} ${p.desc}`.toLowerCase().includes(q));
      renderProducts(filtered);
    });
  }

  function init() {
    renderProducts(products);
    renderCart();
    attachEvents();
    if (el.year) el.year.textContent = String(new Date().getFullYear());
  }

  document.addEventListener('DOMContentLoaded', init);
})();

// Move to Top button logic
const toTopBtn = document.getElementById('toTopBtn');
if (toTopBtn) {
  function updateToTopBtn() {
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOpen = cartDrawer && cartDrawer.classList.contains('open');
    if (cartOpen) {
      toTopBtn.style.display = 'none';
      return;
    }
    if (window.scrollY > 200) {
      toTopBtn.style.display = 'flex';
    } else {
      toTopBtn.style.display = 'none';
    }
  }
  window.addEventListener('scroll', updateToTopBtn);
  // Also check on cart open/close (populated in attachEvents etc.)
  [
    'cartDrawer', 'openCartBtn', 'closeCartBtn', 'cartBackdrop'
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => setTimeout(updateToTopBtn, 320));
  });
  // Initial
  updateToTopBtn();
  toTopBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  });
  toTopBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
  });
}


