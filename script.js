// Obtém o botão com o ID 'btn' do documento
const btn = document.getElementById('btn');

// Adiciona um evento de clique ao botão
btn.addEventListener('click', (e) => {
    // Obtém o valor do campo de entrada do produto
    const produto = document.getElementById('produto').value;

    // Obtém o valor do campo de entrada do preço
    const preco = document.getElementById('preco').value;

    // Calcula o preço total de 3 unidades do produto
    const produto3 = preco * 3;

    // Calcula o desconto de 20% sobre o preço total de 3 unidades
    const porcento = produto3 * 0.20;

    // Calcula o preço final com o desconto aplicado
    const desconto = produto3 - porcento;

    // Atualiza o texto do elemento com ID 'mostraPromocao' para exibir a promoção
    document.getElementById('mostraPromocao').innerText = 
        `${produto} - Promoção: Leve 3 por R$: ${desconto.toFixed(2)}`;

    // Atualiza o texto do elemento com ID 'valor3Uni' para exibir o valor do desconto
    document.getElementById('valor3Uni').innerText = 
        `O 3º produto custa apenas R$: ${porcento.toFixed(2)}`;

    // Previne o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();
});