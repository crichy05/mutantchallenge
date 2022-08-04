var parameters = apim.getvariable('message.body');
var mutant = 0;
var noMutant = 0;
var items = parameters.Items;


for (var j=0;j<items.length;j++){
    if (items[j].isMutant){
        mutant++
    }else{
       noMutant++
    }
}

var ratio = noMutant/mutant;

var response = {
    count_mutant_dna: mutant,
    count_human_dna: noMutant,
    ratio: ratio
}

apim.output('application/son');
apim.setvariable('message.body', response);