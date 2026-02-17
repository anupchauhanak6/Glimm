function loadComponentFrom(basePath, file, elementId) {
  const container = document.getElementById(elementId);
  if (!container) {
    return;
  }
  fetch(`${basePath}/${file}`)
    .then((response) => response.text())
    .then((data) => {
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

const glimmBase = window.GlimmBase || "";
const componentsBase = `${glimmBase}components`;
const homeBase = `${componentsBase}/home`;
const productsBase = `${componentsBase}/products`;

loadComponentFrom(componentsBase, "header.html", "header");
loadComponentFrom(componentsBase, "footer.html", "footer");
loadComponentFrom(homeBase, "hero.html", "hero");
loadComponentFrom(homeBase, "our-products.html", "our-products");
loadComponentFrom(homeBase, "industries.html", "industries");
loadComponentFrom(homeBase, "technology.html", "technology");
loadComponentFrom(homeBase, "success.html", "success-stories");
loadComponentFrom(homeBase, "cta.html", "cta");
loadComponentFrom(productsBase, "holoflex.html", "holoflex");
loadComponentFrom(productsBase, "features.html", "features");
