const form = document.querySelector("#feedback-form");
const messageField = document.querySelector("#message");
const statusRegion = document.querySelector("#status");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  statusRegion.textContent = "";

  const message = messageField.value.trim();
  if (!message) {
    statusRegion.textContent = "Please enter your feedback.";
    messageField.focus();
    return;
  }

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  try {
    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    const result = await response.json();

    if (!response.ok) throw new Error(result.error || "Request failed");
    statusRegion.textContent = result.message;
    form.reset();
    messageField.focus();
  } catch {
    statusRegion.textContent = "Sorry, feedback could not be sent. Please try again.";
  } finally {
    submitButton.disabled = false;
  }
});
