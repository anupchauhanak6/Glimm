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
loadComponentFrom("components", "hero.html", "hero");
loadComponentFrom("components", "our-products.html", "our-products");
loadComponentFrom("components", "industries.html", "industries");
loadComponentFrom("components", "technology.html", "technology");
loadComponentFrom("components", "success.html", "success-stories");
loadComponentFrom("components", "cta.html", "cta");
loadComponentFrom("components", "footer.html", "footer");

// Products data
loadComponentFrom("products", "holoflex.html", "holoflex");
loadComponentFrom("products", "features.html", "features");