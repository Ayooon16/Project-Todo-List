import addProject from './modules/addProject';
import addTodo from './modules/addTodo';
import deleteProject from './modules/deleteProject';
import deleteTodo from './modules/deleteTodo';
import loadProjects from './modules/loadProjects';
import loadTodos from './modules/loadTodos.js';
import moomPic from './moom.jpg';
import zetaPic from './zeta.jpg';
import watamePic from './watame.png';
import amePic from './ame.png';
import robinPic from './robin.jpg';
import './style.css';

const pics = [zetaPic, moomPic, amePic, watamePic, robinPic];
function init() {
  if (localStorage.getItem('projects') === null) {
    localStorage.setItem('projects', JSON.stringify({ projects: {} }));
  }
}
window.onload = function () {
  addProjectsOnclick();
  addVtubers();
};
function addDeleteOnclick() {
  const todos = document.querySelectorAll('.todoCard');
  todos.forEach((element) => {
    element.children[2].onclick = function () {
      deleteTodo(this.parentElement.dataset.project, this.parentElement.dataset.index);
      this.parentElement.remove();
    };
  });
}
function addProjectsOnclick() {
  const projects = document.querySelectorAll('.navCard');
  projects.forEach((element) => {
    element.onclick = function () {
      loadTodos(this.firstChild.innerText);
      addDeleteOnclick();
    };
  });
}
function showVtuber(vtubers) {
  const randomVtuber = vtubers[Math.floor(Math.random() * vtubers.length)];

  console.log('a');

  document.getElementById(randomVtuber).style.visibility = 'visible';
  setTimeout(() => {
    document.getElementById(randomVtuber).style.visibility = 'hidden';
  }, 1000);
}
function addVtubers() {
  const vtubers = ['zeta', 'moom', 'ame', 'watame', 'robin'];
  let i = 0;
  vtubers.forEach((element) => {
    const pic = new Image();
    pic.src = pics[i];
    i += 1;
    pic.id = element;
    pic.className = 'vtuber';
    document.body.appendChild(pic);
  });
  document.getElementById('something').onclick = function () {
    showVtuber(vtubers);
  };
}

init();
loadProjects();
// addProject('else')
// addProject('something')
const data = {
  name: 'thing',
  date: '2323',
  something: 'xd',
};

// deleteProject('run')
// deleteTodo('run', 1)
// addTodo('gym',data)
// addTodo('run',data)

function pop(e) {
  let amount = 30;
  switch (e.target.dataset.type) {
    case 'shadow':
    case 'line':
      amount = 60;
      break;
  }
  // Quick check if user clicked the button using a keyboard
  if (e.clientX === 0 && e.clientY === 0) {
    const bbox = e.target.getBoundingClientRect();
    const x = bbox.left + bbox.width / 2;
    const y = bbox.top + bbox.height / 2;
    for (let i = 0; i < 30; i++) {
      // We call the function createParticle 30 times
      // We pass the coordinates of the button for x & y values
      createParticle(x, y, e.target.dataset.type);
    }
  } else {
    for (let i = 0; i < amount; i++) {
      createParticle(e.clientX, e.clientY + window.scrollY, e.target.dataset.type);
    }
  }
}
function createParticle(x, y, type) {
  const particle = document.createElement('particle');
  document.body.appendChild(particle);
  let width = Math.floor(Math.random() * 30 + 8);
  let height = width;
  const destinationX = (Math.random() - 0.5) * 300;
  const destinationY = (Math.random() - 0.5) * 300;
  let rotation = Math.random() * 520;
  let delay = Math.random() * 200;

  switch (type) {
    case 'square':
      particle.style.background = `hsl(${Math.random() * 90 + 270}, 70%, 60%)`;
      particle.style.border = '1px solid white';
      break;
    case 'emoji':
      particle.innerHTML = ['❤', '🧡', '💛', '💚', '💙', '💜', '🤎'][Math.floor(Math.random() * 7)];
      particle.style.fontSize = `${Math.random() * 24 + 10}px`;
      width = height = 'auto';
      break;
    case 'mario':
      particle.style.backgroundImage = 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/mario-face.png)';
      break;
    case 'shadow':
      var color = `hsl(${Math.random() * 90 + 90}, 70%, 50%)`;
      particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}`;
      particle.style.background = color;
      particle.style.borderRadius = '50%';
      width = height = Math.random() * 5 + 4;
      break;
    case 'line':
      var color = `hsl(${Math.random() * 90 + 90}, 70%, 50%)`;
      particle.style.background = 'black';
      height = 1;
      rotation += 1000;
      delay = Math.random() * 1000;
      break;
  }

  particle.style.width = `${width}px`;
  particle.style.height = `${height}px`;
  const animation = particle.animate([
    {
      transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
      opacity: 1,
    },
    {
      transform: `translate(-50%, -50%) translate(${x + destinationX}px, ${y + destinationY}px) rotate(${rotation}deg)`,
      opacity: 0,
    },
  ], {
    duration: Math.random() * 1000 + 5000,
    easing: 'cubic-bezier(0, .9, .57, 1)',
    delay,
  });
  animation.onfinish = removeParticle;
}
function removeParticle(e) {
  e.srcElement.effect.target.remove();
}

if (document.body.animate) {
  document.querySelectorAll('button').forEach((button) => button.addEventListener('click', pop));
}
