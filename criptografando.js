//Criando o objeto responsavl pela criptografia
const crypto = require("crypto");
const  algoritmo = "aes256"
const  segredo = "chaves"

//Frase para criptografar
const texto = 'O santos vai cair e o Gremio vai pra C!'

//Criptografando
const cipher = crypto.createCipher(algoritmo,segredo)
const crypted = cipher.update(texto, 'utf8', 'hex')
console.log('Criptografado = '+crypted)

//Descriptografando
const decipher = crypto.createDecipher(algoritmo,segredo)
const plain = decipher.update(crypted, 'hex', 'utf8')
console.log('Descriptografado = '+plain)