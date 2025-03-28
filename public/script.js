/*
 to respond to the submit button
*/
function solve() {
  // Access the form defined in index and create a form data object using FormData()
  const form = document.getElementById('input_form');
  const formData = new FormData(form);
  
  // Get the name of the celebrant
  const name = formData.get('name');
  
  // Get and check the gender
  const gender = formData.get('gender');
  const pronoun = (gender === 'male') ? "he's" : "she's";
  
  // Define the Happy Birthday song
  const happyBirthday = [
      "Happy", "birthday", "to", "you",
      "Happy", "birthday", "to", "you",
      "Happy", "birthday", "dear", name,
      "Happy", "birthday", "to", "you"
  ];
  
  // Define the Good Fellow song
  const goodFellow = [
      `For ${pronoun} a jolly good fellow.`,
      `For ${pronoun} a jolly good fellow.`,
      `For ${pronoun} a jolly good fellow, which nobody can deny!`
  ];
  
  // Output the songs
  const outputDiv = document.getElementById('output');
  outputDiv.innerHTML = '<h2>Happy Birthday Song</h2>';
  
  // Sing the Happy Birthday song
  const guests = formData.getAll('guests'); // Assuming guests are collected in the form
  const totalGuests = guests.length;
  
  // Sing the song with guests
  for (let i = 0; i < happyBirthday.length; i++) {
      const singer = guests[i % totalGuests]; // Cycle through guests
      outputDiv.innerHTML += `${singer}: ${happyBirthday[i]}<br>`;
  }
  
  // Add the Good Fellow song
  outputDiv.innerHTML += '<h2>Good Fellow Song</h2>';
  goodFellow.forEach(line => {
      outputDiv.innerHTML += `${line}<br>`;
  });
}

  


  // PLEASE STUDY THE CODES BELOW, BUT DO NOT CHANGE ANYTHING 

  // this function will create the needed input fields and corresponding Going checkboxes for the number of expected guests

  
  // A quick data dump on Output div to show users input on the browser.
  function printFormData() {
    const form = document.getElementById('input_form');
    const formData = new FormData(form);
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h2> Output <h2>';
    for (let [key, value] of formData.entries()){
      outputDiv.innerHTML += `${key}: ${value} <br>`;
    }
    const myData = Object.fromEntries(formData.entries());
    console.log(myData)
    console.log(formData.entries())
  }
