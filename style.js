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
    