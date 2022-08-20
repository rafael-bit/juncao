
function atualizarNome1() {
    let name1 = document.querySelector('.nome1');
    name1.addEventListener('click', atualizarNome1);
    let nome1 = prompt('Insira um novo nome');
    name1.textContent = 'Nome 1: ' + nome1;
}

function atualizarNome2() {
    let name2 = document.querySelector('.nome2');
    name2.addEventListener('click', atualizarNome2);
    let nome2 = prompt('Insira um novo nome');
    name2.textContent = 'Nome 1: ' + nome2;
  }

function RandomPhoto(){
    let img = new Array();
        img[0] = "download (1).jpeg";
        img[1] = "download (2).jpeg";
        img[2] = "download (3).jpeg";
        img[3] = "download (4).jpeg";
        img[4] = "download (5).jpeg";
        img[5] = "download (6).jpeg";
        img[6] = "download (7).jpeg";
        img[7] = "download (8).jpeg";
        img[7] = "download.jpeg";
        let mudar = Math.floor(Math.random()*img.length);
        document.getElementById("img").innerHTML = "<img src='../assets/"+img[mudar]+"'>";
   
}