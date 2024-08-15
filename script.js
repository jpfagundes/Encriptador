const textarea = document.querySelector(".text-area");
const message = document.querySelector(".message");
const matrizCode = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"]
];

function btnEncrypt(){
  const textEncrypted = encrypt(textarea.value);
  message.value = textEncrypted;
  textarea.value = "";
}

function btnDecrypt(){
  const textDecrypted = decrypt(textarea.value);
  message.value = textDecrypted;
  textarea.value = "";
}

function encrypt(stringEncrypted){
  for(let i = 0; i < matrizCode.length; i++) {
    if(stringEncrypted.includes(matrizCode[i][0])) {
      stringEncrypted = stringEncrypted.replaceAll(matrizCode[i][0], matrizCode[i][1])   
    }
  }

  return stringEncrypted;
}

function decrypt(stringDecrypted){
  for(let i = matrizCode.length-1; i >= 0 ; i--) {
    if(stringDecrypted.includes(matrizCode[i][1])) {
      stringDecrypted = stringDecrypted.replaceAll(matrizCode[i][1], matrizCode[i][0])   
    }
  }
  return stringDecrypted;
}

function btnCopy(){
  navigator.clipboard.writeText(message.value);
}