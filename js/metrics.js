function collectMetrics() {
   // console.log(" performance.timing", performance)
  const metrics = {
    timing: performance.timing || 'N/A',
    navigation: performance.navigation || 'N/A',
    memory: performance.memory || 'N/A' // `performance.memory` might not be available in all browsers
  };

  console.log('Collecting metrics:', metrics); // Debugging line to check metrics

  fetch('http://3.109.124.167:3000/metrics', { // Use the correct server IP and port
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(metrics)
  }).catch(err => console.error('Failed to send metrics:', err));

  fetch('http://3.109.124.167:3001/metrics', { // Use the correct server IP and port
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(metrics)
  }).catch(err => console.error('Failed to send metrics:', err));
}


// Collect metrics after the page has fully loaded
window.addEventListener('load', collectMetrics);
