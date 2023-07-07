// Lấy các phần tử từ DOM
const plaintextElement = document.getElementById('plaintext');
const ciphertextElement = document.getElementById('ciphertext');
const encryptButton = document.getElementById('encrypt-btn');
const decryptButton = document.getElementById('decrypt-btn');

// Bắt sự kiện click vào nút mã hóa
encryptButton.addEventListener('click', () => {
  const plaintext = plaintextElement.value;
  const ciphertext = encrypt(plaintext);
  ciphertextElement.value = ciphertext;
});

// Bắt sự kiện click vào nút giải mã
decryptButton.addEventListener('click', () => {
  const ciphertext = ciphertextElement.value;
  const plaintext = decrypt(ciphertext);
  plaintextElement.value = plaintext;
});

// Hàm mã hóa văn bản
function encrypt(plaintext) {
  // TODO: Thực hiện mã hóa văn bản ở đây
  // Ví dụ:
  const encryptedText = btoa(plaintext); // Mã hóa Base64
  return encryptedText;
}

// Hàm giải mã văn bản
function decrypt(ciphertext) {
  // TODO: Thực hiện giải mã văn bản ở đây
  // Ví dụ:
  const decryptedText = atob(ciphertext); // Giải mã Base64
  return decryptedText;
}
