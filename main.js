const preloader = document.getElementById('preloader');
const startcontainer = document.getElementById('startcontainer');
const timer = 4000;

function hidePreloader() {
  preloader.style.display = 'none';
  startcontainer.style.display = 'none';

}

setTimeout(hidePreloader, timer);   
