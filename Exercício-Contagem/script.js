function contar() { // Acrescentada no botão no HTML
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res') 
    
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        //A propriedade length de um objeto String contém o comprimento da string. length é uma propriedade read-only (somente leitura) de instâncias de string.
    }else {
       res.innerHTML = 'Contando: <br>'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       // Criamos novas variáveis, pois precisamos converte-las para tipo NUMBER
    if (p <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
      
    if ( i < f) {
        for(let c =i; c <= f; c += p) {
            // Criamos uma variável "C" que irá receber o valor de "I", Se "C" for menor ou igual a variável "F", Ele vai receber ele mesmo, mais a variável "P". -- ESSE É O METODO FOR --
            res.innerHTML += ` ${c} \u{1F51C}`	
            //E irá imprimir na tela (Contando + os valores incrementado)
            }
    }else {
        for(let c = i; c >= f; c -=p) {
            res.innerHTML += ` ${c} \u{1F51A}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
        
}
    
    



// end = U+1F51A	

          