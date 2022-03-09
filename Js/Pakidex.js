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
        document.write("<br /> <strong>" + this.name + "</strong>");
        document.write("<br /> Vida: " + this.vigor + "<br />");
        document.write("ataque: " + this.attack + "<br/>");
        document.write("Tipo: " + this.type + "<hr/>");
    }
}