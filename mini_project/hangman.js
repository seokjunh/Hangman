let words = ["apple", "banana", "kiwi", "pineapple", "watemelon"];
let rand = 0;
let inputwords = "";
let temp = new Array();

hangman();

function hangman() {
  pickWord();
  changeWords();
  game();
}

function pickWord() {
    rand = Math.ceil(Math.random()*words.length-1);
    randomWords = words[rand];
}

function changeWords() {
  for (let i = 0; i < randomWords.length; i++) {
    temp[i] = "_";
  }
}

function game() {
  while (temp.indexOf("_") != -1) {
    
    words = alert(temp.join(" "));
    inputwords = prompt("글자를 입력하세요. 취소를 누르면 게임을 멈춥니다.");

    if (inputwords === null) {
      break;
    } else if (inputwords.length >= 2) {
      alert("한 글자만 입력해주세요.");
    }else {
      for (let i = 0; i < randomWords.length; i++) {
        if (inputwords == randomWords[i]) {
          temp[i] = inputwords;
        }
      }
    }
  }

  alert("정답은 " + randomWords);
  document.getElementById("hangman").innerHTML = "!행!!맨!";
}
//