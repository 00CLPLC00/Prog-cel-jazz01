// La liste de progressions harmoniques avec les noms de compositeurs associés
let progressions = [
  {composer: "Autumn Leaves", progression: ["ii7", "V7", "Imaj7", "IVmaj7"]},
{composer: "All the Things You Are", progression: ["ii7b5", "V7", "Imaj7", "VI7"]},
{composer: "Body and Soul", progression: ["iii7", "vi7", "ii7", "V7", "Imaj7"]},
{composer: "Stella by Starlight", progression: ["iim7b5", "V7", "Imaj7", "iim7b5", "V7", "Imaj7", "VI7"]},
{composer: "Summertime", progression: ["iim7b5", "V7", "Imaj7", "VI7"]},
{composer: "Fly Me to the Moon", progression: ["Imaj7", "IVmaj7", "II7", "V7"]},
{composer: "Misty", progression: ["Imaj7", "VI7", "ii7", "V7"]},
{composer: "Blue Bossa", progression: ["Cm7", "Fm7", "Bbm7", "Eb7", "Abmaj7", "Dbmaj7"]},
{composer: "On Green Dolphin Street", progression: ["Imaj7", "VI7", "ii7", "V7"]},
{composer: "My Funny Valentine", progression: ["Imaj7", "ii7", "V7", "Imaj7", "VI7"]},
{composer: "Take the A Train", progression: ["Imaj7", "VI7", "ii7", "V7"]},
{composer: "In a Sentimental Mood", progression: ["Imaj7", "vi7", "ii7", "V7"]},
{composer: "Night and Day", progression: ["Imaj7", "VI7", "ii7", "V7"]},
{composer: "Have You Met Miss Jones?", progression: ["Imaj7", "VI7", "ii7", "V7"]},
{composer: "Just Friends", progression: ["ii7", "V7", "Imaj7", "VI7"]},
{composer: "There Will Never Be Another You", progression: ["Imaj7", "VI7", "ii7", "V7"]},
{composer: "The Girl From Ipanema", progression: ["ii7b5", "V7", "Imaj7", "VI7"]},
{composer: "Days of Wine and Roses", progression: ["Imaj7", "VI7", "ii7", "V7"]},
{composer: "Blue Monk", progression: ["Imaj7", "IV7", "Imaj7", "IV7"]},
{composer: "Joy Spring", progression: ["Imaj7", "ii7", "V7", "Imaj7"]}
];

let currentProgression = null;

function setup() {
  createCanvas(800, 200);
  background(93, 109, 126 );
  
  // Créer un bouton pour sélectionner une progression harmonique aléatoire
  let button = createButton("Sélectionner une progression");
  button.mousePressed(selectRandomProgression);
}

function draw() {
  // Vérifier que la variable currentProgression n'est pas null avant de l'afficher
  if (currentProgression != null) {
    // Afficher la progression harmonique courante et le nom du compositeur associé
    textAlign(CENTER);
    textSize(25);
    fill(240, 243, 244 );
    text(currentProgression.composer + ": " + currentProgression.progression.join(" - "), width/2, height/2);
  }
}

function selectRandomProgression() {
  // Choisir une progression harmonique aléatoire dans la liste
  let randomIndex = floor(random(progressions.length));
  currentProgression = progressions[randomIndex];
  
  // Redessiner l'arrière-plan
  background(93, 109, 126 );
}
