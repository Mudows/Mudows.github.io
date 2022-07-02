/* eslint-disable no-undef */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

const physVal = document.querySelector('#physical')
const menVal = document.querySelector('#mental')
const magVal = document.querySelector('#magical')
const $endBtn = $('#end-creation-btn')
let $goodCounter = 3
let $badCounter = 2
let totCustomPts = 20

$('#tot-char-pts').text(totCustomPts)

const validateCharacter = () => {
  const $charName = $('#char-name').val().length
  if (
    $goodCounter === 0 &&
    $badCounter === 0 &&
    totCustomPts === 0 &&
    $charName >= 3
  ) {
    $endBtn.prop('disabled', false)
    return
  }
  $endBtn.prop('disabled', true)
}

$('#char-name').on('change', validateCharacter).on('input', validateCharacter)

const updateCurrPts = () => {
  const remainingPts =
    parseInt(physVal.value) + parseInt(menVal.value) + parseInt(magVal.value)
  const maxValue = 20
  const minValue = 0
  totCustomPts = maxValue - remainingPts
  if (totCustomPts > maxValue) totCustomPts = maxValue
  if (totCustomPts < minValue) totCustomPts = minValue
  $('#tot-char-pts').text(totCustomPts)
}

const attributesLimits = (e) => {
  const attrMaxValue = totCustomPts
  const attrMinValue = 0
  const targetAttr = e.target.value
  if (attrMaxValue === 0) e.target.value = e.target.value - 1
  if (targetAttr < attrMinValue) e.target.value = attrMinValue
}

const attrFunctionWrapper = (e) => {
  attributesLimits(e)
  updateCurrPts()
  validateCharacter()
}

physVal.addEventListener('change', attrFunctionWrapper)
menVal.addEventListener('change', attrFunctionWrapper)
magVal.addEventListener('change', attrFunctionWrapper)

const selectedQuality = (e) => {
  const $selectedQuality = $('.selected')
  if ($selectedQuality && e.target.id === $selectedQuality.prop('id')) {
    return e.target.classList.remove('selected')
  }
  $('.skill-quality').removeClass('selected')
  e.target.classList.add('selected')
}

$('.skill-quality').on('click', selectedQuality)

/// GENERATION OF THE SKILL LIST
const skillSet = [
  {
    name: 'Atletismo',
    type: 'Físico',
    bonus: ''
  },
  {
    name: 'Luta',
    type: 'Físico',
    bonus: ''
  },
  {
    name: 'Precisão',
    type: 'Físico',
    bonus: ''
  },
  {
    name: 'Erudição',
    type: 'Mental',
    bonus: ''
  },
  {
    name: 'Engenharia',
    type: 'Mental',
    bonus: ''
  },
  {
    name: 'Medicina',
    type: 'Mental',
    bonus: ''
  },
  {
    name: 'Bênçãos',
    type: 'Mágico',
    bonus: ''
  },
  {
    name: 'Espiritismo',
    type: 'Mágico',
    bonus: ''
  },
  {
    name: 'Maldições',
    type: 'Mágico',
    bonus: ''
  }
]

const generateSkillList = () => {
  skillSet.forEach((skill) => {
    if (skill.type === 'Físico') {
      $('<li></li>')
        .text(`${skill.name} ${skill.bonus}`)
        .addClass('skill')
        .appendTo('#physical-skills')
    }
    if (skill.type === 'Mental') {
      $('<li></li>')
        .text(`${skill.name} ${skill.bonus}`)
        .addClass('skill')
        .appendTo('#mental-skills')
    }
    if (skill.type === 'Mágico') {
      $('<li></li>')
        .text(`${skill.name} ${skill.bonus}`)
        .addClass('skill')
        .appendTo('#magical-skills')
    }
  })
}

generateSkillList()

/// SETTING THE SKILL BONUS (COLOR CODE)
const setSkillBonus = (e) => {
  const selectedQuality = $('.selected')

  if (selectedQuality.prop('id') === undefined) {
    e.target.classList.remove('bad')
    e.target.classList.remove('good')
  }

  if (selectedQuality.prop('id') === 'good-skills' && $goodCounter > 0) {
    e.target.classList.remove('bad')
    e.target.classList.add('good')
  }

  if (selectedQuality.prop('id') === 'bad-skills' && $badCounter > 0) {
    e.target.classList.remove('good')
    e.target.classList.add('bad')
  }

  $goodCounter = 3 - $('.good').length
  $badCounter = 2 - $('.bad').length

  const goodSkills = document.querySelector('#good-skills')
  const badSkills = document.querySelector('#bad-skills')
  goodSkills.textContent = `Escolha ${$goodCounter} Boa(s)`
  badSkills.textContent = `Escolha ${$badCounter} Ruin(s)`
  validateCharacter()
}

