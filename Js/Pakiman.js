Imagenes = [];
Imagenes["Cauchin"] = "assets/vaca.png";
Imagenes["Pokacho"] = "assets/pollo.png";
Imagenes["Tocinauro"]="assets/cerdo.png"


var coleccion = [];
coleccion.push(new Pakiman("Cauchin", "tierra", 120, 50));
coleccion.push(new Pakiman("Pokacho", "electrico", 30, 100));
coleccion.push(new Pakiman("Tocinauro", "tierra", 70, 40));

for (var paki of coleccion)
{
    paki.mostrar();
}
