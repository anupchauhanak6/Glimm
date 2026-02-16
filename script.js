function loadComponentFrom(basePath, file, elementId) {
  fetch(`${basePath}/${file}`)
    .then((response) => response.text())
    .then((data) => {
      const container = document.getElementById(elementId);
      if (!container) {
        return;
      }
      container.innerHTML = data;

      // Execute scripts
      const scripts = container.querySelectorAll("script");
      scripts.forEach((script) => {
        const newScript = document.createElement("script");
        if (script.src) {
          newScript.src = script.src;
        } else {
          newScript.textContent = script.textContent;
        }
        document.body.appendChild(newScript);
      });
    });
}

loadComponentFrom("components", "header.html", "header");
loadComponentFrom("components", "footer.html", "footer");