class CaixaRegistradora {
    constructor() {
      this.estoque = [];
      this.cliente = "";
      this.conta = 0;
    }
  
    adicionarProduto(codigoBarra, preco, nome) {
      const novoProduto = { codigoBarra, preco, nome };
      this.estoque.push(novoProduto);
    }
  
    iniciarAtendimento(cliente) {
      this.cliente = cliente;
      this.conta = 0;
      console.log(`Iniciando atendimento para o cliente ${this.cliente}.`);
    }
  
    adicionarItem(codigoBarra, quantidade) {
      const produto = this.estoque.find(item => item.codigoBarra === codigoBarra);
      if (produto) {
        this.conta += produto.preco * quantidade;
        console.log(`Adicionado ${quantidade} unidades do produto ${produto.nome}.`);
      } else {
        console.log("Código de barra inválido. Produto não encontrado.");
      }
    }
  
    calcularTotal() {
      console.log(`O valor total da conta do cliente ${this.cliente} é de R$${this.conta.toFixed(2)}.`);
    }
  
    fecharConta(dinheiro) {
      const troco = dinheiro - this.conta;
      if (troco >= 0) {
        console.log(`Conta fechada. Troco: R$${troco.toFixed(2)}.`);
        this.estoque = [];
        this.cliente = "";
        this.conta = 0;
      } else {
        console.log("Dinheiro insuficiente para fechar a conta.");
      }
    }
  }
  
  // Exemplo de uso
  const caixa = new CaixaRegistradora();
  
  // Adicionando produtos no estoque
  caixa.adicionarProduto(12345, 10.99, "Pão Francês");
  caixa.adicionarProduto(67890, 5.99, "Bolo de Chocolate");
  caixa.adicionarProduto(54321, 2.99, "Coxinha");
  
  // Iniciando atendimento para um cliente
  caixa.iniciarAtendimento("Maria");
  
 
  caixa.adicionarItem(12345, 10); 
  caixa.adicionarItem(67890, 2); 
  
  
  caixa.calcularTotal(); 
  
  
  caixa.fecharConta(150); 
  