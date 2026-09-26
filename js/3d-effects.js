// ==========================================================================
// 3D TILT EFFECTS — mouse-tracked tilt for project cards + profile photo
// Save as: assets/3d-effects.js  (or js/3d-effects.js, matching your folder)
// Then add before the closing </body> tag of your HTML:
//   <script src="assets/3d-effects.js"></script>
// No HTML structure changes needed — it uses your existing
// .project-card and .photo-frame / .hero-photo classes.
// ==========================================================================

(function () {
  // 1) Tilt effect for project cards
  const cards = document.querySelectorAll(".project-card");

  cards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6; // max ~6deg tilt
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `translateY(-8px) perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      card.style.setProperty("--mx", `${(x / rect.width) * 100}%`);
      card.style.setProperty("--my", `${(y / rect.height) * 100}%`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
    });
  });

  // 2) Tilt effect for profile photo (.photo-frame wraps .hero-photo)
  const photoFrame = document.querySelector(".photo-frame");
  const photo = document.querySelector(".hero-photo");

  if (photoFrame && photo) {
    photoFrame.addEventListener("mousemove", (e) => {
      const rect = photoFrame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      photo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
    });

    photoFrame.addEventListener("mouseleave", () => {
      photo.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    });
  }
})();
