// let xmarkIcon = document.querySelector("#xmarkIcon");

let startMessagingIcon;
let chatMsg;
let textInput;
let sendText;
let chatClient;

$(document).ready(() => {
  $("body").append(`<div id="starting_chat" class="starting_chat">
                <img src="assets/support.png" alt="start messaging" />
              </div>`);
  startMessagingIcon = document.querySelector(".starting_chat");
  $(startMessagingIcon).on("click", () => {
    $("body").append('<div class="chat__client-context"></div>');

    $(".starting_chat").fadeOut(300);
    // _________________________________
    $(".chat__client-context")
      .append(
        `
      <section class="chat__client">
        <div class="chat__client-header">
          <div class="logo_container">
            <img src="assets/c2_loader.png" altl="Logo"/>
          </div>
          <div class="xMarkIcon__container">
            <i id="xmarkIcon" class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div class="chat__client-container">
          <div id="chat-messages" class="chat__client-container__msg">
        
          </div>
        </div>
        <div class="chat__client-container__input">
          <div class="chat__typing-input">
            <div id="send-button">
              <div>
                <img src="assets/send_png.png" class="sent-icon" />
              </div>
            </div>
            <input
              type="text"
              id="message-input"
              placeholder="Type your message..."
            />
          </div>
        </div>
      </section>
    `
      )
      .hide()
      .fadeIn(400);
    // __________________________________
    $("#xmarkIcon").on("click", () => {
      $(".chat__client").fadeOut(300);
      $(".starting_chat").fadeIn(1000);
      $(".chat__client-context").remove();
    });
    // __________________________________
    chatMsg = document.querySelector("#chat-messages");
    textInput = document.querySelector("#message-input");
    sendText = document.querySelector("#send-button");

    chatClient = document.querySelector(".chat__client");
    sendText.addEventListener("click", sentMsg);
  });
});

// ____________________________________

// ____________________---___Event Listener

window.addEventListener("keydown", (event) => {
  if (event.keyCode == 13) {
    sentMsg();
  }
});

// ___________________---___functions

function sentMsg(e) {
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    "  " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes();
  let st = ` <div class="sent__message">
              <span class="sent__message-user">Admin_1</span>
              <p class="sent__message-msg"> ${textInput.value}</p>
              <span class="sent__message-date">${datetime}</span>
            </div> `;
  if (textInput.value) {
    chatMsg.insertAdjacentHTML("beforeend", st);
  }
  // messages.push(st);
  textInput.value = " ";
  let messageBody = document.querySelector(".chat__client-container");
  messageBody.scrollTop = messageBody.scrollHeight - messageBody.clientHeight;
}
