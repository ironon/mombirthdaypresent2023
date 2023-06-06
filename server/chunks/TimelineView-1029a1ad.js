import { c as create_ssr_component, d as add_attribute, e as escape } from './index-41dea004.js';

function Event(name, description, date, image) {
  const dateParts = date.split("/");
  const dateObject = new Date(parseInt(dateParts[2]), parseInt(dateParts[0]) - 1, parseInt(dateParts[1]));
  const dateUnix = dateObject.getTime();
  return { name, description, date: dateUnix, image };
}
function getEvents() {
  return [
    Event("Mother Dearest is born.", "What a joyous day!", "06/07/1979", "momBorn.jpg"),
    Event("Mom graduates High School", "She graduated from high school with a 105847 GPA (definitely possible)", "06/07/1997", "momHighschool.jpg"),
    Event("Mom graduates BYU", "She graduated with a degree in Computer Science", "04/07/2004", "byu.jpg"),
    Event("Mom gets married", "I'm not entirely sure when this happened but probably around here", "06/07/2005", "temple.jpg"),
    Event("David is born", "Out of everything here, this day was the most joyous in my opinion", "01/07/2007", "davidBorn.jpg"),
    Event("Jacob is born", "The world never recovered from this day.", "04/07/2009", "jacobBorn.png"),
    Event("Sarah is born", "Capybaras around the world celebrate every 14th of March. They just love π.", "03/14/2011", "sarahBorn.png"),
    Event("David becomes the coolest person on the planet", "After years of climbing the ranks, David finally became the coolest person on the planet", "04/07/2012", "davidCoolness.jpg"),
    Event("Rachel is born", "It is said that Capybaras took over the entirity of South America on this day", "04/28/2015", "rachelBorn.jpg"),
    Event("David graduates Elementary School", "They say that Albert Einstein shook in his grave on this day", "06/07/2018", "davidElementary.jpg"),
    Event("Jacob graduates Elementary School, causing COVID-19", "The world was so shocked by this event that it created COVID-19", "06/07/2020", "covid19.webp"),
    Event("We adopted kitties", "awwww they're so cute :3", "06/07/2020", "kitties.jpg"),
    Event("David graduates Middle School", "Shockwaves were detected throughout the galaxy this day as alien inteligence struggled to decipher David's notes on time travel", "06/07/2021", "smartsmill.png"),
    Event("The Present", "I wonder what will happen in the future...", "06/07/2023", "clock.jpg")
  ];
}
function getFutureEvents() {
  return [
    Event("Riots in the U.S", "Millions of brainwashed David followers demand David be given emperor status.", "06/07/2023", "riots.jpg"),
    Event("David sets up a shadow government", "With the U.S under his thumb, world domination is not far.", "06/07/2024", "shadowgovernment.jpg"),
    Event("David graduates High School", "The world is in ruins as David's millitary has taken over the world.", "06/07/2025", "academiesofloudoun.jpg"),
    Event("A resistance is brewing...", "Tiny, Tiger, and Daisy have started a secret resistance against the cruel David Regime.", "06/07/2026", "resistance.jpg"),
    Event("Battle of Thermopylae", "The resistance narrowly makes it out alive as it clashes with David's robot army. This marks the beginning of WW3.", "06/07/2028", "cyborg.png"),
    Event("David graduates from David University", "David has taken over the galaxy by this point. All is David.", "04/07/2029", "daviduniversity.jpg"),
    Event("David becomes the first person to live forever", "David has become the first person to live forever. He is now the only person in the universe.", "04/07/2030", "immortality.jpg"),
    Event("The resistance invents time travel", "The resistance has invented time travel and is now going back in time to stop David from ever being born.", "04/07/2031", "timetravel.jpg"),
    Event("David is born", "The resistance has failed. David is born again.", "04/07/2007", "davidBorn.jpg")
  ];
}
const css = {
  code: "main.svelte-tc8pmq.svelte-tc8pmq{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;background:linear-gradient(0deg, var(--primary), var(--secondary))}#timeline[type=range].svelte-tc8pmq.svelte-tc8pmq{width:50%;margin-bottom:5vh;opacity:0.5;margin-top:5vh;background-color:var(--accent);transform:scaleY(2)}#future.svelte-tc8pmq.svelte-tc8pmq{animation:svelte-tc8pmq-shake 1s linear 2}@keyframes svelte-tc8pmq-shake{0%{transform:translate(1px, 1px) rotate(0deg)}10%{transform:translate(-1px, -2px) rotate(-1deg)}20%{transform:translate(-3px, 0px) rotate(1deg)}30%{transform:translate(3px, 2px) rotate(0deg)}40%{transform:translate(1px, -1px) rotate(1deg)}50%{transform:translate(-1px, 2px) rotate(-1deg)}60%{transform:translate(-3px, 1px) rotate(0deg)}70%{transform:translate(3px, 1px) rotate(-1deg)}80%{transform:translate(-1px, -1px) rotate(1deg)}90%{transform:translate(1px, 2px) rotate(0deg)}100%{transform:translate(1px, -2px) rotate(-1deg)}}#imageholder.svelte-tc8pmq.svelte-tc8pmq{width:100%;height:40%;object-fit:contain;display:flex;flex-direction:column;justify-content:center;align-items:center}#imageholder.svelte-tc8pmq img.svelte-tc8pmq{width:90%;height:90%;object-fit:contain}#year-view.svelte-tc8pmq.svelte-tc8pmq{height:50%;width:min(80%, 500px);border:5px dotted var(--accent);border-radius:5ch;background-color:var(--primary)}",
  map: null
};
const TimelineView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let future_transition;
  let { events } = $$props;
  let { trans_function } = $$props;
  let { style = "" } = $$props;
  let ev = 0;
  let evnt;
  let year;
  function get_trans(ev2) {
    if (trans_function) {
      return trans_function(ev2);
    }
    return "present";
  }
  if ($$props.events === void 0 && $$bindings.events && events !== void 0)
    $$bindings.events(events);
  if ($$props.trans_function === void 0 && $$bindings.trans_function && trans_function !== void 0)
    $$bindings.trans_function(trans_function);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  $$result.css.add(css);
  future_transition = get_trans(ev);
  evnt = events[ev];
  year = new Date(evnt.date).getFullYear();
  return `<main${add_attribute("id", future_transition, 0)}${add_attribute("style", style, 0)} class="svelte-tc8pmq"><h1>Happy Birthday Mom!</h1>
    <p>blah blah blah sentimental stuff</p>
    <p>Also this timeline of events is 100% accurate and has no bias whatsoever</p>
    <input type="range" id="timeline" name="timeline" min="0"${add_attribute("max", events.length - 1, 0)} class="svelte-tc8pmq"${add_attribute("value", ev, 0)}>
    <div id="year-view" class="svelte-tc8pmq"><h2>${escape(year)}</h2>
        ${``}
        <h1>${escape(evnt.name)}</h1>
        <div id="imageholder" class="svelte-tc8pmq"><img${add_attribute("src", evnt.image, 0)}${add_attribute("alt", evnt.name, 0)} class="svelte-tc8pmq"></div>
        <p>${escape(evnt.description)}</p></div>
    
</main>`;
});

export { TimelineView as T, getFutureEvents as a, getEvents as g };
//# sourceMappingURL=TimelineView-1029a1ad.js.map
