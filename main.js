// Linux Command Handbook - Main JavaScript File
// Handles all interactive functionality across the website

// Global variables
let commandDatabase = [];
let searchIndex = [];
let userProgress = {};

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load command database
    loadCommandDatabase();
    
    // Setup search functionality
    setupSearch();
    
    // Setup animations
    setupAnimations();
    
    // Setup keyboard shortcuts
    setupKeyboardShortcuts();
    
    // Load user progress
    loadUserProgress();
    
    // Initialize page-specific functionality
    const currentPage = getCurrentPage();
    switch(currentPage) {
        case 'index':
            initializeIndexPage();
            break;
        case 'commands':
            initializeCommandsPage();
            break;
        case 'scripting':
            initializeScriptingPage();
            break;
        case 'examples':
            initializeExamplesPage();
            break;
    }
}

function getCurrentPage() {
    const path = window.location.pathname;
    if (path.includes('commands.html')) return 'commands';
    if (path.includes('scripting.html')) return 'scripting';
    if (path.includes('examples.html')) return 'examples';
    return 'index';
}

// Command Database
function loadCommandDatabase() {
    commandDatabase = [
        // Basic Commands
        { name: 'ls', category: 'basic', difficulty: 'beginner', description: 'List directory contents', example: 'ls -lah /var/log', syntax: 'ls [OPTIONS] [DIRECTORY]', tags: ['files', 'directory'] },
        { name: 'cd', category: 'basic', difficulty: 'beginner', description: 'Change directory', example: 'cd /var/log', syntax: 'cd [DIRECTORY]', tags: ['navigation'] },
        { name: 'pwd', category: 'basic', difficulty: 'beginner', description: 'Print working directory', example: 'pwd', syntax: 'pwd', tags: ['navigation'] },
        { name: 'mkdir', category: 'basic', difficulty: 'beginner', description: 'Create directory', example: 'mkdir -p /app/config/env', syntax: 'mkdir [OPTIONS] DIRECTORY', tags: ['files', 'directory'] },
        { name: 'rm', category: 'basic', difficulty: 'intermediate', description: 'Remove files/directories', example: 'rm -rf /tmp/cache', syntax: 'rm [OPTIONS] FILE...', tags: ['files', 'delete'] },
        { name: 'cp', category: 'basic', difficulty: 'intermediate', description: 'Copy files/directories', example: 'cp -r /src /dest', syntax: 'cp [OPTIONS] SOURCE DEST', tags: ['files', 'copy'] },
        { name: 'mv', category: 'basic', difficulty: 'intermediate', description: 'Move or rename files', example: 'mv old.txt new.txt', syntax: 'mv [OPTIONS] SOURCE DEST', tags: ['files', 'move'] },
        { name: 'touch', category: 'basic', difficulty: 'beginner', description: 'Create empty file or update timestamp', example: 'touch app.log', syntax: 'touch [OPTIONS] FILE...', tags: ['files'] },
        { name: 'cat', category: 'basic', difficulty: 'beginner', description: 'Display file contents', example: 'cat /etc/hosts', syntax: 'cat [OPTIONS] FILE...', tags: ['files', 'view'] },
        { name: 'less', category: 'basic', difficulty: 'beginner', description: 'View file with pagination', example: 'less /var/log/syslog', syntax: 'less [OPTIONS] FILE', tags: ['files', 'view'] },
        { name: 'head', category: 'basic', difficulty: 'beginner', description: 'Display first lines of file', example: 'head -n 20 error.log', syntax: 'head [OPTIONS] FILE...', tags: ['files', 'view'] },
        { name: 'tail', category: 'basic', difficulty: 'intermediate', description: 'Display last lines of file', example: 'tail -f /var/log/nginx/access.log', syntax: 'tail [OPTIONS] FILE...', tags: ['files', 'view', 'monitor'] },
        
        // Networking Commands
        { name: 'ip', category: 'networking', difficulty: 'intermediate', description: 'Show IP addresses and network configuration', example: 'ip addr show', syntax: 'ip [OPTIONS] OBJECT COMMAND', tags: ['network', 'ip'] },
        { name: 'ping', category: 'networking', difficulty: 'beginner', description: 'Test network connectivity', example: 'ping -c 4 google.com', syntax: 'ping [OPTIONS] DESTINATION', tags: ['network', 'connectivity'] },
        { name: 'ssh', category: 'networking', difficulty: 'intermediate', description: 'Secure shell login', example: 'ssh -i key.pem user@server -p 2222', syntax: 'ssh [OPTIONS] [USER@]HOST [COMMAND]', tags: ['network', 'remote', 'security'] },
        { name: 'curl', category: 'networking', difficulty: 'intermediate', description: 'Transfer data from/to server', example: 'curl -I https://api.example.com', syntax: 'curl [OPTIONS] URL', tags: ['network', 'http', 'api'] },
        { name: 'wget', category: 'networking', difficulty: 'beginner', description: 'Download files', example: 'wget -c https://releases.ubuntu.com/file.iso', syntax: 'wget [OPTIONS] URL', tags: ['network', 'download'] },
        { name: 'netstat', category: 'networking', difficulty: 'advanced', description: 'Network statistics', example: 'netstat -tuln', syntax: 'netstat [OPTIONS]', tags: ['network', 'ports'] },
        { name: 'ss', category: 'networking', difficulty: 'intermediate', description: 'Socket statistics (modern netstat)', example: 'ss -tulpn', syntax: 'ss [OPTIONS]', tags: ['network', 'ports'] },
        { name: 'dig', category: 'networking', difficulty: 'intermediate', description: 'DNS lookup utility', example: 'dig google.com +short', syntax: 'dig [OPTIONS] NAME', tags: ['network', 'dns'] },
        { name: 'iptables', category: 'networking', difficulty: 'advanced', description: 'Configure firewall rules', example: 'iptables -L -n -v', syntax: 'iptables [OPTIONS]', tags: ['network', 'firewall', 'security'] },
        { name: 'nmap', category: 'networking', difficulty: 'advanced', description: 'Network scanning tool', example: 'nmap -sV 192.168.1.0/24', syntax: 'nmap [OPTIONS] [TARGET...]', tags: ['network', 'scanning', 'security'] },
        
        // Process Management
        { name: 'ps', category: 'process', difficulty: 'beginner', description: 'Display running processes', example: 'ps aux', syntax: 'ps [OPTIONS]', tags: ['process', 'monitoring'] },
        { name: 'top', category: 'process', difficulty: 'intermediate', description: 'Real-time process monitoring', example: 'top', syntax: 'top [OPTIONS]', tags: ['process', 'monitoring'] },
        { name: 'htop', category: 'process', difficulty: 'intermediate', description: 'Interactive process viewer', example: 'htop', syntax: 'htop [OPTIONS]', tags: ['process', 'monitoring'] },
        { name: 'kill', category: 'process', difficulty: 'intermediate', description: 'Terminate process by PID', example: 'kill -9 1234', syntax: 'kill [OPTIONS] PID...', tags: ['process', 'terminate'] },
        { name: 'systemctl', category: 'process', difficulty: 'intermediate', description: 'Control systemd services', example: 'systemctl status nginx', syntax: 'systemctl [OPTIONS] COMMAND [NAME...]', tags: ['service', 'systemd'] },
        { name: 'journalctl', category: 'process', difficulty: 'advanced', description: 'Query systemd journal logs', example: 'journalctl -u nginx -f', syntax: 'journalctl [OPTIONS] [MATCHES...]', tags: ['logs', 'systemd'] },
        { name: 'crontab', category: 'process', difficulty: 'intermediate', description: 'Schedule periodic tasks', example: 'crontab -e', syntax: 'crontab [OPTIONS] [FILE]', tags: ['schedule', 'automation'] },
        
        // File System
        { name: 'df', category: 'filesystem', difficulty: 'beginner', description: 'Disk space usage', example: 'df -h', syntax: 'df [OPTIONS] [FILESYSTEM...]', tags: ['disk', 'storage'] },
        { name: 'du', category: 'filesystem', difficulty: 'intermediate', description: 'Directory space usage', example: 'du -sh /var/log/*', syntax: 'du [OPTIONS] [FILE...]', tags: ['disk', 'storage'] },
        { name: 'find', category: 'filesystem', difficulty: 'intermediate', description: 'Search for files', example: 'find /var -name "*.log" -mtime +7', syntax: 'find [PATH...] [EXPRESSION]', tags: ['search', 'files'] },
        { name: 'tar', category: 'filesystem', difficulty: 'intermediate', description: 'Archive files', example: 'tar -czf backup.tar.gz /data', syntax: 'tar [OPTIONS] [ARCHIVE] [FILE...]', tags: ['archive', 'compression'] },
        { name: 'rsync', category: 'filesystem', difficulty: 'advanced', description: 'Remote sync (efficient copy)', example: 'rsync -avz --delete /src/ user@host:/dest/', syntax: 'rsync [OPTIONS] SRC... [DEST]', tags: ['sync', 'remote', 'backup'] },
        
        // Permissions
        { name: 'chmod', category: 'permissions', difficulty: 'intermediate', description: 'Change file permissions', example: 'chmod 755 script.sh', syntax: 'chmod [OPTIONS] MODE FILE...', tags: ['permissions', 'security'] },
        { name: 'chown', category: 'permissions', difficulty: 'intermediate', description: 'Change file owner', example: 'chown user:group /app/config', syntax: 'chown [OPTIONS] [OWNER][:[GROUP]] FILE...', tags: ['permissions', 'ownership'] },
        { name: 'sudo', category: 'permissions', difficulty: 'beginner', description: 'Execute as superuser', example: 'sudo systemctl restart nginx', syntax: 'sudo [OPTIONS] COMMAND [ARGS]...', tags: ['permissions', 'security'] },
        
        // Package Management
        { name: 'apt', category: 'package', difficulty: 'intermediate', description: 'APT package handling utility', example: 'sudo apt update && sudo apt upgrade -y', syntax: 'apt [OPTIONS] COMMAND', tags: ['package', 'debian', 'ubuntu'] },
        { name: 'yum', category: 'package', difficulty: 'intermediate', description: 'Yellowdog Updater Modified', example: 'sudo yum update -y', syntax: 'yum [OPTIONS] COMMAND', tags: ['package', 'rhel', 'centos'] },
        { name: 'dnf', category: 'package', difficulty: 'intermediate', description: 'Dandified YUM', example: 'sudo dnf install nginx -y', syntax: 'dnf [OPTIONS] COMMAND', tags: ['package', 'fedora', 'rhel'] },
        
        // Text Processing
        { name: 'grep', category: 'text', difficulty: 'intermediate', description: 'Search text patterns', example: 'grep -i "error" app.log', syntax: 'grep [OPTIONS] PATTERN [FILE...]', tags: ['search', 'text'] },
        { name: 'awk', category: 'text', difficulty: 'advanced', description: 'Pattern scanning and processing', example: 'awk \'{print $1, $3}\' file.txt', syntax: 'awk [OPTIONS] PROGRAM [FILE...]', tags: ['text', 'processing'] },
        { name: 'sed', category: 'text', difficulty: 'advanced', description: 'Stream editor', example: 'sed \'s/old/new/g\' file.txt', syntax: 'sed [OPTIONS] SCRIPT [FILE...]', tags: ['text', 'editor'] },
        { name: 'sort', category: 'text', difficulty: 'intermediate', description: 'Sort lines', example: 'sort -n numbers.txt', syntax: 'sort [OPTIONS] [FILE...]', tags: ['text', 'sort'] }
    ];
    
    // Build search index
    searchIndex = commandDatabase.map(cmd => ({
        ...cmd,
        searchText: `${cmd.name} ${cmd.description} ${cmd.example} ${cmd.syntax} ${cmd.tags.join(' ')}`.toLowerCase()
    }));
}

