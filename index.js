// Static dataset of movies
const movies = [
    { title: "The Shawshank Redemption", year: 1994, rating: 9.3, description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." },
    { title: "The Godfather", year: 1972, rating: 9.2, description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son." },
    { title: "The Dark Knight", year: 2008, rating: 9.0, description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice." },
    { title: "12 Angry Men", year: 1957, rating: 8.9, description: "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence." },
    { title: "Schindler's List", year: 1993, rating: 8.9, description: "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis." },
    { title: "The Lord of the Rings: The Return of the King", year: 2003, rating: 8.9, description: "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring." }
  ];
  
  // Function to display movies data in table
  function displayData(data) {
    const tableBody = document.getElementById("data");
    tableBody.innerHTML = "";
    data.forEach(movie => {
      const row = tableBody.insertRow(-1);
      row.insertCell(0).innerHTML = movie.title;
      row.insertCell(1).innerHTML = movie.year;
      row.insertCell(2).innerHTML = movie.rating;
      row.insertCell(3).innerHTML = movie.description;
    });
  }
  
  // Function to sort movies data by
  