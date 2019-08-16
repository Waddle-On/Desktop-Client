function redirect(){window.location.href = 'https://play.penguinworld.co/index2.php';}
window.addEventListener('DOMContentLoaded', () => {
var url = window.location.href;
  if(url.includes('penguinworld.co') == false){
    alert('Oops! This page is not supported, heading back to Penguin World.');
    redirect();
  }

 if(url.includes('play.penguinworld.co') && (url.includes('play.penguinworld.co/index2.php') == false)){
  redirect();
}
});