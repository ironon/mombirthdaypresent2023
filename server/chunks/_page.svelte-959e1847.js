import { c as create_ssr_component, v as validate_component } from './index-41dea004.js';
import { g as getEvents, T as TimelineView } from './TimelineView-1029a1ad.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  function get_future_transition(ev) {
    if (ev == events.length - 1) {
      setTimeout(
        () => {
          window.location.href = "/future";
        },
        2e3
      );
      return "future";
    } else {
      return "present";
    }
  }
  let events = getEvents();
  return `${validate_component(TimelineView, "TimelineView").$$render(
    $$result,
    {
      events,
      trans_function: get_future_transition
    },
    {},
    {}
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-959e1847.js.map
