const textarea = document.querySelector(".text-area");
const message = document.querySelector(".message");

function btnEncrypt(){
  const textEncrypted = encrypt(textarea.value);
  message.value = textEncrypted;
  textarea.value = "";
}

function encrypt(stringEncrypted){
  let matrizCode = [
    ["a", "ai"],
    ["e", "enter"],
    ["i", "imes"],
    ["o", "ober"],
    ["u", "ufat"]
  ];

  for(let i = 0; i < matrizCode.length; i++) {
    if(stringEncrypted.includes(matrizCode[i][0])) {
      stringEncrypted = stringEncrypted.replaceAll(matrizCode[i][0], matrizCode[i][1])   
    }
  }

  return stringEncrypted;
}




