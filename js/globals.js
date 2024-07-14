const outputEl = document.getElementById("output");
const inputEl = document.getElementById("terminal-input");
const terminalEl = document.getElementById("terminal");
const adDOM = document.getElementById("ad");
const viDOM = document.getElementById("vi");
const editorDOM = document.getElementById("editor");
const editorBtn = document.getElementById("editor-btn");
const preRenderDOM = document.getElementById("prerender");
const promptDOM = document.getElementById("prompt");

let prompt = `C:\\Users\\H0lyWat3r>`;

if (window.innerWidth < 480) {
  prompt = `>$`;
}
const commands = {
  whoami: "Shows your username",
  about: "Voluntary personal information disclosure?!",
  social: "Display social networks",
  projects: "View coding projects",
  date: "View date",
  echo: "Typical Linux echo command",
  help: "You obviously already know what this does",
  email: "Do not email me",
  cls: "Clear terminal",
  dir: "To view the list of blogs",
  type: "To read files. Usage: file1.html",
  "powershell.exe": "spawns PowerShell",
  "cmd.exe": "spawns Command Prompt"
};

const blogs = [
  { name: "Butterfly Effect", file: "blog1.html" },
  { name: "PNPT Review 2023", file: "pnpt.html" },
  { name: "Wannacry Ransomware", file: "wannacry.html" },
  { name: "Tumbaad", file: "blog2.html" },
  {name: "Pivot", file: "pivot.html"}
];

const pages = blogs.map((item) => item.file);


const secretMusic = new Audio("./assets/audio/goofy-ahh-2.mp3");
