const slides = [["collider.jpg", "Particle-detector assembly", "Research & design", "The systems behind progress.", "Research, design, and specialist technology form one part of the group\u2019s broader perspective."], ["medical-vehicle.jpg", "Military medical evacuation vehicle", "Defense & medical", "Technology in demanding environments.", "Specialized physical systems connect engineering with practical operational requirements."], ["satellite.jpg", "TDRS satellite \u2014 NASA artist\u2019s concept", "Communications", "Connections beyond the horizon.", "Satellite, microwave, and information systems connect otherwise separate operating environments."], ["accelerator.jpg", "Particle-accelerator tunnel", "Engineering", "Complexity. Considered.", "Precision and systems thinking run through the portfolio\u2019s technical disciplines."], ["naval-vessel.jpg", "Naval vessel", "Integrated systems", "Multiple disciplines. One environment.", "Physical infrastructure and information systems operate as parts of a larger whole."], ["aircraft.jpg", "Business aircraft", "Transportation", "Movement with purpose.", "Transportation and fleet management extend the portfolio into the movement of people and resources."]];
let active = 0;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
let playing = !reduced.matches;
const toggle = document.getElementById('toggle-slides');
function updateToggle(){toggle.textContent=playing?'Pause':'Play';toggle.setAttribute('aria-label',playing?'Pause slideshow':'Play slideshow');}
function showSlide(i){active=(i+slides.length)%slides.length;const [file,alt,sector,title,description]=slides[active];document.getElementById('gallery-image').src=''+file;document.getElementById('gallery-image').alt=alt;document.getElementById('gallery-caption').textContent=String(active+1).padStart(2,'0')+' / 06 · '+alt;document.getElementById('gallery-sector').textContent=sector;document.getElementById('gallery-title').textContent=title;document.getElementById('gallery-description').textContent=description;}
function step(n){playing=false;updateToggle();showSlide(active+n);}
document.getElementById('previous-slide').addEventListener('click',()=>step(-1));
document.getElementById('next-slide').addEventListener('click',()=>step(1));
toggle.addEventListener('click',()=>{playing=!playing;updateToggle();});
reduced.addEventListener('change',e=>{if(e.matches){playing=false;updateToggle();}});
setInterval(()=>{if(playing&&!document.hidden&&!document.querySelector('.gallery:focus-within'))showSlide(active+1);},7000);
updateToggle();
