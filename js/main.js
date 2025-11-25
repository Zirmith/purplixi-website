// ==================== Navigation ==================== //

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenuToggle.querySelector('i');
        icon.classList.toggle('ri-menu-line');
        icon.classList.toggle('ri-close-line');
    });
}

// Theme toggle
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const savedTheme = localStorage.getItem('theme') || 'dark';

if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });
}

// Active nav link
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Close mobile menu if open
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = mobileMenuToggle.querySelector('i');
                icon.classList.add('ri-menu-line');
                icon.classList.remove('ri-close-line');
            }
        }
    });
});

// ==================== Scroll to Top ==================== //

const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('visible');
    } else {
        scrollTopBtn.classList.remove('visible');
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== Scroll Reveal Animations ==================== //

const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

function checkReveal() {
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', checkReveal);
window.addEventListener('load', checkReveal);

// ==================== Intersection Observer for Animations ==================== //

const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .screenshot-card, .platform-card').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ==================== Counter Animation ==================== //

function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

// Animate stats when they come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValues = entry.target.querySelectorAll('.stat-value');
            statValues.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text);
                if (!isNaN(number) && !stat.classList.contains('animated')) {
                    stat.classList.add('animated');
                    animateCounter(stat, number);
                }
            });
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ==================== Typing Effect ==================== //

function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ==================== Parallax Effect ==================== //

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        const speed = 0.05 + (index * 0.02);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== Mobile Menu Styles (Dynamic) ==================== //

const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu.active {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(10, 10, 15, 0.98);
            backdrop-filter: blur(12px);
            padding: 24px;
            border-bottom: 1px solid var(--border-light);
            gap: 16px;
        }
        
        .nav-menu.active .nav-link {
            padding: 12px 0;
            font-size: 16px;
        }
    }
`;
document.head.appendChild(style);

// ==================== Initialize ==================== //

document.addEventListener('DOMContentLoaded', () => {
    // Initial animations
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // Log for debugging
    console.log('Purplixi Website loaded successfully');
});

// ==================== Utility Functions ==================== //

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Apply throttle to scroll events
window.addEventListener('scroll', throttle(() => {
    updateActiveNav();
    checkReveal();
}, 100));


// ===== Live Players WebSocket Connection =====

const API_SERVER_URL = 'localhost:3000'; // Change this to your deployed API URL
let ws = null;
let reconnectInterval = null;

function connectWebSocket() {
    const connectionStatus = document.getElementById('connection-status');
    if (!connectionStatus) return;
    
    connectionStatus.classList.add('connecting');
    connectionStatus.querySelector('.status-text').textContent = 'Connecting...';
    
    try {
        ws = new WebSocket(`ws://${API_SERVER_URL}/ws`);
        
        ws.onopen = () => {
            console.log('Connected to API server');
            connectionStatus.classList.remove('connecting');
            connectionStatus.classList.add('connected');
            connectionStatus.querySelector('.status-text').textContent = 'Connected';
            
            // Clear reconnect interval if exists
            if (reconnectInterval) {
                clearInterval(reconnectInterval);
                reconnectInterval = null;
            }
            
            // Fetch initial statistics
            fetchStatistics();
        };
        
        ws.onmessage = (event) => {
            try {
                const data = JSON.parse(event.data);
                handleWebSocketMessage(data);
            } catch (error) {
                console.error('Error parsing WebSocket message:', error);
            }
        };
        
        ws.onerror = (error) => {
            console.error('WebSocket error:', error);
        };
        
        ws.onclose = () => {
            console.log('Disconnected from API server');
            connectionStatus.classList.remove('connected', 'connecting');
            connectionStatus.querySelector('.status-text').textContent = 'Disconnected';
            
            // Attempt to reconnect every 5 seconds
            if (!reconnectInterval) {
                reconnectInterval = setInterval(() => {
                    console.log('Attempting to reconnect...');
                    connectWebSocket();
                }, 5000);
            }
        };
    } catch (error) {
        console.error('Failed to create WebSocket connection:', error);
        connectionStatus.classList.remove('connecting');
        connectionStatus.querySelector('.status-text').textContent = 'Failed';
    }
}

function handleWebSocketMessage(data) {
    switch (data.type) {
        case 'initial':
        case 'player_connected':
        case 'player_disconnected':
        case 'player_updated':
        case 'cleanup':
            updatePlayersList(data.players, data.count);
            break;
        default:
            console.log('Unknown message type:', data.type);
    }
}

function updatePlayersList(players, count) {
    const onlineCountEl = document.getElementById('online-count');
    const playersListEl = document.getElementById('players-list');
    
    if (!playersListEl) return;
    
    // Update online count
    if (onlineCountEl) {
        onlineCountEl.textContent = count;
    }
    
    // Clear current list
    playersListEl.innerHTML = '';
    
    if (players.length === 0) {
        playersListEl.innerHTML = `
            <div class="no-players">
                <i class="ri-user-search-line"></i>
                <p>No players online right now</p>
                <small>Be the first to launch!</small>
            </div>
        `;
        return;
    }
    
    // Add player cards
    players.forEach(player => {
        const playerCard = createPlayerCard(player);
        playersListEl.appendChild(playerCard);
    });
}

