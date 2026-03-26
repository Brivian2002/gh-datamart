// ========== CONFIGURATION ==========
const SHOP_URL = "https://www.cheapdata.shop/shop/brivian-ltd";
const WHATSAPP_CHANNEL_URL = "https://whatsapp.com/channel/0029VbBi57OKgsNrDCV4zs1E-";

// Bundle data
const bundles = [
    { id: "mtn-1gb", name: "MTN 1GB", network: "MTN", volume: "1 GB", price: 4.50, validity: "24 hours", popular: true, description: "High speed 4G+ data for MTN. Perfect for daily browsing." },
    { id: "mtn-3gb", name: "MTN 3GB", network: "MTN", volume: "3 GB", price: 11.00, validity: "3 days", popular: true, description: "Social media & streaming pack." },
    { id: "mtn-5gb", name: "MTN 5GB", network: "MTN", volume: "5 GB", price: 17.50, validity: "7 days", popular: false, description: "Weekly heavy usage bundle." },
    { id: "mtn-10gb", name: "MTN 10GB", network: "MTN", volume: "10 GB", price: 32.00, validity: "30 days", popular: true, description: "Best value monthly plan." },
    { id: "mtn-20gb", name: "MTN 20GB", network: "MTN", volume: "20 GB", price: 60.00, validity: "30 days", popular: false, description: "Reseller favorite." },
    { id: "vod-2gb", name: "Vodafone 2GB", network: "Vodafone", volume: "2 GB", price: 6.00, validity: "24 hours", popular: false, description: "Fast Vodafone data." },
    { id: "vod-5gb", name: "Vodafone 5GB", network: "Vodafone", volume: "5 GB", price: 14.00, validity: "7 days", popular: true, description: "Weekly pack." },
    { id: "vod-10gb", name: "Vodafone 10GB", network: "Vodafone", volume: "10 GB", price: 26.00, validity: "30 days", popular: true, description: "Monthly bundle, unlimited streaming." },
    { id: "vod-15gb", name: "Vodafone 15GB", network: "Vodafone", volume: "15 GB", price: 38.00, validity: "30 days", popular: false, description: "Reseller pack." },
    { id: "airtel-1gb", name: "AirtelTigo 1GB", network: "AirtelTigo", volume: "1 GB", price: 3.80, validity: "24 hours", popular: true, description: "Cheapest 1GB." },
    { id: "airtel-3gb", name: "AirtelTigo 3GB", network: "AirtelTigo", volume: "3 GB", price: 10.00, validity: "3 days", popular: false, description: "Flexible data." },
    { id: "airtel-5gb", name: "AirtelTigo 5GB", network: "AirtelTigo", volume: "5 GB", price: 15.50, validity: "7 days", popular: true, description: "Weekly bestseller." },
    { id: "airtel-10gb", name: "AirtelTigo 10GB", network: "AirtelTigo", volume: "10 GB", price: 28.00, validity: "30 days", popular: false, description: "Super saver monthly." },
    { id: "glo-1gb", name: "Glo 1GB", network: "Glo", volume: "1 GB", price: 3.50, validity: "24 hours", popular: true, description: "Glo extra value." },
    { id: "glo-3gb", name: "Glo 3GB", network: "Glo", volume: "3 GB", price: 9.00, validity: "3 days", popular: false, description: "Daily social." },
    { id: "glo-7gb", name: "Glo 7GB", network: "Glo", volume: "7 GB", price: 18.00, validity: "14 days", popular: true, description: "High speed data." },
    { id: "glo-15gb", name: "Glo 15GB", network: "Glo", volume: "15 GB", price: 35.00, validity: "30 days", popular: false, description: "Reseller bulk pack." },
    { id: "mtn-40gb", name: "MTN 40GB", network: "MTN", volume: "40 GB", price: 110.00, validity: "60 days", popular: false, description: "Wholesale reseller bundle." }
];

function getBundleUrl(bundleId) {
    // Return the same shop URL for all bundles (or map individually if needed)
    return SHOP_URL;
}

