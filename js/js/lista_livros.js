function buscarLivros() {
    let termo = document.getElementById('buscaLivros').value.toLowerCase();
    let listaLivros = document.getElementById('listaLivros');
    
 
    listaLivros.innerHTML = '';
    
    livros.forEach(function(livro) {
        if (livro.titulo.toLowerCase().includes(termo)) {
            let li = document.createElement('li');
            li.textContent = `${livro.titulo} - ${livro.autor} (${livro.genero})`;
            listaLivros.appendChild(li);
        }
    });
}
