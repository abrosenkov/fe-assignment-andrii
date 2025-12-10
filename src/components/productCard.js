import { html } from "lit-html";
import { changeQty, handleAddToCart, handleCompare, handleFavorite } from "../pages/solution.js";
import { renderStars } from "../ui/renderStars.js";

export const productCard = (product = {}, index = 0) => {
    if (!product?.id) return html``;

    return html`
        <article class="c-product-card">
            ${product.badges?.length
                ? html`<div class="c-product-card__badges">
                      ${product.badges.map(
                          (badge) =>
                              html` <span
                                  class="c-product-card__badges__badge c-product-card__badges__${badge.type}"
                              >
                                  ${badge.label}</span
                              >`
                      )}
                  </div> `
                : ""}

            <div class="c-product-card__actions">
                <button
                    type="button"
                    class="c-product-card__actions__button"
                    aria-label="Porovnat"
                    @click=${() => handleCompare(product)}
                >
                    <svg
                        class="c-product-card__actions__button-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1024"
                        height="1024"
                        viewBox="0 0 1024 1024"
                    >
                        <g id="icomoon-ignore"></g>
                        <path
                            fill="#000"
                            d="M545.187 16.812v122.125c18.047 6.902 33.341 19.286 44 35.062l268.81-55.875 1.069 2.313 120.186 258.375h47.936v46.187c0 103.778-84.41 188.188-188.186 188.188s-188.192-84.41-188.192-188.188v-46.187h47.942l82.182-176.876-176.684 36.75c-4.673 34.127-27.844 62.294-59.063 74.25v505.872h69.563c49.864 0 90.44 40.576 90.44 90.438v31.565h65.997v66.374h-516.374v-66.374h66v-31.565c0-49.862 40.572-90.438 90.437-90.438h67.563v-505.81c-19.378-7.416-35.626-21.082-46.313-38.562l-199.75 41.5 92.5 198.876h47.937v46.187c0 103.775-84.41 188.191-188.188 188.191s-188.187-84.416-188.187-188.191v-46.187h47.938l117.187-251.938 1.563-0.312 256.938-53.5c5.946-32.221 28.451-58.611 58.375-70.062v-122.188h66.374zM411.25 885.19c-13.247 0-24.063 10.816-24.063 24.058v31.565h251.626v-31.565c0-13.242-10.814-24.058-24.063-24.058h-203.5zM65 581.187c9.651 57.579 59.726 101.622 120 101.622s110.349-44.044 120-101.622h-240zM719.002 445.187c9.651 57.579 59.725 101.626 120 101.626s110.349-44.047 120-101.626h-240zM118.063 514.813h133.875l-66.938-144.125-66.937 144.125zM772.064 378.813h133.875l-66.938-144.125-66.938 144.125zM512 199.187c-14.774 0-26.813 12.038-26.813 26.813s12.038 26.813 26.813 26.813c14.774 0 26.813-12.038 26.813-26.813s-12.038-26.813-26.813-26.813z"
                        ></path>
                    </svg>
                </button>
                <button
                    type="button"
                    class="c-product-card__actions__button"
                    aria-label="Přidat do oblíbených"
                    @click=${() => handleFavorite(product)}
                >
                    <svg
                        class="c-product-card__actions__button-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1024"
                        height="1024"
                        viewBox="0 0 1024 1024"
                    >
                        <g id="icomoon-ignore"></g>
                        <path
                            fill="none"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke-miterlimit="4"
                            stroke-width="102.4"
                            stroke="#000"
                            d="M889.171 196.693c-21.792-21.802-47.667-39.098-76.141-50.898-28.48-11.8-59.002-17.873-89.83-17.873s-61.35 6.074-89.828 17.873c-28.478 11.8-54.353 29.096-76.145 50.898l-45.227 45.227-45.227-45.227c-44.019-44.019-103.721-68.748-165.973-68.748s-121.955 24.729-165.974 68.748c-44.019 44.019-68.748 103.721-68.748 165.973s24.73 121.955 68.748 165.974l377.174 377.171 377.171-377.171c21.805-21.793 39.098-47.667 50.899-76.145s17.875-59.002 17.875-89.828c0-30.826-6.074-61.35-17.875-89.828s-29.094-54.353-50.899-76.145v0z"
                        ></path>
                    </svg>
                </button>
            </div>

            <picture>
                <source
                    srcset="
                        /product/product-${index + 1}.webp    1x,
                        /product/product-${index + 1}@2x.webp 2x
                    " />
                <img
                    class="c-product-card__image"
                    src="/product/product-${index + 1}@2x.webp"
                    alt="${product.name}"
                    loading="lazy"
            /></picture>

            <div class="c-product-card__content">
                <div class="c-product-card__content__rating">
                    ${renderStars(Math.round(product.rating ?? 0))}
                    <span class="c-product-card__reviews"> (${product.reviewCount}) </span>
                </div>

                <h3 class="c-product-card__content__title">${product.name}</h3>

                <p class="c-product-card__content__model">${product.sku}</p>

                <div class="c-product-card__content__prices">
                    <p class="c-product-card__old-price">
                        ${product.originalPrice} ${product.currency}
                    </p>

                    <p class="c-product-card__price">${product.salePrice} ${product.currency}</p>

                    <p class="c-product-card__vat">
                        ${product.priceWithoutVAT} ${product.currency} bez DPH
                    </p>
                </div>

                <div class="c-product-card__stock">${product.stock}</div>
            </div>

            <div class="c-product-card__controls">
                <div class="c-product-card__controls__quantity">
                    <button
                        class="c-product-card__controls__quantity-btn"
                        type="button"
                        aria-label="Znížiť množstvo"
                        @click=${() => changeQty(product.id, -1)}
                    >
                        <svg
                            class="c-product-card__controls__quantity-btn-icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="6144"
                            height="1024"
                            viewBox="0 0 6144 1024"
                        >
                            <g id="icomoon-ignore"></g>
                            <path fill="#000" d="M0 0h6144v1024h-6144v-1024z"></path>
                        </svg>
                    </button>

                    <input
                        type="number"
                        value="1"
                        min="1"
                        max="10"
                        id="qty-${product.id}"
                        inputmode="numeric"
                        class="c-product-card__controls__quantity-input"
                        aria-label="Množstvo"
                    />

                    <button
                        class="c-product-card__controls__quantity-btn"
                        type="button"
                        aria-label="Zvýšiť množstvo"
                        @click=${() => changeQty(product.id, 1)}
                    >
                        <svg
                            class="c-product-card__controls__quantity-btn-icon"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="1024"
                            height="1024"
                            viewBox="0 0 1024 1024"
                        >
                            <g id="icomoon-ignore"></g>
                            <path
                                fill="#000"
                                d="M597.333 426.667v-426.667h-170.667v426.667h-426.667v170.667h426.667v426.667h170.667v-426.667h426.667v-170.667h-426.667z"
                            ></path>
                        </svg>
                    </button>
                </div>

                <button
                    type="button"
                    class="c-product-card__controls__add-btn"
                    aria-label="Pridať ${product.name} do košíka"
                    @click=${() => handleAddToCart(product)}
                >
                    <svg
                        class="c-product-card__controls__add-btn-icon"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1069"
                        height="1024"
                        viewBox="0 0 1069 1024"
                    >
                        <g id="icomoon-ignore"></g>
                        <path
                            fill="none"
                            stroke="#fff"
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            stroke-miterlimit="4"
                            stroke-width="89.0435"
                            d="M44.522 44.522h178.087l119.318 596.146c4.071 20.498 15.222 38.912 31.501 52.015s36.648 20.066 57.542 19.665h432.751c20.894 0.401 41.263-6.563 57.544-19.665 16.277-13.103 27.43-31.517 31.499-52.015l71.235-373.537h-756.87M445.217 934.957c0 24.589-19.933 44.522-44.522 44.522s-44.522-19.932-44.522-44.522c0-24.589 19.933-44.522 44.522-44.522s44.522 19.932 44.522 44.522zM934.957 934.957c0 24.589-19.932 44.522-44.522 44.522s-44.522-19.932-44.522-44.522c0-24.589 19.932-44.522 44.522-44.522s44.522 19.932 44.522 44.522z"
                        ></path>
                    </svg>
                    <span class="c-product-card__add-btn-text">Do košíka</span>
                </button>
            </div>
        </article>
    `;
};
