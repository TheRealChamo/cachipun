function aleatorio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo +1) + minimo );
    return numero;
}

function Cachipun()
{
    var n = 0;
    var piedra = 0;
    var papel = 1;
    var tijera = 2;
    var opciones = ["Piedra 🤜", "Papel 🖐", "Tijera ✂️"];

    var opcionUsuario;
    var opcionMaquina = aleatorio (0,2);

    var puntosUsuario = 0;
    var puntosMaquina = 0;

    alert("Bienvenido a Cachipún contra la máquina");
    document.write("Bienvenido a Cachipún contra la máquina<br><br>");
    var CantidadJugadas = prompt("¿Cuantas veces deseas jugar?");

    var historial = document.getElementById("historial");
    
    while (n < CantidadJugadas) {
        n++;

        alert("Jugada " + n);
        document.write("Jugada " + n + "<br>");

        opcionUsuario = prompt("Que elijes?\nPiedra 🤜: 0\nPapel 🖐: 1\nTijera ✂️: 2",0);

        alert("Elejiste " + opciones[opcionUsuario]);
        document.write("Elejiste " + opciones[opcionUsuario] + "<br>");
        alert("Maquina eligió " + opciones[opcionMaquina]);
        document.write("Maquina eligió " + opciones[opcionMaquina] + "<br>");

        if(opcionUsuario == piedra)
        {
            if(opcionMaquina == piedra)
            {
                alert("Empate!");
                document.write("Empate!<br><br>");
            }
            else if(opcionMaquina == papel)
            {
                alert("Perdiste Jugada! 😭");
                document.write("Perdiste Jugada! 😭<br><br>");
                puntosMaquina++;
            }
            else if(opcionMaquina == tijera)
            {
                alert("Ganaste Jugada! 👏🏻");
                document.write("Ganaste Jugada! 👏🏻<br><br>");
                puntosUsuario++;
            }
        }
        else if(opcionUsuario == papel)
        {
            if(opcionMaquina == papel)
            {
                alert("Empate!");
                document.write("Empate!<br><br>");
            }
            else if(opcionMaquina == tijera)
            {
                alert("Perdiste Jugada! 😭");
                document.write("Perdiste Jugada! 😭<br><br>");
                puntosMaquina++;
            }
            else if(opcionMaquina == piedra)
            {
                alert("Ganaste Jugada! 👏🏻");
                document.write("Ganaste Jugada! 👏🏻<br><br>");
                puntosUsuario++;
            }
        }
        else if(opcionUsuario == tijera)
        {
            if(opcionMaquina == tijera)
            {
                alert("Empate!");
                document.write("Empate!<br><br>");
            }
            else if(opcionMaquina == piedra)
            {
                alert("Perdiste Jugada! 😭");
                document.write("Perdiste Jugada! 😭<br><br>");
                puntosMaquina++;
            }
            else if(opcionMaquina == papel)
            {
                alert("Ganaste Jugada! 👏🏻");
                document.write("Ganaste Jugada! 👏🏻<br><br>");
                puntosUsuario++;
            }
        }
        else 
        {
            alert("No elejiste una opción valida");
        }
    }
    if (puntosUsuario > puntosMaquina)
    {
        alert("Felicitaciones, Ganaste la Partida! 👏🏻")
        document.write("Felicitaciones, Ganaste la Partida! 👏🏻<br>");
    }
    else if (puntosMaquina > puntosUsuario)
    {
        alert("Perdiste la Partida! 😭");
        document.write("Perdiste la Partida! 😭<br>");
    }
    else
    {
        alert("Empate! Sigue intentando");
        document.write("Empate! Sigue intentando<br>")
    }
}