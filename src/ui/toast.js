export function showToast(message, type = "error", timeout = 2500) {
    let toast = document.querySelector(".c-toast");

    if (!toast) {
        toast = document.createElement("div");
        toast.className = "c-toast";
        document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.classList.remove("is-success", "is-error");
    toast.classList.add("is-visible", `is-${type}`);

    setTimeout(() => {
        toast.classList.remove("is-visible");
    }, timeout);
}
