function solucao(dados) {
	if(dados.mascara === false){
        if(dados.gritando === false){
            console.log("RETIRADA POR FALTA DE MASCARA");    
        }else{
            console.log("BAGUNCANDO TUDO");
        }
    }else if(dados.gritando){
            console.log("RETIRADA POR ESTAR GRITANDO");   
    }else if(dados.vacinada === false || dados.negativoPCR === false){
        console.log("BARRADA");
    }else{
        console.log("OK");
    }

}