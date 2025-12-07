export function initProductSlider() {
    const track = document.querySelector(".c-products-slider__track");
    const cards = document.querySelectorAll(".c-product-card");
    const prev = document.querySelector(".c-slider-btn--prev");
    const next = document.querySelector(".c-slider-btn--next");
    const loadMore = document.querySelector(".c-products-load-more");
    const slider = document.querySelector(".c-products-slider");

    if (!track || !cards.length || !slider) return;

    // 🔒 защита от повторной инициализации (важно для lit-html)
    if (slider.dataset.init === "true") return;
    slider.dataset.init = "true";

    let index = 0;
    let visible = 0;
    let step = cards[0].offsetWidth + 24;

    function isMobile() {
        return window.matchMedia("(max-width: 768px)").matches;
    }

    function update() {
        const mobile = isMobile();
        const total = cards.length;

        // ✅ сколько видно
        if (!mobile) {
            visible = 2; // desktop + tablet
        } else {
            visible = total; // mobile — колонка
        }

        index = 0;
        step = cards[0].offsetWidth + 24;

        // ✅ кнопки ТОЛЬКО если карточек > 2 и НЕ mobile
        const needSlider = !mobile && total > 2;

        if (!needSlider) {
            track.style.transform = `translateX(0)`;
            prev.style.display = "none";
            next.style.display = "none";
        } else {
            prev.style.display = "flex";
            next.style.display = "flex";
        }

        updateButtons();
        mobileLogic(mobile);
    }

    function updateButtons() {
        prev.disabled = index === 0;
        next.disabled = index >= cards.length - visible;
    }

    next?.addEventListener("click", () => {
        if (index < cards.length - visible) {
            index++;
            track.style.transform = `translateX(-${index * step}px)`;
            updateButtons();
        }
    });

    prev?.addEventListener("click", () => {
        if (index > 0) {
            index--;
            track.style.transform = `translateX(-${index * step}px)`;
            updateButtons();
        }
    });

    // ✅ mobile: 2 карточки + load more
    function mobileLogic(mobile) {
        if (mobile) {
            cards.forEach((card, i) => {
                card.style.display = i < 2 ? "flex" : "none";
            });

            loadMore.style.display = cards.length > 2 ? "block" : "none";
        } else {
            cards.forEach((card) => (card.style.display = "flex"));
            loadMore.style.display = "none";
        }
    }

    loadMore?.addEventListener("click", () => {
        cards.forEach((card) => (card.style.display = "flex"));
        loadMore.style.display = "none";
    });

    window.addEventListener("resize", update);
    window.addEventListener("load", update);
    update();
}
