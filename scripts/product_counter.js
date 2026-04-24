async function loadCounts() {
    const categories = [
        { id: "seasonal-count", path: "seasonal/products.json", label: "Εποχιακά" },
        { id: "men-count", path: "men_accessories/products.json", label: "Ανδρικά Αξεσουάρ" },
        { id: "women-count", path: "women_accessories/products.json", label: "Γυναικεία Αξεσουάρ" },
        { id: "summer-count", path: "bags/summer/products.json", label: "Καλοκαιρινές" },
        { id: "winter-count", path: "bags/winter/products.json", label: "Χειμωνιάτικες" }
    ];

    let summerCount = 0;
    let winterCount = 0;

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

        if (category.id === "summer-count") summerCount = count;
        if (category.id === "winter-count") winterCount = count;

        const el = document.getElementById(category.id);
        if (el) {
            el.textContent = `${category.label} (${count})`;
        }
    }

    const bagsTotal = summerCount + winterCount;

    const bagsEl = document.getElementById("bags-count");
    if (bagsEl) {
        bagsEl.textContent = `Τσάντες (${bagsTotal})`;
    }
}

loadCounts();