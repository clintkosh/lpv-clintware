/* Independent applicant evidence layer.  No merchant integrations or remote data. */
(()=>{
"use strict";
const $=(sel,root=document)=>root.querySelector(sel);
const page=document.body.dataset.page;
const main=$("main#main");
if(!main)return;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const link=(href,label,kind="")=>'<a class="btn '+(kind==="ghost"?"ghost":"")+'" href="'+esc(href)+'">'+esc(label)+'</a>';
const scope='<p class="proof-disclosure">Independent Clinton Kosh candidate application.  Prior-employer outcomes are career examples; every merchant, call, contact and revenue figure in the interactive case is fictional.  This is not a Loop Voice product or an employer-endorsed demonstration.</p>';
const rows=[
 {id:"pilot",task:"Own the pilot from Sales handoff to a signed annual contract",fit:"Direct evidence + new-market ramp",grade:"direct",career:"Dedrone: helped standardize customer onboarding to about one month and improve renewals by 20%.  Earlier enterprise ownership required clear next steps, executive alignment and a commercial gate.",thinking:"I would set success criteria at kickoff, review acceptance weekly, and ask for the annual decision only when the merchant agrees the results are credible.",proof:"Walk through the disputed day-21 pilot decision",url:"app.html?account=maple&view=command"},
 {id:"book",task:"Operate a hands-on portfolio while building the founding CS function",fit:"Direct evidence",grade:"direct",career:"Check Point / Avanan: managed roughly 20–40 enterprise accounts with approximately $3 million in account value.  Cofense: managed enterprise technical Support and escalation ownership.",thinking:"I segment by ARR, renewal clock, adoption, risk and urgency.  Each account gets a documented current state, next action, owner, risk and success outcome.",proof:"Switch among five fictional account states",url:"app.html?account=cedar&view=command"},
 {id:"metrics",task:"Give every merchant a weekly revenue, pickup, conversion and usage scoreboard",fit:"Transferable",grade:"",career:"Dedrone: reported +25% engagement alongside renewal improvements.  Check Point: portfolio reviews combined adoption, technical readiness and executive expectations.",thinking:"Show a weekly trend, the source and date behind each metric, the confidence of the claim, and the decision it changes.  A dashboard is not itself a value story.",proof:"Inspect editable scoreboard and attributed revenue",url:"app.html?account=maple&view=attribution"},
 {id:"attrib",task:"Defend attributed revenue when the merchant disputes it",fit:"Demonstrated method, not prior DTC employment",grade:"gap",career:"I do not claim previous Shopify attribution program ownership.  My relevant experience is enterprise post-sales credibility, technical evidence reviews and risk management.",thinking:"Reconcile call IDs, order timestamps, email touches and returns.  Separate observed attributed orders from incremental lift; propose a holdout rather than overstating $24,000 as newly created revenue.",proof:"Inspect the $8,200 synthetic overlap dispute",url:"review.html"},
 {id:"calls",task:"Listen to calls, read transcripts, improve opener, offer and timing",fit:"Transferable, with a stated ramp",grade:"",career:"Cofense: enterprise technical Support leadership and customer escalation coaching.  I also owned PhishMe Reporter for Lotus Notes as Product Owner, connecting product behavior to user workflows.",thinking:"Sample failed calls by reason and segment, score consent, clarity and objection handling, then vary one element at a time.  Protect the shopper experience ahead of a short-term conversion bump.",proof:"Review the fictional call QA and proposed coaching",url:"app.html?account=maple&view=calls"},
 {id:"retention",task:"Turn signals into retention, expansion and founder confidence",fit:"Direct evidence",grade:"direct",career:"Dedrone: +20% renewals and +25% engagement reported.  Check Point: worked across enterprise adoption, escalations and commercial health.",thinking:"Translate account evidence into one merchant-level decision: renew, expand, change a play, or pause.  Record blockers, owners and next review dates before the relationship reaches crisis.",proof:"Open renewal risk, stakeholders and meeting decisions",url:"app.html?account=northstar&view=risks"},
 {id:"build",task:"Write the playbook and eventually hire the team",fit:"Leadership transferable",grade:"",career:"Cofense: Support Manager, escalation leadership and full Product Owner responsibility for PhishMe Reporter for Lotus Notes.  Independent work: built account-risk and Customer Success prototypes.",thinking:"Define a minimum viable customer cadence and evidence standard first.  Use recurring failure patterns to write operating rules, then hire for the tasks that are consistent enough to delegate.",proof:"See a current-state-to-action operating workflow",url:"app.html?account=maple&view=meetings"},
 {id:"la",task:"Work in Los Angeles when the office opens",fit:"Open discussion",grade:"gap",career:"The published position expects five days per week in Los Angeles from the Q1 2027 office opening.",thinking:"I will not promise a relocation decision without discussing timing and terms.  It is a concrete role requirement to address directly.",proof:"See the public role and my evidence boundaries",url:"checks.html"}
];
const pHero=(over,heading,body)=>'<section class="pagehero"><div class="shell"><p class="eyebrow">'+esc(over)+'</p><h1>'+esc(heading)+'</h1><p class="lead">'+esc(body)+'</p></div></section>';
const stat=(label,value,proof)=>'<div class="proof-chip"><b>'+esc(label)+'</b><strong>'+esc(value)+'</strong><small>'+esc(proof)+'</small></div>';
const evidenceCard=r=>'<article class="proof-card" id="'+r.id+'"><div class="proof-meta"><span class="proof-label">ROLE REQUIREMENT</span><span class="proof-tag '+r.grade+'">'+esc(r.fit)+'</span></div><h3>'+esc(r.task)+'</h3><div class="proof-detail"><div><span class="proof-label">CAREER EVIDENCE</span><p>'+esc(r.career)+'</p></div><div><span class="proof-label">HOW I WOULD DECIDE</span><p>'+esc(r.thinking)+'</p></div><div><span class="proof-label">WORKING EXAMPLE</span><p>'+esc(r.proof)+'</p><p class="proof-action"><a href="'+esc(r.url)+'">Open evidence →</a></p></div></div></article>';
function mappedFit(){
 main.innerHTML=pHero("FOUNDING CUSTOMER SUCCESS / EVIDENCE MAP","The role.  The evidence.  The decisions.","This is the live résumé behind the application: Every advertised responsibility connects to career evidence, a decision I would make, and a working example.  Transferable experience is labeled rather than passed off as Shopify production work.")+
 '<section class="section slim"><div class="shell">'+
 '<div class="proof-lane">'+stat("ENTERPRISE OWNERSHIP","20–40 accounts","~$3M portfolio · Check Point / Avanan")+
 stat("RENEWAL PERFORMANCE","+20%","Reported improvement · Dedrone")+
 stat("ONBOARDING CADENCE","~1 month","Reported standardized process · Dedrone")+'</div>'+
 '<div class="proof-hero"><span class="proof-label">READ THIS AS A DEMONSTRATION, NOT A CLAIM OF EMPLOYMENT</span><h2>My operating test is an uncomfortable merchant conversation.</h2><p>The fictional founder challenges a voice-attributed $24,000 claim.  I would not use that number to push an annual contract until the $8,200 overlap with email is examined and incremental lift is separated from observed attribution.  This is how I think when the dashboard and the customer disagree.</p><div class="proof-cta">'+link("review.html","See my decision")+link("app.html?account=maple&view=attribution","Test the evidence","ghost")+'</div></div>'+
 '<div class="proof-map">'+rows.map(evidenceCard).join("")+'</div>'+
 '<div class="proof-hero"><span class="proof-label">THE HIRING QUESTION</span><h2>Can I take ownership before the playbook exists?</h2><p>My strongest evidence is enterprise ownership, renewal improvement, technical credibility and operating design.  My ramp is direct ecommerce attribution and the voice-channel particulars.  The working application is my way to make the proposed decision-making visible before an interview.</p><div class="proof-cta">'+link("app.html","Enter the live résumé OS")+link("resume.html","See career evidence","ghost")+'</div></div>'+scope+'</div></section>';
 document.title="Role-to-evidence map | Clinton Kosh for Loop Voice";
}
function mappedResume(){
 main.innerHTML=pHero("CLINTON KOSH / INTERACTIVE ROLE RESUME","A résumé you can inspect, not just read.","The career facts below explain the transfer.  The working case shows how I would run the merchant account at Loop Voice.  Nothing presented as a merchant result came from a real customer.")+
 '<section class="section slim"><div class="shell"><div class="proof-hero"><span class="proof-label">MY ARGUMENT IN ONE SENTENCE</span><h2>I translate technical customer issues into account ownership and commercial decisions.</h2><p>I've managed complex enterprise relationships, led Support, owned a product, and improved post-sales operations.  For Loop Voice, I would use that background to turn voice conversations into a credible, improving merchant relationship.</p><div class="proof-cta">'+link("fit.html","Match me against every role requirement")+link("app.html?account=maple&view=command","See me work","ghost")+'</div></div>'+
 '<div class="proof-lane">'+stat("CHECK POINT / AVANAN","20–40 accounts","~$3M account portfolio")+
 stat("DEDRONE","+20% renewals","+25% engagement; ~1-month onboarding")+
 stat("COFENSE","Support Manager","Full Product Owner · PhishMe Reporter for Lotus Notes")+'</div>'+
 '<h2>Career evidence mapped to the actual work</h2><div class="proof-grid">'+
 '<article class="proof-card"><span class="proof-label">CHECK POINT / AVANAN · CUSTOMER SUCCESS</span><h3>Own the relationship and the risk</h3><p>Managed roughly 20–40 enterprise accounts representing approximately $3 million.  Balanced executive outcomes, technical adoption, escalation severity and renewal timing.</p><span class="proof-label">LOOP VOICE TRANSFER</span><p>Own a book of merchants with a reliable weekly review, explicit risk and named commercial next steps.</p><p><a href="app.html?account=cedar&view=command">Inspect the segmented merchant book →</a></p></article>'+
 '<article class="proof-card"><span class="proof-label">DEDRONE · POST-SALES OPERATIONS</span><h3>Improve the operating cadence</h3><p>Helped improve renewals by 20% and customer engagement by 25%, and standardize onboarding to approximately one month.  These are reported employer outcomes, not Loop Voice results.</p><span class="proof-label">LOOP VOICE TRANSFER</span><p>Define the pilot-to-annual review gate, a time-to-value checklist and customer-level adoption measures.</p><p><a href="app.html?account=maple&view=attribution">Inspect a proposed pilot decision →</a></p></article>'+
 '<article class="proof-card"><span class="proof-label">COFENSE / PHISHME · SUPPORT + PRODUCT</span><h3>Lead escalations.  Own the handoff.</h3><p>Served as Support Manager and full Product Owner for PhishMe Reporter for Lotus Notes.  Worked across enterprise technical issues and product priorities rather than treating the ticket as the whole customer story.</p><span class="proof-label">LOOP VOICE TRANSFER</span><p>Listen to calls that fail, connect product and experience issues, and write a reproducible coaching and escalation path.</p><p><a href="app.html?account=maple&view=calls">Review call-quality judgments →</a></p></article>'+
 '<article class="proof-card"><span class="proof-label">INDEPENDENT PRODUCT BUILDING · CLINTWARE™</span><h3>Make the workflow tangible</h3><p>Built independent Customer Success risk tracking and automation prototypes, including this five-merchant browser-local simulation.  These are demonstrations of operating judgment, not production installations for Loop Voice.</p><span class="proof-label">LOOP VOICE TRANSFER</span><p>Create a workable first playbook, meeting brief, risk record and action owner before scaling the Customer Success organization.</p><p><a href="app.html?account=maple&view=prep">Generate a fictional merchant decision brief →</a></p></article></div>'+
 '<div class="proof-hero"><span class="proof-label">WORKING DEMONSTRATION</span><h2>Walk the same evidence trail I would bring to a merchant.</h2><div class="proof-process">'+stat("01 / LISTEN","Hear the objection","Call QA and customer feedback")+
 stat("02 / VERIFY","Defend the numbers","Attribution vs. incremental lift")+
 stat("03 / OWN","Name the next step","Stakeholder, risk and dated action")+
 stat("04 / CLOSE","Ask for a decision","Pilot-to-annual readiness")+'</div><div class="proof-cta">'+link("app.html","Open the live résumé OS")+link("fit.html","Full requirement mapping","ghost")+'</div></div>'+scope+'</div></section>';
 document.title="Live résumé | Clinton Kosh for Loop Voice";
}
function workFrame(){
 const anchor=$(".pagehero");
 if(!anchor)return;
 anchor.insertAdjacentHTML("afterend",'<section class="section slim"><div class="shell"><div class="proof-hero"><span class="proof-label">LIVE RÉSUMÉ / FOUNDING HEAD OF CUSTOMER SUCCESS</span><h2>Five fictional merchant situations.  One test of how I would own the role.</h2><p>Below is a working example of the responsibilities in Loop Voice’s position, not just a software mockup.  Each interaction connects to a role requirement and a reasoned merchant decision.  The professional evidence is real career experience; the customer records are synthetic.</p><div class="proof-lane">'+
 stat("ROLE FIT","20–40 accounts","Enterprise ownership · Check Point")+
 stat("OPERATING RESULTS","+20% renewals","Dedrone · reported improvement")+
 stat("CURRENT TEST","Attribution dispute","Separate claimed revenue from lift")+
 '</div><div class="proof-cta">'+link("fit.html","See role-to-evidence map")+link("resume.html","See the career behind this OS","ghost")+'</div></div></div></section>');
 const heroH=$(".pagehero h1");if(heroH)heroH.textContent="A live résumé of how I would operate.";
 const lead=$(".pagehero .lead");if(lead)lead.textContent="Choose a synthetic merchant, inspect the problem, challenge the metrics, listen to a call, assign an owner and prepare a decision.  This is the operating judgment I would bring to Loop Voice.";
 document.title="Working OS / live résumé | Clinton Kosh for Loop Voice";
}
function frontDoor(){
 const hero=$(".cinema .hero-intro");if(hero){
   const links=$(".hero-intro .buttons");if(links)links.insertAdjacentHTML("afterbegin",link("fit.html","Match my experience to the role"));
 }
 const section=$(".cinema");if(section)section.insertAdjacentHTML("afterend",
 '<section class="section slim"><div class="shell"><div class="proof-hero"><span class="proof-label">START HERE / A ROLE-SPECIFIC APPLICATION</span><h2>Not a generic dashboard.  My résumé mapped to the work Loop Voice needs done.</h2><p>See what I have actually led, what I would do with a difficult merchant, and where I would need to learn the ecommerce specifics.  Every key responsibility links to proof rather than marketing copy.</p><div class="proof-process">'+
 stat("PILOT TO ANNUAL","Own the decision","Dedrone onboarding and renewal evidence")+
 stat("ACCOUNT TRUST","Defend revenue","Synthetic Klaviyo overlap and holdout plan")+
 stat("VOICE QUALITY","Coach the call","Objection-based QA and controlled testing")+
 stat("FOUNDING CS","Build the cadence","Account ownership, actions and brief")+
 '</div><div class="proof-cta">'+link("fit.html","Open the complete evidence map")+link("app.html","Explore the live résumé OS","ghost")+'</div></div></div></section>');
 document.title="Clinton Kosh | Founding Customer Success application for Loop Voice";
}
function improveChecks(){
 let note=$(".matrix");if(note){
 const row=[...note.querySelectorAll("tr")].find(tr=>tr.innerText.includes("Official Loop Voice computed CSS fidelity")||tr.innerText.includes("Independent dark editorial"));
 if(row)row.innerHTML='<td><strong>Presentation</strong></td><td>Candidate-built, blue-and-navy application inspired by the public Loop Voice marketing/product vocabulary.  No official mark is copied or modified.</td><td>Independent application; not the employer’s site.</td>';
 }
 const s=$(".section.slim",main);if(s)s.insertAdjacentHTML("beforeend",'<div class="proof-inline"><strong>Certificate and privacy:</strong> This static site collects no passwords, payment information or real merchant records.  Your browser should show a valid certificate before sharing the URL.  Certificate issuance and HTTPS enforcement are hosting settings, not properties of the demonstration code.</div>');
}
for(const a of document.querySelectorAll(".navlinks a")){
 if(a.getAttribute("href")==="fit.html")a.textContent="Role evidence";
 if(a.getAttribute("href")==="app.html")a.textContent="Live résumé OS";
 if(a.getAttribute("href")==="resume.html")a.textContent="Experience";
}
const sub=$(".submark");if(sub)sub.textContent="INDEPENDENT APPLICATION / LOOP VOICE";
if(page==="fit")mappedFit();
else if(page==="resume")mappedResume();
else if(page==="app")workFrame();
else if(page==="cinema")frontDoor();
else if(page==="checks")improveChecks();
})();
