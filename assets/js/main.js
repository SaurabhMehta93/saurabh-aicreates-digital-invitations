// Catalogue data: add one object per new template. The same search, filters and pagination
// work for 10, 200 or 500+ records without changing the page markup.
const templates = [
  {id:"01",name:"Royal Burgundy & Gold",slug:"template-01-royal-burgundy-gold",style:"Royal",color:"Burgundy",palette:["#3c0c1e","#79223d","#d9b76e"],accent:"#e4c77e",text:"#fff0d9",description:"An opulent royal look with antique gold, burgundy and timeless ivory details.",tags:["Royal","Gold","Classic"],featured:true,year:2026},
  {id:"02",name:"Ivory & Champagne Gold",slug:"template-02-ivory-champagne-gold",style:"Elegant",color:"Ivory",palette:["#e9d9bd","#b99866","#fff7e9"],accent:"#9a7648",text:"#513d34",description:"Understated luxury with warm ivory, champagne gold and delicate ornament.",tags:["Elegant","Minimal","Gold"],featured:true,year:2026},
  {id:"03",name:"Emerald Green Royal",slug:"template-03-emerald-green-royal",style:"Royal",color:"Green",palette:["#073d32","#176653","#d6b66e"],accent:"#e4c77e",text:"#fff1d5",description:"Deep emerald tones and antique gold inspired by regal Indian celebrations.",tags:["Royal","Heritage","Gold"],featured:true,year:2026},
  {id:"04",name:"Blush Pink Floral",slug:"template-04-blush-pink-floral",style:"Floral",color:"Pink",palette:["#e9bfc5","#c77d8c","#fff0e8"],accent:"#a64f66",text:"#572c3c",description:"Soft blush shades, romantic roses and airy floral details.",tags:["Floral","Romantic","Soft"],featured:true,year:2026},
  {id:"05",name:"Midnight Blue Luxury",slug:"template-05-midnight-blue-luxury",style:"Royal",color:"Blue",palette:["#101e40","#243f70","#d9b76e"],accent:"#f0d58f",text:"#f7f0df",description:"A cinematic midnight-blue palette with refined gold accents.",tags:["Luxury","Cinematic","Gold"],featured:true,year:2026},
  {id:"06",name:"Rajasthani Heritage",slug:"template-06-rajasthani-heritage",style:"Heritage",color:"Multicolour",palette:["#7b2c26","#b64d30","#e6b967"],accent:"#f1cf83",text:"#fff0d2",description:"Inspired by palace arches, traditional motifs and vibrant Rajasthani craft.",tags:["Heritage","Traditional","Indian"],featured:true,year:2026},
  {id:"07",name:"Black & Gold Modern",slug:"template-07-black-gold-modern",style:"Modern",color:"Black",palette:["#121114","#29252b","#c9a65f"],accent:"#e8cb86",text:"#fff5e0",description:"Bold contrast, polished gold and confident modern typography.",tags:["Modern","Minimal","Luxury"],featured:true,year:2026},
  {id:"08",name:"Lavender Dream",slug:"template-08-lavender-dream",style:"Dreamy",color:"Lavender",palette:["#aaa0d5","#76699e","#f2eafb"],accent:"#fff0d4",text:"#fff8ff",description:"A soft lavender and lilac atmosphere with dreamy, delicate styling.",tags:["Dreamy","Soft","Romantic"],featured:true,year:2026},
  {id:"09",name:"Sunset Marigold",slug:"template-09-sunset-marigold",style:"Floral",color:"Orange",palette:["#9d3e24","#d66c32","#f2bd63"],accent:"#ffe0a0",text:"#fff2d7",description:"Festive marigold, sunset orange and terracotta for a warm Indian wedding.",tags:["Festive","Floral","Indian"],featured:true,year:2026},
  {id:"10",name:"Destination Wedding",slug:"template-10-destination-wedding",style:"Destination",color:"Multicolour",palette:["#17565a","#55a0a0","#edc98d"],accent:"#ffe8b4",text:"#fff9e9",description:"A destination-inspired concept for beach, palace and resort celebrations.",tags:["Destination","Travel","Cinematic"],featured:true,year:2026}
];

