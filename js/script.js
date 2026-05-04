const teams = [
    "Adelaide",
    "Brisbane",
    "Carlton",
    "Collingwood",
    "Essendon",
    "Fremantle",
    "Geelong",
    "Gold Coast",
    "GWS",
    "Hawthorn",
    "Melbourne",
    "North Melbourne",
    "Port Adelaide",
    "Richmond",
    "St Kilda",
    "Sydney",
    "West Coast",
    "Western Bulldogs"
  ];
  
  const ladder = document.getElementById("ladder");
  
  teams.forEach(team => {
    const li = document.createElement("li");
    li.textContent = team;
    ladder.appendChild(li);
  });
  
  new Sortable(ladder, {
    animation: 150
  });
  
  function calculateScore() {
    alert("Scoring logic goes here");
  }