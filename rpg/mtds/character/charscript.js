$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

const physVal = document.querySelector('#physical');
const menVal = document.querySelector('#mental');
const magVal = document.querySelector('#magical');
const totCharPts = document.querySelector('#tot-char-pts');

const updateCurrPts = () => {
  const remainingPts =
    parseInt(physVal.value) + parseInt(menVal.value) + parseInt(magVal.value);
  const maxValue = 100;
  const minValue = 0;
  totCharPts.textContent = 100 - remainingPts;
  const total = parseInt(totCharPts.textContent);
  if (total > maxValue) totCharPts.textContent = maxValue;
  if (total < minValue) totCharPts.textContent = minValue;
};

const attributesLimits = (e) => {
  const attrMaxValue = parseInt(totCharPts.textContent);
  const attrMinValue = 0;
  let targetAttr = e.target.value;
  if (attrMaxValue === 0) e.target.value = e.target.value - 1;
  if (targetAttr < attrMinValue) e.target.value = attrMinValue;
};

const attrFunctionWrapper = (e) => {
  attributesLimits(e);
  updateCurrPts();
};

physVal.addEventListener('change', attrFunctionWrapper);
menVal.addEventListener('change', attrFunctionWrapper);
magVal.addEventListener('change', attrFunctionWrapper);

const skillQualityList = document.querySelectorAll('.skill-quality');
const skillList = document.querySelectorAll('.skill');

const selectedQuality = (e) => {
  const selectedQuality = document.querySelector('.selected');
  if (selectedQuality && e.target.id === selectedQuality.id)
    return e.target.classList.remove('selected');
  skillQualityList.forEach((quality) => {
    quality.classList.remove('selected');
  });
  e.target.classList.add('selected');
};

skillQualityList.forEach((quality) => {
  quality.addEventListener('click', selectedQuality);
});

let goodCounter = 3 - document.querySelectorAll('.good').length;
let badCounter = 2 - document.querySelectorAll('.bad').length;

const setSkillBonus = (e) => {
  const selectedQuality = document.querySelector('.selected');
  const goodSkills = document.querySelector('#good-skills');
  const badSkills = document.querySelector('#bad-skills');

  if (!selectedQuality) {
    e.target.classList.add('normal');
    e.target.classList.remove('bad');
    e.target.classList.remove('good');
    e.target.childNodes[1].textContent = '0';
  }

  if (selectedQuality.id === 'good-skills' && goodCounter > 0) {
    e.target.classList.remove('normal');
    e.target.classList.remove('bad');
    e.target.classList.add('good');
    e.target.childNodes[1].textContent = '+3';
  }

  if (selectedQuality.id === 'bad-skills' && badCounter > 0) {
    e.target.classList.remove('normal');
    e.target.classList.remove('good');
    e.target.classList.add('bad');
    e.target.childNodes[1].textContent = '-2';
  }

  goodCounter = 3 - document.querySelectorAll('.good').length;
  badCounter = 2 - document.querySelectorAll('.bad').length;

  goodSkills.textContent = `Escolha ${goodCounter} Boa(s)`;
  badSkills.textContent = `Escolha ${badCounter} Ruin(s)`;
};

skillList.forEach((skill) => {
  skill.addEventListener('click', setSkillBonus);
});

const itens = [
  {
    item: 'Pechera',
    attr: 'Físico',
    desc: 'Portada pelos guerreiros do sertão. Esta arma é muito versátil e pode ser usada para cortar mato, churrasco ou vacilões. Se investir 1 ponto de Físico antes de atacar e acertar, o alvo perde 1 ponto de vida por 2 rodadas. Não cumulativo.'
  },
  {
    item: 'Machadão',
    attr: 'Físico',
    desc: 'Descrição'
  },
  {
    item: 'Arco e Flecha',
    attr: 'Físico',
    desc: 'Descrição.'
  },
  {
    item: 'Olho do Tinhoso',
    attr: 'Maldição',
    desc: 'Descrição.'
  }
]