const elements = {
  grid: document.getElementById("templateGrid"),
  search: document.getElementById("searchInput"),
  style: document.getElementById("styleFilter"),
  color: document.getElementById("colorFilter"),
  sort: document.getElementById("sortFilter"),
  pageSize: document.getElementById("pageSize"),
  summary: document.getElementById("resultsSummary"),
  pagination: document.getElementById("pagination"),
  empty: document.getElementById("emptyState"),
  clear: document.getElementById("clearFilters"),
  emptyClear: document.getElementById("emptyClear")
};
let currentPage = 1;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[char]));
}
function filteredTemplates() {
  const query = elements.search.value.trim().toLowerCase();
  const style = elements.style.value;
  const color = elements.color.value;
  const sort = elements.sort.value;
  let list = templates.filter(item => {
    const haystack = [item.name,item.description,item.style,item.color,...item.tags].join(" ").toLowerCase();
    return (!query || haystack.includes(query)) &&
      (!style || item.style === style || item.tags.includes(style)) &&
      (!color || item.color === color);
  });
  if (sort === "name-asc") list.sort((a,b) => a.name.localeCompare(b.name));
  else if (sort === "name-desc") list.sort((a,b) => b.name.localeCompare(a.name));
  else if (sort === "newest") list.sort((a,b) => b.year-a.year || b.id.localeCompare(a.id));
  else list.sort((a,b) => Number(b.featured)-Number(a.featured) || a.id.localeCompare(b.id));
  return list;
}
function cardMarkup(item) {
  const palette = item.palette;
  const background = `linear-gradient(145deg,${palette[0]},${palette[1]} 58%,${palette[0]})`;
  const tags = item.tags.slice(0,3).map(tag => `<span>${escapeHtml(tag)}</span>`).join("");
  return `<article class="template-card">
    <div class="template-art" style="--art-bg:${background};--art-accent:${item.accent};--art-text:${item.text};--art-glow:${palette[2]}55">
      <div class="art-glow"></div><span class="art-corner top" aria-hidden="true">✦</span><span class="art-corner bottom" aria-hidden="true">✧</span>
      <div class="art-copy"><span class="art-kicker">THE WEDDING COLLECTION</span><span class="art-divider"></span><span class="art-title">${escapeHtml(item.name.split(" & ")[0])}<em>${escapeHtml(item.name.includes(" & ") ? "& " + item.name.split(" & ").slice(1).join(" & ") : item.style)}</em></span><span class="art-divider"></span><span class="art-sub">A celebration of love</span></div>
    </div>
    <div class="card-content"><div class="card-meta"><span class="template-number">TEMPLATE ${escapeHtml(item.id)}</span><span class="status-tag">Concept</span></div>
      <h3>${escapeHtml(item.name)}</h3><p class="card-description">${escapeHtml(item.description)}</p>
      <div class="card-tags">${tags}</div>
      <a class="card-link" href="${escapeHtml(item.slug)}/invitation.html"><span>Explore template details</span><span aria-hidden="true">↗</span></a>
    </div></article>`;
}
function pageButton(label, page, disabled=false, current=false) {
  return `<button type="button" class="page-button" data-page="${page}" ${disabled?"disabled":""} ${current?'aria-current="page"':""} aria-label="${typeof label==="number"?"Page "+label:label}">${label}</button>`;
}
function renderPagination(totalPages) {
  if (totalPages <= 1) { elements.pagination.innerHTML = ""; return; }
  const pages = new Set([1,totalPages,currentPage,currentPage-1,currentPage+1]);
  [2,totalPages-1].forEach(p=>{if(p>=1&&p<=totalPages)pages.add(p);});
  const ordered = [...pages].filter(p=>p>=1&&p<=totalPages).sort((a,b)=>a-b);
  let html = pageButton("←",currentPage-1,currentPage===1);
  let previous = 0;
  ordered.forEach(page=>{
    if(previous && page-previous>1) html += '<span class="page-ellipsis" aria-hidden="true">…</span>';
    html += pageButton(page,page,false,page===currentPage);
    previous=page;
  });
  html += pageButton("→",currentPage+1,currentPage===totalPages);
  elements.pagination.innerHTML = html;
}
function render() {
  const list = filteredTemplates();
  const pageSize = Number(elements.pageSize.value) || 12;
  const totalPages = Math.max(1,Math.ceil(list.length/pageSize));
  currentPage = Math.min(currentPage,totalPages);
  const start = (currentPage-1)*pageSize;
  const pageItems = list.slice(start,start+pageSize);
  elements.grid.innerHTML = pageItems.map(cardMarkup).join("");
  elements.empty.hidden = list.length !== 0;
  elements.grid.hidden = list.length === 0;
  elements.pagination.hidden = list.length === 0;
  elements.summary.textContent = list.length ? `Showing ${start+1}–${Math.min(start+pageSize,list.length)} of ${list.length} templates` : "No templates match your filters";
  document.getElementById("heroTemplateCount").textContent = templates.length + "+";
  renderPagination(totalPages);
}
function resetFilters() {
  elements.search.value="";
  elements.style.value="";
  elements.color.value="";
  elements.sort.value="featured";
  currentPage=1;
  render();
}
[elements.search,elements.style,elements.color,elements.sort].forEach(el=>{
  el.addEventListener(el===elements.search?"input":"change",()=>{currentPage=1;render();});
});
elements.pageSize.addEventListener("change",()=>{currentPage=1;render();});
elements.pagination.addEventListener("click",event=>{
  const button=event.target.closest("[data-page]");
  if(!button||button.disabled)return;
  currentPage=Number(button.dataset.page);
  render();
  document.getElementById("templates").scrollIntoView({behavior:"smooth",block:"start"});
});
elements.clear.addEventListener("click",resetFilters);
elements.emptyClear.addEventListener("click",resetFilters);
document.getElementById("currentYear").textContent = new Date().getFullYear();

const mobileMenu=document.getElementById("mobileMenu");
const headerNav=document.querySelector(".header-nav");
mobileMenu.addEventListener("click",()=>{
  const open=headerNav.classList.toggle("is-open");
  mobileMenu.setAttribute("aria-expanded",String(open));
  mobileMenu.textContent=open?"×":"☰";
});
headerNav.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
  headerNav.classList.remove("is-open");
  mobileMenu.setAttribute("aria-expanded","false");
  mobileMenu.textContent="☰";
}));
document.addEventListener("keydown",event=>{
  if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==="k"){
    event.preventDefault();elements.search.focus();
  }
});
render();
