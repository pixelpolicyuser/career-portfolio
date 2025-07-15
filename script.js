function handleMessage(event) {
  event.preventDefault();
  const name = document.getElementById("username").value.trim();
  const message = document.getElementById("message").value.trim();
  const terminal = document.getElementById("terminal");

  if (!name || !message) return;

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

  // TODO: Send message to WhatsApp via API (server-side required)

  document.getElementById("message").value = "";
}
