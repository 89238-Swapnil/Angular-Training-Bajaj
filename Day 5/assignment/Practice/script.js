const addBtn = document.getElementById("addBtn");
const removeBtn = document.getElementById("removeBtn");
const tableBody = document.querySelector("#dataTable tbody");
const itemSelect = document.getElementById("itemSelect");

let rowCount = 0;

addBtn.addEventListener("click", () => {
  const selectedItem = itemSelect.value;
  rowCount++;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${rowCount}</td>
    <td>${selectedItem}</td>
  `;
  tableBody.appendChild(newRow);
});

removeBtn.addEventListener("click", () => {
  if (rowCount > 0) {
    tableBody.deleteRow(-1);
    rowCount--;
  }
});
