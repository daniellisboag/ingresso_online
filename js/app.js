function comprar() {
   let tipoIngresso = document.getElementById('tipo-ingresso').value;
   let quantidadeIngresso = document.getElementById(`qtd-${tipoIngresso}`).textContent;
   let quantidade = parseInt(document.getElementById('qtd').value);
   if (quantidade > 0) {
      if (tipoIngresso == 'pista') {
         if (quantidade <= quantidadeIngresso) {
            document.getElementById(`qtd-${tipoIngresso}`).textContent = quantidadeIngresso - quantidade;
         } else {
            alert('Quantidade de ingressos não disponível!')
         }
      }
      if (tipoIngresso == 'superior') {
         if (quantidade <= quantidadeIngresso) {
            document.getElementById(`qtd-${tipoIngresso}`).textContent = quantidadeIngresso - quantidade;
         } else {
            alert('Quantidade de ingressos não disponível!')
         }
      }
      if (tipoIngresso == 'inferior') {
         if (quantidade <= quantidadeIngresso) {
            document.getElementById(`qtd-${tipoIngresso}`).textContent = quantidadeIngresso - quantidade;
         } else {
            alert('Quantidade de ingressos não disponível!')
         }
      }
   } else {
      alert('Digite a quantidade de ingressos!')
   }
}