// ========== EXTERNAL LINKS ==========
const SHOP_URL = "https://www.cheapdata.shop/shop/brivian-ltd";
const RESELLER_URL = "https://www.cheapdata.shop/shop/brivian-ltd/join";
const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029VbBi57OKgsNrDCV4zs1E";

// ========== BUNDLE DATA (with prices and 90-day validity) ==========
const bundles = [
    // MTN
    { id: "mtn-1gb", name: "MTN 1GB", network: "MTN", volume: "1 GB", price: 5.00, validity: "90 days", popular: true },
    { id: "mtn-2gb", name: "MTN 2GB", network: "MTN", volume: "2 GB", price: 10.00, validity: "90 days", popular: false },
    { id: "mtn-3gb", name: "MTN 3GB", network: "MTN", volume: "3 GB", price: 14.00, validity: "90 days", popular: false },
    { id: "mtn-4gb", name: "MTN 4GB", network: "MTN", volume: "4 GB", price: 19.50, validity: "90 days", popular: false },
    { id: "mtn-5gb", name: "MTN 5GB", network: "MTN", volume: "5 GB", price: 25.00, validity: "90 days", popular: false },
    { id: "mtn-6gb", name: "MTN 6GB", network: "MTN", volume: "6 GB", price: 29.50, validity: "90 days", popular: false },
    { id: "mtn-8gb", name: "MTN 8GB", network: "MTN", volume: "8 GB", price: 38.00, validity: "90 days", popular: false },
    { id: "mtn-10gb", name: "MTN 10GB", network: "MTN", volume: "10 GB", price: 45.00, validity: "90 days", popular: true },
    { id: "mtn-15gb", name: "MTN 15GB", network: "MTN", volume: "15 GB", price: 65.00, validity: "90 days", popular: false },
    { id: "mtn-20gb", name: "MTN 20GB", network: "MTN", volume: "20 GB", price: 85.00, validity: "90 days", popular: false },
    { id: "mtn-25gb", name: "MTN 25GB", network: "MTN", volume: "25 GB", price: 110.00, validity: "90 days", popular: false },
    { id: "mtn-30gb", name: "MTN 30GB", network: "MTN", volume: "30 GB", price: 126.00, validity: "90 days", popular: false },
    { id: "mtn-40gb", name: "MTN 40GB", network: "MTN", volume: "40 GB", price: 165.00, validity: "90 days", popular: false },
    { id: "mtn-50gb", name: "MTN 50GB", network: "MTN", volume: "50 GB", price: 208.00, validity: "90 days", popular: false },

    // Telecel (formerly Vodafone)
    { id: "telecel-10gb", name: "Telecel 10GB", network: "Telecel", volume: "10 GB", price: 41.00, validity: "90 days", popular: true },
    { id: "telecel-15gb", name: "Telecel 15GB", network: "Telecel", volume: "15 GB", price: 57.00, validity: "90 days", popular: false },
    { id: "telecel-20gb", name: "Telecel 20GB", network: "Telecel", volume: "20 GB", price: 76.00, validity: "90 days", popular: false },
    { id: "telecel-25gb", name: "Telecel 25GB", network: "Telecel", volume: "25 GB", price: 95.00, validity: "90 days", popular: false },
    { id: "telecel-30gb", name: "Telecel 30GB", network: "Telecel", volume: "30 GB", price: 110.00, validity: "90 days", popular: false },
    { id: "telecel-35gb", name: "Telecel 35GB", network: "Telecel", volume: "35 GB", price: 135.00, validity: "90 days", popular: false },
    { id: "telecel-40gb", name: "Telecel 40GB", network: "Telecel", volume: "40 GB", price: 147.00, validity: "90 days", popular: false },
    { id: "telecel-45gb", name: "Telecel 45GB", network: "Telecel", volume: "45 GB", price: 158.00, validity: "90 days", popular: false },
    { id: "telecel-50gb", name: "Telecel 50GB", network: "Telecel", volume: "50 GB", price: 182.00, validity: "90 days", popular: false },
    { id: "telecel-100gb", name: "Telecel 100GB", network: "Telecel", volume: "100 GB", price: 402.00, validity: "90 days", popular: false },

    // AirtelTigo
    { id: "airtel-1gb", name: "AirtelTigo 1GB", network: "AirtelTigo", volume: "1 GB", price: 4.50, validity: "90 days", popular: true },
    { id: "airtel-2gb", name: "AirtelTigo 2GB", network: "AirtelTigo", volume: "2 GB", price: 10.00, validity: "90 days", popular: false },
    { id: "airtel-3gb", name: "AirtelTigo 3GB", network: "AirtelTigo", volume: "3 GB", price: 14.00, validity: "90 days", popular: false },
    { id: "airtel-4gb", name: "AirtelTigo 4GB", network: "AirtelTigo", volume: "4 GB", price: 17.40, validity: "90 days", popular: false },
    { id: "airtel-5gb", name: "AirtelTigo 5GB", network: "AirtelTigo", volume: "5 GB", price: 20.50, validity: "90 days", popular: false },
    { id: "airtel-6gb", name: "AirtelTigo 6GB", network: "AirtelTigo", volume: "6 GB", price: 26.00, validity: "90 days", popular: false },
    { id: "airtel-8gb", name: "AirtelTigo 8GB", network: "AirtelTigo", volume: "8 GB", price: 34.00, validity: "90 days", popular: false },
    { id: "airtel-10gb", name: "AirtelTigo 10GB", network: "AirtelTigo", volume: "10 GB", price: 41.00, validity: "90 days", popular: true },
    { id: "airtel-12gb", name: "AirtelTigo 12GB", network: "AirtelTigo", volume: "12 GB", price: 48.00, validity: "90 days", popular: false }
];

