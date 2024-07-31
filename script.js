const input = document.getElementById("text");
const output = document.getElementById("list");
function add() {
  var text = input.value;
  output.value += `<li>${text}</li>`;
}
