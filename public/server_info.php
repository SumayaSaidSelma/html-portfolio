<?php
// Sample server information (replace with actual data)
$serverInfo = [
    'hostname' => php_uname('n'),
    'os' => php_uname('s'),
    'kernel_version' => php_uname('r'),
    'cpu_info' => `cat /proc/cpuinfo | grep "model name" | head -n 1`,
    'ram_total' => `free -h | awk '/^Mem/ {print $2}'`,
    'disk_usage' => `df -h / | awk '/\// {print $5}'`,
];

header('Content-Type: application/json');
echo json_encode($serverInfo);
