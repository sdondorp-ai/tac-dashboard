// Shared navigation for TAC Dashboard
const NAV_ITEMS = [
  { id: 'index', label: 'Dashboard', icon: '▦', href: 'index.html' },
  { id: 'publishers', label: 'Publishers', icon: '◈', href: 'publishers.html' },
  { id: 'advertisers', label: 'Adverteerders', icon: '◉', href: 'advertisers.html' },
  { id: 'prospects', label: 'Prospects & CRM', icon: '◎', href: 'prospects.html' },
  { id: 'matching', label: 'Campaign Matching', icon: '⟷', href: 'matching.html' },
];

function renderNav(activeId) {
  const nav = document.getElementById('mainNav');
  if (!nav) return;
  nav.innerHTML = NAV_ITEMS.map(item => `
    <a href="${item.href}" class="nav-item ${item.id === activeId ? 'active' : ''}">
      <span class="nav-icon">${item.icon}</span>
      <span class="nav-label">${item.label}</span>
    </a>
  `).join('');
}

// Shared storage helpers (localStorage wrapper)
const DB = {
  get(key) { try { return JSON.parse(localStorage.getItem('tac_' + key) || 'null'); } catch { return null; } },
  set(key, val) { try { localStorage.setItem('tac_' + key, JSON.stringify(val)); return true; } catch { return false; } },
  keys() { return Object.keys(localStorage).filter(k => k.startsWith('tac_')).map(k => k.slice(4)); }
};