function createPlayerCard(player) {
    const card = document.createElement('div');
    card.className = 'player-card';
    
    const username = player.username || 'Anonymous';
    const sessionDuration = formatDuration(player.session_duration);
    
    // Use mc-heads.net API for player avatar
    const avatarUrl = username !== 'Anonymous' 
        ? `https://mc-heads.net/avatar/${username}/48`
        : null;
    
    // Get game mode icon and text
    const gameModeInfo = getGameModeInfo(player.game_mode);
    
    let detailsHTML = '';
    
    // Add game mode status
    if (player.game_mode) {
        detailsHTML += `
            <div class="player-detail game-mode-detail">
                <i class="${gameModeInfo.icon}" style="color: ${gameModeInfo.color};"></i>
                <span>${gameModeInfo.text}</span>
            </div>
        `;
    }
    
    // Add version if available
    if (player.minecraft_version) {
        detailsHTML += `
            <div class="player-detail">
                <i class="ri-gamepad-line"></i>
                <span>Minecraft <span class="player-detail-value">${player.minecraft_version}</span></span>
            </div>
        `;
    }
    
    // Add world name if available (singleplayer)
    if (player.world_name) {
        detailsHTML += `
            <div class="player-detail">
                <i class="ri-map-pin-line"></i>
                <span>World: <span class="player-detail-value">${escapeHtml(player.world_name)}</span></span>
            </div>
        `;
    }
    
    // Add server address if available (multiplayer)
    if (player.server_address) {
        detailsHTML += `
            <div class="player-detail">
                <i class="ri-server-line"></i>
                <span>Server: <span class="player-detail-value">${escapeHtml(player.server_address)}</span></span>
            </div>
        `;
    }
    
    // Add session duration
    if (sessionDuration) {
        detailsHTML += `
            <div class="player-detail">
                <i class="ri-time-line"></i>
                <span>Playing for <span class="player-detail-value">${sessionDuration}</span></span>
            </div>
        `;
    }
    
    card.innerHTML = `
        <div class="player-header">
            <div class="player-avatar-container">
                ${avatarUrl 
                    ? `<img src="${avatarUrl}" alt="${username}" class="player-avatar-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                       <div class="player-avatar-fallback" style="display: none;">${username.substring(0, 2).toUpperCase()}</div>`
                    : `<div class="player-avatar-fallback">${username.substring(0, 2).toUpperCase()}</div>`
                }
            </div>
            <div class="player-info">
                <div class="player-name">${escapeHtml(username)}</div>
                <div class="player-status">
                    <span class="status-indicator ${player.game_mode === 'playing' ? 'status-playing' : 'status-online'}"></span>
                    <span>${gameModeInfo.status}</span>
                </div>
            </div>
        </div>
        ${detailsHTML ? `<div class="player-details">${detailsHTML}</div>` : ''}
    `;
    
    return card;
}

function getGameModeInfo(gameMode) {
    switch (gameMode) {
        case 'singleplayer':
            return {
                icon: 'ri-user-line',
                text: 'Playing Singleplayer',
                status: 'In Game',
                color: '#10b981'
            };
        case 'multiplayer':
            return {
                icon: 'ri-team-line',
                text: 'Playing Multiplayer',
                status: 'In Game',
                color: '#3b82f6'
            };
        case 'menu':
            return {
                icon: 'ri-layout-grid-line',
                text: 'In Main Menu',
                status: 'In Menu',
                color: '#f59e0b'
            };
        case 'idle':
            return {
                icon: 'ri-moon-line',
                text: 'Idle',
                status: 'Idle',
                color: '#71717a'
            };
        case 'playing':
            return {
                icon: 'ri-gamepad-line',
                text: 'Playing',
                status: 'In Game',
                color: '#10b981'
            };
        default:
            return {
                icon: 'ri-checkbox-blank-circle-line',
                text: 'Online',
                status: 'Online',
                color: '#8b5cf6'
            };
    }
}

function getStatusText(status) {
    switch (status) {
        case 'playing':
            return 'In Game';
        case 'online':
            return 'Online';
        case 'idle':
            return 'Idle';
        default:
            return 'Online';
    }
}

function formatDuration(seconds) {
    if (!seconds) return null;
    
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    
    if (hours > 0) {
        return `${hours}h ${minutes}m`;
    } else if (minutes > 0) {
        return `${minutes}m`;
    } else {
        return `${seconds}s`;
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

async function fetchStatistics() {
    try {
        const response = await fetch(`http://${API_SERVER_URL}/api/stats`);
        const data = await response.json();
        
        if (data.success) {
            const stats = data.statistics;
            
            // Update statistics
            const totalLaunchesEl = document.getElementById('total-launches');
            const totalPlaytimeEl = document.getElementById('total-playtime');
            
            if (totalLaunchesEl) {
                totalLaunchesEl.textContent = formatNumber(stats.total_launches || 0);
            }
            
            if (totalPlaytimeEl) {
                const hours = Math.floor((stats.total_playtime || 0) / 3600);
                totalPlaytimeEl.textContent = formatNumber(hours) + 'h';
            }
        }
    } catch (error) {
        console.error('Failed to fetch statistics:', error);
    }
}

function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
}

// Connect to WebSocket when page loads
if (document.getElementById('players-list')) {
    connectWebSocket();
    
    // Refresh statistics every 30 seconds
    setInterval(fetchStatistics, 30000);
}

// Disconnect WebSocket when page unloads
window.addEventListener('beforeunload', () => {
    if (ws) {
        ws.close();
    }
    if (reconnectInterval) {
        clearInterval(reconnectInterval);
    }
});
