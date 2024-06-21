// Função para buscar alunos pelo nome
function buscarAlunos() {
    let input = document.getElementById('buscaAlunos');
    let filter = input.value.toUpperCase();
    let ul = document.getElementById('listaAlunos');
    let li = ul.getElementsByTagName('li');

    // Itera sobre a lista de alunos e mostra apenas os que correspondem à busca
    for (let i = 0; i < li.length; i++) {
        let aluno = li[i];
        let txtValue = aluno.textContent || aluno.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            aluno.style.display = '';
        } else {
            aluno.style.display = 'none';
        }
    }
}

// Event listener para o evento submit do formulário de cadastro de aluno
document.getElementById('formAluno').addEventListener('submit', function(event) {
    event.preventDefault();
    let nome = document.getElementById('nomeAluno').value;
    let matricula = document.getElementById('matriculaAluno').value;

    // Cria um objeto aluno com os dados inseridos
    let aluno = {
        nome: nome,
        matricula: matricula
    };

    // Verifica se já há alunos cadastrados no localStorage
    let alunos = [];
    if (localStorage.getItem('alunos')) {
        alunos = JSON.parse(localStorage.getItem('alunos'));
    }

    // Adiciona o novo aluno à lista de alunos
    alunos.push(aluno);

    // Salva a lista de alunos atualizada no localStorage
    localStorage.setItem('alunos', JSON.stringify(alunos));

    // Mostra uma mensagem de confirmação
    alert(`Aluno cadastrado:\nNome: ${nome}\nMatrícula: ${matricula}`);

    // Limpa o formulário após o cadastro
    this.reset();

    // Atualiza a lista de alunos na página
    mostrarAlunos();
});

// Função para mostrar os alunos cadastrados ao carregar a página
function mostrarAlunos() {
    let listaAlunos = document.getElementById('listaAlunos');
    listaAlunos.innerHTML = ''; // Limpa a lista antes de adicionar os novos itens

    // Verifica se há alunos cadastrados no localStorage
    if (localStorage.getItem('alunos')) {
        let alunos = JSON.parse(localStorage.getItem('alunos'));

        // Itera sobre a lista de alunos e os adiciona ao HTML
        alunos.forEach(function(aluno) {
            let li = document.createElement('li');
            li.textContent = `${aluno.nome} - Matrícula: ${aluno.matricula}`;
            listaAlunos.appendChild(li);
        });
    }
}
