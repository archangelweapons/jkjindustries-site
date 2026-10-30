const panel=document.getElementById('company-dialog');
const content=document.getElementById('company-content');
for(const button of document.querySelectorAll('[data-company]')){
 button.addEventListener('click',()=>{
  const source=document.getElementById(button.dataset.company);
  content.replaceChildren();
  const title=source.querySelector('h3').cloneNode(true);title.id='company-name';content.append(title);
  const sourceList=source.querySelector('.capabilities');if(sourceList)content.append(sourceList.cloneNode(true));
  const link=source.querySelector('a');if(link)content.append(link.cloneNode(true));
  panel.showModal();
 });
}
panel.querySelector('.dialog-close').addEventListener('click',()=>panel.close());
panel.addEventListener('click',e=>{if(e.target===panel){const b=panel.getBoundingClientRect();if(e.clientX<b.left||e.clientX>b.right||e.clientY<b.top||e.clientY>b.bottom)panel.close();}});