$('.skill').on('click', setSkillBonus)

const itens = [
  {
    name: 'Pechera',
    attr: 'Físico',
    desc: 'Portada pelos guerreiros do sertão. Esta arma é muito versátil e pode ser usada para cortar mato, churrasco ou vacilões. Se investir 1 ponto de Físico antes de atacar e acertar, o alvo perde 1 ponto de vida por 2 rodadas. Não cumulativo.'
  },
  {
    name: 'Machadão',
    attr: 'Físico',
    desc: 'Descrição'
  },
  {
    name: 'Arco e Flecha',
    attr: 'Físico',
    desc: 'Descrição.'
  },
  {
    name: 'Olho do Tinhoso',
    attr: 'Maldição',
    desc: 'Descrição.'
  }
]

itens.forEach((item) => {
  $('<li></li>')
    .text(item.name)
    .attr('data-toggle', 'tooltip')
    .attr('data-placement', 'top')
    .attr('title', item.desc)
    .appendTo('#gear-choices')
})

const maxHealth = 10
let currHeatlh = 10
let maxPhys = 0
let currPhys = 0
let maxMen = 0
let currMen = 0
let maxMag = 0
let currMag = 0

const updateResource = (e) => {
  // This is so stupid. There must be a better way to do this.
  switch (e.target.id) {
    case 'minus-health-box':
      currHeatlh -= 1
      $('#health-bar').text(`${currHeatlh} / ${maxHealth}`)
      break
    case 'plus-health-box':
      currHeatlh += 1
      $('#health-bar').text(`${currHeatlh} / ${maxHealth}`)
      break
    case 'minus-phys-box':
      currPhys -= 1
      $('#phys-resource').text(`${currPhys} / ${maxPhys}`)
      break
    case 'plus-phys-box':
      currPhys = currPhys + 1
      $('#phys-resource').text(`${currPhys} / ${maxPhys}`)
      break
    case 'minus-men-box':
      currMen -= 1
      $('#men-resource').text(`${currMen} / ${maxMen}`)
      break
    case 'plus-men-box':
      currMen = currMen + 1
      $('#men-resource').text(`${currMen} / ${maxMen}`)
      break
    case 'minus-mag-box':
      currMag -= 1
      $('#mag-resource').text(`${currMag} / ${maxMag}`)
      break
    case 'plus-mag-box':
      currMag += 1
      $('#mag-resource').text(`${currMag} / ${maxMag}`)
      break
  }
}

const createSheet = () => {
  const resourceIds = ['health-box', 'phys-box', 'men-box', 'mag-box']
  $('#char-name')
    .addClass('form-control-plaintext')
    .removeClass('form-control')
    .css('font-size', '24pt')
    .attr('readonly', true)

  $('#health-bar').text(`${currHeatlh} / ${maxHealth}`)
  maxPhys = 5 + parseInt(physVal.value)
  currPhys = maxPhys
  maxMen = 5 + parseInt(menVal.value)
  currMen = maxMen
  maxMag = 5 + parseInt(magVal.value)
  currMag = maxMag
  $('#phys-resource').text(`${currPhys} / ${maxPhys}`)
  $('#men-resource').text(`${currMen} / ${maxMen}`)
  $('#mag-resource').text(`${currMag} / ${maxMag}`)

  resourceIds.forEach((id) => {
    const targetid = '#' + id
    $('<button></button>')
      .text('-')
      .prop('type', 'button')
      .prop('id', 'minus-' + id)
      .on('click', updateResource)
      .appendTo(targetid)
    $('<button></button>')
      .text('+')
      .prop('type', 'button')
      .prop('id', 'plus-' + id)
      .on('click', updateResource)
      .appendTo(targetid)
  })

  $('.skill-quality').on('click', selectedQuality)
  $('#good-skills').text('+3')
  $('#bad-skills').text('-2')
  $('#stats-and-attrs').removeClass('d-none')
  $('.skill').off('click', setSkillBonus)
  $('.delete').remove()
  $endBtn.remove()
}

$endBtn.on('click', createSheet)
