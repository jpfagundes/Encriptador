const textarea = document.querySelector(".text-area");
const message = document.querySelector(".message");
const Copybutton = document.querySelector(".btn-copy");
const h2 = document.querySelector(".h2");
const paragraph = document.querySelector(".paragraph");
const ImageTextArea = document.querySelector(".img-textarea");

const matrizCode = [
  ["a", "ai"],
  ["e", "enter"],
  ["i", "imes"],
  ["o", "ober"],
  ["u", "ufat"]
];

function btnEncrypt(){
  const textEncrypted = encrypt(textarea.value.toLowerCase());
  message.value = textEncrypted;
  textarea.value = "";

  Copybutton.classList.remove('hide');
  message.classList.remove('hide');
  h2.classList.add('hide');
  paragraph.classList.add('hide');
  ImageTextArea.classList.add('hide');

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