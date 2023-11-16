module.exports = "<!DOCTYPE html> <html lang=\"en\"> <head> <meta charset=\"utf-8\"> <meta name=\"viewport\" content=\"width=device-width,initial-scale=1.0\"> <title>__-title-__</title> <style>/* ! tailwindcss v3.2.4 | MIT License | https://tailwindcss.com */  /* 1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4) 2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116) */  *, ::before, ::after { box-sizing: border-box; /* 1 */ border-width: 0; /* 2 */ border-style: solid; /* 2 */ border-color: #e5e7eb; /* 2 */ }  ::before, ::after { --tw-content: ''; }  /* 1. Use a consistent sensible line-height in all browsers. 2. Prevent adjustments of font size after orientation changes in iOS. 3. Use a more readable tab size. 4. Use the user's configured `sans` font-family by default. 5. Use the user's configured `sans` font-feature-settings by default. */  html { line-height: 1.5; /* 1 */ -webkit-text-size-adjust: 100%; /* 2 */ -moz-tab-size: 4; /* 3 */ -o-tab-size: 4; tab-size: 4; /* 3 */ font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */ font-feature-settings: normal; /* 5 */ }  /* 1. Remove the margin in all browsers. 2. Inherit line-height from `html` so users can set them as a class directly on the `html` element. */  body { margin: 0; /* 1 */ line-height: inherit; /* 2 */ }  /* 1. Add the correct height in Firefox. 2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655) 3. Ensure horizontal rules are visible by default. */  hr { height: 0; /* 1 */ color: inherit; /* 2 */ border-top-width: 1px; /* 3 */ }  /* Add the correct text decoration in Chrome, Edge, and Safari. */  abbr:where([title]) { -webkit-text-decoration: underline dotted; text-decoration: underline dotted; }  /* Remove the default font size and weight for headings. */  h1, h2, h3, h4, h5, h6 { font-size: inherit; font-weight: inherit; }  /* Reset links to optimize for opt-in styling instead of opt-out. */  a { color: inherit; text-decoration: inherit; }  /* Add the correct font weight in Edge and Safari. */  b, strong { font-weight: bolder; }  /* 1. Use the user's configured `mono` font family by default. 2. Correct the odd `em` font sizing in all browsers. */  code, kbd, samp, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */ font-size: 1em; /* 2 */ }  /* Add the correct font size in all browsers. */  small { font-size: 80%; }  /* Prevent `sub` and `sup` elements from affecting the line height in all browsers. */  sub, sup { font-size: 75%; line-height: 0; position: relative; vertical-align: baseline; }  sub { bottom: -0.25em; }  sup { top: -0.5em; }  /* 1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297) 2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016) 3. Remove gaps between table borders by default. */  table { text-indent: 0; /* 1 */ border-color: inherit; /* 2 */ border-collapse: collapse; /* 3 */ }  /* 1. Change the font styles in all browsers. 2. Remove the margin in Firefox and Safari. 3. Remove default padding in all browsers. */  button, input, optgroup, select, textarea { font-family: inherit; /* 1 */ font-size: 100%; /* 1 */ font-weight: inherit; /* 1 */ line-height: inherit; /* 1 */ color: inherit; /* 1 */ margin: 0; /* 2 */ padding: 0; /* 3 */ }  /* Remove the inheritance of text transform in Edge and Firefox. */  button, select { text-transform: none; }  /* 1. Correct the inability to style clickable types in iOS and Safari. 2. Remove default button styles. */  button, [type='button'], [type='reset'], [type='submit'] { -webkit-appearance: button; /* 1 */ background-color: transparent; /* 2 */ background-image: none; /* 2 */ }  /* Use the modern Firefox focus style for all focusable elements. */  :-moz-focusring { outline: auto; }  /* Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737) */  :-moz-ui-invalid { box-shadow: none; }  /* Add the correct vertical alignment in Chrome and Firefox. */  progress { vertical-align: baseline; }  /* Correct the cursor style of increment and decrement buttons in Safari. */  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button { height: auto; }  /* 1. Correct the odd appearance in Chrome and Safari. 2. Correct the outline style in Safari. */  [type='search'] { -webkit-appearance: textfield; /* 1 */ outline-offset: -2px; /* 2 */ }  /* Remove the inner padding in Chrome and Safari on macOS. */  ::-webkit-search-decoration { -webkit-appearance: none; }  /* 1. Correct the inability to style clickable types in iOS and Safari. 2. Change font properties to `inherit` in Safari. */  ::-webkit-file-upload-button { -webkit-appearance: button; /* 1 */ font: inherit; /* 2 */ }  /* Add the correct display in Chrome and Safari. */  summary { display: list-item; }  /* Removes the default spacing and border for appropriate elements. */  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre { margin: 0; }  fieldset { margin: 0; padding: 0; }  legend { padding: 0; }  ol, ul, menu { list-style: none; margin: 0; padding: 0; }  /* Prevent resizing textareas horizontally by default. */  textarea { resize: vertical; }  /* 1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300) 2. Set the default placeholder color to the user's configured gray 400 color. */  input::-moz-placeholder, textarea::-moz-placeholder { opacity: 1; /* 1 */ color: #9ca3af; /* 2 */ }  input::placeholder, textarea::placeholder { opacity: 1; /* 1 */ color: #9ca3af; /* 2 */ }  /* Set the default cursor for buttons. */  button, [role=\"button\"] { cursor: pointer; }  /* Make sure disabled buttons don't get the pointer cursor. */  :disabled { cursor: default; }  /* 1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14) 2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210) This can trigger a poorly considered lint error in some tools but is included by design. */  img, svg, video, canvas, audio, iframe, embed, object { display: block; /* 1 */ vertical-align: middle; /* 2 */ }  /* Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14) */  img, video { max-width: 100%; height: auto; }  /* Make elements with the HTML hidden attribute stay hidden by default */  [hidden] { display: none; }  [type='text'],[type='email'],[type='url'],[type='password'],[type='number'],[type='date'],[type='datetime-local'],[type='month'],[type='search'],[type='tel'],[type='time'],[type='week'],[multiple],textarea,select { -webkit-appearance: none; -moz-appearance: none; appearance: none; background-color: #fff; border-color: #6b7280; border-width: 1px; border-radius: 0px; padding-top: 0.5rem; padding-right: 0.75rem; padding-bottom: 0.5rem; padding-left: 0.75rem; font-size: 1rem; line-height: 1.5rem; --tw-shadow: 0 0 #0000; }  [type='text']:focus, [type='email']:focus, [type='url']:focus, [type='password']:focus, [type='number']:focus, [type='date']:focus, [type='datetime-local']:focus, [type='month']:focus, [type='search']:focus, [type='tel']:focus, [type='time']:focus, [type='week']:focus, [multiple]:focus, textarea:focus, select:focus { outline: 2px solid transparent; outline-offset: 2px; --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/); --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: #2563eb; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow); border-color: #2563eb; }  input::-moz-placeholder, textarea::-moz-placeholder { color: #6b7280; opacity: 1; }  input::placeholder,textarea::placeholder { color: #6b7280; opacity: 1; }  ::-webkit-datetime-edit-fields-wrapper { padding: 0; }  ::-webkit-date-and-time-value { min-height: 1.5em; }  ::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field { padding-top: 0; padding-bottom: 0; }  select { background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\"); background-position: right 0.5rem center; background-repeat: no-repeat; background-size: 1.5em 1.5em; padding-right: 2.5rem; -webkit-print-color-adjust: exact; print-color-adjust: exact; }  [multiple] { background-image: initial; background-position: initial; background-repeat: unset; background-size: initial; padding-right: 0.75rem; -webkit-print-color-adjust: unset; print-color-adjust: unset; }  [type='checkbox'],[type='radio'] { -webkit-appearance: none; -moz-appearance: none; appearance: none; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; display: inline-block; vertical-align: middle; background-origin: border-box; -webkit-user-select: none; -moz-user-select: none; user-select: none; flex-shrink: 0; height: 1rem; width: 1rem; color: #2563eb; background-color: #fff; border-color: #6b7280; border-width: 1px; --tw-shadow: 0 0 #0000; }  [type='checkbox'] { border-radius: 0px; }  [type='radio'] { border-radius: 100%; }  [type='checkbox']:focus,[type='radio']:focus { outline: 2px solid transparent; outline-offset: 2px; --tw-ring-inset: var(--tw-empty,/*!*/ /*!*/); --tw-ring-offset-width: 2px; --tw-ring-offset-color: #fff; --tw-ring-color: #2563eb; --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color); --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color); box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow); }  [type='checkbox']:checked,[type='radio']:checked { border-color: transparent; background-color: currentColor; background-size: 100% 100%; background-position: center; background-repeat: no-repeat; }  [type='checkbox']:checked { background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e\"); }  [type='radio']:checked { background-image: url(\"data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e\"); }  [type='checkbox']:checked:hover,[type='checkbox']:checked:focus,[type='radio']:checked:hover,[type='radio']:checked:focus { border-color: transparent; background-color: currentColor; }  [type='checkbox']:indeterminate { background-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e\"); border-color: transparent; background-color: currentColor; background-size: 100% 100%; background-position: center; background-repeat: no-repeat; }  [type='checkbox']:indeterminate:hover,[type='checkbox']:indeterminate:focus { border-color: transparent; background-color: currentColor; }  [type='file'] { background: unset; border-color: inherit; border-width: 0; border-radius: 0; padding: 0; font-size: unset; line-height: inherit; }  [type='file']:focus { outline: 1px solid ButtonText; outline: 1px auto -webkit-focus-ring-color; }  @supports (font-variation-settings: normal) { @font-face { font-family: 'Inter var';  font-style: normal;  font-weight: 100 900;  font-display: swap;  font-named-instance: 'Regular';  src: url(\"https://justnote.cc/static/media/Inter-roman.var.ba4caefcdf5b36b438db.woff2\") format(\"woff2\"); }  @font-face { font-family: 'Inter var';  font-style: italic;  font-weight: 100 900;  font-display: swap;  font-named-instance: 'Italic';  src: url(\"https://justnote.cc/static/media/Inter-italic.var.30807be7abc48ba8c73c.woff2\") format(\"woff2\"); } }  @supports not (font-variation-settings: normal) { @font-face { font-family: 'Inter';  font-style:  normal;  font-weight: 100;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-Thin.fff2a096db014f6239d4.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-Thin.29b9c616a95a912abf73.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  italic;  font-weight: 100;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-ThinItalic.bf213704dce6b437ede4.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-ThinItalic.bae95eb2f889c797e435.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  normal;  font-weight: 200;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-ExtraLight.72505e6a122c6acd5471.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-ExtraLight.c4248615291a9e8f1fb7.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  italic;  font-weight: 200;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-ExtraLightItalic.5c7d7d6deb1d2ec8d48c.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-ExtraLightItalic.170dddfca278d3c2ad4a.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  normal;  font-weight: 300;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-Light.2d5198822ab091ce4305.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-Light.994e34451cc19ede31d3.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  italic;  font-weight: 300;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-LightItalic.f86952265d7b0f02c921.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-LightItalic.ef9f65d91d2b0ba9b2e4.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  normal;  font-weight: 400;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-Regular.c8ba52b05a9ef10f4758.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-Regular.8c206db99195777c6769.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  italic;  font-weight: 400;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-Italic.cb10ffd7684cd9836a05.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-Italic.890025e726861dba417f.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  normal;  font-weight: 500;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-Medium.293fd13dbca5a3e450ef.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-Medium.9053572c46aeb4b16caa.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  italic;  font-weight: 500;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-MediumItalic.085cb93e613ba3d40d2b.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-MediumItalic.3d0107dd43d0101274d3.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  normal;  font-weight: 600;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-SemiBold.b5f0f109bc88052d4000.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-SemiBold.cca62d21c8c555c392e5.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  italic;  font-weight: 600;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-SemiBoldItalic.d9467ee321a8f38aefff.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-SemiBoldItalic.463bdbfb28abad0fa6df.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  normal;  font-weight: 700;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-Bold.ec64ea577b0349e055ad.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-Bold.93c1301bd9f486c573b3.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  italic;  font-weight: 700;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-BoldItalic.2d26c56a606662486796.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-BoldItalic.b376885042f6c961a541.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  normal;  font-weight: 800;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-ExtraBold.cbe0ae49c52c920fd563.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-ExtraBold.d0fa3bb2b7c9063dc594.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  italic;  font-weight: 800;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-ExtraBoldItalic.535a6cf662596b3bd6a6.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-ExtraBoldItalic.6ab17abedc4d3f140953.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  normal;  font-weight: 900;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-Black.15ca31c0a2a68f76d2d1.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-Black.c6938660eec019fefd68.woff\") format(\"woff\"); }  @font-face { font-family: 'Inter';  font-style:  italic;  font-weight: 900;  font-display: swap;  src: url(\"https://justnote.cc/static/media/Inter-BlackItalic.cb2a7335650c690077fe.woff2\") format(\"woff2\"), url(\"https://justnote.cc/static/media/Inter-BlackItalic.ca1e738e4f349f27514d.woff\") format(\"woff\"); } }  html { font-family: \"Inter\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; -webkit-tap-highlight-color: rgba(0, 0, 0, 0.1); }  @supports (font-variation-settings: normal) { html { font-family: \"Inter var\", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; } }  *, ::before, ::after { --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x:  ; --tw-pan-y:  ; --tw-pinch-zoom:  ; --tw-scroll-snap-strictness: proximity; --tw-ordinal:  ; --tw-slashed-zero:  ; --tw-numeric-figure:  ; --tw-numeric-spacing:  ; --tw-numeric-fraction:  ; --tw-ring-inset:  ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur:  ; --tw-brightness:  ; --tw-contrast:  ; --tw-grayscale:  ; --tw-hue-rotate:  ; --tw-invert:  ; --tw-saturate:  ; --tw-sepia:  ; --tw-drop-shadow:  ; --tw-backdrop-blur:  ; --tw-backdrop-brightness:  ; --tw-backdrop-contrast:  ; --tw-backdrop-grayscale:  ; --tw-backdrop-hue-rotate:  ; --tw-backdrop-invert:  ; --tw-backdrop-opacity:  ; --tw-backdrop-saturate:  ; --tw-backdrop-sepia:  ; }  ::backdrop { --tw-border-spacing-x: 0; --tw-border-spacing-y: 0; --tw-translate-x: 0; --tw-translate-y: 0; --tw-rotate: 0; --tw-skew-x: 0; --tw-skew-y: 0; --tw-scale-x: 1; --tw-scale-y: 1; --tw-pan-x:  ; --tw-pan-y:  ; --tw-pinch-zoom:  ; --tw-scroll-snap-strictness: proximity; --tw-ordinal:  ; --tw-slashed-zero:  ; --tw-numeric-figure:  ; --tw-numeric-spacing:  ; --tw-numeric-fraction:  ; --tw-ring-inset:  ; --tw-ring-offset-width: 0px; --tw-ring-offset-color: #fff; --tw-ring-color: rgb(59 130 246 / 0.5); --tw-ring-offset-shadow: 0 0 #0000; --tw-ring-shadow: 0 0 #0000; --tw-shadow: 0 0 #0000; --tw-shadow-colored: 0 0 #0000; --tw-blur:  ; --tw-brightness:  ; --tw-contrast:  ; --tw-grayscale:  ; --tw-hue-rotate:  ; --tw-invert:  ; --tw-saturate:  ; --tw-sepia:  ; --tw-drop-shadow:  ; --tw-backdrop-blur:  ; --tw-backdrop-brightness:  ; --tw-backdrop-contrast:  ; --tw-backdrop-grayscale:  ; --tw-backdrop-hue-rotate:  ; --tw-backdrop-invert:  ; --tw-backdrop-opacity:  ; --tw-backdrop-saturate:  ; --tw-backdrop-sepia:  ; }  .prose { color: var(--tw-prose-body); max-width: 65ch; }  .prose :where([class~=\"lead\"]):not(:where([class~=\"not-prose\"] *)) { color: var(--tw-prose-lead); font-size: 1.25em; line-height: 1.6; margin-top: 1.2em; margin-bottom: 1.2em; }  .prose :where(a):not(:where([class~=\"not-prose\"] *)) { color: var(--tw-prose-links); text-decoration: underline; font-weight: 500; }  .prose :where(strong):not(:where([class~=\"not-prose\"] *)) { color: var(--tw-prose-bold); font-weight: 600; }  .prose :where(a strong):not(:where([class~=\"not-prose\"] *)) { color: inherit; }  .prose :where(blockquote strong):not(:where([class~=\"not-prose\"] *)) { color: inherit; }  .prose :where(thead th strong):not(:where([class~=\"not-prose\"] *)) { color: inherit; }  .prose :where(ol):not(:where([class~=\"not-prose\"] *)) { list-style-type: decimal; margin-top: 1.25em; margin-bottom: 1.25em; padding-left: 1.625em; }  .prose :where(ol[type=\"A\"]):not(:where([class~=\"not-prose\"] *)) { list-style-type: upper-alpha; }  .prose :where(ol[type=\"a\"]):not(:where([class~=\"not-prose\"] *)) { list-style-type: lower-alpha; }  .prose :where(ol[type=\"A\" s]):not(:where([class~=\"not-prose\"] *)) { list-style-type: upper-alpha; }  .prose :where(ol[type=\"a\" s]):not(:where([class~=\"not-prose\"] *)) { list-style-type: lower-alpha; }  .prose :where(ol[type=\"I\"]):not(:where([class~=\"not-prose\"] *)) { list-style-type: upper-roman; }  .prose :where(ol[type=\"i\"]):not(:where([class~=\"not-prose\"] *)) { list-style-type: lower-roman; }  .prose :where(ol[type=\"I\" s]):not(:where([class~=\"not-prose\"] *)) { list-style-type: upper-roman; }  .prose :where(ol[type=\"i\" s]):not(:where([class~=\"not-prose\"] *)) { list-style-type: lower-roman; }  .prose :where(ol[type=\"1\"]):not(:where([class~=\"not-prose\"] *)) { list-style-type: decimal; }  .prose :where(ul):not(:where([class~=\"not-prose\"] *)) { list-style-type: disc; margin-top: 1.25em; margin-bottom: 1.25em; padding-left: 1.625em; }  .prose :where(ol > li):not(:where([class~=\"not-prose\"] *))::marker { font-weight: 400; color: var(--tw-prose-counters); }  .prose :where(ul > li):not(:where([class~=\"not-prose\"] *))::marker { color: var(--tw-prose-bullets); }  .prose :where(hr):not(:where([class~=\"not-prose\"] *)) { border-color: var(--tw-prose-hr); border-top-width: 1px; margin-top: 3em; margin-bottom: 3em; }  .prose :where(blockquote):not(:where([class~=\"not-prose\"] *)) { font-weight: 500; font-style: italic; color: var(--tw-prose-quotes); border-left-width: 0.25rem; border-left-color: var(--tw-prose-quote-borders); quotes: \"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\"; margin-top: 1.6em; margin-bottom: 1.6em; padding-left: 1em; }  .prose :where(blockquote p:first-of-type):not(:where([class~=\"not-prose\"] *))::before { content: open-quote; }  .prose :where(blockquote p:last-of-type):not(:where([class~=\"not-prose\"] *))::after { content: close-quote; }  .prose :where(h1):not(:where([class~=\"not-prose\"] *)) { color: var(--tw-prose-headings); font-weight: 800; font-size: 2.25em; margin-top: 0; margin-bottom: 0.8888889em; line-height: 1.1111111; }  .prose :where(h1 strong):not(:where([class~=\"not-prose\"] *)) { font-weight: 900; color: inherit; }  .prose :where(h2):not(:where([class~=\"not-prose\"] *)) { color: var(--tw-prose-headings); font-weight: 700; font-size: 1.5em; margin-top: 2em; margin-bottom: 1em; line-height: 1.3333333; }  .prose :where(h2 strong):not(:where([class~=\"not-prose\"] *)) { font-weight: 800; color: inherit; }  .prose :where(h3):not(:where([class~=\"not-prose\"] *)) { color: var(--tw-prose-headings); font-weight: 600; font-size: 1.25em; margin-top: 1.6em; margin-bottom: 0.6em; line-height: 1.6; }  .prose :where(h3 strong):not(:where([class~=\"not-prose\"] *)) { font-weight: 700; color: inherit; }  .prose :where(h4):not(:where([class~=\"not-prose\"] *)) { color: var(--tw-prose-headings); font-weight: 600; margin-top: 1.5em; margin-bottom: 0.5em; line-height: 1.5; }  .prose :where(h4 strong):not(:where([class~=\"not-prose\"] *)) { font-weight: 700; color: inherit; }  .prose :where(img):not(:where([class~=\"not-prose\"] *)) { margin-top: 2em; margin-bottom: 2em; }  .prose :where(figure > *):not(:where([class~=\"not-prose\"] *)) { margin-top: 0; margin-bottom: 0; }  .prose :where(figcaption):not(:where([class~=\"not-prose\"] *)) { color: var(--tw-prose-captions); font-size: 0.875em; line-height: 1.4285714; margin-top: 0.8571429em; }  .prose :where(code):not(:where([class~=\"not-prose\"] *)) { color: var(--tw-prose-code); font-weight: 600; font-size: 0.875em; }  .prose :where(code):not(:where([class~=\"not-prose\"] *))::before { content: \"`\"; }  .prose :where(code):not(:where([class~=\"not-prose\"] *))::after { content: \"`\"; }  .prose :where(a code):not(:where([class~=\"not-prose\"] *)) { color: inherit; }  .prose :where(h1 code):not(:where([class~=\"not-prose\"] *)) { color: inherit; }  .prose :where(h2 code):not(:where([class~=\"not-prose\"] *)) { color: inherit; font-size: 0.875em; }  .prose :where(h3 code):not(:where([class~=\"not-prose\"] *)) { color: inherit; font-size: 0.9em; }  .prose :where(h4 code):not(:where([class~=\"not-prose\"] *)) { color: inherit; }  .prose :where(blockquote code):not(:where([class~=\"not-prose\"] *)) { color: inherit; }  .prose :where(thead th code):not(:where([class~=\"not-prose\"] *)) { color: inherit; }  .prose :where(pre):not(:where([class~=\"not-prose\"] *)) { color: var(--tw-prose-pre-code); background-color: var(--tw-prose-pre-bg); overflow-x: auto; font-weight: 400; font-size: 0.875em; line-height: 1.7142857; margin-top: 1.7142857em; margin-bottom: 1.7142857em; border-radius: 0.375rem; padding-top: 0.8571429em; padding-right: 1.1428571em; padding-bottom: 0.8571429em; padding-left: 1.1428571em; }  .prose :where(pre code):not(:where([class~=\"not-prose\"] *)) { background-color: transparent; border-width: 0; border-radius: 0; padding: 0; font-weight: inherit; color: inherit; font-size: inherit; font-family: inherit; line-height: inherit; }  .prose :where(pre code):not(:where([class~=\"not-prose\"] *))::before { content: none; }  .prose :where(pre code):not(:where([class~=\"not-prose\"] *))::after { content: none; }  .prose :where(table):not(:where([class~=\"not-prose\"] *)) { width: 100%; table-layout: auto; text-align: left; margin-top: 2em; margin-bottom: 2em; font-size: 0.875em; line-height: 1.7142857; }  .prose :where(thead):not(:where([class~=\"not-prose\"] *)) { border-bottom-width: 1px; border-bottom-color: var(--tw-prose-th-borders); }  .prose :where(thead th):not(:where([class~=\"not-prose\"] *)) { color: var(--tw-prose-headings); font-weight: 600; vertical-align: bottom; padding-right: 0.5714286em; padding-bottom: 0.5714286em; padding-left: 0.5714286em; }  .prose :where(tbody tr):not(:where([class~=\"not-prose\"] *)) { border-bottom-width: 1px; border-bottom-color: var(--tw-prose-td-borders); }  .prose :where(tbody tr:last-child):not(:where([class~=\"not-prose\"] *)) { border-bottom-width: 0; }  .prose :where(tbody td):not(:where([class~=\"not-prose\"] *)) { vertical-align: baseline; }  .prose :where(tfoot):not(:where([class~=\"not-prose\"] *)) { border-top-width: 1px; border-top-color: var(--tw-prose-th-borders); }  .prose :where(tfoot td):not(:where([class~=\"not-prose\"] *)) { vertical-align: top; }  .prose { --tw-prose-body: #374151; --tw-prose-headings: #111827; --tw-prose-lead: #4b5563; --tw-prose-links: #111827; --tw-prose-bold: #111827; --tw-prose-counters: #6b7280; --tw-prose-bullets: #d1d5db; --tw-prose-hr: #e5e7eb; --tw-prose-quotes: #111827; --tw-prose-quote-borders: #e5e7eb; --tw-prose-captions: #6b7280; --tw-prose-code: #111827; --tw-prose-pre-code: #e5e7eb; --tw-prose-pre-bg: #1f2937; --tw-prose-th-borders: #d1d5db; --tw-prose-td-borders: #e5e7eb; --tw-prose-invert-body: #d1d5db; --tw-prose-invert-headings: #fff; --tw-prose-invert-lead: #9ca3af; --tw-prose-invert-links: #fff; --tw-prose-invert-bold: #fff; --tw-prose-invert-counters: #9ca3af; --tw-prose-invert-bullets: #4b5563; --tw-prose-invert-hr: #374151; --tw-prose-invert-quotes: #f3f4f6; --tw-prose-invert-quote-borders: #374151; --tw-prose-invert-captions: #9ca3af; --tw-prose-invert-code: #fff; --tw-prose-invert-pre-code: #d1d5db; --tw-prose-invert-pre-bg: rgb(0 0 0 / 50%); --tw-prose-invert-th-borders: #4b5563; --tw-prose-invert-td-borders: #374151; font-size: 1rem; line-height: 1.75; }  .prose :where(p):not(:where([class~=\"not-prose\"] *)) { margin-top: 1.25em; margin-bottom: 1.25em; }  .prose :where(video):not(:where([class~=\"not-prose\"] *)) { margin-top: 2em; margin-bottom: 2em; }  .prose :where(figure):not(:where([class~=\"not-prose\"] *)) { margin-top: 2em; margin-bottom: 2em; }  .prose :where(li):not(:where([class~=\"not-prose\"] *)) { margin-top: 0.5em; margin-bottom: 0.5em; }  .prose :where(ol > li):not(:where([class~=\"not-prose\"] *)) { padding-left: 0.375em; }  .prose :where(ul > li):not(:where([class~=\"not-prose\"] *)) { padding-left: 0.375em; }  .prose :where(.prose > ul > li p):not(:where([class~=\"not-prose\"] *)) { margin-top: 0.75em; margin-bottom: 0.75em; }  .prose :where(.prose > ul > li > *:first-child):not(:where([class~=\"not-prose\"] *)) { margin-top: 1.25em; }  .prose :where(.prose > ul > li > *:last-child):not(:where([class~=\"not-prose\"] *)) { margin-bottom: 1.25em; }  .prose :where(.prose > ol > li > *:first-child):not(:where([class~=\"not-prose\"] *)) { margin-top: 1.25em; }  .prose :where(.prose > ol > li > *:last-child):not(:where([class~=\"not-prose\"] *)) { margin-bottom: 1.25em; }  .prose :where(ul ul, ul ol, ol ul, ol ol):not(:where([class~=\"not-prose\"] *)) { margin-top: 0.75em; margin-bottom: 0.75em; }  .prose :where(hr + *):not(:where([class~=\"not-prose\"] *)) { margin-top: 0; }  .prose :where(h2 + *):not(:where([class~=\"not-prose\"] *)) { margin-top: 0; }  .prose :where(h3 + *):not(:where([class~=\"not-prose\"] *)) { margin-top: 0; }  .prose :where(h4 + *):not(:where([class~=\"not-prose\"] *)) { margin-top: 0; }  .prose :where(thead th:first-child):not(:where([class~=\"not-prose\"] *)) { padding-left: 0; }  .prose :where(thead th:last-child):not(:where([class~=\"not-prose\"] *)) { padding-right: 0; }  .prose :where(tbody td, tfoot td):not(:where([class~=\"not-prose\"] *)) { padding-top: 0.5714286em; padding-right: 0.5714286em; padding-bottom: 0.5714286em; padding-left: 0.5714286em; }  .prose :where(tbody td:first-child, tfoot td:first-child):not(:where([class~=\"not-prose\"] *)) { padding-left: 0; }  .prose :where(tbody td:last-child, tfoot td:last-child):not(:where([class~=\"not-prose\"] *)) { padding-right: 0; }  .prose :where(.prose > :first-child):not(:where([class~=\"not-prose\"] *)) { margin-top: 0; }  .prose :where(.prose > :last-child):not(:where([class~=\"not-prose\"] *)) { margin-bottom: 0; }  .mx-12 { margin-left: 3rem; margin-right: 3rem; }  .my-16 { margin-top: 4rem; margin-bottom: 4rem; }  .mx-auto { margin-left: auto; margin-right: auto; }  .antialiased { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }  .prose-h1\\:mb-\\[0\\.6967em\\] :is(:where(h1):not(:where([class~=\"not-prose\"] *))) { margin-bottom: 0.6967em; }  .prose-h1\\:leading-normal :is(:where(h1):not(:where([class~=\"not-prose\"] *))) { line-height: 1.5; }  .prose-p\\:my-0 :is(:where(p):not(:where([class~=\"not-prose\"] *))) { margin-top: 0px; margin-bottom: 0px; }  .prose-ol\\:my-0 :is(:where(ol):not(:where([class~=\"not-prose\"] *))) { margin-top: 0px; margin-bottom: 0px; }  .prose-ol\\:pl-10 :is(:where(ol):not(:where([class~=\"not-prose\"] *))) { padding-left: 2.5rem; }  .prose-ul\\:my-0 :is(:where(ul):not(:where([class~=\"not-prose\"] *))) { margin-top: 0px; margin-bottom: 0px; }  .prose-ul\\:pl-10 :is(:where(ul):not(:where([class~=\"not-prose\"] *))) { padding-left: 2.5rem; }  .prose-li\\:my-0 :is(:where(li):not(:where([class~=\"not-prose\"] *))) { margin-top: 0px; margin-bottom: 0px; }  .prose-li\\:pl-0 :is(:where(li):not(:where([class~=\"not-prose\"] *))) { padding-left: 0px; } </style> <style>.text-tiny { font-size: 0.7em; }  .text-small { font-size: 0.85em; }  .text-big { font-size: 1.4em; }  .text-huge { font-size: 1.8em; }  .prose { --tw-prose-counters: rgb(55, 65, 81); --tw-prose-bullets: rgb(55, 65, 81);  /* In CKEditor, line height is 1.5. In prose, line height is 1.75. line-height: 1.5; */  --ck-image-style-spacing: 1.5em; --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);  --jn-editor-white: rgb(255, 255, 255); --jn-editor-gray-700: rgb(55, 65, 81); --jn-editor-green-600: rgb(22, 163, 74); }  .prose ul { list-style: disc; }  .prose ul ul { list-style: circle; }  .prose ul ul ul { list-style: square; }  .prose ol { list-style: decimal; }  .prose .todo-list li { margin-bottom: 5px; }  .prose .todo-list li .todo-list { margin-top: 5px; }  .prose .todo-list .todo-list__label>input { position: relative; top: -1px; left: -22px; margin-right: -8px; background-color: var(--jn-editor-white); border: 1px solid var(--jn-editor-gray-700); border-radius: 2px; }  .prose .todo-list .todo-list__label>input:checked { background-color: hsl(126, 64%, 41%); border-color: hsl(126, 64%, 41%); }  .prose .image { display: table; clear: both; text-align: center; margin: 0.9em auto; min-width: 50px; }  .prose .image img { display: block; margin: 0 auto; max-width: 100%; min-width: 100% }  .prose img { display: inline-flex; margin: 0; max-width: 100%; /* As here has no span but the editor has so set baseline as span and no need align-items: flex-start; as img has no items. */ vertical-align: baseline; }  .prose .image-style-block-align-left { margin-left: 0; margin-right: auto; }  .prose .image-style-block-align-right { margin-right: 0; margin-left: auto; }  .prose .image-style-align-left { clear: none; float: left; margin-right: var(--ck-image-style-spacing); }  .prose .image-style-align-right { clear: none; float: right; margin-left: var(--ck-image-style-spacing); }  .prose p + .image-style-align-left, .prose p + .image-style-align-right { margin-top: 0; }  .prose p .image-style-align-left { margin-top: var(--ck-inline-image-style-spacing); margin-bottom: var(--ck-inline-image-style-spacing); margin-right: var(--ck-inline-image-style-spacing); }  .prose p .image-style-align-right { margin-top: var(--ck-inline-image-style-spacing); margin-bottom: var(--ck-inline-image-style-spacing); margin-left: var(--ck-inline-image-style-spacing); }  .prose .image.image_resized { max-width: 100%; display: block; box-sizing: border-box; }  .prose .image.image_resized img { width: 100%; }  /* Might need to have image-inline, image-style-align-center, and image-style-side as well. Look at ckeditor5/packages/ckeditor5-image/theme/image.css and imagestyle.css, imageresize.css. */ </style> </head> <body class=\"antialiased mx-12 my-16\"> <article class=\"prose prose-h1:mb-[0.6967em] prose-h1:leading-normal prose-p:my-0 prose-ol:my-0 prose-ol:pl-10 prose-ul:my-0 prose-ul:pl-10 prose-li:my-0 prose-li:pl-0 mx-auto\"> <h1>__-title-__</h1> __-body-__ </article> </body> </html> ";
