//CONTADOR INICIAL
var count = 0

//SELECIONA O VALOR E O VALOR DO BOTÃO
const valor = document.getElementById('valor')
const btns = document.querySelectorAll(".btn") //pega todas as classes do tipo botão

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        console.log(e.currentTarget)
        const styles = e.currentTarget.classList
        if(styles.contains('subtrai')){
            count--
        }else if(styles.contains('add')){
            count++
        }else if(styles.contains('resetar')){
            count = 0
        }

        if(count > 0){
            valor.style.color = "#34A853"
        }else if(count < 0){
            valor.style.color = "red"
        }else{
            valor.style.color = "grey"
        }
        valor.textContent = count
    })
})