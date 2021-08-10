function solucao(notas) {
    let maior = notas[0];
    let menor = notas[0];
    let total = 0;
    let elem = 0
    for(const nota of notas){
        if(nota >= maior){
            maior = nota;
        }
        if(nota <= menor){
            menor = nota;
        }
        total += nota;
        elem++
    }
    console.log((total - maior - menor) / (elem - 2));
}
