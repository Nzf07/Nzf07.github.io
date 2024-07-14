const outputEl = document.getElementById("output");
const inputEl = document.getElementById("terminal-input");
const terminalEl = document.getElementById("terminal");
const preRenderDOM = document.getElementById("prerender");
const promptDOM = document.getElementById("prompt");

let prompt = `C:\\Users\\H0lyWat3r>`;

const commands = {
  whoami: "Displays Username",
  about: "Something about me",
  social: "My social networks",
  projects: "View coding projects",
  date: "Displays date",
  echo: "echo in current session",
  help: "Displays help menu",
  email: "My Email",
  cls: "Clear terminal",
  dir: "To view the list of blogs",
  type: "To read files. Usage: type <filename>",
  "powershell.exe": "spawns PowerShell hopefully",
  "cmd.exe": "spawns Command Prompt hopefully"
};

const blogs = [
  { name: "CPTS Review 2024", file: "cpts.html" },
  
];

const pages = blogs.map((item) => item.file);



