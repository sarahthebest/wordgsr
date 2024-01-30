const words = [
    "CRUD",
    "Array",
    "Javascript",
    "Tailwind",
    "Hypertext Transfer Protocol",
    "SQL injection",
    "Authentication",
    "Authorization",
    "Proxy",
    "Concatenate",
    "mkdir",
    "Boolean",
    "Node.js",
    "Function"
  ];
  
  const hints = [
    "Create, read, update, delete",
    "Collection of items",
    "Script language",
    "CSS framework",
    "HTTP",
    "Common security vulnerability",
    "Who are you?",
    "Access",
    "Gateway",
    "To join items",
    "Create new folder",
    "True or false",
    "Javascript runtime environment",
    "Reusable block of code"
  ];
  
  let displayWord = "";
  
  function shuffle(str) {
    let strArray = Array.from(str);
    for (let i = 0; i < strArray.length - 1; i++) {
      let r = Math.floor(Math.random() * strArray.length);
  
      let temp = strArray[i];
      strArray[i] = strArray[r];
      strArray[r] = temp;
    }
    return strArray.join(" ");
  }
  
  function check() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    if (input.value.toLowerCase() == displayWord.toLowerCase())
      output.innerHTML = "Correct!";
    else output.innerHTML = "Incorrect...";
  }
  
  function refresh() {
    let index = Math.floor(Math.random() * words.length);
    displayWord = words[index];
    let displayHint = hints[index];
  
    let scrambleWord = document.getElementById("scrambleWord");
    scrambleWord.innerText = shuffle(displayWord).toUpperCase();
    let hint = document.getElementById("hint");
    hint.innerHTML = "<b>Hint:</b> " + displayHint;
    document.getElementById("output").innerText = "Result:";
  }
  
  refresh();
  