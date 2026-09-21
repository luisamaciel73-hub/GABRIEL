// Lightbox (abrir foto grande)
const lightbox = document.getElementById("lightbox");
const lightImg = document.getElementById("lightImg");
const closeLightbox = document.getElementById("closeLightbox");

document.querySelectorAll(".ph img").forEach(img => {
  img.addEventListener("click", () => {
    lightImg.src = img.src;
    lightImg.alt = img.alt || "Foto";
    lightbox.showModal();
  });
});

closeLightbox.addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (e) => {
  const rect = lightbox.getBoundingClientRect();
  const clickInside =
    e.clientX >= rect.left && e.clientX <= rect.right &&
    e.clientY >= rect.top && e.clientY <= rect.bottom;
  if (!clickInside) lightbox.close();
});