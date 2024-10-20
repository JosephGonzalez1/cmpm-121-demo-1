import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "My simple game";
document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
const button = document.createElement("button");
const img = document.createElement("img");
img.src = 'src/assets/fire_1f525.png';
app.append(header);
app.append(button);
button.append(img);