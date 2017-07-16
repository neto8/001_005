function contadorCaracteres(cadena) {
    obCadena = {};
    if (typeof(cadena) == "string") {

        letraAnteriro = "";
        valor = 0;
        arregloCadena = cadena.split("");
        arregloCadena = arregloCadena.sort();
        //console.log(JSON.parse(arregloCadena));
        for (indice = 0; indice <= arregloCadena.length - 1; indice++) {
            var letra = arregloCadena[indice];
            //console.log(typeof(letra+0));
            if (letra != letraAnteriro) {
                valor = 0;
                letraAnteriro = letra;
                //if(){}else{}
            } else
                console.log(letra);
            valor++;
            obCadena[letra] = valor;
        }

    } else
        obCadena.error = "Error, No es una cadena recibida";
    obCadena.data = {};

    return obCadena;
}
resultadoContador = contadorCaracteres("abbabcbdbabdbdbabababcbcbab");
console.log(resultadoContador['a'] === 7);
console.log(resultadoContador.b === 14);
console.log(resultadoContador['c'] === 3);
resultadoContador = contadorCaracteres("xyyyxyxyxzyxyzyxyxyasdfz");
console.log(resultadoContador.x === 7);
console.log(resultadoContador['y'] === 10);
console.log(resultadoContador.z === 3);
console.log(resultadoContador['a'] === 1);
console.log(resultadoContador['s'] === 1);
console.log(resultadoContador.d === 1);
console.log(resultadoContador['f'] === 1);
