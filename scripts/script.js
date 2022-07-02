const $clientEmail = $('#client-email');
const $submitButton = $('#submit-button');
const myProjects = [
  {
    title: 'To Do List',
    available: true,
    icon: '<i class="fa-solid fa-list-check"></i><br>',
    id: 'project-1',
    url: 'https://mudows.github.io/trybe-projects-showcase/todo-list/',
  },
  {
    title: 'Pixel Art Maker',
    available: true,
    icon: '<i class="fa-solid fa-border-all"></i><br>',
    id: 'project-2',
    url: 'https://mudows.github.io/trybe-projects-showcase/pixel-art-project/',
  },
  {
    title: 'Simple Games',
    available: false,
    icon: '<i class="fa-solid fa-gamepad"></i><br>',
    id: 'project-3',
    url: 'https://mudows.github.io/simple-games/',
  },
  {
    title: 'Super Trunfo',
    available: false,
    icon: '<i class="fa-solid fa-copy"></i><br>',
    id: 'project-4',
    url: '#',
  },
  {
    title: 'Meme Generator',
    available: false,
    icon: '<i class="fa-solid fa-face-grin-tongue-wink"></i><br>',
    id: 'project-5',
    url: '#',
  },
  {
    title: 'Tunes',
    available: false,
    icon: '<i class="fa-solid fa-music"></i><br>',
    id: 'project-6',
    url: '#',
  },
  {
    title: 'Online Store',
    available: false,
    icon: '<i class="fa-solid fa-store"></i><br>',
    id: 'project-7',
    url: '#',
  },
  {
    title: 'RPG Character',
    available: true,
    icon: '<i class="fa-solid fa-dice"></i><br>',
    id: 'project-8',
    url: 'https://mudows.github.io/rpg/mtds/character/chargen.html'
  },
];
const myStacks = [
  {
    name: 'Bootstrap',
    img: '/img/stack_icons/bootstrap.png',
    url: 'https://getbootstrap.com/',
  },
  {
    name: 'CSS',
    img: '/img/stack_icons/css-3.png',
    url: 'https://www.w3.org/TR/CSS/#intro',
  },
  {
    name: 'Git',
    img: '/img/stack_icons/git.png',
    url: 'https://git-scm.com/',
  },
  {
    name: 'JavaScript',
    img: '/img/stack_icons/js.png',
    url: 'https://www.javascript.com/',
  },
  {
    name: 'Jest',
    img: '/img/stack_icons/jest.png',
    url: 'https://jestjs.io/',
  },
  {
    name: 'jQuery',
    img: '/img/stack_icons/jquery.png',
    url: 'https://jquery.com/',
  },
  {
    name: 'React',
    img: '/img/stack_icons/react.png',
    url: 'https://reactjs.org/',
  },
  {
    name: 'Sass',
    img: '/img/stack_icons/sass.png',
    url: 'https://sass-lang.com/',
  },
];

// Creates links to my projects on load
myProjects.map((project) => {
  const cardId = '#' + project.id;
  $('<a></a>')
    .text(project.title)
    .addClass('project-card')
    .attr('id', project.id)
    .prop('href', project.url)
    .prop('target', '_blank')
    .appendTo('#projects-box');
  $(project.icon).prependTo(cardId);

  if (!project.available) {
    $(cardId).addClass('disabled').prop('title', 'Em breve').prop('target', '').prop('href', '#');
  }
});

// Creates the list of my stacks on load
myStacks.map((stack) => {
  const stackId = '#' + stack.name;
  $('<a></a>')
    .prop('href', stack.url)
    .prop('title', stack.name)
    .prop('target', '_blank')
    .attr('id', stack.name)
    .appendTo('#stack-box');
  $('<img />').prop('src', stack.img).addClass('stack').appendTo(stackId);
});

$('#bg-music').prop('volume', 0.4); // Sets the volume of the bgMusic.

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
