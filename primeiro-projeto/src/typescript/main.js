var minhaVar = 'minha variavel';
//@ts-ignore
function minhaFunc(x, y) {
    return x + y;
}
//ES 6
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) { return valor * 2; });
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Object.defineProperty(Pessoa.prototype, "nomeDaPessoa", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Pessoa.prototype.retornarNome = function () {
        console.log(this.nomeDaPessoa);
    };
    return Pessoa;
}());
