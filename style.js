function checkAge() {
    var age = parseInt(document.getElementById('age').value);
    var resultCard = document.getElementById('resultCard');
    var resultText = document.getElementById('resultText');
    var cardContainer = document.getElementById('cardContainer');
    var adultCard = document.getElementById('adultCard');
    var childCard = document.getElementById('childCard');
  
    if (age >= 18) {
      resultText.innerHTML = "<h1>You are an adult!</h1>";
      resultCard.style.display = 'block';
      adultCard.style.display = 'block';
     // childCard.style.display='none';
    } else {
      resultText.innerHTML = "<h1>You are a child!</h1>";
      resultCard.style.display = 'block';
      childCard.style.display = 'block';
      //adultCard.style.display = 'none';

    }

    }
    /*
  function showResult(message, showPoo) {
    const resultCard = document.getElementById('resultCard');
    const resultMessage = document.getElementById('resultMessage');
    const pooImage = document.getElementById('pooImage');
  
    resultMessage.textContent = message;
    resultCard.style.display = 'block';
  
    if (showPoo) {
      pooImage.style.display = 'block';
    } else {
      pooImage.style.display = 'none';
    }}
  

s
  function checkAge() {
    const age = document.getElementById('ageInput').value;
  
    if (age >= 18) {
      showResult('You are an adult', false);
    } else {
      showResult('You are a child', true);
    }
  }
  
  function showResult(message, showPoo) {
    const resultCard = document.getElementById('resultCard');
    const resultMessage = document.getElementById('resultMessage');
    const pooImage = document.getElementById('pooImage');
  
    resultMessage.textContent = message;
    resultCard.style.display = 'block';
  
    if (showPoo) {
      pooImage.style.display = 'block';
    } else {
      pooImage.style.display = 'none';
    }
  }*/