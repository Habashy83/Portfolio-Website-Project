const projImage = document.getElementById('proj-image');
const firstProject = document.getElementById('p1');
const secondProject = document.getElementById('p2');
const thirdProject = document.getElementById('p3');

let projects = [p1, p2, p3];


firstProject.onmouseover = () => projImage.src = './img/proj1.png';
secondProject.onmouseover = () => projImage.src = './img/proj2.png';
thirdProject.onmouseover = () => projImage.src = './img/proj3.png';