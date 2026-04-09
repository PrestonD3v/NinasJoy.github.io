const fieldConfig = {
  material: {
    icon: "/images/assets/thread.png",
    label: "Material"
  },
  size: {
    icon: "/images/assets/size.png",
    label: "Size"
  },
  price: {
    icon: "/images/assets/euro.png",
    label: "Price"
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
          <span>${value}</span>
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

const container = document.getElementById("itemsContainer");

async function loadProducts() {
  try {
    const response = await fetch("/products.json");

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
    container.innerHTML = "<p>Failed to load products.</p>";
  }
}

loadProducts();
