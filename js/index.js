// Your code goes here

const navLink = document.querySelectorAll('a');
navLink.forEach((item) => item.addEventListener('click', function(event) {
    item.style.color = 'gray';
    event.preventDefault();
    event.stopPropagation();
}));

const busImg = document.querySelector('.intro img');
const body = document.querySelector('html');
const mainNav = document.querySelector('.main-navigation');
busImg.addEventListener('drag', function(event) {
    body.style.color = 'white';
    body.style.backgroundColor = 'black';
    mainNav.style.color = 'white';
    mainNav.style.backgroundColor = 'black';
});

mainNav.addEventListener('click', function(event) {
    mainNav.style.backgroundColor = 'black';
    mainNav.style.color = 'white';
    navLink.forEach(item => item.style.color = 'white');
});

const btn = document.querySelectorAll('.btn');
btn.forEach((item) => item.addEventListener('dblclick', function () {
    item.style.color = 'black';
    item.style.backgroundColor = 'white';
}));

const paragraph = document.querySelectorAll('p');
paragraph.forEach((item) => item.addEventListener('mouseover', function() {
    item.style.border = 'solid';
    item.style.borderColor = 'black';
    item.style.borderRadius = '5px';
}));

const paragraphExit = document.querySelectorAll('p');
paragraph.forEach((item) => item.addEventListener('mouseleave', function() {
    item.style.border = 'none';
}));

const log = document.querySelectorAll('p');
log.forEach((item) => item.addEventListener('copy', function () {
    item.style.color = 'red';
}));

window.document.addEventListener('wheel', () => {console.log('user is scrolling');});

const textP = document.querySelectorAll('p');
textP[0].addEventListener('wheel', function(event) {
    event.target.style.backgroundColor = 'blue';
});
// textContentP.addEventListener('wheel', (event) => {
//     event.target.style.backgroundColor = 'paleturquoise';
// });
//  navItem.forEach(
//    (item, i) =>
//     (item.textContent = siteContent.nav['nav-item-' + (i + 1)]) &&
//     (item.style.color = 'green')
//  );