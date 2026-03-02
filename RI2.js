function TelefoneCelular(ddd, numeroTel) {
    this.ddd = ddd;
    this.numeroTel = numeroTel;

    this.getDdd = () => this.ddd;
    this.setDdd = (ddd) => this.ddd = ddd;
    this.getNumeroTel = () => this.numeroTel;
    this.setNumeroTel = (numeroTel) => this.numeroTel = numeroTel;

    this.getDddUpper = () => String(this.ddd).toUpperCase();
    this.getDddLower = () => String(this.ddd).toLowerCase();
    this.getNumeroTelUpper = () => this.numeroTel.toUpperCase();
    this.getNumeroTelLower = () => this.numeroTel.toLowerCase();
}

function Endereco(estado, cidade, rua, numero) {
    this.estado = estado;
    this.cidade = cidade;
    this.rua = rua;
    this.numero = numero;

    this.getEstadoUpper = () => this.estado.toUpperCase();
    this.getEstadoLower = () => this.estado.toLowerCase();
    this.getCidadeUpper = () => this.cidade.toUpperCase();
    this.getCidadeLower = () => this.cidade.toLowerCase();
    this.getRuaUpper = () => this.rua.toUpperCase();
    this.getRuaLower = () => this.rua.toLowerCase();
    this.getNumeroUpper = () => String(this.numero).toUpperCase();
    this.getNumeroLower = () => String(this.numero).toLowerCase();
}

function Cliente(nome, telefoneCelular, email, endereco) {
    this.nome = nome;
    this.telefoneCelular = telefoneCelular;
    this.email = email;
    this.endereco = endereco;

    this.getNome = () => this.nome;
    this.getNomeUpper = () => this.nome.toUpperCase();
    this.getNomeLower = () => this.nome.toLowerCase();
    this.getEmailUpper = () => this.email.toUpperCase();
    this.getEmailLower = () => this.email.toLowerCase();

    Object.defineProperty(this, 'descricao', {
        get: function() {
            return `------------------------------
Informações do Cliente:
${this.nome}
------------------------------
Telefone:
DDD: ${this.telefoneCelular.ddd}
Número: ${this.telefoneCelular.numeroTel}
------------------------------
Endereço:
Rua: ${this.endereco.rua}
Número: ${this.endereco.numero}
Cidade: ${this.endereco.cidade}
Estado: ${this.endereco.estado}
------------------------------
E-mail: ${this.email}
`;
        }
    });
}

function ordenaListaCliente(lista) {
    return [...lista].sort((a, b) => a.getNome().localeCompare(b.getNome()));
}


let telefone1 = new TelefoneCelular('12', '988559042');
let endereco1 = new Endereco('SP', 'São José dos Campos', 'Rua dos Masanoris', '27');
let cliente1 = new Cliente('Fernando Masanori', telefone1, 'fmasanori@gmail.com', endereco1);

let telefone2 = new TelefoneCelular('12', '12334445555');
let endereco2 = new Endereco('SP', 'São José dos Campos', 'Vila Arakakiana', '21');
let cliente2 = new Cliente('Reinaldo Arakaki', telefone2, 'reinaldo.arakaki@gmail.com', endereco2);

let telefone3 = new TelefoneCelular('12', '22113344555');
let endereco3 = new Endereco('SP', 'São José dos Campos', 'Jardim Satélite', '124');
let cliente3 = new Cliente('Gabriel Andrade', telefone3, 'Gab.and@gmail,com', endereco3);

let cliente_lista = [cliente1, cliente2, cliente3];

cliente_lista.forEach(c => console.log(c.descricao));

console.log("--- LISTA ORDENADA POR NOME ---");
let listaOrdenada = ordenaListaCliente(cliente_lista);
listaOrdenada.forEach(c => console.log(c.getNome()));