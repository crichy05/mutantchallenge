//declaracion de variables
var parameters = apim.getvariable('request.body');
var dna = parameters.dna
var isMutant = false;
var longDna = dna.length;
var longChar = dna[0].length;

//validacioHorizontal
for (var h = 0; h < longDna; h++) {
    validateMutant(dna[h])
}

if (!isMutant) {
    //validacionVertical
    var arrayVer = [];
    var l = longChar
    for (var j = 0; j < l; j++) {
        arrayVer[j] = dna[0].charAt(j);
        //toma los primeros carateres de cada arreglo para la validacón vertical
        for (var i = 1; i < longDna; i++) {
            arrayVer[j] += dna[i].charAt(j);
        }
        validateMutant(arrayVer[j])
    }
}
if (!isMutant) {
    //validacionOblicua
    var l = longChar
    var vali = dna[0].charAt(0);
    for (var j = 1; j < l; j++) {
        vali += dna[j].charAt(j);
    }
    validateMutant(vali)

}
if (!isMutant) {
    var l = arrayVer.length - 1
    var vali = arrayVer[l].charAt(0);
    l -= 1
    for (var j = 1; j < longChar; j++) {
        vali += arrayVer[l].charAt(j);
        l--
    }
    validateMutant(vali)
}
if (!isMutant) {
    var l = arrayVer.length - 1
    var u = arrayVer[0].length - 1
    var vali = arrayVer[l].charAt(u);
    l--
    u--
    for (l; l >= 0; l--) {
        vali += arrayVer[l].charAt(u);
        u--
    }
    validateMutant(vali)
}
if (!isMutant) {
    var l = arrayVer[0].length - 1
    //var u = arrayVer.length - 1
    var vali = arrayVer[0].charAt(l);
    l--
    for (var j = 1; j < longChar; j++) {
        vali += arrayVer[j].charAt(l);
        l--
    }
    validateMutant(vali)
}

var id = dna[0];
for (var j = 1; j < longDna; j++) {
    id = id + "," + dna[j];
}

var response = {
    id: id,
    isMutant: isMutant
}

console.log(isMutant)

apim.setvariable('ctx.res', isMutant);
apim.output('application/son');
apim.setvariable('message.body', response)

//compara las líneas del string y valida si cumple con la condición de mutante
function validateMutant(val) {
    if ((val.indexOf('AAAA') != "-1") || (val.indexOf('CCCC') != "-1") || (val.indexOf('GGGG') != "-1") || (val.indexOf('TTTT') != "-1")) {
        isMutant = true;
    }
}