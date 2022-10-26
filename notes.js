const exampleNote = {
  title: "Orange",
  discription: "Orange is fruit",
  author: "Nick",
  cratedAt: "2022",
  lastUpdatedAt: "today",
  id: "1",
};

const author = "Nick";

const notes = [exampleNote];

function chooseMode() {
  const userInput = prompt(
    "To create new note type 'Create' to show all type 'Show', to check out an element 'Search'",
    "You should write there"
  );
  switch (userInput) {
    case "Create":
      createNote();
      break;
    case "Show":
      showNote();
      break;
    case "Exit":
      exit();
      break;
    case "Delete":
      deleteNote();
      break;
    case "Replace":
      replaceNote();
      break;
    case "Search":
      showNoteById();
      break;
    case "SearchBy":
      searchByNote();
      break;
    case "Prefix":
      prefixNote();
      break;
    case "Position":
      searchPositionNote();
      break;
    case "Sort":
      sortNotes();
      break;
    case "Every":
      everyFunction();
      break;
    default:
      console.log("Invalid Input, try again");
      chooseMode();
  }
}

function generateId() {
  let id = "id" + new Date().getTime();
  return id;
}

function exit() {}

function createNote() {
  let title = prompt("Please enter the title:", " ");
  let discription = prompt("Please enter the discription:", " ");
  const newnote = {
    title: title,
    discription: discription,
    author: author,
    cratedAt: new Date(),
    lastUpdatedAt: new Date(),
    id: generateId(),
  };
  notes.push(newnote);
  chooseMode();
}

function showNote() {
  console.log(JSON.stringify(notes, null, 2));
  chooseMode();
}

function deleteNote() {
  const indextoDelete = getIndex(
    "Please enter the number of the note, you want to delete:"
  );
  notes.splice(indextoDelete, 1);
  chooseMode();
}

function replaceNote() {
  const indextoReplace = getIndex(
    "Please enter the number of the note, you want to replace:"
  );
  const newValue = prompt("Please enter the new note:", notes[indextoReplace]);
  notes[indextoReplace] = newValue;
  chooseMode();
}

function showNoteById() {
  const id = prompt("Please enter id, the element you qanted to find out:", "");
  function getObjectById(x) {
    return x.id === id;
  }
  const element = notes.find(getObjectById);
  console.log(element);
  chooseMode();
}

function getIndex(textForPrompt) {
  const indexString = prompt(textForPrompt, "");

  const indexNumber = Number(indexString);

  if (indexNumber >= 0) {
    return indexNumber;
  } else {
    console.log("Invalid input, try again");
    return getIndex(textForPrompt);
  }
}

function searchByNote() {
  const searchText = prompt("Enter the string you want to search:", "");
  const serachTextTolovercase = searchText.toLowerCase();
  const searchResult = notes.filter(function filtering(note) {
    return note.toLowerCase().includes(serachTextTolovercase);
  });
  console.log(searchResult);
  chooseMode();
}
function prefixNote() {
  const prefixText = prompt("Enter the prefix", "");
  const prefixResult = notes.map(function addPrefix(note) {
    return prefixText + note;
  });
  console.log(prefixResult);
  chooseMode();
}

function searchPositionNote() {
  const searchPosition = prompt(
    "Enter the note, which position you want to find:",
    ""
  );
  const positionResult = notes.indexOf(searchPosition);
  console.log(positionResult);
  chooseMode();
}

function sortNotes() {
  console.log("Old array:", notes.join());
  console.log("Sorted array:", notes.sort());
  chooseMode();
}

function everyFunction() {
  const everyText = prompt("Enter the string you want to check out:", "");
  const everyTextTolovercase = everyText.toLowerCase();
  function arrIncludes(note) {
    return note.toLowerCase().includes(everyTextTolovercase);
  }
  const everyResult = notes.every(arrIncludes);
  console.log(everyResult);
  chooseMode();
}

chooseMode();
