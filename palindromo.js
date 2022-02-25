var ama = "abba";

function verificaPalindromo(string) {
    if (!string) return "Não é String";

    return string.split("").reverse().join("") === string;

}

console.log(verificaPalindromo(ama));
