// ローディングが終わったら
window.addEventListener("load", () => {
    loading.classList.add("loaded");
});

// windowをクリックしてダークモードに変更
window.addEventListener("click", () => {
    document.body.classList.add("windowsDark");
})
