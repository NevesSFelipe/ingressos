function comprar() {
    
    const select_tipo_ingresso = document.getElementById("tipo-ingresso");
    const input_quantidade = document.getElementById("qtd");
    
    let quantidade_compra_ingresso = input_quantidade.value;
    let ingresso_comprado = select_tipo_ingresso.value;
    let ingressos_disponiveis = document.querySelectorAll("section span");
    let id_ingresso_comprado = `qtd-${ingresso_comprado}`; 
    let tipo_ingresso_disponivel;
    let qtd_produto_estoque;
    
    if(!quantidade_compra_ingresso) {
        alert("Por favor, informe uma quantidade a ser comprado.");
        return;
    }

    ingressos_disponiveis.forEach((value) => {
        
        if(id_ingresso_comprado == value.getAttribute("id")) {

            tipo_ingresso_disponivel = document.getElementById(id_ingresso_comprado); 
            qtd_produto_estoque = tipo_ingresso_disponivel.textContent;

            if(parseInt(quantidade_compra_ingresso) > parseInt(qtd_produto_estoque)) {

                alert("Quantidade de ingressos indisponíveis");
                return;
            }
            
            tipo_ingresso_disponivel.textContent = (qtd_produto_estoque - quantidade_compra_ingresso);
            input_quantidade.value = "";
            
        }

    });

}