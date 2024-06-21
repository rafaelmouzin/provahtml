let livros = []; 

function cadastrarLivro() {
    event.preventDefault(); 
    

    let titulo = document.getElementById('titulo').value.trim();
    let autor = document.getElementById('autor').value.trim();
    let genero = document.getElementById('genero').value.trim();
    

    let livro = {
        titulo: titulo,
        autor: autor,
        genero: genero
    };
    

    livros.push(livro);
    

    document.getElementById('titulo').value = '';
    document.getElementById('autor').value = '';
    document.getElementById('genero').value = '';
    
    alert('Livro cadastrado com sucesso!');
    
    return false; 
}
