var form = document.getElementById("add-frm");
var items = document.getElementById("items");
var ntitle = document.getElementById("n-title");
var nbody = document.getElementById("n-body");
var tableDiv = document.getElementById("tbl-div");
var search = document.getElementById("srch");
var resetBtn = document.getElementById("reset");

var noteCount = 0;
var newNote = "";
var isUpdate = false;
var record = "";
var note = "";
var body = "";

// -----Events-----

window.onload = updateTable;
form.addEventListener("submit", addNote);
search.addEventListener("keyup", searchNotes);
items.addEventListener("click", removeNote);
items.addEventListener("click", viewNUpdateNote);
resetBtn.addEventListener("click", resetAll);

// -----Functions-----

// Update table
function updateTable() {
  if (noteCount > 0) {
    tableDiv.style.display = "";

    if (isUpdate) {
      note.firstChild.textContent = ntitle.value;
      note.lastChild.textContent = nbody.value;
      isUpdate = false;
      noteCount--;
    } else {
      items.appendChild(newNote);
    }
  } else {
    tableDiv.style.display = "none";
  }
}

// Add Note
function addNote(e) {
  e.preventDefault();

  if (ntitle.value == "" || nbody.value == "") {
    alert("Please fill all fields!");
  } else {
    // New tr
    var tr = document.createElement("tr");
    tr.className = "item";

    // New td for title and body
    var td1 = document.createElement("td");
    td1.appendChild(document.createTextNode(ntitle.value));
    var span = document.createElement("span");
    span.className = "note-body";
    span.appendChild(document.createTextNode(nbody.value));
    td1.appendChild(span);

    // New td for view
    var td2 = document.createElement("td");
    td2.className = "btcellv";
    var btn1 = document.createElement("button");
    btn1.appendChild(document.createTextNode("View"));
    btn1.setAttribute("id", "vw");
    td2.appendChild(btn1);

    // New td for delete
    var td3 = document.createElement("td");
    td3.className = "btcelld";
    var btn2 = document.createElement("button");
    btn2.appendChild(document.createTextNode("Delete"));
    btn2.setAttribute("id", "del");
    td3.appendChild(btn2);

    // Add all tds to tr
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    // Increment note count
    noteCount++;

    // Set new note
    newNote = tr;

    // Add or Update the note of the table
    updateTable();
  }

  // Reset all
  resetAll();
}

// Remove Note
function removeNote(e) {
  if (e.target.id === "del") {
    if (confirm("Are you sure?")) {
      var tr = e.target.parentElement.parentElement;
      items.removeChild(tr);

      // Update table
      noteCount--;
      if (noteCount === 0) {
        updateTable();
      }
    }
  }
}

// Search Notes
function searchNotes(e) {
  var searchTxt = e.target.value.toLowerCase();

  var list = items.getElementsByClassName("item");

  var listArr = Array.from(list);
  listArr.forEach(function (item) {
    // Get title
    var noteTitle = item.firstChild.textContent;
    // Match
    if (noteTitle.toLowerCase().indexOf(searchTxt) != -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

// View & Update Note
function viewNUpdateNote(e) {
  if (e.target.id === "vw") {
    record = e.target.parentElement.parentElement;
    note = record.firstChild;
    ntitle.value = note.firstChild.textContent;
    nbody.value = note.lastChild.textContent;
    isUpdate = true;
  }
}
