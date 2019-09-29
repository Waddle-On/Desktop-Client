function redirect(){window.location.href = 'https://play.waddleon.net';}
window.addEventListener('DOMContentLoaded', () => {
var url = window.location.href;
  if(url.includes('waddleon.net') == false){
    alert('Oops! This page is not supported, heading back to Waddle On.');
    redirect();
  }

 if(url.includes('play.waddleon.net') && (url.includes('play.waddleon.net') == false)){
  redirect();
}
});