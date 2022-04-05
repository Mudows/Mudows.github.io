// VALIDAÇÃO DE LOGIN

function clickLogin() {
  const loginEmail = document.getElementById('loginEmail');
  const loginSenha = document.getElementById('loginSenha');

  if (loginEmail.value === 'tryber@teste.com' && loginSenha.value === '123456') {
    alert('Olá, Tryber!');
    return;
  }
  alert('Email ou senha inválidos.');
}

document.getElementById('loginButton').addEventListener('click', clickLogin);

// VALIDAÇÃO PARA ENVIAR O FORMULÁRIO

const checkboxId = document.getElementById('agreement');
const buttonId = document.getElementById('submit-btn');

function sendForm() {
  if (this.checked) {
    buttonId.disabled = false;
    return;
  }
  buttonId.disabled = true;
}

checkboxId.addEventListener('change', sendForm);

// LÓGICA DO CONTADOR DE CARACTERES

function atualizaContador() {
  document.getElementById('counter').innerText = 500 - this.value.length;
}

document.getElementById('textarea').addEventListener('input', atualizaContador);

// BOTÃO DE ENVIAR

let materias = '';
// Adiciona a variável materias as materias selecionadas e retorna este valor.
function materiasSelecionadas() {
  const materiaChecked = document.querySelectorAll('.subject');
  for (let i = 0; i < materiaChecked.length; i += 1) {
    if (materias === '' && materiaChecked[i].checked) {
      materias = materiaChecked[i].value;
    } else if (materiaChecked[i].checked) {
      materias = `${materias}, ${materiaChecked[i].value}`;
    }
  }
  return materias;
}

const familia = [];
// Adiciona a variável familia a familia selecionada e retorna este valor.
function familiaSelecionada() {
  const familiaChecked = document.querySelectorAll('.familia');
  for (let i = 0; i < familiaChecked.length; i += 1) {
    if (familiaChecked[i].checked) {
      familia.push(familiaChecked[i].value);
    }
  }
  return familia;
}

const nota = [];
// Adiciona a variável nota a nota selecionada e retorna este valor.
function notaSelecionada() {
  const notaChecked = document.querySelectorAll('.rate');
  for (let i = 0; i < notaChecked.length; i += 1) {
    if (notaChecked[i].checked) {
      nota.push(notaChecked[i].value);
    }
  }
  return nota;
}

// Armazena o formulário em uma variável
const formulario = document.getElementById('evaluation-form');
const nome = document.getElementById('input-name');
const sobrenome = document.getElementById('input-lastname');

function requisito21() {
  const dadosCadastrais = {
    nome: `Nome: ${nome.value} ${sobrenome.value}`,
    email: `Email: ${document.getElementById('input-email').value}`,
    casa: `Casa: ${document.getElementById('house').value}`,
    familia: `Família: ${familiaSelecionada()}`,
    materias: `Matérias: ${materiasSelecionadas()}`,
    avaliacao: `Avaliação: ${notaSelecionada()}`,
    obs: `Observações: ${document.getElementById('textarea').value}`,
  };
  formulario.innerHTML = '';
  for (let i = 0; i < Object.keys(dadosCadastrais).length; i += 1) {
    const novoCampo = document.createElement('p');
    novoCampo.innerText = Object.values(dadosCadastrais)[i];
    formulario.appendChild(novoCampo);
  }
}

// Adiciona o escutador ao botão que irá disparar a função requisito21
buttonId.addEventListener('click', requisito21);
