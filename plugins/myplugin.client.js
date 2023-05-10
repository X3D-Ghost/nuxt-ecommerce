// Import only the Bootstrap components we need

import { Carousel, Collapse, Dropdown, Popover, Tooltip } from "bootstrap";
// import bootstrap from 'bootstrap'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      // myPlugin: () => 'String generated from my auto-imported plugin!',
      bootstrap: { Carousel },
    },
  };
});
