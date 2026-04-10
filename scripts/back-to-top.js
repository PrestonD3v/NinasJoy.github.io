const btn = document.querySelector(".back-to-top");

let isAtTop = true;

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        btn.classList.add("show");
        isAtTop = false;
    } else {
        btn.classList.remove("show");

        setTimeout(() => {
            if (window.scrollY === 0) {
                btn.classList.remove("active");
                isAtTop = true;
            }
        }, 300);
    }
});

btn.addEventListener("touchstart", () => {
    btn.classList.add("active");
});

btn.addEventListener("touchend", () => {
    setTimeout(() => {
        if (isAtTop) {
            btn.classList.remove("active");
        }
    }, 200);
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});