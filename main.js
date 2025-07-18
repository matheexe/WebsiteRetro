const initialDateString = '2008-03-15T10:27:23';
const initialDate = new Date(initialDateString);

// Armazena a hora em que a página foi carregada
const pageLoadTime = new Date();

function updateSimulatedClock() {
    // Calcula quanto tempo passou desde que a página foi carregada
    const currentTime = new Date();
    const elapsedTime = currentTime.getTime() - pageLoadTime.getTime(); // Diferença em milissegundos

    // Adiciona o tempo decorrido à data inicial de 2008
    const simulatedTime = new Date(initialDate.getTime() + elapsedTime);

    // Opções para formatação da hora (formato 24h, com zeros à esquerda)
    const timeOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false // Formato 24 horas
    };
    // Opções para formatação da data
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    // Formata a hora simulada
    const timeString = simulatedTime.toLocaleTimeString('pt-BR', timeOptions);

    // Formata a data simulada
    let dateString = simulatedTime.toLocaleDateString('pt-BR', dateOptions);

    // Capitaliza a primeira letra da string do dia da semana
    // Esta é a parte que você adicionou. Verifique se 'dateString' existe aqui.
    dateString = dateString.charAt(0).toUpperCase() + dateString.slice(1);


    // Atualiza o conteúdo dos elementos HTML
    document.getElementById('simulated-time').textContent = timeString;
    document.getElementById('simulated-date').textContent = dateString;
}

// Chama a função uma vez para exibir a hora imediatamente
updateSimulatedClock();

// Configura um intervalo para chamar a função a cada 1 segundo
setInterval(updateSimulatedClock, 1000);