// Search functionality
function setupSearch() {
    // Get the search input specific to the current page
    const searchInputs = document.querySelectorAll('#command-search');
    if (!searchInputs.length) return;
    
    // Use the first search input found (should be the one on the current page)
    const searchInput = searchInputs[0];
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        if (query.length > 0) {
            performSearch(query);
        } else {
            hideSearchResults();
        }
    });
    
    // Clear search on escape
    searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            this.value = '';
            hideSearchResults();
        }
    });
}

function performSearch(query) {
    const results = searchIndex.filter(cmd => 
        cmd.searchText.includes(query)
    ).slice(0, 10); // Limit to 10 results
    
    displaySearchResults(results);
}

function displaySearchResults(results) {
    // Try to get the results container specific to the current page
    const resultsContainers = document.querySelectorAll('#search-results');
    if (!resultsContainers.length) return;
    
    // Use the first results container found (should be the one on the current page)
    const resultsContainer = resultsContainers[0];
    
    if (results.length === 0) {
        resultsContainer.innerHTML = '<div class="p-4 text-gray-400">No commands found</div>';
    } else {
        resultsContainer.innerHTML = results.map(cmd => `
            <div class="search-result-item p-4 border-b border-gray-700 hover:bg-gray-800 cursor-pointer" onclick="selectCommand('${cmd.name}')">
                <div class="flex items-center justify-between">
                    <div>
                        <div class="font-bold text-green-400 terminal-font">${cmd.name}</div>
                        <div class="text-sm text-gray-400">${cmd.description}</div>
                        <div class="text-xs text-gray-500 terminal-font">${cmd.example}</div>
                    </div>
                    <div class="text-xs text-gray-500 capitalize">${cmd.category}</div>
                </div>
            </div>
        `).join('');
    }
    
    resultsContainer.classList.remove('hidden');
}

