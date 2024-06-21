function validarCadastroLocacao() {
    var livro = document.getElementById('livro').value.trim();
    var aluno = document.getElementById('aluno').value.trim();
    var dataLocacao = document.getElementById('data_locacao').value.trim();
    var dataDevolucao = document.getElementById('data_devolucao').value.trim();
    
    if (livro === '' || aluno === '' || dataLocacao === '' || dataDevolucao === '') {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false;
    }
    
    
    
    return true;
}
