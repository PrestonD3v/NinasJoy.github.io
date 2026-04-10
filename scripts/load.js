const fieldConfig = {
  material: {
    icon: "../assets/thread.png",
    label: "Material"
  },
  size: {
    icon: "../assets/size.png",
    label: "Size"
  },
  price: {
    icon: "../assets/euro.png",
    label: "Price",
    symbol: "€"
  }
};

function createItem(product) {
  const infoRows = Object.entries(fieldConfig)
    .map(([key, config]) => {
      const value = product[key];

      if (!value || value.toString().trim() === "") return "";

      return `
        <div class="info-row">
          <img src="${config.icon}" alt="${config.label}" />
          <span>${value}${config.symbol || ""}</span>
        </div>
      `;
    })
    .join("");

  return `
    <div class="item-display">
      <img src="${product.image}" alt="${product.title}" />

      <h2>${product.title}</h2>

      <div class="product-info">
        ${product.description?.trim() ? `
          <span class="text" style="color: rgb(84, 84, 84);">
            ${product.description}
          </span>
        ` : ""}

        ${infoRows}
      </div>
    </div>
  `;
}

async function loadProducts(path) {
  const container = document.getElementById("itemsContainer");

  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error("Failed to load products.json");
    }

    const products = await response.json();

    let html = "";

    products.forEach(product => {
      html += createItem(product);
    });

    container.innerHTML = html;

  } catch (error) {
    console.error("Error loading products:", error);
    container.innerHTML = `<div class="center-message"> <h1>Δεν υπάρχουν προϊόντα!</h1> </div>`;
  }
}