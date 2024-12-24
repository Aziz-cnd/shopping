// Sélectionner les éléments
let plusButtons = Array.from(document.getElementsByClassName("fa-plus-circle"));
let minusButtons = Array.from(document.getElementsByClassName("fa-minus-circle"));
let trashButtons = Array.from(document.getElementsByClassName("fa-trash-alt"));
let heartButtons = Array.from(document.getElementsByClassName("fa-heart"));
let totalDisplay = document.querySelector(".total");

// Boutons "+"
for (let i = 0; i < plusButtons.length; i++) {
  plusButtons[i].addEventListener("click", function () {
    let quantitySpan = plusButtons[i].nextElementSibling; // Trouver l'élément de la quantité
    quantitySpan.innerHTML = parseInt(quantitySpan.innerHTML) + 1; // Incrémenter la quantité
    updateTotal(); // Mettre à jour le total après l'ajout
  });
}

// Boutons "-"
for (let i = 0; i < minusButtons.length; i++) {
  minusButtons[i].addEventListener("click", function () {
    let quantitySpan = minusButtons[i].previousElementSibling; // Trouver l'élément de la quantité
    if (parseInt(quantitySpan.innerHTML) > 0) { // Empêcher d'aller en dessous de 0
      quantitySpan.innerHTML = parseInt(quantitySpan.innerHTML) - 1; // Décrémenter la quantité
      updateTotal(); // Mettre à jour le total après la réduction
    }
  });
}

// Fonction pour mettre à jour le total
function updateTotal() {
  let totalPrice = 0;
  let cards = document.querySelectorAll(".card-body"); // Sélectionner toutes les cartes produits

  for (let i = 0; i < cards.length; i++) {
    let quantity = parseInt(cards[i].querySelector(".quantity").innerHTML); // Récupérer la quantité
    let unitPrice = parseFloat(cards[i].querySelector(".unit-price").getAttribute("data-price")); // Récupérer le prix unitaire
    totalPrice += quantity * unitPrice; // Ajouter au total
  }

  totalDisplay.innerHTML = totalPrice.toFixed(2) + " $"; // Afficher le total avec deux décimales
}

// Boutons "Supprimer"
for (let i = 0; i < trashButtons.length; i++) {
  trashButtons[i].addEventListener("click", function () {
    let cardBody = trashButtons[i].closest(".card-body"); // Trouver l'élément contenant le produit
    let quantitySpan = cardBody.querySelector(".quantity"); // Récupérer l'élément quantité

    // Réinitialiser la quantité et mettre à jour le total
    quantitySpan.innerHTML = 0;
    updateTotal(); // Recalculer le total après suppression
  });
}

// Boutons "Cœur" (ajouté pour rendre le script plus complet)
for (let i = 0; i < heartButtons.length; i++) {
  heartButtons[i].addEventListener("click", function () {
    heartButtons[i].classList.toggle("liked"); // Ajouter ou retirer la classe "liked"
    heartButtons[i].style.color = heartButtons[i].classList.contains("liked") ? "red" : "#6c757d"; // Changer la couleur du cœur
  });
}
