
document.getElementById('year').textContent = new Date().getFullYear();
window.contactToast = function(){
  const t = document.getElementById('toast');
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'), 2200);
}
