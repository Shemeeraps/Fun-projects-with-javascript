const reviews = [
  {
    id: 1,
    name: 'Shemeera P S',
    job: 'Full Stack Developer',
    img: 'IMG-20221215-WA0087.jpg',
    text: 'Programming is, quite literally, all around us. From the take-out we order, to the movies we stream, code enables everyday actions in our lives. Tech companies are no longer recognizable as just software companies — instead, they bring food to our door, help us get a taxi, influence outcomes in presidential elections, or act as a personal trainer.',
  },
  {
    id: 2,
    name: 'Shemeera P S',
    job: 'Full Stack Developer',
    img: 'https://th.bing.com/th/id/OIP.j15aro6CymlVljX8hu5kcgHaDt?w=316&h=174&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    text: 'For many years, only a few people have known how to code. However, that’s starting to change. The number of people learning to code is increasing year by year, with estimates around 31.1 million software developers worldwide, which doesn’t even account for the many OTHER careers that relate to programming.',
  },
  {
    id: 3,
    name: 'Shemeera P S',
    job: 'Full Stack Developer',
    img: 'https://th.bing.com/th/id/OIP.jxoNUNPjSDg1R6uDqN9IuwHaE8?w=251&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    text: 'Put simply, programming is giving a set of instructions to a computer to execute. If you’ve ever cooked using a recipe before, you can think of yourself as the computer and the recipe’s author as a programmer. The recipe author provides you with a set of instructions which you read and then follow. The more complex the instructions, the more complex the result!',
  },
  {
    id: 4,
    name: 'Shemeera P S',
    job: 'Full Stack Developer',
    img: 'https://th.bing.com/th/id/OIP.5rUrEm6dESMiCPQrpFAOOwHaEK?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    text: 'When we give instructions to a computer through code, we are, in our own way, communicating with the computer. But since computers are built differently than we are, we have to translate our instructions in a way that computers will understand.',
  },
  {
    id: 5,
    name: 'Shemeera P S',
    job: 'Full Stack Developer',
    img: 'https://th.bing.com/th/id/OIP.HgLQ4bXh49l8RPWgdyuYDwHaLH?w=123&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7',
    text: 'As programming becomes a larger part of our lives, it’s vital that everyone has an understanding of what programming is and how it can be used. Programming is important to our careers, but it also plays a key role in how we participate in politics, how we buy things, and how we stay in touch with one another.',
  },
];

const author = document.getElementById('author');
const imag = document.getElementById('person-img');
const job = document.getElementById('job');
const text = document.getElementById('info');

const preview = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');
const random = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem];
  imag.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  text.textContent = item.text;
});

function showPerson(person) {
  const items = reviews[person];
  imag.src = items.img;
  author.textContent = items.name;
  job.textContent = items.job;
  text.textContent = items.text;
}

next.addEventListener('click', function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

preview.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

random.addEventListener('click', function () {
  const randomNumber = Math.floor(Math.random() * reviews.length);
  currentItem = randomNumber;
  showPerson(currentItem);
});
