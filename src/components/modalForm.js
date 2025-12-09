import { html } from "lit-html";

export const modalForm = () =>
    html` <div class="c-solution-form" id="modalForm" aria-hidden="true">
        <div class="c-solution-form__modal" role="dialog" aria-modal="true">
            <button
                type="button"
                class="c-solution-form__close-btn"
                aria-label="Zavrieť"
                id="modal-close"
            >
                <svg
                    class="c-solution-form__close-icon"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="1024"
                    height="1024"
                    viewBox="0 0 1024 1024"
                >
                    <g id="icomoon-ignore"></g>
                    <path
                        fill="#000"
                        d="M964.536 895.283c4.548 4.548 8.156 9.945 10.613 15.884 2.464 5.945 3.729 12.312 3.729 18.745 0 6.427-1.265 12.794-3.729 18.739-2.458 5.939-6.066 11.336-10.613 15.884s-9.945 8.156-15.884 10.613c-5.945 2.464-12.312 3.729-18.739 3.729-6.433 0-12.8-1.265-18.745-3.729-5.939-2.458-11.336-6.066-15.884-10.613l-405.844-405.906-405.844 405.906c-9.183 9.186-21.639 14.342-34.626 14.342s-25.443-5.156-34.626-14.342c-9.183-9.186-14.343-21.637-14.343-34.623 0-12.993 5.159-25.443 14.343-34.629l405.906-405.844-405.906-405.844c-9.183-9.183-14.343-21.639-14.343-34.626s5.159-25.443 14.343-34.626c9.183-9.183 21.639-14.343 34.626-14.343s25.443 5.159 34.626 14.343l405.844 405.906 405.844-405.906c9.186-9.183 21.637-14.343 34.629-14.343 12.987 0 25.437 5.159 34.623 14.343s14.342 21.639 14.342 34.626c0 12.987-5.156 25.443-14.342 34.626l-405.906 405.844 405.906 405.844z"
                    ></path>
                </svg>
            </button>
            <div class="c-solution-form__title-content">
                <h2 class="c-solution-form__title">Tajná ponuka produktov Dewalt len pre vás</h2>
                <p class="c-solution-form__required-fields">* povinné polia</p>
            </div>
            <form class="c-solution-form__form">
                <div class="c-solution-form__input-wrapper">
                    <label for="modal-user-email" class="c-solution-form__form-label"
                        >E-mail <span>*</span></label
                    >
                    <input
                        type="email"
                        id="modal-user-email"
                        name="user-email"
                        class="c-solution-form__form-input"
                        required
                    />
                </div>
                <div class="c-solution-form__input-wrapper--name-tel">
                    <div class="c-solution-form__input-wrapper-name">
                        <label for="modal-user-name" class="c-solution-form__form-label"
                            >Meno a priezvisko <span>*</span></label
                        >
                        <input
                            type="text"
                            id="modal-user-name"
                            name="user-name"
                            class="c-solution-form__form-input"
                            required
                        />
                    </div>
                    <div class="c-solution-form__input-wrapper-tel">
                        <label for="modal-user-tel" class="c-solution-form__form-label"
                            >Telefónne číslo (mobil) <span>*</span></label
                        >
                        <input
                            type="tel"
                            id="modal-user-tel"
                            name="user-tel"
                            class="c-solution-form__form-input"
                            placeholder="+421 _ _ _  _ _ _   _ _ _"
                            pattern="^+421 ?d{3} ?d{3} ?d{3}$"
                            required
                        />
                    </div>
                </div>
                <div class="c-solution-form__input-wrapper">
                    <label for="modal-user-select" class="c-solution-form__form-label"
                        >Meno a priezvisko <span>*</span></label
                    >
                    <select
                        class="c-solution-form__form-input--select"
                        id="modal-user-select"
                        name="source"
                        required
                    >
                        <option value="">Vyberte možnosť</option>
                        <option value="web">Priamo z vášho webu</option>
                        <option value="google">Google</option>
                        <option value="facebook">Facebook</option>
                        <option value="friend">Od známeho</option>
                    </select>
                </div>
                <div class="c-solution-form__button-wrapper">
                    <button
                        aria-label="Získať tajnú ponuku"
                        class="c-solution-form__submit-btn"
                        type="submit"
                    >
                        <span class="fm-text">Získať tajnú ponuku</span>
                        <svg
                            aria-hidden="true"
                            class="mf-icon"
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
                    <p class="c-solution-form__policy">
                        Odoslaním formuláru súhlasíte so
                        <a
                            class="c-solution-form__policy-link"
                            target="_blank"
                            href="#"
                            noopener
                            noreferrer
                            >spracovaním osobných údajov</a
                        >
                    </p>
                </div>
            </form>
        </div>
    </div>`;
