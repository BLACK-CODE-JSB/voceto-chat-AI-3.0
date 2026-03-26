const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');

// Datos de la peluquería
const barberos = ["Carlos (Especialista en Degradados)", "Mateo (Barba y Estilo Clásico)", "Santi (Cortes Modernos/Urbano)"];
const precios = `
📌 **Nuestros Precios:**
- Corte Básico: $20.000
- Corte + Barba: $30.000
- Corte Premium (Lavado + Mascarilla): $45.000
- Solo Barba: $15.000
`;

function sendMessage() {
    const text = userInput.value.trim();
    if (text === "") return;

    // Agregar mensaje de usuario
    appendMessage(text, 'user-msg');
    userInput.value = "";

    // Lógica de respuesta "IA"
    setTimeout(() => {
        let response = "No te entendí bien, intenta escribiendo 'agendar' o 'precios'.";
        
        const input = text.toLowerCase();

        if (input.includes("agendar") || input.includes("cita") || input.includes("precios")) {
            response = `¡Claro! Estos son nuestros precios hoy: ${precios} \n\n ¿Con quién te gustaría agendar? \n 1. ${barberos[0]} \n 2. ${barberos[1]} \n 3. ${barberos[2]}`;
        } else if (input.includes("1") || input.includes("carlos")) {
            response = "Has seleccionado a Carlos. ¿Para qué hora te gustaría? (Mañana o Tarde)";
        } else if (input.includes("mañana") || input.includes("tarde")) {
            response = "¡Excelente! Cita reservada. Te esperamos en la calle principal. ¿Necesitas algo más?";
        } else if (input.includes("gracias")) {
            response = "¡De nada! ¡Te esperamos para quedar con el mejor estilo! ✂️";
        }

        appendMessage(response, 'bot-msg');
    }, 600);
}

function appendMessage(text, className) {
    const msgDiv = document.createElement('div');
    msgDiv.className = className;
    msgDiv.innerText = text;
    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Enviar con Enter
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});
