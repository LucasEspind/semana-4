class Conta {
    constructor(saldo, senha) {
      this.saldo = saldo;
      this._senha = senha;
    }
  
    deposito(valor, senha) {
      if (senha === this._senha) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado com sucesso. Saldo atual: R$${this.saldo}`);
      } else {
        console.log("Senha incorreta. Operação não autorizada.");
      }
    }
  
    retirada(valor, senha) {
      if (senha === this._senha) {
        if (this.saldo >= valor) {
          this.saldo -= valor;
          console.log(`Retirada de R$${valor} realizada com sucesso. Saldo atual: R$${this.saldo}`);
        } else {
          console.log("Saldo insuficiente. Operação não autorizada.");
        }
      } else {
        console.log("Senha incorreta. Operação não autorizada.");
      }
    }
  }
  

const contaCorrente = new Conta(1000, "4321");
contaCorrente.deposito(500, "4321");
contaCorrente.retirada(200, "4321");
contaCorrente.retirada(1500, "4321"); 
contaCorrente.deposito(100, "1234");
  