const $clientEmail = $('#client-email');
const $submitButton = $('#submit-button');
const myProjects = [
  {
    title: 'To Do List',
    available: true,
    icon: '<i class="fa-solid fa-list-check"></i><br>',
    id: 'project-1',
    url: 'https://mudows.github.io/todo-list-project/index.html',
    techs: ['/img/stack_icons/javascript.svg', '/img/stack_icons/bulma.svg'],
  },
  {
    title: 'Pixel Art Maker',
    available: true,
    icon: '<i class="fa-solid fa-border-all"></i><br>',
    id: 'project-2',
    url: 'https://mudows.github.io/pixel-art-project/index.html',
    techs: ['/img/stack_icons/javascript.svg', '/img/stack_icons/css3.svg'],
  },
  {
    title: 'Simple Games',
    available: true,
    icon: '<i class="fa-solid fa-gamepad"></i><br>',
    id: 'project-3',
    url: '#',
    techs: ['/img/stack_icons/javascript.svg', '/img/stack_icons/css3.svg'],
  },
  {
    title: 'Super Trunfo',
    available: false,
    icon: '<i class="fa-solid fa-copy"></i><br>',
    id: 'project-4',
    url: '#',
    techs: ['/img/stack_icons/javascript.svg', '/img/stack_icons/css3.svg'],
  },
  {
    title: 'Meme Generator',
    available: false,
    icon: '<i class="fa-solid fa-face-grin-tongue-wink"></i><br>',
    id: 'project-5',
    url: '#',
    techs: ['/img/stack_icons/javascript.svg', '/img/stack_icons/css3.svg'],
  },
  {
    title: 'Tunes',
    available: false,
    icon: '<i class="fa-solid fa-music"></i><br>',
    id: 'project-6',
    url: '#',
    techs: ['/img/stack_icons/javascript.svg', '/img/stack_icons/css3.svg'],
  },
  {
    title: 'Online Store',
    available: false,
    icon: '<i class="fa-solid fa-store"></i><br>',
    id: 'project-7',
    url: '#',
    techs: [],
  },
  {
    title: 'C&B RPG',
    available: false,
    icon: '<i class="fa-solid fa-dice"></i><br>',
    id: 'project-8',
    url: '#',
    techs: [],
  },
];

window.onload = myProjects.map((project) => {
  const cardId = '#' + project.id;
  $('<a></a>')
    .text(project.title)
    .addClass('project-card')
    .attr('id', project.id)
    .attr('href', project.url)
    .attr('target', '_blank')
    .appendTo('#projects-box');
  $(project.icon).prependTo(cardId);

  if (!project.available) {
    $(cardId)
      .addClass('disabled')
      .attr('title', 'Em breve');
  }
});

const validateEmailInput = () => {
  const emailValidation = /\S+@\S+\.\S+/;
  if (emailValidation.test($clientEmail.val())) {
    $submitButton
      .removeClass('btn-secondary')
      .addClass('btn-primary')
      .prop('disabled', false);
    return;
  }
  $submitButton
    .removeClass('btn-primary')
    .addClass('btn-secondary')
    .prop('disabled', true);
  return;
};

$clientEmail.on('input', validateEmailInput);
$submitButton.on('click', () => $clientEmail.val(''));
