import { validateEmail } from "../api/emailApi.js";
import { showToast } from "./toast.js";

// Basic email format validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Slovak phone number format
const phoneRegex = /^\+421 ?\d{3} ?\d{3} ?\d{3}$/;

// Add error message to a field
const addError = (field, message) => {
    if (!field) return;

    field.classList.add("c-solution-form__form-input--error");

    // Delete old error message if exists
    const old = field.parentElement.querySelector(".c-solution-form__error-text");
    if (old) old.remove();

    const span = document.createElement("span");
    span.className = "c-solution-form__error-text";
    span.textContent = message;
    field.parentElement.appendChild(span);
};

const clearErrors = (form) => {
    form.querySelectorAll(".c-solution-form__form-input--error").forEach((el) =>
        el.classList.remove("c-solution-form__form-input--error")
    );

    form.querySelectorAll(".c-solution-form__error-text").forEach((el) => el.remove());
};

export const openModal = () => {
    const modal = document.getElementById("modalForm");
    if (!modal) return;

    modal.classList.add("is-open");
    modal.removeAttribute("aria-hidden");

    //if needed, prevent background scrolling
    document.body.style.overflow = "hidden";

    const firstInput = modal.querySelector("input, select, button");
    firstInput?.focus();
};

const closeModal = () => {
    const modal = document.getElementById("modalForm");
    if (!modal) return;
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");

    //if needed, restore background scrolling
    document.body.style.overflow = "";
};

export const initModalForm = () => {
    const modal = document.getElementById("modalForm");
    if (!modal) return;

    const form = modal.querySelector("form");
    const closeBtn = modal.querySelector("#modal-close");

    // Buttons to open modal
    const openButtons = document.querySelectorAll("[data-modal-open]");

    openButtons.forEach((btn) =>
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            openModal();
        })
    );

    // Close button
    closeBtn?.addEventListener("click", () => {
        closeModal();
    });

    // Click outside modal content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Escape key handler
    const handleKeydown = (e) => {
        if (e.key === "Escape") {
            closeModal();
        }
    };
    document.addEventListener("keydown", handleKeydown);

    // Form submission handler
    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        clearErrors(form);

        const emailField = form.querySelector("#modal-user-email");
        const nameField = form.querySelector("#modal-user-name");
        const phoneField = form.querySelector("#modal-user-tel");
        const sourceField = form.querySelector("#modal-user-select");

        const email = emailField.value.trim();
        const name = nameField.value.trim();
        const phone = phoneField.value.trim();
        const source = sourceField.value.trim();

        let isValid = true;

        // Name validation
        if (name.length < 3) {
            addError(nameField, "Zadajte celé meno.");
            isValid = false;
        }

        // Email validation
        if (!emailRegex.test(email)) {
            addError(emailField, "Zadajte platný e-mail.");
            isValid = false;
        }

        // Phone validation
        if (!phoneRegex.test(phone)) {
            addError(phoneField, "Zadajte telefón v tvare +421 900 123 456.");
            isValid = false;
        }

        // Source validation
        if (!source) {
            addError(sourceField, "Vyberte možnosť.");
            isValid = false;
        }

        if (!isValid) {
            showToast("Skontrolujte prosím povinné polia.", "error");
            return;
        }

        // Server-side email validation
        const apiResult = await validateEmail(email);

        if (!apiResult.success) {
            addError(emailField, apiResult.message || "E-mail sa nepodarilo overiť.");
            showToast("E-mail sa nepodarilo overiť.", "error");
            return;
        }

        //Send form (here we just simulate)
        showToast("Formulár bol úspešne odoslaný.", "success");
        form.reset();
        closeModal();
    });
};
