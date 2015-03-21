chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    "frame": "none",
    'bounds': {
      'width': 470,
      'height': 615
    },
    'minWidth': 470,
    'minHeight': 415,
    'maxWidth': 600
  });
});