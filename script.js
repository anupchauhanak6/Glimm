function loadComponent(file, elementId) {
  fetch(`components/${file}`)
    .then((response) => response.text())
    .then((data) => {
      const container = document.getElementById(elementId);
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

loadComponent("header.html", "header");
loadComponent("hero.html", "hero");
loadComponent("our-products.html", "our-products");
loadComponent("industries.html", "industries");
loadComponent("technology.html", "technology");
loadComponent("footer.html", "footer");
