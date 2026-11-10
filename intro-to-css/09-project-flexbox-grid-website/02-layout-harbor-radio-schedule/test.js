
// Check that the authored value actually wins on every matching target.
// Temporary probes normalize values; they never modify the learner's declaration.
function applied(selector, property, value) {
 const els=[...document.querySelectorAll(selector)]; assert.equal(els.length>0,true,'Keep the supplied '+selector+' element.');
 for(const el of els){
  const probe=document.createElement('div'),s=getComputedStyle(el),box=el.getBoundingClientRect();
  probe.style.cssText='all:initial;position:absolute;visibility:hidden;box-sizing:border-box';
  probe.style.width=el.offsetWidth+'px';probe.style.height=el.offsetHeight+'px';probe.style.fontSize=s.fontSize;
  if(property.startsWith('--')){assert.equal(getComputedStyle(document.documentElement).getPropertyValue(property).trim(),value);continue;}
  probe.style.setProperty(property,value);document.body.append(probe);
  try {
   if(property==='transform'){
    const a=new DOMMatrix(getComputedStyle(el).transform),b=new DOMMatrix(getComputedStyle(probe).transform);
    assert.equal(['a','b','c','d','e','f'].every(k=>Math.abs(a[k]-b[k])<.001),true,'Make the requested transform apply.');
   } else if(property==='transform-origin'){
    const expected=getComputedStyle(probe).transformOrigin.split(' ').map(Number.parseFloat),actual=s.transformOrigin.split(' ').map(Number.parseFloat);
    assert.equal(actual.every((v,i)=>Math.abs(v-expected[i])<1),true,'Keep the pivot at the requested edge.');
   } else {assert.equal(s.getPropertyValue(property),getComputedStyle(probe).getPropertyValue(property),'Make '+property+' apply on '+selector+'.');}
  } finally {probe.remove();}
 }
}
function withWidth(element, check) {
 const old=element.getAttribute('style');try{for(const width of [320,640]){element.style.setProperty('width',width+'px','important');check();}}finally{element.getAttribute('style');if(old===null)element.removeAttribute('style');else element.setAttribute('style',old);}
}

// Read authored base rules independently of the current preview width or motion preference.
// Browser geometry and interaction are checked separately during course review.
function declaration(selector, property, media) {
  const rules = Array.from(document.querySelector('style[data-intercourses="user-css"]').sheet.cssRules);
  let value = '';
  function scan(items) {
    for (const rule of items) {
      if (rule.type === CSSRule.STYLE_RULE && rule.selectorText.split(',').map(s => s.trim()).includes(selector)) {
        const next = rule.style.getPropertyValue(property).trim();
        if (next) value = next;
      }
    }
  }
  if (media) {
    const normalized = text => text.replace(/\s+/g, '').toLowerCase();
    for (const rule of rules) {
      if (rule.type === CSSRule.MEDIA_RULE && normalized(rule.conditionText) === normalized(media)) scan(rule.cssRules);
    }
  } else scan(rules);
  return value;
}
function normalizedValue(property, value) {
  const style = document.createElement('span').style;
  style.setProperty(property, value);
  return style.getPropertyValue(property).trim();
}

test("Set .schedule-head display to flex in its normal rule.", () => {
  assert.equal(normalizedValue("display", declaration(".schedule-head", "display", null)), normalizedValue("display", "flex"), "Set .schedule-head display to flex in its normal rule.");

  applied('.schedule-head','display','flex');
});

test("Set .show-grid grid-template-columns to repeat(3, 1fr) in its normal rule.", () => {
  assert.equal(normalizedValue("grid-template-columns", declaration(".show-grid", "grid-template-columns", null)), normalizedValue("grid-template-columns", "repeat(3, 1fr)"), "Set .show-grid grid-template-columns to repeat(3, 1fr) in its normal rule.");

  withWidth(document.querySelector('.show-grid'),()=>{const g=document.querySelector('.show-grid'),a=[...g.children].map(e=>e.getBoundingClientRect());assert.equal(a.every(x=>Math.abs(x.width-a[0].width)<1.5&&Math.abs(x.top-a[0].top)<1.5),true,'Use equal columns in a row.');assert.equal(Math.abs(a[2].right-g.getBoundingClientRect().right)<1.5,true,'Fill the grid width.');});
});
