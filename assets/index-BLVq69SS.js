import{t as e}from"./shared-BTD2npct.js";document.querySelectorAll(`.portfolio__item[data-href]`).forEach(e=>{e.addEventListener(`click`,()=>window.location.href=e.dataset.href)});var t=document.getElementById(`homeNews`);t&&(t.innerHTML=e.slice(0,3).map(e=>`
    <a class="card" href="${e.url}" target="_blank" rel="noopener">
      ${e.file?`<div class="card__media"><img loading="lazy" src="./img/site/${e.file}" alt="" /></div>`:``}
      <div class="card__body"><h3 class="card__title-sm">${e.title}</h3></div>
    </a>`).join(``));