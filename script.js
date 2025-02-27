document.getElementById("enviarWhatsApp").addEventListener("click", function(event) {
    event.preventDefault(); // Evita comportamento padrão do link
    
    let nome = document.getElementById("nome").value.trim();
    let mensagem = document.getElementById("message").value.trim();
    
    if (nome === "") {
        alert("Por favor, preencha o seu nome!");
        return;
    }

    let numero = "5585999169456"; // Substitua pelo seu número de WhatsApp

    let texto = `Olá, meu nome é ${nome}!%0A${mensagem}`;
    let link = `https://wa.me/${numero}?text=${texto}`;

    window.open(link, "_blank");
});