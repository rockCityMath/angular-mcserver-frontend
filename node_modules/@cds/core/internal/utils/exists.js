import o from"ramda/es/curryN.js";import r from"ramda/es/isNil.js";import t from"ramda/es/path.js";import i from"./__.js";const m=o(2,((o,r)=>void 0!==t(o,r)));function n(o,r){return r||(r=window&&window.customElements),!r||!!r.get(o)}const s=m(i,window);function e(o=window){return!r(o)}export{n as elementExists,m as existsIn,s as existsInWindow,e as isBrowser};
//# sourceMappingURL=exists.js.map
