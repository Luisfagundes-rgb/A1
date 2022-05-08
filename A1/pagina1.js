const $botao = document.querySelector(' #switch '); 

$botao.addEventListener('change', function(){ 
    if($botao.checked==true){ 
        document.getElementById("imagem").src="/imagem.jpg"; 

    } 
    else{ 
        document.getElementById("imagem").src="/imagem.jpg"; 

    } 
});