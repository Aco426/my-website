function toggleContent() {
    var content = document.getElementById("moreContent");
    var link = document.querySelector(".show-more");
    var arrow = document.querySelector(".arrow");

    // Togluje prikaz sadržaja
    if (content.style.display === "none") {
        content.style.display = "block";  // Prikazuje sadržaj
        link.textContent = "Manje";      // Menja tekst na "Manje"
        arrow.classList.add("active");   // Rotira strelicu
    } else {
        content.style.display = "none";  // Sakriva sadržaj
        link.textContent = "Detaljnije"; // Menja tekst na "Detaljnije"
        arrow.classList.remove("active"); // Vraća strelicu u početni položaj
    }
}
