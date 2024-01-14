function joinActivity(activityName) {
  alert(`You joined the "${activityName}" activity!`);
}

function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const chatWindow = document.querySelector(".chat-window");

  const message = messageInput.value.trim();
  if (message !== "") {
    const messageElement = document.createElement("div");
    messageElement.textContent = `You: ${message}`;
    chatWindow.appendChild(messageElement);

    // Additional logic for sending messages to other users can be added here
    sendMessageButton.addEventListener("click", function () {
      const message = messageInput.value.trim();

      if (message !== "") {
        appendMessage("You", message);
        messageInput.value = ""; // Clear the input field

        // Simulate a reply from another user (you can replace this with actual messaging logic)
        setTimeout(function () {
          appendMessage("Other User", "Hello! How are you?");
        }, 1000);
      }
    });

    function appendMessage(sender, message) {
      const messageElement = document.createElement("div");
      messageElement.classList.add("message");
      messageElement.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatWindow.appendChild(messageElement);

      // Scroll the chat window to the bottom to show the latest messages
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }
  }
}
//     // Clear the input field
//     messageInput.value = "";
//     document.addEventListener("DOMContentLoaded", function () {
//       const darkThemeToggle = document.getElementById("darkThemeToggle");
//       const body = document.body;
//       const fontSizeRange = document.getElementById("fontSizeRange");

//       darkThemeToggle.addEventListener("change", function () {
//         body.classList.toggle("dark-theme", darkThemeToggle.checked);
//       });

//       fontSizeRange.addEventListener("input", function () {
//         body.style.fontSize = fontSizeRange.value + "px";
//       });

//       // Additional event listeners or functionality can be added as needed
//     });
//   }
// }