function hideSearchResults() {
    // Try to get the results container specific to the current page
    const resultsContainers = document.querySelectorAll('#search-results');
    if (resultsContainers.length) {
        // Hide all results containers found
        resultsContainers.forEach(container => {
            container.classList.add('hidden');
        });
    }
}

function selectCommand(commandName) {
    // Copy command to clipboard
    const command = commandDatabase.find(cmd => cmd.name === commandName);
    if (command) {
        copyToClipboard(command.example);
        hideSearchResults();
    }
}

// Copy to clipboard functionality
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function() {
        showCopyFeedback();
    }).catch(function(err) {
        console.error('Could not copy text: ', err);
    });
}

function showCopyFeedback() {
    // Create temporary feedback element
    const feedback = document.createElement('div');
    feedback.className = 'fixed top-20 right-4 bg-green-500 text-black px-4 py-2 rounded-lg font-bold z-50';
    feedback.textContent = '✓ Copied to clipboard';
    document.body.appendChild(feedback);
    
    // Animate in
    anime({
        targets: feedback,
        translateX: [-100, 0],
        opacity: [0, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
    
    // Remove after 2 seconds
    setTimeout(() => {
        anime({
            targets: feedback,
            translateX: [0, 100],
            opacity: [1, 0],
            duration: 300,
            easing: 'easeInQuart',
            complete: () => {
                document.body.removeChild(feedback);
            }
        });
    }, 2000);
}

// Keyboard shortcuts
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        // Ctrl+K or Cmd+K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            // Try to focus the search input on the current page
            let searchInput = null;
            
            // Check what page we're on and focus the appropriate search input
            if (document.body.classList.contains('index-page')) {
                searchInput = document.getElementById('command-search');
            } else if (document.body.classList.contains('commands-page')) {
                searchInput = document.getElementById('command-search');
            } else {
                // Fallback to any search input
                searchInput = document.getElementById('command-search');
            }
            
            if (searchInput) {
                searchInput.focus();
                searchInput.select(); // Select all text for easier replacement
            }
        }
        
        // Escape to clear search
        if (e.key === 'Escape') {
            const searchInput = document.getElementById('command-search');
            if (searchInput && searchInput === document.activeElement) {
                searchInput.blur();
                hideSearchResults();
            }
        }
    });
}

