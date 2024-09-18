// Seleciona os elementos HTML que serão usados no script
const passwordElement = document.getElementById('password'); // Campo onde a senha gerada será exibida
const generateBtn = document.getElementById('generate-btn'); // Botão para gerar a senha
const uppercaseCheckbox = document.getElementById('uppercase'); // Checkbox para incluir letras maiúsculas
const lowercaseCheckbox = document.getElementById('lowercase'); // Checkbox para incluir letras minúsculas
const numbersCheckbox = document.getElementById('numbers'); // Checkbox para incluir números
const symbolsCheckbox = document.getElementById('symbols'); // Checkbox para incluir símbolos
const lengthElement = document.getElementById('length'); // Input para o comprimento da senha

// Define as strings de caracteres que serão usadas para criar a senha
const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Letras maiúsculas
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'; // Letras minúsculas
const numbers = '0123456789'; // Números
const symbols = '!@#$%^&*()_+{}[]|:;<>?,./'; // Símbolos

// Função que retorna um caractere aleatório de uma string
function getRandomCharacter(str) {
    return str[Math.floor(Math.random() * str.length)];
    // Math.random() gera um número aleatório entre 0 e 1
    // Multiplicamos pela quantidade de caracteres na string (str.length)
    // Math.floor() arredonda o número para baixo, escolhendo o índice do caractere
}

// Função principal para gerar a senha
function generatePassword() {
    const length = parseInt(lengthElement.value); // Obtém o comprimento da senha a partir do input
    let characters = ''; // Variável que armazenará todos os tipos de caracteres possíveis
    let password = ''; // Variável que armazenará a senha gerada

    // Verifica quais checkboxes estão marcados e adiciona os respectivos caracteres à variável 'characters'
    if (uppercaseCheckbox.checked) characters += uppercaseLetters;
    if (lowercaseCheckbox.checked) characters += lowercaseLetters;
    if (numbersCheckbox.checked) characters += numbers;
    if (symbolsCheckbox.checked) characters += symbols;

    // Se nenhum checkbox estiver marcado, retorna uma mensagem de erro
    if (characters.length === 0) {
        return 'Selecione pelo menos uma opção';
    }

    // Gera a senha no comprimento especificado, escolhendo caracteres aleatórios da string 'characters'
    for (let i = 0; i < length; i++) {
        password += getRandomCharacter(characters);
    }

    return password; // Retorna a senha gerada
}

// Adiciona um evento ao botão "Gerar Senha" para que a função seja executada quando o botão for clicado
generateBtn.addEventListener('click', () => {
    const password = generatePassword(); // Gera a senha usando a função
    passwordElement.value = password; // Exibe a senha gerada no campo de input
});