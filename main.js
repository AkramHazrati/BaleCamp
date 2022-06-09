function placeImage(x)
{
    var div = document.getElementById("items");

    div.innerHTML = ""; // clear images

    for (counter=1;counter<=x;counter++) {
        var imagem=document.createElement("img");
        var text=document.createElement("p");
        text.innerText = "picture"+counter;
        imagem.src="https://picsum.photos/id/"+counter+"/400/200"; 
        imagem.id = counter;
        div.appendChild(imagem);
        div.appendChild(text);
    }
}

function remove(){
    var div = document.getElementById("items");
    for(i = 1 ; i<=100 ; i++){
        let Image = document.getElementById(i);
        Image.addEventListener("click", () => {
        Image.remove();
});
}
}

function add(){
    var btn  =  document.getElementById("button");
    counter  = Number(btn.value);
    var div = document.getElementById("items");
    var imagem=document.createElement("img");
    imagem.src="https://picsum.photos/id/"+counter+"/400/200";
    imagem.id = counter; 
    div.appendChild(imagem);
    counter = counter + 1;
    btn.value = counter;
    remove();
}
window.onload = function() {
    
    placeImage(50);
    remove();
};