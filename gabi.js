// Mensagens rotativas
const mensagens = [
  "Você é a melhor parte do meu dia ❤️",
  "Te amo mais do que palavras podem dizer 💌",
  "Com você tudo é mais bonito 🌷",
  "Obrigado por existir na minha vida 🌟",
];

let index = 0;
setInterval(() => {
  document.getElementById("message-text").textContent = mensagens[index];
  index = (index + 1) % mensagens.length;
}, 4000);

// Simulação de envio do formulário
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensagem enviada com amor! 💕");
});
