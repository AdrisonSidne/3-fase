let pedido = {
    produto: "Coxinha",
    quantidade: 2,
    preço: 5.50
}
function validarPedido(pedido){
    return pedido.produto && pedido.quantidade && pedido.preco
}
function calcular(pedido){
    return  pedido.quantidade * pedido.preco
}
function desconto(valorTotal){
    if(valorTotal > 30){
        return valorTotal * 0.9
    }else{
        return valorTotal
    }
}
function resumo(pedido){
    if(!validarPedido(pedido)){
        return "pedido incompleto"
    }
    let total = calcularTotal(pedido);
    let totalComDesconto = aplicarDesconto(total);
    let totalFormatado = totalComDesconto.toFixed(2).replace('.', ',');

    return `Você comprou ${pedido.quantidade} ${pedido.produto}(s). Valor total: R$ ${totalFormatado}`;
}