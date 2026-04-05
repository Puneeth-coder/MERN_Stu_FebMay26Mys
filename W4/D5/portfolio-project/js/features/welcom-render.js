function welcomeInit(){
window.addEventListener("load", () => {
  const toast = document.getElementById("welcome-toast");

  // Show toast
  toast.classList.remove("opacity-0");
  toast.classList.add("opacity-100");

  // Hide after 3 seconds
  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0");
  }, 3000);
});
};