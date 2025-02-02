// ==UserScript==
// @name         Open top 5
// @version      0.0.1
// @description  Open new tabs for the first 5 results in a search result page.
// @author       Felipe
// @match        *
// @resource     queries https://raw.githubusercontent.com/Snakejuice87/jCleanList/master/search-query-selectors.json
// @grant        GM.openInTab
// @grant        GM.registerButton
// @grant        GM.getResourceText
// @noframes
// ==/UserScript==

(() => {
  const LINKS_SELECTOR = '.mnr-c a.cz3goc.BmP5tf';
  const LINKS_LIMIT = 5;

  const isMobile = window.navigator.userAgent.toLocaleLowerCase().includes('iphone');
  const queriesStr = GM.getResourceText('queries');
  const queries = JSON.parse(queriesStr);
  const se = Object
    .values(queries)
    .find((query) => {
      const se = query.search_engine_json;

      if (!se || !se.is_web_search) { return false; }

      return se.match_prefix && document.location.href.match(se.match_prefix);
    });

  if (!se) { return; }

  const linkQuery = se.querySelector[isMobile ? 'phone' : 'desktop'];

  if (!linkQuery) { return; }

  const icon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M320 344.6c0 74.66-60.73 135.4-135.4 135.4H104.7c-46.81 0-88.22-29.83-103-74.23c-5.594-16.77 3.469-34.89 20.23-40.48c16.83-5.625 34.91 3.469 40.48 20.23c6.078 18.23 23.08 30.48 42.3 30.48h79.95c39.36 0 71.39-32.03 71.39-71.39s-32.03-71.38-71.39-71.38H32c-9.484 0-18.47-4.203-24.56-11.48C1.359 254.5-1.172 244.9 .5156 235.6l32-177.2C35.27 43.09 48.52 32.01 64 32.01l192 .0049c17.67 0 32 14.33 32 32s-14.33 32-32 32H90.73L70.3 209.2h114.3C259.3 209.2 320 269.1 320 344.6z"/></svg>';
  GM.registerButton('open-top-5', 'Open top 5 results', icon, () => {
    Array
      .from(document.querySelectorAll(linkQuery))
      .map((e) => {
        if (e instanceof HTMLAnchorElement) {
          return e;
        }

        return e.closest('a');
      })
      .filter((l) => !!l)
      .map((l) => l.href)
      .filter((l) => !!l)
      .slice(0, LINKS_LIMIT).forEach(GM.openInTab);
  });
})();
