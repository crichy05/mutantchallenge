Las API Mutant permite validar si una cadena de adn petenece a un humano o a un mutante.

 ## Método post /mutant
 Este método realiza la validación de una cadena de ADN para verificar si cumple la condición de mutante o no. Adicional, guarda la consulta en una base de datos para estadísticas.
 ## ¿Cómo funciona?
- **Paso 1:** Se debe enviar una petición tipo post en formato json, enviando un campo "dna" tipo array string con la cadena de adn a validar

# Url de consumo
https://api.us-south.apiconnect.appdomain.cloud/crichy05hotmailcom-dev/sb/apimutant/mutant

# Ejemplo Request
{
"dna": ["ATGCGA","CAGTGC","TTATGT","AGAAGG","CCCCTA","TCACTG"]
}
- ## Respuesta
La api devuelve true o false dependiendo si la validación de la cadena resulta con la condición de mutante o no. Adicional el método guarda la consulta en una base de datos.



## Método post /stats
Este método trae la cantidad de humanos o mutantes consultados con el método /mutant junto con su ratio
- **Paso 1:** Se debe enviar una petición tipo post sin un body.

# Url de consumo
https://api.us-south.apiconnect.appdomain.cloud/crichy05hotmailcom-dev/sb/apimutant/stats

# Ejemplo Request
Peticion post sin body

- ## Respuesta
La api devuelve la cantidad de humanos y mutantes que se han consultado en el método /mutant.

{
    "count_mutant_dna": 6,
    "count_human_dna": 7,
    "ratio": 1.1666666666666667
}
