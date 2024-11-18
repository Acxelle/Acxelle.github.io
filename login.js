const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

document.addEventListener("DOMContentLoaded", () => {
  const signInButton = document.querySelector(".sign-in button");

  signInButton.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent form submission

    // Get the selected user type
    const userType = document.querySelector('input[name="userType"]:checked');

    if (userType) {
      if (userType.value === "buyer") {
        // Redirect to the index page for Buyer
        window.location.href = "index1.html";
      } else if (userType.value === "seller") {
        // Redirect to the seller page for Seller
        window.location.href = "seller.html";
      } else if (userType.value === "shop") {
        // Redirect to the seller page for Seller
        window.location.href = "shops.html";
      }
    } else {
      // Show an alert if no user type is selected
      alert("Please select a user type before signing in.");
    }
  });
});
// JavaScript to handle form sliding and showing
document.querySelectorAll('input[name="userType"]').forEach((radio) => {
  radio.addEventListener("change", function () {
    // Reset the position of forms
    document.getElementById("shopForm").classList.remove("active");
    document.getElementById("sellerForm").classList.remove("active");

    // Hide both forms initially
    document.getElementById("shopForm").classList.add("hidden");
    document.getElementById("sellerForm").classList.add("hidden");

    // Check which user type is selected and show the corresponding form
    if (this.value === "shop") {
      document.getElementById("shopForm").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("shopForm").classList.add("active");
      }, 10); // Allow time for layout rendering before sliding in
    } else if (this.value === "seller") {
      document.getElementById("sellerForm").classList.remove("hidden");
      setTimeout(() => {
        document.getElementById("sellerForm").classList.add("active");
      }, 10); // Allow time for layout rendering before sliding in
    }
  });
});
