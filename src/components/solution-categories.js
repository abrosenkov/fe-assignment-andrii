import { html } from "lit-html";

export const solutionCategories = (categories = []) => {
    if (!categories.length) {
        return html`<p>Kategórie momentálne nie sú dostupné.</p>`;
    }

    const leftSide = categories.slice(0, 4);
    const rightSide = categories.slice(4);

    return html`
        <div class="c-solution-categories">
            <h2 class="c-solution-categories__title">Top kategórie produktov</h2>

            <div class="c-solution-categories__items">
                <div class="c-solution-categories__left-side">
                    ${leftSide.map((category) => {
                        const subcategories = category.subcategories ?? [];
                        const listClasses =
                            subcategories.length > 3
                                ? "c-solution-categories__item-list c-solution-categories__item-list--two-columns"
                                : "c-solution-categories__item-list";
                        return html`
                            <div
                                class="c-solution-categories__item c-solution-categories__item-${category.id}"
                            >
                                <div
                                    class="c-solution-categories__item-image c-solution-categories__item-image-${category.id}"
                                ></div>

                                <div
                                    class="c-solution-categories__item-overlay c-solution-categories__item-overlay-${category.id}"
                                ></div>

                                <div class="c-solution-categories__item-content">
                                    <div class="c-solution-categories__item-content__title">
                                        <h3 class="c-solution-categories__item-title">
                                            ${category.name}
                                        </h3>
                                        <span class="c-solution-categories__item-count">
                                            ${category.productCount}
                                        </span>
                                    </div>
                                    <ul class="${listClasses}">
                                        ${category.subcategories.slice(0, 6).map(
                                            (item) =>
                                                html`<li class="c-category-card__item-list__item">
                                                    <svg
                                                        class="categories-item-icon"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="6144"
                                                        height="1024"
                                                        viewBox="0 0 6144 1024"
                                                    >
                                                        <g id="icomoon-ignore"></g>
                                                        <path
                                                            d="M512 0h5120c282.77 0 512 229.23 512 512s-229.23 512-512 512h-5120c-282.77 0-512-229.23-512-512s229.23-512 512-512z"
                                                        ></path>
                                                    </svg>
                                                    <a
                                                        class="c-category-card__item-list__item-link"
                                                        href="${item.link}"
                                                        >${item.name}</a
                                                    >
                                                </li>`
                                        )}
                                    </ul>

                                    <a
                                        class="c-solution-categories__all-categories"
                                        href="${category.link}"
                                        ><span class="c-solution-categories__all-categories-text"
                                            >${category.ctaText}</span
                                        ><svg
                                            aria-hidden="true"
                                            focusable="false"
                                            class="categories-icon"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1303"
                                            height="1024"
                                            viewBox="0 0 1303 1024"
                                        >
                                            <g id="icomoon-ignore"></g>
                                            <path
                                                fill="#fff"
                                                d="M1287.345 548.222l-488.71 460.772c-10.189 9.607-24.008 15.006-38.418 15.006s-28.229-5.399-38.419-15.006c-10.189-9.607-15.913-22.63-15.913-36.222 0-13.582 5.724-26.615 15.913-36.222l396.065-373.353h-1063.562c-14.402 0-28.213-5.394-38.397-14.995s-15.904-22.624-15.904-36.202c0-13.578 5.721-26.601 15.904-36.202s23.995-14.995 38.397-14.995h1063.562l-396.065-373.355c-10.189-9.607-15.913-22.636-15.913-36.222s5.724-26.615 15.913-36.222c10.19-9.607 24.009-15.004 38.419-15.004s28.229 5.397 38.418 15.004l488.71 460.775c5.055 4.754 9.058 10.401 11.785 16.616 2.737 6.216 4.143 12.877 4.143 19.606s-1.406 13.39-4.143 19.606c-2.728 6.215-6.73 11.862-11.785 16.616z"
                                            ></path></svg
                                    ></a>
                                </div>
                            </div>
                        `;
                    })}
                </div>
                <div class="c-solution-categories__right-side">
                    ${rightSide.map(
                        (category) => html`
                            <div
                                class="c-solution-categories__item c-solution-categories__item-${category.id}"
                            >
                                <div
                                    class="c-solution-categories__item-image c-solution-categories__item-image-${category.id}"
                                ></div>

                                <div
                                    class="c-solution-categories__item-overlay c-solution-categories__item-overlay-${category.id}"
                                ></div>

                                <div class="c-solution-categories__item-content">
                                    <div class="c-solution-categories__item-content__title">
                                        <h3 class="c-solution-categories__item-title">
                                            ${category.name}
                                        </h3>
                                        <span class="c-solution-categories__item-count">
                                            ${category.productCount}
                                        </span>
                                    </div>
                                    <ul class="c-solution-categories__item-list">
                                        ${category.subcategories.map(
                                            (item) =>
                                                html`<li class="c-category-card__item-list__item">
                                                    <svg
                                                        class="categories-item-icon"
                                                        version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="6144"
                                                        height="1024"
                                                        viewBox="0 0 6144 1024"
                                                    >
                                                        <g id="icomoon-ignore"></g>
                                                        <path
                                                            d="M512 0h5120c282.77 0 512 229.23 512 512s-229.23 512-512 512h-5120c-282.77 0-512-229.23-512-512s229.23-512 512-512z"
                                                        ></path>
                                                    </svg>
                                                    <a
                                                        class="c-category-card__item-list__item-link"
                                                        href="${item.link}"
                                                        >${item.name}</a
                                                    >
                                                </li>`
                                        )}
                                    </ul>

                                    <a
                                        class="c-solution-categories__all-categories"
                                        href="${category.link}"
                                        ><span class="c-solution-categories__all-categories-text"
                                            >${category.ctaText}</span
                                        ><svg
                                            aria-hidden="true"
                                            focusable="false"
                                            class="categories-icon"
                                            version="1.1"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="1303"
                                            height="1024"
                                            viewBox="0 0 1303 1024"
                                        >
                                            <g id="icomoon-ignore"></g>
                                            <path
                                                fill="#fff"
                                                d="M1287.345 548.222l-488.71 460.772c-10.189 9.607-24.008 15.006-38.418 15.006s-28.229-5.399-38.419-15.006c-10.189-9.607-15.913-22.63-15.913-36.222 0-13.582 5.724-26.615 15.913-36.222l396.065-373.353h-1063.562c-14.402 0-28.213-5.394-38.397-14.995s-15.904-22.624-15.904-36.202c0-13.578 5.721-26.601 15.904-36.202s23.995-14.995 38.397-14.995h1063.562l-396.065-373.355c-10.189-9.607-15.913-22.636-15.913-36.222s5.724-26.615 15.913-36.222c10.19-9.607 24.009-15.004 38.419-15.004s28.229 5.397 38.418 15.004l488.71 460.775c5.055 4.754 9.058 10.401 11.785 16.616 2.737 6.216 4.143 12.877 4.143 19.606s-1.406 13.39-4.143 19.606c-2.728 6.215-6.73 11.862-11.785 16.616z"
                                            ></path></svg
                                    ></a>
                                </div>
                            </div>
                        `
                    )}
                </div>
            </div>
        </div>
    `;
};
