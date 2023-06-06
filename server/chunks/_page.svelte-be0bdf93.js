import { c as create_ssr_component, v as validate_component } from './index-41dea004.js';
import { a as getFutureEvents, T as TimelineView } from './TimelineView-1029a1ad.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function trans_function(ev) {
    if (ev == events.length - 1) {
      setTimeout(
        () => {
          window.location.href = "/";
        },
        2e3
      );
      return "future";
    } else {
      return "present";
    }
  }
  let events = getFutureEvents();
  let style = `
    --primary: #1A237E;
	--secondary: #7986CB;
	--accent: #0D47A1;  

    `;
  return `${validate_component(TimelineView, "TimelineView").$$render($$result, { events, trans_function, style }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-be0bdf93.js.map
