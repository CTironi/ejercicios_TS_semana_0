abstract class Figura implements FiguraGeometrica {

    protected nombre: string;

    constructor(nombre: string){
        this.nombre = nombre;
    }

    abstract calcularArea(): void;
    abstract calcularPerimetro(): void;
    
}

class Circulo extends Figura {

    radio: number;

    constructor(nombre: string, radio: number){
        super(nombre)
        this.radio = radio;
    }

    calcularArea(): void {
        console.log(`El área del círculo es: ${Math.PI * Math.pow(this.radio , 2)}`)
    }

    calcularPerimetro(): void {
        console.log(`El perimetro del círculo es: ${Math.PI * this.radio * 2} `)
    }
}

class Cuadrado extends Figura {

    lado: number;

    constructor(nombre: string, lado: number){
        super(nombre);
        this.lado = lado;
    }

    calcularArea(): void {
        console.log(`El área del cuadrado es: ${this.lado * this.lado}`)
    }

    calcularPerimetro(): void {
        console.log(`El perimetro del cuadrado es: ${this.lado * 4}`)
    }
}

class CrearFiguras {

    crear(nombre: string, tipo: string, valor: number){

        if(tipo == "circulo"){
            return new Circulo(nombre, valor);
        }else if(tipo == "cuadrado"){
            return new Cuadrado(nombre, valor);
        }else{
            console.log(`No es un tipo valido`)
        }
    }
}
