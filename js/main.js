let isPowerShell = false; // State to track if in PowerShell mode

function updatePrompt() {
  prompt = isPowerShell ? `PS C:\\Users\\H0lyWat3r>` : `C:\\Users\\H0lyWat3r>`;
  promptDOM.innerHTML = prompt;
}

function executeCommand(userInput) {
  const [cmd, ...rest] = userInput.split(" ");
  const args = rest.join(" ");

  switch (cmd) {
    case "":
      return;

    case "help":
      let commandList = Object.entries(commands);
      let table = "<table id=help-table>";
      commandList.forEach(([key, value]) => {
        table +=
          "<tr><td class=help-options>" +
          key +
          "</td><td class=help-description>" +
          value +
          "</td></tr>";
      });
      table += "</table>";
      return table;

    case "social":
      let social = "Will update when i need a job!!!!!!!!!";
      return `<p class="message">${social}</p>`;

    case "echo":
      return `<p class="message">${userInput.substring(5)}</p>`;

    case "about":
      let about = "I'm Nazeef Khan";
      return `<p class="message">${about}</p>`;

    case "banner":
      let bannerText = "You are not the admin!!";
      return `<p class='error'>"${bannerText}"</p>`;

    case "projects":
      let projects = [
        "I will update the list of projects i'm working on soon....",
      ];
      return `<p id=projects>"${projects[0]}"</p>`;

    case "email":
      let mail = "Contact Me via gmail";
      return `<a class="message" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqTfghgTtLnhcHJQhMrsSWsjlVQqBzLmWlvDFkrfqrgPrXmmsFKWDlCGvpkwmXJbmdfnPg">${mail}</a>`;


    case "dir":
      const list = pages.map((item) => `<span>${item}</span>`).join(" ");
      return `<div class=message>${list}</div>`;

    case "cls":
      outputEl.innerHTML = '<a id="before"></a>';
      before = document.getElementById("before");
      return before;

    case "date":
      const currentDate = new Date();
      const formattedDate = currentDate.toString();
      return `<p id='date'>${formattedDate}</p>`;

    case "type":
      if (!pages.includes(args))
        return `<p class=error>Blog does not exist, type "ls" to view all the blogs</p>`;
      window.open(args);
      return "<p>Loading................</p>";

    case "Set-MpPreference":
      if (args === "-DisableRealtimeMonitoring") {
        return "<p>Windows defender off, HolyWat3r defender ON ;)</p>";
      }
      break;

      case "whoami":
        if (args === "/priv") {
          return `<div><pre>
PRIVILEGES INFORMATION
----------------------
    
Privilege Name                            Description                                                        State
========================================  =================================================================  ========
SeIncreaseQuotaPrivilege                  Adjust memory quotas for a process                                 Disabled
SeSecurityPrivilege                       Manage auditing and security log                                   Disabled
SeTakeOwnershipPrivilege                  Take ownership of files or other objects                           Disabled
SeLoadDriverPrivilege                     Load and unload device drivers                                     Disabled
SeSystemProfilePrivilege                  Profile system performance                                         Disabled
SeSystemtimePrivilege                     Change the system time                                             Disabled
SeProfileSingleProcessPrivilege           Profile single process                                             Disabled
SeIncreaseBasePriorityPrivilege           Increase scheduling priority                                       Disabled
SeCreatePagefilePrivilege                 Create a pagefile                                                  Disabled
SeBackupPrivilege                         Back up files and directories                                      Disabled
SeRestorePrivilege                        Restore files and directories                                      Disabled
SeShutdownPrivilege                       Shut down the system                                               Disabled
SeDebugPrivilege                          Debug programs                                                     Disabled
SeSystemEnvironmentPrivilege              Modify firmware environment values                                 Disabled
SeChangeNotifyPrivilege                   Bypass traverse checking                                           Enabled
SeRemoteShutdownPrivilege                 Force shutdown from a remote system                                Disabled
SeUndockPrivilege                         Remove computer from docking station                               Disabled
SeManageVolumePrivilege                   Perform volume maintenance tasks                                   Disabled
SeImpersonatePrivilege                    Impersonate a client after authentication                          Enabled
SeCreateGlobalPrivilege                   Create global objects                                              Enabled
SeIncreaseWorkingSetPrivilege             Increase a process working set                                     Disabled
SeTimeZonePrivilege                       Change the time zone                                               Disabled
SeCreateSymbolicLinkPrivilege             Create symbolic links                                              Disabled
SeDelegateSessionUserImpersonatePrivilege Obtain an impersonation token for another user in the same session Disabled

    </pre></div>`;
        } else {
          return `<p>HolyWat3r</p>`;
        }

    case "powershell":
    case "powershell.exe":
      isPowerShell = true;
      updatePrompt();
      return `<p>Windows PowerShell</p>
              <p>Copyright (C) Microsoft Corporation. All rights reserved.</p>
              <p>Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows</p>`;
    
    case "cmd":          
    case "cmd.exe":
      isPowerShell = false;
      updatePrompt();
      return `<p>Switching to command prompt...</p>`;
  }

  if (userInput === "cat blog1.html") {
    window.open("blog1.html");
    return "<p>Loading................</p>";
  } else if (userInput === "cat pnpt.html") {
    window.open("pnpt.html");
    return "<p>Loading................</p>";
  } else if (userInput === "cat wannacry.html") {
    window.open("wannacry.html");
    return "<p>Loading................</p>";
  } else {
    return `<p class=message>Command not found: ${cmd}</p>`;
  }
}

function handleInput(event) {
  if (event.keyCode === 13) {
    // Enter key
    const userInput = inputEl.value.trim();
    inputEl.value = "";
    outputEl.innerHTML += `<div class=prompt-wrapper><span>${prompt}</span><span>${userInput}</span></div>`;
    let result = executeCommand(userInput);
    if (result) outputEl.innerHTML += result;
  } else if (event.keyCode === 9) {
    // Tab key
    event.preventDefault(); // Prevent default tab behavior
    autocompleteCommand();
  }
}

function autocompleteCommand() {
  const userInput = inputEl.value.trim();
  const possibleCommands = [
    "help", "social", "echo", "about", "banner", "projects", "email", 
    "whoami", "dir", "cls", "date", "type", "Set-MpPreference -DisableRealtimeMonitoring", 
    "powershell.exe", "cmd.exe", "cat"
  ];
  
  const matches = possibleCommands.filter(cmd => cmd.startsWith(userInput));
  
  if (matches.length === 1) {
    inputEl.value = matches[0] + " ";
  } else if (matches.length > 1) {
    // Move the cursor to a new line and display the suggestions
    outputEl.innerHTML += `<div class=prompt-wrapper><span>${prompt}</span><span>${userInput}</span></div>`;
    outputEl.innerHTML += `<div class=message>${matches.join(" ")}</div>`;
  }
}

inputEl.addEventListener("keydown", handleInput);

// Autoscroll function
const target = document.querySelector("#output");

const observer = new MutationObserver(() => {
  terminalEl.scrollBy({
    top: terminalEl.scrollHeight,
    behavior: "smooth",
  });
});

observer.observe(target, {
  childList: true,
});
