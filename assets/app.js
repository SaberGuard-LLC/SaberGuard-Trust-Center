document.addEventListener('DOMContentLoaded', () => {
const $ = s => document.querySelector(s);
let data = {};
try {
data = JSON.parse(document.getElementById('trustData').textContent);
} catch(e) {
console.error('JSON parse error', e);
}

// Theme toggle
$('#themeToggle')?.addEventListener('click', () => {
document.documentElement.classList.toggle('dark');
try {
localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
} catch{}
});

// Download/Print button
$('#downloadBtn')?.addEventListener('click', () => window.print());

// Meta information
const dt = new Date(data.meta?.last_updated || Date.now());
$('#quickVersion').textContent = data.meta?.program_version || '';
$('#quickUpdated').textContent = dt.toLocaleString(undefined, { month:'short', year:'numeric' });
$('#quickContact').textContent = data.meta?.contact || '';
$('#year').textContent = new Date().getFullYear();

// Logo
if (data.meta?.logo_url) {
const l=$('#navLogo');
if (l) {
l.src=data.meta.logo_url;
l.alt=data.meta.org || 'Logo';
}
}

// Status badges
const statusWrap = $('#statusBadges');
(data.status_badges||[]).forEach(b => {
const pill = document.createElement('span');
pill.className = 'inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ' +
(b.color==='green' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300' :
b.color==='purple'? 'bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300' :
'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300');
pill.textContent = b.label;
statusWrap?.appendChild(pill);
});

// Icons library
const icons = {
key:"<svg class='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'><path d='M21 10a4 4 0 1 0-7.75 1H3v3h4v3h3v-3h3.25A4 4 0 0 0 21 10zM9 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4z'/></svg>",
shield:"<svg class='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2l7 3v5c0 5-3.3 9.6-7 11-3.7-1.4-7-6-7-11V5l7-3z'/></svg>",
clipboard:"<svg class='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'><path d='M9 2h6v2h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3V2zm2 0h2v2h-2V2z'/></svg>",
alert:"<svg class='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2 1 21h22L12 2zm1 15h-2v2h2v-2zm0-8h-2v6h2V9z'/></svg>",
database:"<svg class='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'><path d='M12 2C7 2 3 3.79 3 6v12c0 2.21 4 4 9 4s9-1.79 9-4V6c0-2.21-4-4-9-4zM5 8c0 .73 2.69 2 7 2s7-1.27 7-2v2c0 .73-2.69 2-7 2s-7-1.27-7-2V8zm0 6c0 .73 2.69 2 7 2s7-1.27 7-2v2c0 .73-2.69 2-7 2s-7-1.27-7-2v-2z'/></svg>",
laptop:"<svg class='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'><path d='M4 5h16v10H4z'/><path d='M2 17h20v2H2z'/></svg>",
mail:"<svg class='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'><path d='M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z'/></svg>",
code:"<svg class='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'><path d='m8 17-5-5 5-5 1.5 1.5L6 12l3.5 3.5L8 17zm8 0-1.5-1.5L18 12l-3.5-3.5L16 7l5 5-5 5z'/></svg>",
book:"<svg class='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'><path d='M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12V2zM8 6h6v2H8V6z'/></svg>",
server:"<svg class='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'><path d='M3 3h18v6H3zM3 15h18v6H3zM7 6h2v2H7zM7 18h2v2H7z'/></svg>",
layers:"<svg class='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'><path d='m12 2 10 6-10 6L2 8l10-6zm0 9 8.5 5.1L12 21 3.5 16.1 12 11z'/></svg>",
users:"<svg class='w-4 h-4' viewBox='0 0 24 24' fill='currentColor'><path d='M16 11c1.66 0 3-1.34 3-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 13c2.33 0 7 1.17 7 3.5V19H1v-2.5C1 14.17 5.67 13 8 13z'/></svg>"
};

// Security Domains
const domainsC = document.getElementById('domainsContainer');
(data.domains||[]).forEach(d => {
const card = document.createElement('div');
card.className = 'bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-soft';
card.innerHTML = `<div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">${icons[d.icon]||''}<span>${d.title}</span></div><ul class="space-y-2 text-sm">${d.points.map(p=>`<li class="flex items-start gap-2"><span class="mt-1 w-1.5 h-1.5 rounded-full bg-brand-600"></span><span>${p}</span></li>`).join('')}</ul>`;
domainsC?.appendChild(card);
});

// Controls Library
const controlsGrid = $('#controlsGrid');
(data.controls_library||[]).forEach(sec => {
const card = document.createElement('div');
card.className = 'bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-soft';
card.innerHTML = `<div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">${icons[sec.icon]||''}<span class="font-medium">${sec.group}</span></div><ul class="space-y-2 text-sm">${sec.controls.map(c=>`<li class="flex items-start gap-2"><span class="mt-1 w-1.5 h-1.5 rounded-full bg-blue-600"></span><span>${c}</span></li>`).join('')}</ul>`;
controlsGrid?.appendChild(card);
});

// CSV Export
$('#exportControls')?.addEventListener('click', () => {
const rows = [['Group','Control']];
(data.controls_library||[]).forEach(sec => sec.controls.forEach(c => rows.push([sec.group, c])));
const csv = rows.map(r => r.map(x => `"${String(x).replace(/"/g,'""')}"`).join(',')).join('\n');
const blob = new Blob([csv], {type:'text/csv'});
const a = document.createElement('a');
a.href = URL.createObjectURL(blob);
a.download = 'saberguard-controls.csv';
a.click();
});

// Certifications
const certGrid = $('#certificationsGrid');
(data.certifications||[]).forEach(c => {
const color = c.badge_color==='green' ? 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300' : 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300';
const card = document.createElement('div');
card.className = 'bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-soft';
card.innerHTML = `<div class="flex items-start justify-between gap-3"><div><div class="text-sm ${color} inline-flex px-2.5 py-1 rounded-full mb-2">${c.status}</div><h3 class="font-semibold">${c.title}</h3><p class="text-sm text-gray-600 dark:text-gray-400 mt-1">${c.description}</p></div><div class="text-xs text-gray-500">Last review: ${c.last_review||'â€”'}</div></div>`;
certGrid?.appendChild(card);
});

// Timeline
const tlGrid = $('#timelineGrid');
(data.timeline||[]).forEach(q => {
const card = document.createElement('div');
card.className = 'bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 shadow-soft';
card.innerHTML = `<div class="text-xs text-gray-500 mb-2">${q.quarter}</div><ul class="space-y-2 text-sm">${q.activities.map(a => `<li class="flex items-start gap-2"><span class="mt-1 w-1.5 h-1.5 rounded-full bg-purple-600"></span><span>${a}</span></li>`).join('')}</ul>`;
tlGrid?.appendChild(card);
});

// Evidence
const evList = $('#evidenceList');
(data.evidence||[]).forEach(e => {
const li = document.createElement('li');
li.className = 'p-4 rounded-lg border border-gray-200 dark:border-gray-800';
li.innerHTML = `<div class="flex items-center justify-between gap-3"><div><div class="font-medium">${e.title}</div><div class="text-sm text-gray-600 dark:text-gray-400">${e.description||''}</div></div><span class="text-xs px-2.5 py-1 rounded-full ${e.status?.includes('Available')||e.status?.includes('Target') ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-300' : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300'}">${e.status||'â€”'}</span></div>`;
evList?.appendChild(li);
});

// Request Access button
$('#requestAccess')?.addEventListener('click', () => {
window.location.href = `mailto:${encodeURIComponent(data.meta?.contact||'security@saberguard.tech')}?subject=${encodeURIComponent('Request: Evidence Access (NDA/BAA)')}`;
});

// Commitment
const commit = $('#commitmentList');
(data.commitment||[]).forEach(c => {
const row = document.createElement('div');
row.className = 'flex items-start gap-3';
row.innerHTML = `<span class="mt-1 w-1.5 h-1.5 rounded-full bg-brand-600"></span><span class="text-sm">${c.text}</span>`;
commit?.appendChild(row);
});

// Theme preference
try {
const saved = localStorage.getItem('theme');
if (saved === 'dark') {
document.documentElement.classList.add('dark');
} else if (!saved) {
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
if (prefersDark) document.documentElement.classList.add('dark');
}
} catch {}
});