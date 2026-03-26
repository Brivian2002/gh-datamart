// ========== EXTERNAL LINKS ==========
const SHOP_URL = "https://www.cheapdata.shop/shop/brivian-ltd";
const RESELLER_URL = "https://www.cheapdata.shop/shop/brivian-ltd/join";
const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029VbBi57OKgsNrDCV4zs1E";

// ========== BUNDLE DATA (NO PRICES) ==========
const bundles = [
    { id: "mtn-1gb", name: "MTN 1GB", network: "MTN", volume: "1 GB", validity: "24h", popular: true, description: "High speed 4G+ data." },
    { id: "mtn-3gb", name: "MTN 3GB", network: "MTN", volume: "3 GB", validity: "3d", popular: true },
    { id: "mtn-5gb", name: "MTN 5GB", network: "MTN", volume: "5 GB", validity: "7d", popular: false },
    { id: "mtn-10gb", name: "MTN 10GB", network: "MTN", volume: "10 GB", validity: "30d", popular: true },
    { id: "mtn-20gb", name: "MTN 20GB", network: "MTN", volume: "20 GB", validity: "30d", popular: false },
    { id: "vod-2gb", name: "Vodafone 2GB", network: "Vodafone", volume: "2 GB", validity: "24h", popular: false },
    { id: "vod-5gb", name: "Vodafone 5GB", network: "Vodafone", volume: "5 GB", validity: "7d", popular: true },
    { id: "vod-10gb", name: "Vodafone 10GB", network: "Vodafone", volume: "10 GB", validity: "30d", popular: true },
    { id: "vod-15gb", name: "Vodafone 15GB", network: "Vodafone", volume: "15 GB", validity: "30d", popular: false },
    { id: "airtel-1gb", name: "AirtelTigo 1GB", network: "AirtelTigo", volume: "1 GB", validity: "24h", popular: true },
    { id: "airtel-3gb", name: "AirtelTigo 3GB", network: "AirtelTigo", volume: "3 GB", validity: "3d", popular: false },
    { id: "airtel-5gb", name: "AirtelTigo 5GB", network: "AirtelTigo", volume: "5 GB", validity: "7d", popular: true },
    { id: "airtel-10gb", name: "AirtelTigo 10GB", network: "AirtelTigo", volume: "10 GB", validity: "30d", popular: false },
    { id: "glo-1gb", name: "Glo 1GB", network: "Glo", volume: "1 GB", validity: "24h", popular: true },
    { id: "glo-3gb", name: "Glo 3GB", network: "Glo", volume: "3 GB", validity: "3d", popular: false },
    { id: "glo-7gb", name: "Glo 7GB", network: "Glo", volume: "7 GB", validity: "14d", popular: true },
    { id: "glo-15gb", name: "Glo 15GB", network: "Glo", volume: "15 GB", validity: "30d", popular: false }
];

// ========== RENDER HOME PAGE ==========
function renderHome(filterNetwork = "all", searchTerm = "") {
    let filtered = bundles;
    if (filterNetwork !== "all") filtered = filtered.filter(b => b.network === filterNetwork);
    if (searchTerm) filtered = filtered.filter(b => 
        b.name.toLowerCase().includes(searchTerm) || 
        b.volume.toLowerCase().includes(searchTerm)
    );

    const networks = ["all", "MTN", "Vodafone", "AirtelTigo", "Glo"];
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
