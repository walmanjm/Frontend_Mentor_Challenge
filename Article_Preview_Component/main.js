const profilesosmed = document.querySelector(".profilesosmed");
const iconshare = document.querySelector(".iconshare");
const sosmed = document.querySelector(".sosmed");

profilesosmed.addEventListener("click", () => {
    sosmed.classList.toggle("active");
    iconshare.classList.toggle("active");
    profilesosmed.classList.toggle("active");
});