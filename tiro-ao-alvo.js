function solucao(disparos) {
    let maiorQueSetenta = 0
	for(const disparo of disparos){
        if(disparo >= 70){
            maiorQueSetenta++
        }       
    }
    if(maiorQueSetenta >=3){
        console.log(maiorQueSetenta);
    }else{
        console.log("ELIMINADO");
    }

}