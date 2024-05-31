
function contagem() {
    var inicio = document.getElementById('init');
    var fim = document.getElementById('final');
    var pass = document.getElementById('pass');
    var resultado = document.getElementById('resultado');
    var numinit = Number(inicio.value);
    var numfinal = Number(fim.value);
    var passo = Number(pass.value);

    if (passo <= 0) {
        window.alert("Número inválido, será utilizado 1 como base.");
        passo = 1;
    }

    resultado.innerHTML = "Contando:<br>";

    if (numinit <= numfinal) {
        // Contagem crescente
        for (var i = numinit; i <= numfinal; i += passo) {
            resultado.innerHTML += ` ${i} \u{1F449}`;
        }
    } else {
        // Contagem decrescente
        for (var i = numinit; i >= numfinal; i -= passo) {
            resultado.innerHTML += ` ${i} \u{1F449}`;
        }
    }
    resultado.innerHTML += ` \u{1F3C1}`;
}
