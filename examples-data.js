// Comprehensive DevOps Examples Database
// 100+ Production-Ready Commands and Scripts

const devopsExamples = [
    // ==================== MONITORING CATEGORY ====================
    {
        title: "System Resource Monitoring",
        category: "monitoring",
        difficulty: "beginner",
        description: "Essential commands for monitoring CPU, memory, disk, and system resources",
        useCase: "Monitor system health, identify performance bottlenecks, and track resource usage in real-time. Perfect for daily system administration and troubleshooting.",
        commands: [
            {
                name: "Check CPU Usage",
                description: "Display real-time CPU usage statistics",
                command: "top -bn1 | grep 'Cpu(s)' | awk '{print \"CPU Usage: \" $2}'",
                explanation: "Shows current CPU utilization percentage"
            },
            {
                name: "Memory Usage Summary",
                description: "Show memory usage in human-readable format",
                command: "free -h",
                explanation: "Displays total, used, and available memory"
            },
            {
                name: "Disk Space Check",
                description: "Check disk space usage for all mounted filesystems",
                command: "df -h",
                explanation: "Shows disk usage with human-readable sizes"
            },
            {
                name: "Top 10 Memory-Consuming Processes",
                description: "List processes using most memory",
                command: "ps aux --sort=-%mem | head -n 11",
                explanation: "Helps identify memory-hungry applications"
            },
            {
                name: "Top 10 CPU-Consuming Processes",
                description: "List processes using most CPU",
                command: "ps aux --sort=-%cpu | head -n 11",
                explanation: "Identifies CPU-intensive processes"
            },
            {
                name: "System Load Average",
                description: "Check system load over 1, 5, and 15 minutes",
                command: "uptime",
                explanation: "Shows how many processes are waiting for CPU time"
            },
            {
                name: "Disk I/O Statistics",
                description: "Monitor disk read/write activity",
                command: "iostat -x 1 5",
                explanation: "Shows extended disk statistics every second, 5 times"
            },
            {
                name: "Network Interface Statistics",
                description: "Display network interface traffic",
                command: "ifstat -t -i eth0 1",
                explanation: "Shows bandwidth usage per second"
            },
            {
                name: "Check Swap Usage",
                description: "Display swap memory usage",
                command: "swapon --show",
                explanation: "Shows configured swap devices and their usage"
            },
            {
                name: "System Uptime",
                description: "Show how long the system has been running",
                command: "uptime -p",
                explanation: "Pretty-print system uptime"
            },
            {
                name: "Monitor Process in Real-Time",
                description: "Watch a specific process continuously",
                command: "watch -n 1 'ps aux | grep nginx'",
                explanation: "Updates process status every second"
            },
            {
                name: "Check Inode Usage",
                description: "Display inode usage (file count limit)",
                command: "df -i",
                explanation: "Shows used and available inodes"
            },
            {
                name: "Temperature Monitoring",
                description: "Check system temperature sensors",
                command: "sensors",
                explanation: "Displays CPU and hardware temperatures"
            },
            {
                name: "List Open Files",
                description: "Show all open files and processes",
                command: "lsof | wc -l",
                explanation: "Counts total number of open files"
            },
            {
                name: "Monitor Specific Directory Size",
                description: "Watch directory size changes",
                command: "watch -n 5 'du -sh /var/log'",
                explanation: "Updates directory size every 5 seconds"
            },
            {
                name: "Check Zombie Processes",
                description: "Find defunct (zombie) processes",
                command: "ps aux | awk '{if($8==\"Z\") print $0}'",
                explanation: "Lists processes that haven't been properly cleaned up"
            },
            {
                name: "Network Connection Count",
                description: "Count active network connections",
                command: "netstat -ant | wc -l",
                explanation: "Shows total number of active connections"
            },
            {
                name: "Check System Architecture",
                description: "Display system architecture information",
                command: "uname -m && lscpu | grep 'Architecture'",
                explanation: "Shows CPU architecture (x86_64, ARM, etc.)"
            },
            {
                name: "Memory Map of Process",
                description: "View memory mapping of a specific process",
                command: "pmap -x <PID>",
                explanation: "Shows detailed memory usage of a process"
            },
            {
                name: "Real-time Network Traffic",
                description: "Monitor live network traffic by port",
                command: "ss -s",
                explanation: "Summary of socket statistics"
            }
        ]
    },

    {
        title: "Log Monitoring & Analysis",
        category: "monitoring",
        difficulty: "intermediate",
        description: "Advanced log monitoring, parsing, and analysis commands",
        useCase: "Track application logs, debug issues, monitor system events, and analyze log patterns for troubleshooting and security monitoring.",
        commands: [
            {
                name: "Tail System Log",
                description: "Monitor system log in real-time",
                command: "tail -f /var/log/syslog",
                explanation: "Continuously shows new log entries"
            },
            {
                name: "Search Error Logs",
                description: "Find all error messages in logs",
                command: "grep -i 'error' /var/log/syslog | tail -n 50",
                explanation: "Shows last 50 error entries"
            },
            {
                name: "Count Log Entries by Hour",
                description: "Analyze log frequency by hour",
                command: "awk '{print $3}' /var/log/syslog | cut -d: -f1 | sort | uniq -c",
                explanation: "Groups log entries by hour"
            },
            {
                name: "Monitor Multiple Logs",
                description: "Watch multiple log files simultaneously",
                command: "tail -f /var/log/nginx/access.log /var/log/nginx/error.log",
                explanation: "Monitors multiple files at once"
            },
            {
                name: "Find Large Log Files",
                description: "Identify log files over 100MB",
                command: "find /var/log -type f -size +100M -exec ls -lh {} \\;",
                explanation: "Helps clean up disk space"
            },
            {
                name: "Parse Apache Access Log",
                description: "Extract IP addresses from Apache logs",
                command: "awk '{print $1}' /var/log/apache2/access.log | sort | uniq -c | sort -nr | head -10",
                explanation: "Shows top 10 IP addresses by request count"
            },
            {
                name: "Monitor Failed Login Attempts",
                description: "Track failed SSH login attempts",
                command: "grep 'Failed password' /var/log/auth.log | tail -20",
                explanation: "Security monitoring for unauthorized access"
            },
            {
                name: "Analyze 404 Errors",
                description: "Find all 404 errors in web server logs",
                command: "grep ' 404 ' /var/log/nginx/access.log | awk '{print $7}' | sort | uniq -c | sort -nr",
                explanation: "Identifies broken links"
            },
            {
                name: "Log Rotation Check",
                description: "Verify log rotation configuration",
                command: "cat /etc/logrotate.conf && ls -la /etc/logrotate.d/",
                explanation: "Reviews log rotation settings"
            },
            {
                name: "Extract Time Range from Logs",
                description: "Get logs between specific times",
                command: "sed -n '/2025-01-20 10:00/,/2025-01-20 11:00/p' /var/log/syslog",
                explanation: "Filters logs by time range"
            },
            {
                name: "Monitor Kernel Messages",
                description: "Watch kernel ring buffer",
                command: "dmesg -w",
                explanation: "Shows real-time kernel messages"
            },
            {
                name: "Count HTTP Status Codes",
                description: "Analyze web server response codes",
                command: "awk '{print $9}' /var/log/nginx/access.log | sort | uniq -c | sort -rn",
                explanation: "Shows distribution of status codes"
            },
            {
                name: "Find Slow Queries",
                description: "Search for slow database queries in logs",
                command: "grep 'slow query' /var/log/mysql/mysql-slow.log | tail -20",
                explanation: "Identifies performance bottlenecks"
            },
            {
                name: "Monitor Docker Container Logs",
                description: "Follow logs from Docker container",
                command: "docker logs -f --tail 100 container_name",
                explanation: "Shows last 100 lines and follows new entries"
            },
            {
                name: "Parse JSON Logs",
                description: "Extract fields from JSON formatted logs",
                command: "cat app.log | jq '.level, .message' | grep ERROR",
                explanation: "Filters JSON logs for error messages"
            },
            {
                name: "Archive Old Logs",
                description: "Compress logs older than 30 days",
                command: "find /var/log -name '*.log' -mtime +30 -exec gzip {} \\;",
                explanation: "Saves disk space by compressing old logs"
            },
            {
                name: "Real-time Log Filtering",
                description: "Monitor logs with pattern matching",
                command: "tail -f /var/log/application.log | grep --line-buffered 'ERROR\\|WARN'",
                explanation: "Shows only errors and warnings in real-time"
            },
            {
                name: "Calculate Log File Growth",
                description: "Monitor log file size changes",
                command: "watch -n 5 'ls -lh /var/log/syslog'",
                explanation: "Tracks log growth every 5 seconds"
            },
            {
                name: "Extract Unique IPs from Logs",
                description: "Get list of unique IP addresses",
                command: "awk '{print $1}' /var/log/nginx/access.log | sort -u",
                explanation: "Lists all unique visitor IPs"
            },
            {
                name: "Journalctl Query",
                description: "Query systemd journal with filters",
                command: "journalctl -u nginx.service --since '1 hour ago' -p err",
                explanation: "Shows nginx errors from last hour"
            },
            {
                name: "Log Statistics Summary",
                description: "Generate comprehensive log statistics",
                command: "awk '{print $9}' /var/log/nginx/access.log | sort | uniq -c | awk '{print $2\": \"$1}'",
                explanation: "Provides status code frequency report"
            }
        ]
    },

    {
        title: "Service & Application Monitoring",
        category: "monitoring",
        difficulty: "intermediate",
        description: "Commands for monitoring services, applications, and their health status",
        useCase: "Ensure services are running, check application health, monitor dependencies, and automate service recovery for high availability.",
        commands: [
            {
                name: "Check Service Status",
                description: "View systemd service status",
                command: "systemctl status nginx",
                explanation: "Shows if service is active and recent log entries"
            },
            {
                name: "List All Running Services",
                description: "Show all active systemd services",
                command: "systemctl list-units --type=service --state=running",
                explanation: "Displays currently running services"
            },
            {
                name: "Check Port Listening Status",
                description: "Verify if a service is listening on a port",
                command: "netstat -tulpn | grep :80",
                explanation: "Shows what's listening on port 80"
            },
            {
                name: "Test HTTP Endpoint",
                description: "Check if web service is responding",
                command: "curl -I -s -o /dev/null -w '%{http_code}' http://localhost",
                explanation: "Returns HTTP status code"
            },
            {
                name: "Monitor Service Restart Count",
                description: "Check how many times service restarted",
                command: "systemctl show nginx -p NRestarts",
                explanation: "Indicates service stability"
            },
            {
                name: "Database Connection Test",
                description: "Verify database connectivity",
                command: "mysql -h localhost -u root -p -e 'SELECT 1'",
                explanation: "Tests MySQL connection"
            },
            {
                name: "Check Redis Status",
                description: "Verify Redis is running and responding",
                command: "redis-cli ping",
                explanation: "Should return PONG if Redis is healthy"
            },
            {
                name: "Monitor Docker Containers",
                description: "Check status of all Docker containers",
                command: "docker ps -a --format 'table {{.Names}}\\t{{.Status}}\\t{{.Ports}}'",
                explanation: "Shows container health status"
            },
            {
                name: "Check Service Dependencies",
                description: "List services required by a service",
                command: "systemctl list-dependencies nginx",
                explanation: "Shows dependency tree"
            },
            {
                name: "Monitor Failed Services",
                description: "Find services in failed state",
                command: "systemctl --failed",
                explanation: "Lists all failed units"
            },
            {
                name: "Application Process Count",
                description: "Count running instances of application",
                command: "ps aux | grep -c '[n]ode app.js'",
                explanation: "Checks if application is running"
            },
            {
                name: "Check Service Auto-Start",
                description: "Verify if service starts on boot",
                command: "systemctl is-enabled nginx",
                explanation: "Returns enabled/disabled status"
            },
            {
                name: "Monitor Queue Length",
                description: "Check message queue depth",
                command: "rabbitmqctl list_queues",
                explanation: "Shows RabbitMQ queue statistics"
            },
            {
                name: "Check SSL Certificate",
                description: "Verify SSL certificate expiration",
                command: "echo | openssl s_client -servername example.com -connect example.com:443 2>/dev/null | openssl x509 -noout -dates",
                explanation: "Shows certificate validity period"
            },
            {
                name: "Monitor API Response Time",
                description: "Measure API endpoint response time",
                command: "time curl -s -o /dev/null https://api.example.com/health",
                explanation: "Shows total request time"
            },
            {
                name: "Check Elasticsearch Health",
                description: "Verify Elasticsearch cluster status",
                command: "curl -s 'localhost:9200/_cluster/health?pretty'",
                explanation: "Returns cluster health metrics"
            },
            {
                name: "Monitor Cron Jobs",
                description: "View active cron jobs for user",
                command: "crontab -l && ls -la /etc/cron.d/",
                explanation: "Lists all scheduled tasks"
            },
            {
                name: "Check DNS Resolution",
                description: "Test DNS lookup for service",
                command: "dig example.com +short",
                explanation: "Verifies DNS is working"
            },
            {
                name: "Monitor Load Balancer",
                description: "Check HAProxy backend status",
                command: "echo 'show stat' | socat stdio /var/run/haproxy.sock | grep BACKEND",
                explanation: "Shows backend server status"
            },
            {
                name: "Application Health Check",
                description: "Custom health endpoint monitoring",
                command: "curl -f http://localhost:8080/health || echo 'Health check failed'",
                explanation: "Tests application health endpoint"
            }
        ]
    },

    // ==================== BACKUP CATEGORY ====================
    {
        title: "File & Directory Backup",
        category: "backup",
        difficulty: "beginner",
        description: "Essential commands for backing up files, directories, and creating archives",
        useCase: "Create regular backups of important files and directories, maintain data integrity, and prepare for disaster recovery scenarios.",
        commands: [
            {
                name: "Create Tar Archive",
                description: "Compress directory into tar.gz archive",
                command: "tar -czf backup_$(date +%Y%m%d).tar.gz /path/to/directory",
                explanation: "Creates compressed backup with date stamp"
            },
            {
                name: "Extract Tar Archive",
                description: "Extract tar.gz archive",
                command: "tar -xzf backup.tar.gz -C /destination/path",
                explanation: "Extracts archive to specified directory"
            },
            {
                name: "Incremental Backup",
                description: "Create incremental backup using rsync",
                command: "rsync -avz --delete /source/ /backup/destination/",
                explanation: "Only copies changed files"
            },
            {
                name: "Backup with Exclusions",
                description: "Create backup excluding specific files",
                command: "tar -czf backup.tar.gz --exclude='*.log' --exclude='node_modules' /var/www",
                explanation: "Skips unnecessary files to save space"
            },
            {
                name: "Copy with Progress",
                description: "Copy large directory with progress bar",
                command: "rsync -ah --progress /source/ /destination/",
                explanation: "Shows copy progress in real-time"
            },
            {
                name: "Mirror Directory",
                description: "Create exact mirror of directory",
                command: "rsync -avz --delete /source/ /mirror/",
                explanation: "Maintains identical copy including deletions"
            },
            {
                name: "Backup with Checksum",
                description: "Create backup and verify integrity",
                command: "tar -czf backup.tar.gz /data && md5sum backup.tar.gz > backup.md5",
                explanation: "Generates checksum for verification"
            },
            {
                name: "Split Large Archive",
                description: "Split backup into smaller files",
                command: "tar -czf - /large/directory | split -b 1G - backup.tar.gz.part",
                explanation: "Creates 1GB chunks for easier transfer"
            },
            {
                name: "Backup User Home",
                description: "Backup user home directory",
                command: "tar -czf home_backup_$(date +%Y%m%d).tar.gz /home/$USER",
                explanation: "Backs up all user files"
            },
            {
                name: "Differential Backup",
                description: "Backup only files modified since date",
                command: "find /data -type f -mtime -7 -print | tar -czf weekly_backup.tar.gz -T -",
                explanation: "Backs up files modified in last 7 days"
            },
            {
                name: "Backup Specific File Types",
                description: "Backup only certain file extensions",
                command: "find /project -name '*.py' -o -name '*.js' | tar -czf code_backup.tar.gz -T -",
                explanation: "Backs up only source code files"
            },
            {
                name: "Create Encrypted Backup",
                description: "Encrypt backup with GPG",
                command: "tar -czf - /sensitive/data | gpg -c > backup_encrypted.tar.gz.gpg",
                explanation: "Password-protected encrypted backup"
            },
            {
                name: "Remote Backup via SSH",
                description: "Backup directly to remote server",
                command: "tar -czf - /local/path | ssh user@remote 'cat > /remote/backup.tar.gz'",
                explanation: "Streams backup to remote location"
            },
            {
                name: "Backup with Timestamp",
                description: "Create dated backup directory",
                command: "cp -r /data /backups/data_$(date +%Y%m%d_%H%M%S)",
                explanation: "Maintains multiple backup versions"
            },
            {
                name: "Verify Archive Integrity",
                description: "Test archive without extracting",
                command: "tar -tzf backup.tar.gz > /dev/null && echo 'Archive OK' || echo 'Archive corrupted'",
                explanation: "Validates backup file integrity"
            },
            {
                name: "Backup Permissions",
                description: "Backup with file permissions preserved",
                command: "tar -cpzf backup.tar.gz /path/to/directory",
                explanation: "Preserves ownership and permissions"
            },
            {
                name: "List Archive Contents",
                description: "View files in archive without extracting",
                command: "tar -tzf backup.tar.gz | less",
                explanation: "Browse archive contents"
            },
            {
                name: "Backup to Multiple Locations",
                description: "Create backup in multiple destinations",
                command: "tar -czf - /data | tee /backup1/data.tar.gz | ssh remote 'cat > /backup2/data.tar.gz'",
                explanation: "Simultaneous multi-location backup"
            },
            {
                name: "Restore Specific Files",
                description: "Extract only certain files from archive",
                command: "tar -xzf backup.tar.gz path/to/specific/file",
                explanation: "Partial restore of backup"
            },
            {
                name: "Calculate Backup Size",
                description: "Estimate backup size before creating",
                command: "du -sh /path/to/backup",
                explanation: "Checks available space needed"
            }
        ]
    },

    {
        title: "Database Backup & Recovery",
        category: "backup",
        difficulty: "intermediate",
        description: "Comprehensive database backup strategies for MySQL, PostgreSQL, MongoDB",
        useCase: "Implement automated database backups, ensure data consistency, enable point-in-time recovery, and minimize data loss in production environments.",
        commands: [
            {
                name: "MySQL Full Backup",
                description: "Backup all MySQL databases",
                command: "mysqldump -u root -p --all-databases > all_databases_$(date +%Y%m%d).sql",
                explanation: "Complete MySQL backup with timestamp"
            },
            {
                name: "MySQL Single Database",
                description: "Backup specific database",
                command: "mysqldump -u root -p database_name > db_backup.sql",
                explanation: "Backs up one database"
            },
            {
                name: "MySQL Compressed Backup",
                description: "Compressed database backup",
                command: "mysqldump -u root -p database_name | gzip > db_backup.sql.gz",
                explanation: "Saves storage space"
            },
            {
                name: "MySQL Restore",
                description: "Restore MySQL database from backup",
                command: "mysql -u root -p database_name < db_backup.sql",
                explanation: "Restores database from SQL file"
            },
            {
                name: "PostgreSQL Backup",
                description: "Backup PostgreSQL database",
                command: "pg_dump -U postgres database_name > postgres_backup.sql",
                explanation: "Creates PostgreSQL dump file"
            },
            {
                name: "PostgreSQL All Databases",
                description: "Backup all PostgreSQL databases",
                command: "pg_dumpall -U postgres > all_postgres_databases.sql",
                explanation: "Includes all databases and roles"
            },
            {
                name: "PostgreSQL Restore",
                description: "Restore PostgreSQL database",
                command: "psql -U postgres database_name < postgres_backup.sql",
                explanation: "Restores from backup file"
            },
            {
                name: "MongoDB Backup",
                description: "Backup MongoDB database",
                command: "mongodump --db database_name --out /backup/mongo_$(date +%Y%m%d)",
                explanation: "Creates BSON backup"
            },
            {
                name: "MongoDB Restore",
                description: "Restore MongoDB from backup",
                command: "mongorestore --db database_name /backup/mongo_20250120/database_name",
                explanation: "Restores MongoDB database"
            },
            {
                name: "MySQL Incremental Backup",
                description: "Enable MySQL binary logging for incremental backup",
                command: "mysqlbinlog --stop-datetime='2025-01-20 12:00:00' /var/log/mysql/mysql-bin.000001 | mysql -u root -p",
                explanation: "Point-in-time recovery"
            },
            {
                name: "Database with Transactions",
                description: "Consistent backup with transactions",
                command: "mysqldump -u root -p --single-transaction --routines --triggers database_name > backup.sql",
                explanation: "Ensures data consistency"
            },
            {
                name: "Remote Database Backup",
                description: "Backup database to remote server",
                command: "mysqldump -h remote_host -u user -p database_name | ssh backup_server 'cat > /backups/db.sql'",
                explanation: "Streams backup to remote location"
            },
            {
                name: "Backup Specific Tables",
                description: "Backup only certain tables",
                command: "mysqldump -u root -p database_name table1 table2 > tables_backup.sql",
                explanation: "Selective table backup"
            },
            {
                name: "Parallel Database Backup",
                description: "Faster backup using parallelization",
                command: "mydumper --database database_name --outputdir /backup --threads 4",
                explanation: "Uses multiple threads for speed"
            },
            {
                name: "Verify Database Backup",
                description: "Test database restore without applying",
                command: "mysql --batch --skip-column-names -u root -p -e 'SELECT COUNT(*) FROM table' database_name",
                explanation: "Validates backup completeness"
            },
            {
                name: "PostgreSQL Custom Format",
                description: "Backup in custom compressed format",
                command: "pg_dump -U postgres -Fc database_name > database.dump",
                explanation: "Compressed custom format backup"
            },
            {
                name: "Schedule Database Backup",
                description: "Automated daily database backup",
                command: "0 2 * * * mysqldump -u root -p$MYSQL_PASSWORD --all-databases | gzip > /backups/db_$(date +\\%Y\\%m\\%d).sql.gz",
                explanation: "Cron job for daily 2 AM backup"
            },
            {
                name: "Database Schema Only",
                description: "Backup structure without data",
                command: "mysqldump -u root -p --no-data database_name > schema_only.sql",
                explanation: "Exports only table structures"
            },
            {
                name: "Data Only Backup",
                description: "Backup data without schema",
                command: "mysqldump -u root -p --no-create-info database_name > data_only.sql",
                explanation: "Exports only table data"
            },
            {
                name: "Encrypt Database Backup",
                description: "Secure database backup with encryption",
                command: "mysqldump -u root -p database_name | gpg --encrypt --recipient admin@company.com > db_encrypted.sql.gpg",
                explanation: "Encrypted backup for security"
            }
        ]
    },

    // ==================== DEPLOYMENT CATEGORY ====================
    {
        title: "Application Deployment",
        category: "deployment",
        difficulty: "intermediate",
        description: "Commands for deploying applications, managing releases, and handling updates",
        useCase: "Automate application deployments, implement CI/CD pipelines, manage multiple environments, and ensure zero-downtime releases.",
        commands: [
            {
                name: "Clone Repository",
                description: "Clone application from Git repository",
                command: "git clone https://github.com/company/app.git /opt/application",
                explanation: "Downloads application source code"
            },
            {
                name: "Pull Latest Changes",
                description: "Update application to latest version",
                command: "cd /opt/application && git pull origin main",
                explanation: "Updates code from repository"
            },
            {
                name: "Install Dependencies",
                description: "Install Node.js application dependencies",
                command: "cd /opt/application && npm install --production",
                explanation: "Installs required packages"
            },
            {
                name: "Build Application",
                description: "Build production assets",
                command: "npm run build",
                explanation: "Compiles application for production"
            },
            {
                name: "Restart Application Service",
                description: "Restart application using systemd",
                command: "systemctl restart myapp.service",
                explanation: "Applies new changes"
            },
            {
                name: "Check Deployment Status",
                description: "Verify application is running after deploy",
                command: "systemctl status myapp.service && curl -s http://localhost:3000/health",
                explanation: "Validates successful deployment"
            },
            {
                name: "Deploy with Docker",
                description: "Deploy application as Docker container",
                command: "docker pull myapp:latest && docker-compose up -d",
                explanation: "Pulls and runs latest container"
            },
            {
                name: "Zero-Downtime Deploy",
                description: "Blue-green deployment switch",
                command: "ln -sfn /opt/app-v2 /opt/app-current && systemctl reload nginx",
                explanation: "Switches to new version without downtime"
            },
            {
                name: "Rollback Deployment",
                description: "Revert to previous version",
                command: "cd /opt/application && git reset --hard HEAD~1 && systemctl restart myapp",
                explanation: "Quick rollback on issues"
            },
            {
                name: "Database Migration",
                description: "Run database migrations after deploy",
                command: "cd /opt/application && npm run migrate",
                explanation: "Updates database schema"
            },
            {
                name: "Clear Application Cache",
                description: "Clear cache after deployment",
                command: "redis-cli FLUSHALL && rm -rf /tmp/cache/*",
                explanation: "Ensures fresh cache"
            },
            {
                name: "Update Environment Variables",
                description: "Update production environment config",
                command: "cp /opt/deployment/env.production /opt/application/.env && systemctl restart myapp",
                explanation: "Applies new configuration"
            },
            {
                name: "Verify Version",
                description: "Check deployed application version",
                command: "curl -s http://localhost:3000/version",
                explanation: "Confirms correct version deployed"
            },
            {
                name: "Pre-deployment Health Check",
                description: "Verify system before deployment",
                command: "df -h | grep -v loop && systemctl is-active myapp && curl -s http://localhost:3000/health",
                explanation: "Checks disk space, service, and health"
            },
            {
                name: "Deploy Static Files",
                description: "Deploy static assets to CDN/web server",
                command: "rsync -avz --delete /opt/app/dist/ /var/www/html/",
                explanation: "Syncs static files to web root"
            },
            {
                name: "Update Load Balancer",
                description: "Update nginx upstream configuration",
                command: "cp /opt/deployment/nginx.conf /etc/nginx/sites-available/app && nginx -t && systemctl reload nginx",
                explanation: "Updates reverse proxy configuration"
            },
            {
                name: "Tag Release",
                description: "Create Git tag for deployed version",
                command: "git tag -a v1.2.3 -m 'Production release 1.2.3' && git push origin v1.2.3",
                explanation: "Marks release point in repository"
            },
            {
                name: "Smoke Test",
                description: "Run quick tests after deployment",
                command: "curl -f http://localhost:3000/api/health && curl -f http://localhost:3000/api/status",
                explanation: "Validates critical endpoints"
            },
            {
                name: "Deployment Notification",
                description: "Send deployment notification to Slack",
                command: "curl -X POST -H 'Content-type: application/json' --data '{\"text\":\"Deployed v1.2.3 to production\"}' $SLACK_WEBHOOK",
                explanation: "Notifies team of deployment"
            },
            {
                name: "Cleanup Old Releases",
                description: "Remove old deployment artifacts",
                command: "find /opt/releases -maxdepth 1 -type d -mtime +30 -exec rm -rf {} \\;",
                explanation: "Keeps only recent 30 days of releases"
            }
        ]
    },

    {
        title: "Container & Orchestration Deployment",
        category: "deployment",
        difficulty: "advanced",
        description: "Docker, Kubernetes, and container orchestration deployment commands",
        useCase: "Deploy containerized applications, manage Kubernetes clusters, scale services, and orchestrate microservices architecture.",
        commands: [
            {
                name: "Build Docker Image",
                description: "Build container image from Dockerfile",
                command: "docker build -t myapp:v1.0.0 .",
                explanation: "Creates Docker image"
            },
            {
                name: "Push to Registry",
                description: "Push image to Docker registry",
                command: "docker tag myapp:v1.0.0 registry.company.com/myapp:v1.0.0 && docker push registry.company.com/myapp:v1.0.0",
                explanation: "Uploads image to private registry"
            },
            {
                name: "Deploy with Docker Compose",
                description: "Deploy multi-container application",
                command: "docker-compose -f docker-compose.prod.yml up -d",
                explanation: "Starts all services defined in compose file"
            },
            {
                name: "Scale Container",
                description: "Scale service to multiple instances",
                command: "docker-compose up -d --scale web=3",
                explanation: "Runs 3 instances of web service"
            },
            {
                name: "Update Running Container",
                description: "Update container without downtime",
                command: "docker-compose pull && docker-compose up -d --no-deps --build web",
                explanation: "Rolling update of web service"
            },
            {
                name: "Kubernetes Deploy",
                description: "Deploy application to Kubernetes",
                command: "kubectl apply -f deployment.yaml",
                explanation: "Creates/updates K8s deployment"
            },
            {
                name: "Update K8s Image",
                description: "Update container image in Kubernetes",
                command: "kubectl set image deployment/myapp myapp=myapp:v1.0.1 --record",
                explanation: "Rolling update with new image"
            },
            {
                name: "Scale Kubernetes Deployment",
                description: "Scale pods in deployment",
                command: "kubectl scale deployment myapp --replicas=5",
                explanation: "Scales to 5 pod replicas"
            },
            {
                name: "Rollout Status",
                description: "Check deployment rollout status",
                command: "kubectl rollout status deployment/myapp",
                explanation: "Monitors deployment progress"
            },
            {
                name: "Rollback Kubernetes",
                description: "Rollback to previous deployment",
                command: "kubectl rollout undo deployment/myapp",
                explanation: "Reverts to previous version"
            },
            {
                name: "View Pod Logs",
                description: "Check application logs in Kubernetes",
                command: "kubectl logs -f deployment/myapp --tail=100",
                explanation: "Follows last 100 log lines"
            },
            {
                name: "Execute in Pod",
                description: "Run command inside Kubernetes pod",
                command: "kubectl exec -it pod-name -- /bin/bash",
                explanation: "Interactive shell in container"
            },
            {
                name: "Update ConfigMap",
                description: "Update configuration without rebuild",
                command: "kubectl create configmap app-config --from-file=config.yml -o yaml --dry-run=client | kubectl apply -f -",
                explanation: "Updates application configuration"
            },
            {
                name: "Restart Deployment",
                description: "Force restart of all pods",
                command: "kubectl rollout restart deployment/myapp",
                explanation: "Recreates all pods"
            },
            {
                name: "Check Pod Health",
                description: "Verify pod readiness and health",
                command: "kubectl get pods -l app=myapp -o wide",
                explanation: "Shows pod status and location"
            },
            {
                name: "Update Secrets",
                description: "Update Kubernetes secrets",
                command: "kubectl create secret generic app-secrets --from-env-file=.env.production --dry-run=client -o yaml | kubectl apply -f -",
                explanation: "Updates secret values"
            },
            {
                name: "Expose Service",
                description: "Create load balancer service",
                command: "kubectl expose deployment myapp --type=LoadBalancer --port=80 --target-port=8080",
                explanation: "Exposes deployment externally"
            },
            {
                name: "Auto-scale",
                description: "Configure horizontal pod autoscaling",
                command: "kubectl autoscale deployment myapp --min=2 --max=10 --cpu-percent=70",
                explanation: "Automatic scaling based on CPU"
            },
            {
                name: "Drain Node",
                description: "Safely drain node for maintenance",
                command: "kubectl drain node-1 --ignore-daemonsets --delete-emptydir-data",
                explanation: "Moves pods to other nodes"
            },
            {
                name: "Apply Namespace",
                description: "Deploy to specific namespace",
                command: "kubectl apply -f deployment.yaml -n production",
                explanation: "Deploys to production namespace"
            }
        ]
    },

    // ==================== SECURITY CATEGORY ====================
    {
        title: "System Security Hardening",
        category: "security",
        difficulty: "intermediate",
        description: "Essential security commands for system hardening and protection",
        useCase: "Implement security best practices, harden Linux systems, protect against unauthorized access, and maintain security compliance.",
        commands: [
            {
                name: "Update System Packages",
                description: "Install all security updates",
                command: "apt update && apt upgrade -y",
                explanation: "Applies latest security patches"
            },
            {
                name: "Check Open Ports",
                description: "List all listening ports",
                command: "netstat -tulpn | grep LISTEN",
                explanation: "Identifies exposed services"
            },
            {
                name: "Configure Firewall",
                description: "Enable and configure UFW firewall",
                command: "ufw default deny incoming && ufw default allow outgoing && ufw allow 22/tcp && ufw enable",
                explanation: "Blocks all except SSH"
            },
            {
                name: "Disable Root Login",
                description: "Disable SSH root login",
                command: "sed -i 's/PermitRootLogin yes/PermitRootLogin no/' /etc/ssh/sshd_config && systemctl restart sshd",
                explanation: "Prevents direct root access"
            },
            {
                name: "Create Sudo User",
                description: "Add user with sudo privileges",
                command: "useradd -m -s /bin/bash deploy && usermod -aG sudo deploy",
                explanation: "Creates administrative user"
            },
            {
                name: "Set Password Policy",
                description: "Enforce strong password requirements",
                command: "sed -i 's/^PASS_MIN_DAYS.*/PASS_MIN_DAYS 7/' /etc/login.defs && sed -i 's/^PASS_MAX_DAYS.*/PASS_MAX_DAYS 90/' /etc/login.defs",
                explanation: "Requires password changes every 90 days"
            },
            {
                name: "Disable USB Storage",
                description: "Prevent USB storage devices",
                command: "echo 'install usb-storage /bin/true' >> /etc/modprobe.d/disable-usb-storage.conf",
                explanation: "Blocks USB storage access"
            },
            {
                name: "Install Fail2Ban",
                description: "Install and configure brute-force protection",
                command: "apt install fail2ban -y && systemctl enable fail2ban && systemctl start fail2ban",
                explanation: "Blocks repeated failed login attempts"
            },
            {
                name: "Check Failed Logins",
                description: "Review failed authentication attempts",
                command: "grep 'Failed password' /var/log/auth.log | tail -20",
                explanation: "Identifies potential attacks"
            },
            {
                name: "Scan for Rootkits",
                description: "Check system for rootkits",
                command: "apt install rkhunter -y && rkhunter --update && rkhunter --check --skip-keypress",
                explanation: "Detects malicious software"
            },
            {
                name: "Audit SUID Files",
                description: "Find files with SUID bit set",
                command: "find / -perm -4000 -type f 2>/dev/null",
                explanation: "Lists potential security risks"
            },
            {
                name: "Check World-Writable Files",
                description: "Find files writable by everyone",
                command: "find / -xdev -type f -perm -0002 -ls 2>/dev/null",
                explanation: "Identifies permission issues"
            },
            {
                name: "Secure Shared Memory",
                description: "Prevent execution from /dev/shm",
                command: "echo 'none /dev/shm tmpfs defaults,noexec,nosuid 0 0' >> /etc/fstab",
                explanation: "Hardens shared memory"
            },
            {
                name: "Disable IPv6",
                description: "Disable IPv6 if not needed",
                command: "echo 'net.ipv6.conf.all.disable_ipv6 = 1' >> /etc/sysctl.conf && sysctl -p",
                explanation: "Reduces attack surface"
            },
            {
                name: "Enable SELinux",
                description: "Activate SELinux protection",
                command: "setenforce 1 && sed -i 's/SELINUX=disabled/SELINUX=enforcing/' /etc/selinux/config",
                explanation: "Enables mandatory access control"
            },
            {
                name: "Restrict Cron Access",
                description: "Limit who can schedule cron jobs",
                command: "echo 'root' > /etc/cron.allow && chmod 600 /etc/cron.allow",
                explanation: "Only root can use cron"
            },
            {
                name: "Secure SSH Keys",
                description: "Set correct permissions for SSH keys",
                command: "chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys",
                explanation: "Protects SSH key files"
            },
            {
                name: "Audit User Accounts",
                description: "List all user accounts",
                command: "awk -F: '{print $1}' /etc/passwd",
                explanation: "Reviews system users"
            },
            {
                name: "Lock User Account",
                description: "Disable user account",
                command: "passwd -l username",
                explanation: "Prevents account login"
            },
            {
                name: "Set Session Timeout",
                description: "Auto-logout inactive sessions",
                command: "echo 'TMOUT=900' >> /etc/profile",
                explanation: "Logs out after 15 minutes idle"
            }
        ]
    },

    {
        title: "Security Scanning & Auditing",
        category: "security",
        difficulty: "advanced",
        description: "Advanced security scanning, vulnerability assessment, and compliance checking",
        useCase: "Perform regular security audits, scan for vulnerabilities, ensure compliance with security standards, and maintain security posture.",
        commands: [
            {
                name: "Port Scan Local System",
                description: "Scan for open ports on local machine",
                command: "nmap -sS -sV localhost",
                explanation: "Identifies running services"
            },
            {
                name: "Vulnerability Scan",
                description: "Scan for known vulnerabilities",
                command: "nmap --script vuln localhost",
                explanation: "Checks for security issues"
            },
            {
                name: "Check SSL/TLS Configuration",
                description: "Test SSL/TLS security",
                command: "nmap --script ssl-enum-ciphers -p 443 example.com",
                explanation: "Audits SSL configuration"
            },
            {
                name: "Scan Docker Images",
                description: "Check Docker image for vulnerabilities",
                command: "docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image myapp:latest",
                explanation: "Scans container for CVEs"
            },
            {
                name: "Audit File Integrity",
                description: "Check file integrity with AIDE",
                command: "aide --check",
                explanation: "Detects unauthorized file changes"
            },
            {
                name: "Check Password Strength",
                description: "Audit user password quality",
                command: "john --show /etc/shadow",
                explanation: "Tests password strength"
            },
            {
                name: "Network Packet Capture",
                description: "Capture network traffic for analysis",
                command: "tcpdump -i eth0 -w capture.pcap port 80",
                explanation: "Records HTTP traffic"
            },
            {
                name: "Analyze Logs for Threats",
                description: "Search logs for security events",
                command: "grep -i 'failed\\|error\\|unauthorized' /var/log/auth.log | tail -50",
                explanation: "Identifies suspicious activity"
            },
            {
                name: "Check for Malware",
                description: "Scan system with ClamAV",
                command: "clamscan -r --bell -i /home",
                explanation: "Detects malicious files"
            },
            {
                name: "Audit Sudo Access",
                description: "Review sudo privileges",
                command: "grep -Po '^sudo.+:\\K.*$' /etc/group",
                explanation: "Lists users with sudo access"
            },
            {
                name: "Check Kernel Security",
                description: "Review kernel security parameters",
                command: "sysctl -a | grep -E 'kernel.kptr_restrict|kernel.dmesg_restrict'",
                explanation: "Verifies kernel hardening"
            },
            {
                name: "Analyze Running Processes",
                description: "Check for suspicious processes",
                command: "ps aux | grep -v '\\[' | sort -nrk 3,3 | head -n 20",
                explanation: "Lists top CPU consuming processes"
            },
            {
                name: "Check File Permissions",
                description: "Audit critical file permissions",
                command: "stat -c '%a %n' /etc/passwd /etc/shadow /etc/group",
                explanation: "Verifies secure permissions"
            },
            {
                name: "Review Firewall Rules",
                description: "Display active firewall rules",
                command: "iptables -L -n -v --line-numbers",
                explanation: "Shows firewall configuration"
            },
            {
                name: "Check DNS Security",
                description: "Test DNSSEC validation",
                command: "dig +dnssec example.com",
                explanation: "Verifies DNS security"
            },
            {
                name: "Audit Web Server",
                description: "Security scan of web application",
                command: "nikto -h http://localhost",
                explanation: "Identifies web vulnerabilities"
            },
            {
                name: "Check Certificate Expiry",
                description: "Monitor SSL certificate expiration",
                command: "echo | openssl s_client -connect example.com:443 2>/dev/null | openssl x509 -noout -enddate",
                explanation: "Shows certificate expiry date"
            },
            {
                name: "Audit System Configuration",
                description: "Run security compliance check",
                command: "lynis audit system --quick",
                explanation: "Comprehensive security audit"
            },
            {
                name: "Check for Backdoors",
                description: "Scan for common backdoors",
                command: "find / -name '.ssh' -o -name 'authorized_keys' 2>/dev/null",
                explanation: "Looks for unauthorized SSH access"
            },
            {
                name: "Monitor File Access",
                description: "Watch file access in real-time",
                command: "inotifywait -m -r -e access,modify /etc",
                explanation: "Tracks file system changes"
            }
        ]
    },

    // ==================== AUTOMATION CATEGORY ====================
    {
        title: "Task Automation & Scheduling",
        category: "automation",
        difficulty: "beginner",
        description: "Automate routine tasks with cron jobs and scheduled scripts",
        useCase: "Schedule recurring tasks, automate maintenance, perform periodic cleanups, and reduce manual operations overhead.",
        commands: [
            {
                name: "List Cron Jobs",
                description: "View user's scheduled cron jobs",
                command: "crontab -l",
                explanation: "Shows all scheduled tasks"
            },
            {
                name: "Edit Cron Jobs",
                description: "Open crontab editor",
                command: "crontab -e",
                explanation: "Allows editing scheduled tasks"
            },
            {
                name: "Daily Backup Schedule",
                description: "Schedule daily backup at 2 AM",
                command: "0 2 * * * /usr/local/bin/backup.sh",
                explanation: "Runs backup script every day"
            },
            {
                name: "Hourly Log Rotation",
                description: "Rotate logs every hour",
                command: "0 * * * * /usr/sbin/logrotate /etc/logrotate.conf",
                explanation: "Prevents log files from growing"
            },
            {
                name: "Weekly Security Scan",
                description: "Run security scan every Sunday",
                command: "0 3 * * 0 /usr/local/bin/security-scan.sh",
                explanation: "Weekly security audit"
            },
            {
                name: "Cleanup Temp Files",
                description: "Clean temporary files daily",
                command: "0 0 * * * find /tmp -type f -atime +7 -delete",
                explanation: "Removes files older than 7 days"
            },
            {
                name: "Monitor Disk Space",
                description: "Check disk space every 6 hours",
                command: "0 */6 * * * df -h | mail -s 'Disk Space Report' admin@company.com",
                explanation: "Email disk usage report"
            },
            {
                name: "Database Cleanup",
                description: "Archive old data monthly",
                command: "0 1 1 * * /usr/local/bin/archive-old-data.sh",
                explanation: "Runs on 1st of every month"
            },
            {
                name: "Restart Service Weekly",
                description: "Restart service every Monday",
                command: "0 4 * * 1 systemctl restart myapp.service",
                explanation: "Preventive maintenance restart"
            },
            {
                name: "Update SSL Certificates",
                description: "Renew Let's Encrypt certificates",
                command: "0 0 * * * certbot renew --quiet",
                explanation: "Auto-renewal of SSL certs"
            },
            {
                name: "System Update Schedule",
                description: "Apply system updates weekly",
                command: "0 2 * * 0 apt update && apt upgrade -y",
                explanation: "Automated system updates"
            },
            {
                name: "Generate Reports",
                description: "Create daily analytics report",
                command: "0 6 * * * /usr/local/bin/generate-report.sh",
                explanation: "Morning report generation"
            },
            {
                name: "Sync to Cloud",
                description: "Backup to cloud storage",
                command: "0 3 * * * rclone sync /data remote:backup",
                explanation: "Daily cloud synchronization"
            },
            {
                name: "Monitor Website Uptime",
                description: "Check website every 5 minutes",
                command: "*/5 * * * * curl -f http://example.com || echo 'Site down' | mail -s 'Alert' admin@company.com",
                explanation: "Continuous uptime monitoring"
            },
            {
                name: "Clear Cache",
                description: "Clear application cache nightly",
                command: "0 2 * * * redis-cli FLUSHDB",
                explanation: "Maintains fresh cache"
            },
            {
                name: "Docker Cleanup",
                description: "Remove unused Docker images weekly",
                command: "0 3 * * 0 docker system prune -af",
                explanation: "Frees up disk space"
            },
            {
                name: "Backup Logs",
                description: "Archive logs to S3 daily",
                command: "0 1 * * * tar -czf /tmp/logs_$(date +\\%Y\\%m\\%d).tar.gz /var/log && aws s3 cp /tmp/logs_*.tar.gz s3://logs-bucket/",
                explanation: "Backs up logs to cloud"
            },
            {
                name: "Health Check Script",
                description: "Run health checks every 15 minutes",
                command: "*/15 * * * * /usr/local/bin/health-check.sh",
                explanation: "Frequent system health monitoring"
            },
            {
                name: "Update DNS Records",
                description: "Update dynamic DNS hourly",
                command: "0 * * * * /usr/local/bin/update-dns.sh",
                explanation: "Maintains DNS records"
            },
            {
                name: "Process Queue",
                description: "Process job queue every minute",
                command: "* * * * * cd /app && php artisan queue:work --stop-when-empty",
                explanation: "Continuous queue processing"
            }
        ]
    },

    {
        title: "Infrastructure as Code Automation",
        category: "automation",
        difficulty: "advanced",
        description: "Automate infrastructure provisioning and configuration management",
        useCase: "Implement Infrastructure as Code, automate server provisioning, manage configurations at scale, and ensure consistent environments.",
        commands: [
            {
                name: "Ansible Ping Hosts",
                description: "Test Ansible connectivity to hosts",
                command: "ansible all -m ping",
                explanation: "Verifies Ansible can reach hosts"
            },
            {
                name: "Run Ansible Playbook",
                description: "Execute Ansible automation",
                command: "ansible-playbook -i inventory.ini playbook.yml",
                explanation: "Runs infrastructure automation"
            },
            {
                name: "Terraform Plan",
                description: "Preview infrastructure changes",
                command: "terraform plan",
                explanation: "Shows what will be created/modified"
            },
            {
                name: "Terraform Apply",
                description: "Apply infrastructure changes",
                command: "terraform apply -auto-approve",
                explanation: "Provisions infrastructure"
            },
            {
                name: "Terraform Destroy",
                description: "Remove all Terraform resources",
                command: "terraform destroy",
                explanation: "Tears down infrastructure"
            },
            {
                name: "Configure Server with Ansible",
                description: "Install packages on multiple servers",
                command: "ansible webservers -m apt -a 'name=nginx state=latest' --become",
                explanation: "Installs nginx on all web servers"
            },
            {
                name: "Deploy with Ansible",
                description: "Deploy application to servers",
                command: "ansible-playbook deploy.yml --tags 'deploy' --limit production",
                explanation: "Deploys only to production servers"
            },
            {
                name: "Provision VM with Vagrant",
                description: "Create development VM",
                command: "vagrant up",
                explanation: "Starts and provisions VM"
            },
            {
                name: "Update Infrastructure State",
                description: "Refresh Terraform state",
                command: "terraform refresh",
                explanation: "Syncs state with real infrastructure"
            },
            {
                name: "Ansible Vault",
                description: "Encrypt sensitive data",
                command: "ansible-vault encrypt secrets.yml",
                explanation: "Secures configuration files"
            },
            {
                name: "Apply Kubernetes Manifests",
                description: "Deploy with kubectl",
                command: "kubectl apply -f k8s/",
                explanation: "Applies all YAML configurations"
            },
            {
                name: "Helm Install",
                description: "Deploy application with Helm chart",
                command: "helm install myapp ./mychart --namespace production",
                explanation: "Installs Helm package"
            },
            {
                name: "Helm Upgrade",
                description: "Update Helm release",
                command: "helm upgrade myapp ./mychart --values prod-values.yaml",
                explanation: "Updates deployed application"
            },
            {
                name: "Packer Build Image",
                description: "Build machine image",
                command: "packer build template.json",
                explanation: "Creates AMI/image"
            },
            {
                name: "Cloud-Init Configuration",
                description: "Bootstrap cloud instance",
                command: "cloud-init status --wait",
                explanation: "Waits for cloud-init to finish"
            },
            {
                name: "Ansible Facts",
                description: "Gather system information",
                command: "ansible localhost -m setup",
                explanation: "Collects host details"
            },
            {
                name: "Terraform Workspace",
                description: "Switch Terraform environment",
                command: "terraform workspace select production",
                explanation: "Changes to production state"
            },
            {
                name: "Ansible Dry Run",
                description: "Test playbook without changes",
                command: "ansible-playbook playbook.yml --check",
                explanation: "Preview what would change"
            },
            {
                name: "Import Terraform Resource",
                description: "Import existing resource to Terraform",
                command: "terraform import aws_instance.example i-1234567890abcdef0",
                explanation: "Brings existing infrastructure under Terraform"
            },
            {
                name: "Scale Infrastructure",
                description: "Modify instance count",
                command: "terraform apply -var 'instance_count=10'",
                explanation: "Scales to 10 instances"
            }
        ]
    },

    {
        title: "CI/CD Pipeline Automation",
        category: "automation",
        difficulty: "advanced",
        description: "Continuous Integration and Continuous Deployment automation",
        useCase: "Build automated CI/CD pipelines, streamline development workflows, automate testing and deployment, and improve release velocity.",
        commands: [
            {
                name: "Run Jenkins Job",
                description: "Trigger Jenkins build from CLI",
                command: "curl -X POST http://jenkins.example.com/job/my-job/build --user admin:token",
                explanation: "Starts CI/CD pipeline"
            },
            {
                name: "GitLab CI Pipeline",
                description: "Trigger GitLab pipeline",
                command: "curl -X POST --fail -F token=$CI_JOB_TOKEN https://gitlab.com/api/v4/projects/$CI_PROJECT_ID/trigger/pipeline",
                explanation: "Starts GitLab CI pipeline"
            },
            {
                name: "GitHub Actions Workflow",
                description: "Trigger GitHub Actions",
                command: "gh workflow run deploy.yml -f environment=production",
                explanation: "Runs GitHub Actions workflow"
            },
            {
                name: "Run Unit Tests",
                description: "Execute test suite",
                command: "npm test",
                explanation: "Runs automated tests"
            },
            {
                name: "Run Integration Tests",
                description: "Execute integration test suite",
                command: "npm run test:integration",
                explanation: "Tests system integration"
            },
            {
                name: "Code Quality Scan",
                description: "Run SonarQube analysis",
                command: "sonar-scanner -Dsonar.projectKey=myapp -Dsonar.sources=src",
                explanation: "Analyzes code quality"
            },
            {
                name: "Lint Code",
                description: "Check code style",
                command: "eslint . --ext .js,.jsx",
                explanation: "Enforces coding standards"
            },
            {
                name: "Build Docker in Pipeline",
                description: "Build and tag Docker image",
                command: "docker build -t myapp:$CI_COMMIT_SHA . && docker push myapp:$CI_COMMIT_SHA",
                explanation: "Creates versioned container"
            },
            {
                name: "Run Security Scan",
                description: "Scan dependencies for vulnerabilities",
                command: "npm audit --production",
                explanation: "Checks for security issues"
            },
            {
                name: "Deploy to Staging",
                description: "Automated staging deployment",
                command: "ansible-playbook deploy.yml -i staging.ini --tags deploy",
                explanation: "Deploys to staging environment"
            },
            {
                name: "Smoke Test",
                description: "Run post-deployment smoke tests",
                command: "curl -f http://staging.example.com/health && npm run test:smoke",
                explanation: "Validates deployment"
            },
            {
                name: "Tag Release",
                description: "Create Git tag for release",
                command: "git tag -a v$(cat VERSION) -m 'Release v$(cat VERSION)' && git push origin --tags",
                explanation: "Marks release version"
            },
            {
                name: "Promote to Production",
                description: "Deploy to production after approval",
                command: "kubectl set image deployment/myapp myapp=myapp:$RELEASE_TAG -n production",
                explanation: "Production deployment"
            },
            {
                name: "Database Migration in Pipeline",
                description: "Run database migrations",
                command: "npm run migrate:prod",
                explanation: "Updates production database schema"
            },
            {
                name: "Rollback Pipeline",
                description: "Automated rollback on failure",
                command: "kubectl rollout undo deployment/myapp -n production",
                explanation: "Reverts failed deployment"
            },
            {
                name: "Generate Build Artifacts",
                description: "Create build artifacts",
                command: "npm run build && tar -czf build-$CI_COMMIT_SHA.tar.gz dist/",
                explanation: "Packages application"
            },
            {
                name: "Upload Artifacts",
                description: "Store build artifacts",
                command: "aws s3 cp build-$CI_COMMIT_SHA.tar.gz s3://artifacts-bucket/builds/",
                explanation: "Archives build artifacts"
            },
            {
                name: "Send Notification",
                description: "Notify team of build status",
                command: "curl -X POST -H 'Content-type: application/json' --data '{\"text\":\"Build #$BUILD_NUMBER completed\"}' $SLACK_WEBHOOK",
                explanation: "Sends Slack notification"
            },
            {
                name: "Performance Test",
                description: "Run load testing in pipeline",
                command: "artillery run load-test.yml",
                explanation: "Tests application performance"
            },
            {
                name: "Cleanup Pipeline",
                description: "Clean up after pipeline run",
                command: "docker system prune -f && rm -rf dist/ node_modules/",
                explanation: "Frees up resources"
            }
        ]
    }
];

