let chatbotMsgList = ["Hi","Hey","Good Morning","Good Evening","How can i help you?","Thank you"]

let chatContainerE1 = document.getElementById("chatContainer")
let userInputE1 = document.getElementById("userInput")

function sendMsgToChatbot(){
    let userMsg = userInputE1.value

    //Creating and appending the container element div
    let msgContainerE1 = document.createElement("div")
    msgContainerE1.classList.add("msg-to-chatbot-container")
    chatContainerE1.appendChild(msgContainerE1)

    //creating and appending the span element
    let userMsgE1 = document.createElement("span")
    userMsgE1.textContent = userMsg
    userMsgE1.classList.add("msg-to-chatbot")
    msgContainerE1.appendChild(userMsgE1)

    userInputE1.value = ""
    getReplyFromChatbot()
}

function getReplyFromChatbot(){
    let noOfChatbotMsgs = chatbotMsgList.length
    let chatbotMsg = chatbotMsgList[Math.ceil(Math.random() * noOfChatbotMsgs)-1]

    //creating and appending the container element div
    let msgContainerE1 = document.createElement("div")
    msgContainerE1.classList.add("msg-from-chatbot-container")
    chatContainerE1.appendChild(msgContainerE1)

    //creating and appending the span element
    let chatbotMsgE1 = document.createElement("span")
    chatbotMsgE1.textContent = chatbotMsg
    chatbotMsgE1.classList.add("msg-from-chatbot")
    msgContainerE1.appendChild(chatbotMsgE1)
}
