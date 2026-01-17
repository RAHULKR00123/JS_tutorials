console.log("JS is connected");

const additemBtn = document.getElementById("addItemBtn");
const tableBody = document.querySelector("#naam");

additemBtn.addEventListener("click", () => {
  console.log("Button clicked");

  const row = document.createElement("tr");

  row.innerHTML = `
    <td><input type="text" placeholder="Item name"></td>
    <td><input type="number" value="1"></td>
    <td><input type="number" value="0"></td>
  `;

  tableBody.appendChild(row);
});
