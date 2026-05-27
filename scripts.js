function renderSimpleMarkdown(md){
  // very small markdown -> html converter for headings and paragraphs
  const lines = md.split(/\r?\n/);
  let out = '';
  for(let i=0;i<lines.length;i++){
    const line = lines[i].trim();
    if(!line){ out += '<p></p>'; continue }
    if(line.startsWith('### ')) out += `<h3>${escapeHtml(line.slice(4))}</h3>`;
    else if(line.startsWith('## ')) out += `<h2>${escapeHtml(line.slice(3))}</h2>`;
    else if(line.startsWith('# ')) out += `<h1>${escapeHtml(line.slice(2))}</h1>`;
    else if(line.startsWith('- ')) out += `<li>${escapeHtml(line.slice(2))}</li>`;
    else out += `<p>${escapeHtml(line)}</p>`;
  }
  // wrap stray list items into ul
  out = out.replace(/(<li>[\s\S]*?<\/li>)(?=[^<]*<li>)/g, '$1');
  return out.replace(/(<li>[\s\S]*?<\/li>)+/g, m=>`<ul>${m}</ul>`);
}

function escapeHtml(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}

async function loadMarkdown(path){
  try{
    const r = await fetch(path);
    if(!r.ok) throw new Error('not found');
    return await r.text();
  }catch(e){return null}
}

async function init(){
  document.getElementById('year').textContent = new Date().getFullYear();

  const about = await loadMarkdown('content/about.md');
  if(about) document.getElementById('about-content').innerHTML = renderSimpleMarkdown(about);

  // load lists
  const thoughts = await loadMarkdown('content/thoughts/index.md');
  if(thoughts) document.getElementById('thoughts-list').innerHTML = renderSimpleMarkdown(thoughts);

  const reports = await loadMarkdown('content/reports/index.md');
  if(reports) document.getElementById('reports-list').innerHTML = renderSimpleMarkdown(reports);
}

init();
