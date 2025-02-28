console.log("Javascripts here!")

const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".box img");
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImage");
    let closeBtn = document.querySelector(".close");

    images.forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
        };
    });

    closeBtn.onclick = function() {
        modal.style.display = "none";
    };

    modal.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
});

