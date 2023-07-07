class Funcionario {
    constructor(nome, idade, salario) {
        this.nome = nome;
        this.idade = idade;
        this.salario = salario;
    }

    getNome() {
        return this.nome;
    }

    getIdade() {
        return this.idade;
    }

    getSalario() {
        return this.salario;
    }

    setNome(nome) {
        this.nome = nome;
    }

    setIdade(idade) {
        this.idade = idade;
    }

    setSalario(salario) {
        this.salario = salario;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, salario, departamento) {
        super(nome, idade, salario);
        this.departamento = departamento;
    }

    getDepartamento() {
        return this.departamento;
    }

    setDepartamento(departamento) {
        this.departamento = departamento;
    }
}

class Programador extends Funcionario {
    constructor(nome, idade, salario, linguagem) {
        super(nome, idade, salario);
        this.linguagem = linguagem;
    }

    getLinguagem() {
        return this.linguagem;
    }

    setLinguagem(linguagem) {
        this.linguagem = linguagem;
    }
}


const gerente = new Gerente("João", 40, 10000, "Vendas");
const programador = new Programador("Maria", 30, 5000, "JavaScript");


console.log("Detalhes do Gerente:");
console.log(`Nome: ${gerente.getNome()}`);
console.log(`Idade: ${gerente.getIdade()}`);
console.log(`Salário: ${gerente.getSalario()}`);
console.log(`Departamento: ${gerente.getDepartamento()}`);

console.log("Detalhes do Programador:");
console.log(`Nome: ${programador.getNome()}`);
console.log(`Idade: ${programador.getIdade()}`);
console.log(`Salário: ${programador.getSalario()}`);
console.log(`Linguagem: ${programador.getLinguagem()}`);