// Animations
function setupAnimations() {
    // Fade in animations for elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
}

// Page-specific initializations
function initializeIndexPage() {
    // Initialize typed text animation
    if (typeof Typed !== 'undefined') {
        new Typed('#typed-text', {
            strings: [
                'Master Linux commands for DevOps success',
                'Automate your infrastructure with shell scripting',
                'Build production-ready automation solutions',
                'Monitor, deploy, and scale with confidence'
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }
    
    // Initialize command usage chart
    initializeCommandChart();
    
    // Setup command search
    setupCommandSearch();
}

function initializeCommandChart() {
    if (typeof echarts === 'undefined') return;
    
    const chartContainer = document.getElementById('command-chart');
    if (!chartContainer) return;
    
    const chart = echarts.init(chartContainer);
    
    const option = {
        backgroundColor: 'transparent',
        title: {
            text: 'Command Usage by Category',
            textStyle: {
                color: '#ffffff',
                fontSize: 18
            }
        },
        tooltip: {
            trigger: 'item',
            backgroundColor: '#1a1a1a',
            borderColor: '#00ff41',
            textStyle: {
                color: '#ffffff'
            }
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
                color: '#ffffff'
            }
        },
        series: [
            {
                name: 'Commands',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 35, name: 'Basic Commands', itemStyle: { color: '#00ff41' } },
                    { value: 25, name: 'Networking', itemStyle: { color: '#0066cc' } },
                    { value: 20, name: 'Process Management', itemStyle: { color: '#ffd700' } },
                    { value: 15, name: 'File System', itemStyle: { color: '#dc143c' } },
                    { value: 10, name: 'Text Processing', itemStyle: { color: '#8a8a8a' } },
                    { value: 8, name: 'Permissions', itemStyle: { color: '#ff6b6b' } },
                    { value: 12, name: 'Package Management', itemStyle: { color: '#4ecdc4' } }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 255, 65, 0.5)'
                    }
                }
            }
        ]
    };
    
    chart.setOption(option);
    
    // Resize chart on window resize
    window.addEventListener('resize', () => {
        chart.resize();
    });
}

