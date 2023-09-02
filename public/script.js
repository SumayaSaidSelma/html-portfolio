// script.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM content loaded'); 
    fetch('server_info.php')
        .then(response => response.json())
        .then(data => displayServerInfo(data))
        .catch(error => console.error('Error fetching server info:', error));
});

function displayServerInfo(serverInfo) {
    const main = document.querySelector('main');
    main.innerHTML = `
        <h2>Server Information</h2>
        <ul>
            <li><strong>Hostname:</strong> ${serverInfo.hostname}</li>
            <li><strong>Operating System:</strong> ${serverInfo.os}</li>
            <li><strong>Kernel Version:</strong> ${serverInfo.kernel_version}</li>
            <li><strong>CPU Info:</strong> ${serverInfo.cpu_info}</li>
            <li><strong>Total RAM:</strong> ${serverInfo.ram_total}</li>
            <li><strong>Disk Usage:</strong> ${serverInfo.disk_usage}</li>
        </ul>
    `;
}
