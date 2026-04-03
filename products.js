function createItem(product) {
      return `
        <div class="item-display">
          <img src="${product.image}" alt="${product.title}" />

          <h2>
            ${product.title}
          </h2>

          <div class="product-info">
            <span class="text" style="color: rgb(84, 84, 84);">
              ${product.description}
            </span>

            <div class="info-row">
              <img src="/images/assets/thread.png" alt="Material" />
              <span>${product.material}</span>
            </div>

            <div class="info-row">
              <img src="/images/assets/euro.png" alt="Price" />
              <span>${product.price}</span>
            </div>
          </div>
        </div>
      `;
    }

const products = [
    {
        title: "ΑΣΠΡΗ [3] ΤΣΑΝΤΑ",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/white_bag3.png"
    },

    {
        title: "ΓΑΛΑΖΙΑ ΤΣΑΝΤΑ",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/light_blue_bag.png"
    },

    {
        title: "ΜΑΥΡΗ ΤΣΑΝΤΑ",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/black_bag.png"
    },

    {
        title: "ΚΑΦΕ [2] ΤΣΑΝΤΑ",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/brown_bag2.png"
    },

    {
        title: "ΜΩΒ ΤΣΑΝΤΑ",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/purple_bag.png"
    },

    {
        title: "ΑΣΠΡΗ [2] ΤΣΑΝΤΑ",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/white_bag2.png"
    },

    {
        title: "ΜΠΛΕ ΤΣΑΝΤΑ",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/blue_bag.png"
    },

    {
        title: "ΠΡΑΣΙΝΟΣ ΦΑΚΕΛΟΣ",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/green_something.png"
    },

    {
        title: "ΚΑΦΕ [1] ΤΣΑΝΤΑ",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/brown_bag.png"
    },

    {
        title: "ΑΣΠΡΗ [1] ΤΣΑΝΤΑ",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/white_bag.png"
    },

    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag36.jpg"
    },

    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag39.jpg"
    },

    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag1.jpg"
    },

    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag2.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag3.jpg"
    },
    
    {
        title: "Melody",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag4.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag5.jpg"
    },
    
    {
        title: "Bowtie",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag6.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag7.jpg"
    },
    
    {
        title: "Terracotta",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag8.jpg"
    },
    
    {
        title: "Marina",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag9.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag10.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag11.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag12.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag13.jpg"
    },
    
    {
        title: "Χλόη",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag14.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag15.jpg"
    },
    
    {
        title: "Ίριδα",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag16.jpg"
    },
    
    {
        title: "Chessboard",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag17.jpg"
    },
    
    {
        title: "Amber",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag18.jpg"
    },
    
    {
        title: "Sunflower",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag19.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag20.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag21.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag22.jpg"
    },

    {
        title: "Nix",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag23.jpg"
    },
    
    {
        title: "Florèa",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag24.jpg"
    },
    
    {
        title: "Bebeka",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag25.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag26.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag27.jpg"
    },
    
    {
        title: "Azul",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag28.jpg"
    },
    
    {
        title: "Velvet Mint",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag29.jpg"
    },
    
    {
        title: "Sandy",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag30.jpg"
    },
    
    {
        title: "Blush",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag31.jpg"
    },
    
    {
        title: "Olea",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag32.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag33.jpg"
    },
    
    {
        title: "Sunset Mix",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag34.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag35.jpg"
    },

    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag37.jpg"
    },
    
    {
        title: "TITLE",
        description: "",
        material: " Cotton",
        price: "PRICE",
        image: "/images/products/bag38.jpg"
    },
];

const container = document.getElementById("itemsContainer");

products.forEach(product => {
    container.innerHTML += createItem(product);
});
