function handleMessage(event) {
  event.preventDefault();
  const name = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();
  const terminal = document.getElementById("terminal");

  if (!name || !email || !message) return;

  const now = new Date();
  const estDate = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/New_York',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }).format(now);

  const displayText = `[${estDate}] ${name}: ${message}\n`;
  terminal.textContent += displayText;
  terminal.scrollTop = terminal.scrollHeight;

  localStorage.setItem('lastMessage', displayText);
  localStorage.setItem('lastUser', name);

  document.getElementById("message").value = "";
}

window.onload = () => {
  const terminal = document.getElementById("terminal");
  const lastMessage = localStorage.getItem('lastMessage');
  const lastUser = localStorage.getItem('lastUser');
  if (lastMessage && lastUser) {
    terminal.textContent += `Resuming session for ${lastUser}...\n${lastMessage}`;
  }
};
