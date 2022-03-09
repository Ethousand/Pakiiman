Imagenes = [];
Imagenes["Cauchin"] = "assets/vaca.png";
Imagenes["Pokacho"] = "assets/pollo.png";
Imagenes["Tocinauro"]="assets/cerdo.png"

console.log(Imagenes);

class Pakiman
{
    constructor(name, type, vig, atk)
    {
        this.name = name;
        this.attack = atk;
        this.vigor =  vig;
        this.type = type;
        this.imagen = new Image();

        this.imagen.src = Imagenes[this.name];
    }
    hablar()
    {  
        alert(this.name + "!!!")
    }

    mostrar()
    {
        document.body.appendChild(this.imagen);
    }
}

var cauchin = new Pakiman("Cauchin", "tierra", 120, 50);
var pokacho = new Pakiman("Pokacho", "electrico", 30, 100);
var tocinauro = new Pakiman("Tocinauro", "tierra", 70, 40);

