const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  const button = card.querySelector("button");
  const dialog = card.querySelector("dialog");
  const closeButton = dialog.querySelector("button");

  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  button.addEventListener("click", () => {
    dialog.showModal();
  });
});
