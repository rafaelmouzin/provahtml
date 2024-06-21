function buscarAlunos() {
    let termo = document.getElementById('buscaAlunos').value.toLowerCase();
    let listaAlunos = document.getElementById('listaAlunos');
    
    listaAlunos.innerHTML = '';
    
    alunos.forEach(function(aluno) {
        if (aluno.nome.toLowerCase().includes(termo)) {
            let li = document.createElement('li');
            li.textContent = `${aluno.nome} - ${aluno.matricula} (${aluno.curso})`;
            listaAlunos.appendChild(li);
        }
    });
}
