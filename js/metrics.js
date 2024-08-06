function collectMetrics() {
    const metrics = {
      timing: performance.timing,
      navigation: performance.navigation,
      memory: performance.memory || 'N/A' // `performance.memory` might not be available in all browsers
    };
  
    // Send metrics to your backend or a metrics endpoint
    fetch('https://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(metrics)
    });
  }
  
  // Collect metrics after the page has fully loaded
  window.addEventListener('load', collectMetrics);
  