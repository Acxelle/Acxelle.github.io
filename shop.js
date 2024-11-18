document
  .getElementById("shopForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh on form submit

    // Get the input values
    const shopName = document.getElementById("shopName").value;
    const address = document.getElementById("address").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const openTime = document.getElementById("openTime").value;
    const closeTime = document.getElementById("closeTime").value;

    // Create a new row
    const newRow = document.createElement("tr");

    // Create table cells and append to the new row
    newRow.innerHTML = `
      <td>${shopName}</td>
      <td>${address}</td>
      <td>${contactNumber}</td>
      <td>${openTime}</td>
      <td>${closeTime}</td>
    `;

    // Append the new row to the table body
    document.querySelector("#shopsTable tbody").appendChild(newRow);

    // Clear the form after submission
    document.getElementById("shopForm").reset();
  });