function renderHome(filterNetwork = "all", searchTerm = "") {
    let filtered = bundles;
    if (filterNetwork !== "all") {
        filtered = filtered.filter(b => b.network === filterNetwork);
    }
    if (searchTerm) {
        filtered = filtered.filter(b => 
            b.name.toLowerCase().includes(searchTerm) || 
            b.volume.toLowerCase().includes(searchTerm)
        );
    }

    const networks = ["all", "MTN", "Vodafone", "AirtelTigo", "Glo"];
    const filterButtons = networks.map(net => `
        <button class="filter-btn ${filterNetwork === net ? 'active' : ''}" data-network="${net}">
            ${net === "all" ? "All Networks" : net}
        </button>
    `).join('');

    const bundlesHtml = filtered.map(bundle => {
        const bundleUrl = getBundleUrl(bundle.id);
        return `
            <div class="bundle-card">
                <div class="card-header">
                    <span class="network-badge">${bundle.network}</span>
                    ${bundle.popular ? '<span class="popular-badge">🔥 Popular</span>' : ''}
                </div>
                <div class="bundle-name">${bundle.name}</div>
                <div class="bundle-meta">${bundle.volume} • ${bundle.validity}</div>
                <div class="bundle-price">₵${bundle.price.toFixed(2)}</div>
                <div class="card-actions">
                    <a href="/bundle/${bundle.id}" class="view-detail">View details →</a>
                    <a href="${bundleUrl}" target="_blank" rel="noopener noreferrer" class="buy-btn">Buy</a>
                </div>
            </div>
        `;
    }).join('');

    const emptyMessage = filtered.length === 0 ? '<div class="col-span-full text-center text-gray-500">No bundles found. Try another filter.</div>' : '';

    return `
        <div class="hero">
            <h1>GHDatamart</h1>
            <p>Wholesale data bundles • All networks Ghana • 10-45 min delivery</p>
        </div>
        <div class="filter-tabs">
            ${filterButtons}
        </div>
        <div class="search-wrapper">
            <i class="fas fa-search"></i>
            <input type="text" id="searchInput" class="search-input" placeholder="Search by volume or name...">
        </div>
        <div class="bundles-grid">
            ${bundlesHtml || emptyMessage}
        </div>
        <div class="reseller-cta">
            <h3>🚀 Become a reseller & unlock API access</h3>
            <p>Join 40k+ resellers and earn extra profit per bundle.</p>
            <a href="${SHOP_URL}" target="_blank" class="btn-primary">Join Reseller Program →</a>
        </div>
    `;
}

function renderDetail(bundle) {
    const bundleUrl = getBundleUrl(bundle.id);
    return `
        <div class="detail-card">
            <a href="/" class="view-detail" style="display: inline-block; margin-bottom: 1rem;">← Back to home</a>
            <h1>${bundle.name}</h1>
            <div class="bundle-meta">${bundle.volume} • ${bundle.validity}</div>
            <div class="detail-price">₵${bundle.price.toFixed(2)}</div>
            <p>${bundle.description}</p>
            <div style="margin-top: 2rem;">
                <a href="${bundleUrl}" target="_blank" class="btn-primary">Buy Now →</a>
            </div>
        </div>
    `;
}

function navigate(path) {
    const root = document.getElementById('app-root');
    if (path === '/' || path === '') {
        root.innerHTML = renderHome();
        attachHomeEvents();
    } else if (path.startsWith('/bundle/')) {
        const id = path.split('/bundle/')[1];
        const bundle = bundles.find(b => b.id === id);
        if (bundle) {
            root.innerHTML = renderDetail(bundle);
        } else {
            navigate('/');
        }
    } else {
        navigate('/');
    }
}

function attachHomeEvents() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const network = btn.dataset.network;
            const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
            document.getElementById('app-root').innerHTML = renderHome(network, searchTerm);
            attachHomeEvents();
        });
    });

    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const activeFilter = document.querySelector('.filter-btn.active')?.dataset.network || 'all';
            document.getElementById('app-root').innerHTML = renderHome(activeFilter, term);
            attachHomeEvents();
        });
    }

    document.querySelectorAll('.view-detail').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            if (href) navigate(href);
        });
    });
}

document.getElementById('navHome')?.addEventListener('click', (e) => {
    e.preventDefault();
    navigate('/');
});
document.getElementById('navBundles')?.addEventListener('click', (e) => {
    e.preventDefault();
    navigate('/');
});

// WhatsApp button now opens your channel
document.getElementById('whatsappBtn')?.addEventListener('click', () => {
    window.open(WHATSAPP_CHANNEL_URL, '_blank');
});

window.addEventListener('popstate', () => {
    navigate(window.location.pathname);
});

navigate(window.location.pathname);
