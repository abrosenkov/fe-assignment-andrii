import { html } from "lit-html";
import { loadData } from "../dataLoader.js";
import { showToast } from "../ui/toast.js";
import { initProductSlider } from "../ui/sliderController.js";
import { productCard } from "../components/productCard.js";
import { solutionCta } from "../components/solutionCta.js";
import { solutionCategories } from "../components/solution-categories.js";

const MAX_QTY = 10;

/**
 * Solution Page
 */

// CTA button click handler
export const handleCtaClick = () => {
    console.log("CTA button clicked");
    // TODO: Implement email form/modal
};

// Banner button click handler
const handleBannerClick = () => {
    console.log("Banner button clicked");
    // TODO: Navigate to products or filter
};

// Compare button click handler
export const handleCompare = (product) => {
    console.log("🔍 COMPARE clicked:", {
        id: product.id,
        name: product.name,
        sku: product.sku,
    });
    // TODO: Implement compare logic
};

// Favorite button click handler
export const handleFavorite = (product) => {
    console.log("FAVORITE clicked:", {
        id: product.id,
        name: product.name,
    });
    // TODO: Implement favorite logic
};

// Quantity change button click handler
export const changeQty = (productId, delta) => {
    const input = document.querySelector(`#qty-${productId}`);

    if (!input) return;
    let value = parseInt(input.value, 10);
    const newValue = value + delta;

    if (newValue < 1) {
        return;
    }

    if (newValue > MAX_QTY) {
        return;
    }
    input.value = newValue;
};

// Add to cart button click handler
export const handleAddToCart = (product) => {
    const input = document.querySelector(`#qty-${product.id}`);
    const qty = Number(input?.value);

    if (qty > MAX_QTY) {
        showToast(`Nie je možné pridať viac ako ${MAX_QTY} ks`, "error");
        input.value = MAX_QTY;
        return;
    }

    if (qty < 1) {
        showToast(`Nie je možné pridať menej ako 1 ks`, "error");
        input.value = 1;
        return;
    }

    console.log(`Pridané do košíka: ${product.name} | Množstvo: ${qty}`);
    showToast(`${product.name} (${qty} ks) pridané do košíka`, "success");
};

// Solution main banner
const solutionBanner = (banner) => html`
    <div class="c-solution-banner">
        <div class="c-solution-banner__image"></div>
        <div class="c-solution-banner__overlay"></div>
        <div class="c-solution-banner__content">
            <h1 class="c-solution-banner__content__title">${banner?.title ?? ""}</h1>
            <div class="c-solution-banner__content__description">${banner?.description ?? ""}</div>
            <button
                type="button"
                aria-label="Zobraziť celú ponuku"
                class="c-solution-banner__content__button"
                @click=${() => handleBannerClick()}
            >
                <span class="sb-text">${banner?.ctaText ?? ""}</span>

                <svg
                    aria-hidden="true"
                    class="sb-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.16663 10H15.8333M15.8333 10L9.99996 4.16669M15.8333 10L9.99996 15.8334"
                        stroke="currentColor"
                        stroke-width="1.67"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            </button>
        </div>
    </div>
`;

// Products section with slider
const productsSection = (products) =>
    html` <div class="c-products-slider">
        <button class="c-slider-btn c-slider-btn--prev" aria-label="Previous">
            <svg
                class="c-slider-btn__btn-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="1024"
                height="1024"
                viewBox="0 0 1024 1024"
            >
                <g id="icomoon-ignore"></g>
                <path
                    fill="none"
                    stroke="#fff"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-miterlimit="4"
                    stroke-width="102.4"
                    d="M640 204.8l-307.2 307.2 307.2 307.2"
                ></path>
            </svg>
        </button>

        <div class="c-products-slider__viewport">
            <div class="c-products-slider__track">
                ${products.map((product, index) => productCard(product, index))}
            </div>
        </div>

        <button class="c-slider-btn c-slider-btn--next" aria-label="Next">
            <svg
                class="c-slider-btn__btn-icon"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="1024"
                height="1024"
                viewBox="0 0 1024 1024"
            >
                <g id="icomoon-ignore"></g>
                <path
                    fill="none"
                    stroke="#fff"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke-miterlimit="4"
                    stroke-width="102.4"
                    d="M384 204.8l307.2 307.2-307.2 307.2"
                ></path>
            </svg>
        </button>
    </div>`;

// Main page template
export const renderSolutionPage = (data) => {
    if (!data) {
        return html`<div class="l-solution">Loading...</div>`;
    }

    console.log("data.banner:\n", data.banner);
    console.log("data.ctaBanner:\n", data.ctaBanner);
    console.log("data.products:\n", data.products);
    console.log("data.categories:\n", data.categories);

    const productsFour = [...data.products, ...data.products];

    return html`
        <div class="l-solution">
            <div class="l-solution__banner">
                <div class="l-container-wide">
                    ${data.banner ? solutionBanner(data.banner) : html``}
                </div>
            </div>

            <div class="l-solution__content">
                <div class="l-container-wide is-shorter">
                    <div class="c-solution-content">
                        <div class="c-solution-content__cta">
                            ${data.ctaBanner ? solutionCta(data.ctaBanner) : html``}
                        </div>

                        <div class="c-solution-content__products">
                            ${productsSection(productsFour)}
                            <button class="c-products-load-more">Zobraziť všetko</button>
                        </div>
                    </div>
                </div>

                <div class="l-solution__categories">
                    <div class="l-container-wide is-shorter">
                        ${data.categories ? solutionCategories(data.categories) : html``}
                    </div>
                </div>
            </div>
        </div>
    `;
};

/**
 * Load data and render the solution page
 */
export const loadAndRenderSolutionPage = async () => {
    try {
        const data = await loadData();
        const tpl = renderSolutionPage(data);
        requestAnimationFrame(() => {
            initProductSlider();
        });

        return tpl;
    } catch (error) {
        return html`<div class="l-solution">Error loading data: ${error.message}</div>`;
    }
};
