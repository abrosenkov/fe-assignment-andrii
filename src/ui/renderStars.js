import { html } from "lit-html";

export const renderStars = (rating) => {
    const max = 5;

    return html`
        <div class="c-rating-stars" aria-label="Hodnotenie ${rating} z 5" role="img">
            ${Array.from({ length: max }).map((_, i) => {
                const isActive = i < rating;

                return html`
                    <svg
                        class="c-rating-star ${isActive ? "is-active" : ""}"
                        width="13"
                        height="13"
                        viewBox="0 0 13 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            d="M6.50052 10.4607L2.47747 13L3.54012 8.19325L0 4.94325L4.66558 4.537L6.50052 0L8.33442 4.537L13 4.94325L9.45988 8.19325L10.5225 13L6.50052 10.4607Z"
                            fill="currentColor"
                        />
                    </svg>
                `;
            })}
        </div>
    `;
};
