const form = document.getElementById('contato');

form.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('tel').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || email === '' || telefone === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
    } else {
        alert('Sua mensagem foi enviada!');
        form.reset(); // Esta linha apaga o formulário assim que o usuário fecha o alert?
    }
});
