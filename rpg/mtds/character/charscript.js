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

const setSkillBonus = (e) => {
  const selectedQuality = document.querySelector('.selected');
  const goodSkills = document.querySelector('#good-skills');
  const normalSkills = document.querySelector('#normal-skills');
  const badSkills = document.querySelector('#bad-skills');
  let goodCounter = 3 - document.querySelectorAll('.good').length;
  let normalCounter = 4 - document.querySelectorAll('.normal').length;
  let badCounter = 2 - document.querySelectorAll('.bad').length;

  if (!selectedQuality) {
    e.target.classList.remove('normal');
    e.target.classList.remove('bad');
    e.target.classList.remove('good');
  }
  if (selectedQuality.id === 'good-skills' && goodCounter > 0) {
    e.target.classList.remove('normal');
    e.target.classList.remove('bad');
    e.target.classList.add('good');
  }
  if (selectedQuality.id === 'normal-skills' && normalCounter > 0) {
    e.target.classList.remove('good');
    e.target.classList.remove('bad');
    e.target.classList.add('normal');
  }
  if (selectedQuality.id === 'bad-skills' && badCounter > 0) {
    e.target.classList.remove('normal');
    e.target.classList.remove('good');
    e.target.classList.add('bad');
  }

  goodCounter = 3 - document.querySelectorAll('.good').length;
  normalCounter = 4 - document.querySelectorAll('.normal').length;
  badCounter = 2 - document.querySelectorAll('.bad').length;

  goodSkills.textContent = `${goodCounter} com +3`;
  normalSkills.textContent = `${normalCounter} com 0`;
  badSkills.textContent = `${badCounter} com -2`;
};

skillList.forEach((skill) => {
  skill.addEventListener('click', setSkillBonus);
});