function setupCommandSearch() {
    const searchInput = document.getElementById('command-search');
    if (!searchInput) return;
    
    // Enhanced search with autocomplete
    let searchTimeout;
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            const query = this.value.toLowerCase().trim();
            if (query.length > 0) {
                showCommandSuggestions(query);
            } else {
                hideSearchResults();
            }
        }, 300);
    });
}

function showCommandSuggestions(query) {
    const suggestions = searchIndex
        .filter(cmd => cmd.searchText.includes(query))
        .slice(0, 5);
    
    displaySearchResults(suggestions);
}

function initializeCommandsPage() {
    // Commands page is handled by its own script
    // This function can be extended for additional functionality
}

function initializeScriptingPage() {
    // Scripting page is handled by its own script
    // This function can be extended for additional functionality
}

function initializeExamplesPage() {
    // Examples page is handled by its own script
    // This function can be extended for additional functionality
}

// User progress tracking
function loadUserProgress() {
    const saved = localStorage.getItem('linuxcmd-progress');
    if (saved) {
        userProgress = JSON.parse(saved);
    }
}

function saveUserProgress() {
    localStorage.setItem('linuxcmd-progress', JSON.stringify(userProgress));
}

function updateProgress(category, item, status) {
    if (!userProgress[category]) {
        userProgress[category] = {};
    }
    userProgress[category][item] = status;
    saveUserProgress();
}

// Utility functions
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
    }
}

// Export functions for global use
window.LinuxCmdHandbook = {
    copyToClipboard,
    updateProgress,
    showCopyFeedback,
    commandDatabase: () => commandDatabase,
    searchCommands: (query) => {
        return searchIndex.filter(cmd => cmd.searchText.includes(query.toLowerCase()));
    }
};

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            // Toggle mobile menu
            console.log('Mobile menu clicked');
        });
    }
}

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', function() {
    setupMobileMenu();
});