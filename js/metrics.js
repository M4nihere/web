function collectMetrics() {
    const metrics = {
      timing: performance.timing || 'N/A',
      navigation: performance.navigation || 'N/A',
      memory: performance.memory || 'N/A' // `performance.memory` might not be available in all browsers
    };
  
    // Send metrics to your backend or a metrics endpoint
    fetch('http://3.109.124.167:3000/metrics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(metrics)
      }).catch(err => console.error('Failed to send metrics:', err));
  }
  
  // Collect metrics after the page has fully loaded
  window.addEventListener('load', collectMetrics);
  