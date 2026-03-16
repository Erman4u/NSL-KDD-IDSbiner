function switchTab(tabId) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    
    event.target.classList.add('active');
    document.getElementById('tab-' + tabId).classList.add('active');
}

const normal = { duration: 10, protocol_type: 'tcp', service: 'http', flag: 'SF', src_bytes: 500, logged_in: 1, root_shell: 0, su_attempted: 0, num_file_creations: 0, num_access_files: 0, is_guest_login: 0, count: 5, srv_count: 5, serror_rate: 0.0, srv_serror_rate: 0.0, rerror_rate: 0.0, srv_rerror_rate: 0.0, same_srv_rate: 1.0, diff_srv_rate: 0.0, srv_diff_host_rate: 0.0, dst_host_count: 20, dst_host_srv_count: 20, dst_host_same_srv_rate: 1.0, dst_host_diff_srv_rate: 0.0, dst_host_same_src_port_rate: 0.0, dst_host_srv_diff_host_rate: 0.0, dst_host_serror_rate: 0.0, dst_host_srv_serror_rate: 0.0, dst_host_rerror_rate: 0.0, dst_host_srv_rerror_rate: 0.0 };

const anomaly = { duration: 0, protocol_type: 'tcp', service: 'private', flag: 'S0', src_bytes: 0, logged_in: 0, root_shell: 0, su_attempted: 0, num_file_creations: 0, num_access_files: 0, is_guest_login: 0, count: 100, srv_count: 10, serror_rate: 1.0, srv_serror_rate: 1.0, rerror_rate: 0.0, srv_rerror_rate: 0.0, same_srv_rate: 0.1, diff_srv_rate: 0.9, srv_diff_host_rate: 0.0, dst_host_count: 255, dst_host_srv_count: 10, dst_host_same_srv_rate: 0.0, dst_host_diff_srv_rate: 1.0, dst_host_same_src_port_rate: 1.0, dst_host_srv_diff_host_rate: 0.0, dst_host_serror_rate: 1.0, dst_host_srv_serror_rate: 1.0, dst_host_rerror_rate: 0.0, dst_host_srv_rerror_rate: 0.0 };

function fillForm(type) {
    const data = type === 'normal' ? normal : anomaly;
    for (const key in data) {
        const el = document.getElementById(key);
        if (el) el.value = data[key];
    }
    
    // Add subtle animation effect
    const btn = event.currentTarget;
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Loaded!';
    btn.style.background = 'var(--success)';
    btn.style.borderColor = 'var(--success)';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
        btn.style.borderColor = '';
    }, 1000);
}

// Smooth scroll to result if exists
window.onload = function() {
    const resultSection = document.getElementById('resultSection');
    if(resultSection) {
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}
