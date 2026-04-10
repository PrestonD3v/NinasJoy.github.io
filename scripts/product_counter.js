async function loadCounts() {
    const categories = [
        { id: "bags-count", path: "bags/products.json", label: "Τσάντες" },
        { id: "seasonal-count", path: "seasonal/products.json", label: "Εποχιακά" },
        { id: "men-count", path: "men_accessories/products.json", label: "Ανδρικά Αξεσουάρ" },
        { id: "women-count", path: "women_accessories/products.json", label: "Γυναικεία Αξεσουάρ" },
        { id: "summer-count", path: "bags/summer/products.json", label: "Καλοκαρινές" },
        { id: "winter-count", path: "bags/winter/products.json", label: "Χειμωνιάτικες" }
    ];

    for (const category of categories) {
        let count = 0;

        try {
            const res = await fetch(category.path);

            if (res.ok) {
                const data = await res.json();
                if (Array.isArray(data)) {
                    count = data.length;
                }
            }

        } catch (err) {
            console.error("Error loading:", category.path, err);
        }

        const el = document.getElementById(category.id);
        if (el) {
            el.textContent = `${category.label} (${count})`;
        }
    }
}

loadCounts();
