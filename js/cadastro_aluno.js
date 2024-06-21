



let alunos = []; 

function cadastrarAluno() {
    event.preventDefault(); 
    
    
    let nome = document.getElementById('nome').value.trim();
    let matricula = document.getElementById('matricula').value.trim();
    let curso = document.getElementById('curso').value.trim();
    
    
    let aluno = {
        nome: nome,
        matricula: matricula,
        curso: curso
    };
    
    alunos.push(aluno);
    
    document.getElementById('nome').value = '';
    document.getElementById('matricula').value = '';
    document.getElementById('curso').value = '';
    
    alert('Aluno cadastrado com sucesso!');
    
    window.location.href = 'lista_alunos.html';
    
    return false; 
}