// ========== RENDER HOME PAGE ==========
function renderHome(filterNetwork = "all", searchTerm = "") {
    let filtered = bundles;
    if (filterNetwork !== "all") filtered = filtered.filter(b => b.network === filterNetwork);
    if (searchTerm) filtered = filtered.filter(b => 
        b.name.toLowerCase().includes(searchTerm) || 
        b.volume.toLowerCase().includes(searchTerm)
    );

    const networks = ["all", "MTN", "Telecel", "AirtelTigo"];
    const filterButtons = networks.map(net => `
        <button class="filter-btn ${filterNetwork === net ? 'active' : ''}" data-network="${net}">
            ${net === "all" ? "All Networks" : net}
        </button>
    `).join('');

    const bundlesHtml = filtered.map(bundle => `
        <div class="bundle-card">
            <div class="card-header">
                <span class="network-badge">${bundle.network}</span>
                ${bundle.popular ? '<span class="popular-badge">🔥 Popular</span>' : ''}
            </div>
            <div class="bundle-name">${bundle.name}</div>
            <div class="bundle-meta">${bundle.volume} • ${bundle.validity}</div>
            <div class="bundle-price">₵${bundle.price.toFixed(2)}</div>
            <div style="margin-top: 1rem;">
                <a href="${SHOP_URL}" target="_blank" class="buy-btn">Buy Now →</a>
            </div>
        </div>
    `).join('');

    const emptyMsg = filtered.length === 0 ? '<div class="text-center text-gray-500 py-8">No bundles found. Try another filter.</div>' : '';

    return `
        <!-- Hero Section -->
        <div class="hero">
            <h1>Where Resellers Meet</h1>
            <div class="tagline">The #1 Platform for Buying & Selling Data Bundles in Ghana</div>
            <div class="whatsapp-badge">
                <i class="fab fa-whatsapp"></i> Join 40k+ members on WhatsApp
            </div>
        </div>

        <!-- Filter & Search -->
        <div class="filter-section">
            <div class="filter-tabs">
                ${filterButtons}
            </div>
            <div class="search-wrapper">
                <i class="fas fa-search"></i>
                <input type="text" id="searchInput" class="search-input" placeholder="Search by name or volume...">
            </div>
        </div>

        <!-- Bundles Grid -->
        <div class="bundles-grid">
            ${bundlesHtml || emptyMsg}
        </div>

        <!-- Ready to Get Started CTA -->
        <div class="cta-section">
            <h2>Ready to Get Started?</h2>
            <p>Choose your network and buy data in seconds.</p>
            <a href="${SHOP_URL}" target="_blank" class="btn-large">
                Buy Data Now <i class="fas fa-arrow-right"></i>
            </a>
        </div>

        <!-- WhatsApp Channel Card (40k members) -->
        <div class="whatsapp-card">
            <div class="info">
                <i class="fab fa-whatsapp"></i>
                <div>
                    <h3>Official WhatsApp Channel</h3>
                    <p>Get instant updates, promo codes & support</p>
                </div>
            </div>
            <div class="member-count">
                <i class="fas fa-users"></i> 40k+ members
            </div>
            <a href="${WHATSAPP_CHANNEL}" target="_blank">Join Channel →</a>
        </div>

        <!-- Reseller Promotion -->
        <div class="reseller-promo">
            <h3>🚀 Become a Data Reseller</h3>
            <p>Start your own data business. Earn profits on every sale. No activation fee.</p>
            <a href="${RESELLER_URL}" target="_blank" class="reseller-link">Join the Reseller Program →</a>
        </div>
    `;
}

// ========== ROUTING & EVENT HANDLERS ==========
function navigate(path) {
    const root = document.getElementById('app-root');
    if (path === '/' || path === '') {
        root.innerHTML = renderHome();
        attachHomeEvents();
    } else {
        // any other path redirects to home (simple SPA)
        navigate('/');
    }
}

function attachHomeEvents() {
    // Filter buttons
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const network = btn.dataset.network;
            const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
            document.getElementById('app-root').innerHTML = renderHome(network, searchTerm);
            attachHomeEvents();
        });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const activeFilter = document.querySelector('.filter-btn.active')?.dataset.network || 'all';
            document.getElementById('app-root').innerHTML = renderHome(activeFilter, term);
            attachHomeEvents();
        });
    }
}

// ========== NAVIGATION LINKS ==========
document.getElementById('navHome')?.addEventListener('click', (e) => {
    e.preventDefault();
    navigate('/');
});
document.getElementById('navBundles')?.addEventListener('click', (e) => {
    e.preventDefault();
    navigate('/');
});

// Handle browser back/forward
window.addEventListener('popstate', () => navigate(window.location.pathname));

// Initial load
navigate(window.location.pathname);
