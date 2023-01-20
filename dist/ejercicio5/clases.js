var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Figura = /** @class */ (function () {
    function Figura(nombre) {
        this.nombre = nombre;
    }
    return Figura;
}());
var Circulo = /** @class */ (function (_super) {
    __extends(Circulo, _super);
    function Circulo(nombre, radio) {
        var _this = _super.call(this, nombre) || this;
        _this.radio = radio;
        return _this;
    }
    Circulo.prototype.calcularArea = function () {
        console.log("El \u00E1rea del c\u00EDrculo es: ".concat(Math.PI * Math.pow(this.radio, 2)));
    };
    Circulo.prototype.calcularPerimetro = function () {
        console.log("El perimetro del c\u00EDrculo es: ".concat(Math.PI * this.radio * 2, " "));
    };
    return Circulo;
}(Figura));
var Cuadrado = /** @class */ (function (_super) {
    __extends(Cuadrado, _super);
    function Cuadrado(nombre, lado) {
        var _this = _super.call(this, nombre) || this;
        _this.lado = lado;
        return _this;
    }
    Cuadrado.prototype.calcularArea = function () {
        console.log("El \u00E1rea del cuadrado es: ".concat(this.lado * this.lado));
    };
    Cuadrado.prototype.calcularPerimetro = function () {
        console.log("El perimetro del cuadrado es: ".concat(this.lado * 4));
    };
    return Cuadrado;
}(Figura));
var CrearFiguras = /** @class */ (function () {
    function CrearFiguras() {
    }
    CrearFiguras.prototype.crear = function (nombre, tipo, valor) {
        if (tipo == "circulo") {
            return new Circulo(nombre, valor);
        }
        else if (tipo == "cuadrado") {
            return new Cuadrado(nombre, valor);
        }
        else {
            console.log("No es un tipo valido");
        }
    };
    return CrearFiguras;
}());
