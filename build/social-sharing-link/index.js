(()=>{var e={184:(e,t)=>{var c;!function(){"use strict";var i={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var c=arguments[t];if(c){var a=typeof c;if("string"===a||"number"===a)e.push(c);else if(Array.isArray(c)){if(c.length){var r=l.apply(null,c);r&&e.push(r)}}else if("object"===a){if(c.toString!==Object.prototype.toString&&!c.toString.toString().includes("[native code]")){e.push(c.toString());continue}for(var n in c)i.call(c,n)&&c[n]&&e.push(n)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(c=function(){return l}.apply(t,[]))||(e.exports=c)}()}},t={};function c(i){var l=t[i];if(void 0!==l)return l.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,c),a.exports}c.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return c.d(t,{a:t}),t},c.d=(e,t)=>{for(var i in t)c.o(t,i)&&!c.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},c.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.element,t=window.wp.primitives,i=(0,e.createElement)(t.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,e.createElement)(t.Path,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})),l=window.wp.blocks;var a=c(184),r=c.n(a);const n=window.wp.blockEditor,o=window.wp.components,s=window.wp.i18n,h=window.lodash,v=()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Path,{d:"M20,4H4C2.895,4,2,4.895,2,6v12c0,1.105,0.895,2,2,2h16c1.105,0,2-0.895,2-2V6C22,4.895,21.105,4,20,4z M20,8.236l-8,4.882 L4,8.236V6h16V8.236z"})),m=[{name:"facebook",attributes:{service:"facebook"},title:"Facebook",icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Path,{d:"M12 2C6.5 2 2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7C18.3 21.1 22 17 22 12c0-5.5-4.5-10-10-10z"}))},{name:"flipboard",attributes:{service:"flipboard"},title:"Flipboard",icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Polygon,{points:"9.333 20 4 20 4 4 20 4 20 9.333 14.667 9.333 14.667 14.667 9.333 14.667"}))},{name:"line",attributes:{service:"line"},title:"LINE",icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Path,{d:"M4.7619 2.5C3.5133 2.5 2.5 3.5133 2.5 4.7619v14.4762C2.5 20.4867 3.5133 21.5 4.7619 21.5h14.4762c1.2486 0 2.2619-1.0133 2.2619-2.2619V4.7619C21.5 3.5133 20.4867 2.5 19.2381 2.5H4.7619ZM12 5.6667c3.7412 0 6.7857 2.4244 6.7857 5.4056 0 1.1897-.4708 2.2671-1.457 3.3257-.7102.8052-1.8632 1.6916-2.9263 2.4245-1.0631.7238-2.0405 1.2935-2.4024 1.4428-.1448.0588-.2533.0857-.3393.0857-.2986 0-.2718-.3159-.2491-.447.018-.0996.0998-.5709.0998-.5709.0226-.1673.0449-.4334-.023-.6008-.0769-.1854-.38-.2808-.6017-.326-3.2571-.4252-5.6724-2.665-5.6724-5.334 0-2.9812 3.0445-5.4056 6.7857-5.4056Zm-.456 3.6181c-.2278.0043-.4488.1782-.4488.4533v2.7143c0 .2497.2027.4524.4524.4524A.4525.4525 0 0 0 12 12.4524V11.15l.9887 1.5648c.256.3583.8208.1777.8208-.2624V9.738a.4525.4525 0 0 0-.4524-.4524.4525.4525 0 0 0-.4523.4524v1.3571l-.9887-1.6195c-.096-.1344-.2353-.1934-.372-.1909Zm-4.0678.001a.4525.4525 0 0 0-.4524.4523v2.7143c0 .2497.2027.4524.4524.4524h1.3571a.4525.4525 0 0 0 .4524-.4524A.4525.4525 0 0 0 8.8333 12h-.9047V9.7381a.4525.4525 0 0 0-.4524-.4524Zm2.7143 0a.4525.4525 0 0 0-.4524.4523v2.7143c0 .2497.2027.4524.4524.4524a.4525.4525 0 0 0 .4524-.4524V9.738a.4525.4525 0 0 0-.4524-.4524Zm4.5238 0a.4525.4525 0 0 0-.4524.4523v2.7143c0 .2497.2027.4524.4524.4524h1.3571a.4525.4525 0 0 0 .4524-.4524.4525.4525 0 0 0-.4524-.4524h-.9047v-.4524h.9047a.4523.4523 0 0 0 .4524-.4524.4523.4523 0 0 0-.4524-.4523h-.9047v-.4524h.9047a.4525.4525 0 0 0 .4524-.4524.4525.4525 0 0 0-.4524-.4524h-1.3571Z"}))},{name:"linkedin",attributes:{service:"linkedin"},title:"LinkedIn",icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Path,{d:"M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z"}))},{name:"mail",attributes:{service:"mail"},title:"Mail",label:(0,s.__)("Email this Page","social-sharing-block"),keywords:["email","e-mail"],icon:v},{name:"pinterest",attributes:{service:"pinterest"},title:"Pinterest",icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Path,{d:"M12.289,2C6.617,2,3.606,5.648,3.606,9.622c0,1.846,1.025,4.146,2.666,4.878c0.25,0.111,0.381,0.063,0.439-0.169 c0.044-0.175,0.267-1.029,0.365-1.428c0.032-0.128,0.017-0.237-0.091-0.362C6.445,11.911,6.01,10.75,6.01,9.668 c0-2.777,2.194-5.464,5.933-5.464c3.23,0,5.49,2.108,5.49,5.122c0,3.407-1.794,5.768-4.13,5.768c-1.291,0-2.257-1.021-1.948-2.277 c0.372-1.495,1.089-3.112,1.089-4.191c0-0.967-0.542-1.775-1.663-1.775c-1.319,0-2.379,1.309-2.379,3.059 c0,1.115,0.394,1.869,0.394,1.869s-1.302,5.279-1.54,6.261c-0.405,1.666,0.053,4.368,0.094,4.604 c0.021,0.126,0.167,0.169,0.25,0.063c0.129-0.165,1.699-2.419,2.142-4.051c0.158-0.59,0.817-2.995,0.817-2.995 c0.43,0.784,1.681,1.446,3.013,1.446c3.963,0,6.822-3.494,6.822-7.833C20.394,5.112,16.849,2,12.289,2"}))},{name:"pocket",attributes:{service:"pocket"},title:"Pocket",icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Path,{d:"M21.927,4.194C21.667,3.48,20.982,3,20.222,3h-0.01h-1.721H3.839C3.092,3,2.411,3.47,2.145,4.17 C2.066,4.378,2.026,4.594,2.026,4.814v6.035l0.069,1.2c0.29,2.73,1.707,5.115,3.899,6.778c0.039,0.03,0.079,0.059,0.119,0.089 l0.025,0.018c1.175,0.859,2.491,1.441,3.91,1.727c0.655,0.132,1.325,0.2,1.991,0.2c0.615,0,1.232-0.057,1.839-0.17 c0.073-0.014,0.145-0.028,0.219-0.044c0.02-0.004,0.042-0.012,0.064-0.023c1.359-0.297,2.621-0.864,3.753-1.691l0.025-0.018 c0.04-0.029,0.08-0.058,0.119-0.089c2.192-1.664,3.609-4.049,3.898-6.778l0.069-1.2V4.814C22.026,4.605,22,4.398,21.927,4.194z M17.692,10.481l-4.704,4.512c-0.266,0.254-0.608,0.382-0.949,0.382c-0.342,0-0.684-0.128-0.949-0.382l-4.705-4.512 C5.838,9.957,5.82,9.089,6.344,8.542c0.524-0.547,1.392-0.565,1.939-0.04l3.756,3.601l3.755-3.601 c0.547-0.524,1.415-0.506,1.939,0.04C18.256,9.089,18.238,9.956,17.692,10.481z"}))},{name:"print",attributes:{service:"print"},title:"Print",label:(0,s.__)("Print this Page","social-sharing-block"),icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Path,{d:"m14.639 3 4.222 4.235v3.177h.528c1.113 0 2.025.864 2.105 1.96l.006.157v5.295h-2.639v2.117c0 .585-.472 1.059-1.055 1.059H6.194a1.057 1.057 0 0 1-1.055-1.059v-2.117H2.5v-5.295c0-1.17.945-2.117 2.111-2.117h.528V4.059C5.139 3.474 5.61 3 6.194 3h8.445Zm2.639 13.235H6.722v3.177h10.556v-3.177Zm2.11-4.5a.793.793 0 0 0-.79.794.793.793 0 1 0 .79-.794Zm-5.277-7.147H6.722v6.883h10.556V7.765h-2.111a1.057 1.057 0 0 1-1.056-1.06V4.589Z"}))},{name:"reddit",attributes:{service:"reddit"},title:"Reddit",icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Path,{d:"M22 12.068a2.184 2.184 0 0 0-2.186-2.186c-.592 0-1.13.233-1.524.609-1.505-1.075-3.566-1.774-5.86-1.864l1.004-4.695 3.261.699A1.56 1.56 0 1 0 18.255 3c-.61-.001-1.147.357-1.398.877l-3.638-.77a.382.382 0 0 0-.287.053.348.348 0 0 0-.161.251l-1.112 5.233c-2.33.072-4.426.77-5.95 1.864a2.201 2.201 0 0 0-1.523-.61 2.184 2.184 0 0 0-.896 4.176c-.036.215-.053.43-.053.663 0 3.37 3.924 6.111 8.763 6.111s8.763-2.724 8.763-6.11c0-.216-.017-.449-.053-.664A2.207 2.207 0 0 0 22 12.068Zm-15.018 1.56a1.56 1.56 0 0 1 3.118 0c0 .86-.699 1.558-1.559 1.558-.86.018-1.559-.699-1.559-1.559Zm8.728 4.139c-1.076 1.075-3.119 1.147-3.71 1.147-.61 0-2.652-.09-3.71-1.147a.4.4 0 0 1 0-.573.4.4 0 0 1 .574 0c.68.68 2.114.914 3.136.914 1.022 0 2.473-.233 3.136-.914a.4.4 0 0 1 .574 0 .436.436 0 0 1 0 .573Zm-.287-2.563a1.56 1.56 0 0 1 0-3.118c.86 0 1.56.699 1.56 1.56 0 .841-.7 1.558-1.56 1.558Z"}))},{name:"skype",attributes:{service:"skype"},title:"Skype",icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Path,{d:"M10.113,2.699c0.033-0.006,0.067-0.013,0.1-0.02c0.033,0.017,0.066,0.033,0.098,0.051L10.113,2.699z M2.72,10.223 c-0.006,0.034-0.011,0.069-0.017,0.103c0.018,0.032,0.033,0.064,0.051,0.095L2.72,10.223z M21.275,13.771 c0.007-0.035,0.011-0.071,0.018-0.106c-0.018-0.031-0.033-0.064-0.052-0.095L21.275,13.771z M13.563,21.199 c0.032,0.019,0.065,0.035,0.096,0.053c0.036-0.006,0.071-0.011,0.105-0.017L13.563,21.199z M22,16.386 c0,1.494-0.581,2.898-1.637,3.953c-1.056,1.057-2.459,1.637-3.953,1.637c-0.967,0-1.914-0.251-2.75-0.725 c0.036-0.006,0.071-0.011,0.105-0.017l-0.202-0.035c0.032,0.019,0.065,0.035,0.096,0.053c-0.543,0.096-1.099,0.147-1.654,0.147 c-1.275,0-2.512-0.25-3.676-0.743c-1.125-0.474-2.135-1.156-3.002-2.023c-0.867-0.867-1.548-1.877-2.023-3.002 c-0.493-1.164-0.743-2.401-0.743-3.676c0-0.546,0.049-1.093,0.142-1.628c0.018,0.032,0.033,0.064,0.051,0.095L2.72,10.223 c-0.006,0.034-0.011,0.069-0.017,0.103C2.244,9.5,2,8.566,2,7.615c0-1.493,0.582-2.898,1.637-3.953 c1.056-1.056,2.46-1.638,3.953-1.638c0.915,0,1.818,0.228,2.622,0.655c-0.033,0.007-0.067,0.013-0.1,0.02l0.199,0.031 c-0.032-0.018-0.066-0.034-0.098-0.051c0.002,0,0.003-0.001,0.004-0.001c0.586-0.112,1.187-0.169,1.788-0.169 c1.275,0,2.512,0.249,3.676,0.742c1.124,0.476,2.135,1.156,3.002,2.024c0.868,0.867,1.548,1.877,2.024,3.002 c0.493,1.164,0.743,2.401,0.743,3.676c0,0.575-0.054,1.15-0.157,1.712c-0.018-0.031-0.033-0.064-0.052-0.095l0.034,0.201 c0.007-0.035,0.011-0.071,0.018-0.106C21.754,14.494,22,15.432,22,16.386z M16.817,14.138c0-1.331-0.613-2.743-3.033-3.282 l-2.209-0.49c-0.84-0.192-1.807-0.444-1.807-1.237c0-0.794,0.679-1.348,1.903-1.348c2.468,0,2.243,1.696,3.468,1.696 c0.645,0,1.209-0.379,1.209-1.031c0-1.521-2.435-2.663-4.5-2.663c-2.242,0-4.63,0.952-4.63,3.488c0,1.221,0.436,2.521,2.839,3.123 l2.984,0.745c0.903,0.223,1.129,0.731,1.129,1.189c0,0.762-0.758,1.507-2.129,1.507c-2.679,0-2.307-2.062-3.743-2.062 c-0.645,0-1.113,0.444-1.113,1.078c0,1.236,1.501,2.886,4.856,2.886C15.236,17.737,16.817,16.199,16.817,14.138z"}))},{name:"sms",attributes:{service:"sms"},title:"SMS",icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Path,{d:"M17.696 4C20.069 4 22 5.973 22 8.398v4.357c0 2.04-1.368 3.783-3.261 4.266v4.427l-5.234-4.295h-7.2C3.93 17.153 2 15.18 2 12.755V8.398C2 5.973 3.931 4 6.304 4h11.392ZM7.028 8.515c-.98 0-1.66.562-1.66 1.349-.009.497.322.91.985 1.178l.39.142c.242.097.305.171.305.297 0 .162-.131.251-.442.251s-.76-.135-1.004-.284l-.112.046-.215.868c.359.258.832.364 1.33.364 1.104 0 1.764-.523 1.764-1.333-.008-.574-.305-.956-.954-1.216l-.393-.146c-.266-.108-.341-.181-.341-.287 0-.152.131-.243.387-.243.274 0 .587.093.808.214l.109-.047.214-.837c-.315-.224-.741-.316-1.171-.316Zm10.302 0c-.98 0-1.66.562-1.66 1.349-.008.497.322.91.985 1.178l.39.142c.243.097.305.171.305.297 0 .162-.13.251-.442.251-.311 0-.76-.135-1.004-.284l-.112.046-.215.868c.359.258.832.364 1.33.364 1.104 0 1.764-.523 1.764-1.333-.008-.574-.305-.956-.954-1.216l-.393-.146c-.266-.108-.341-.181-.341-.287 0-.152.131-.243.387-.243.274 0 .587.093.808.214l.109-.047.214-.837c-.316-.224-.741-.316-1.171-.316Zm-3.733 0c-.297 0-.55.066-.78.202l-.144.098a1.823 1.823 0 0 0-.264.247l-.078.095-.027-.077c-.15-.34-.55-.565-1.033-.565l-.169.007a1.363 1.363 0 0 0-.896.42l-.08.09-.038-.363-.075-.067H8.994l-.075.079.024.634c.005.2.008.397.008.604v2.652l.075.075h1.178l.075-.075v-2.269c0-.113.012-.202.042-.274.083-.23.262-.392.496-.392.314 0 .483.267.483.753v2.182l.075.075h1.179l.075-.075v-2.277c0-.097.016-.213.043-.285.077-.224.26-.373.486-.373.33 0 .5.272.5.817v2.118l.074.075h1.179l.075-.075v-2.293c0-1.131-.537-1.763-1.39-1.763Z"}))},{name:"telegram",attributes:{service:"telegram"},title:"Telegram",icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 128 128",version:"1.1"},(0,e.createElement)(t.Path,{d:"M28.97 63.324c18.657-8.128 31.098-13.487 37.323-16.076 17.774-7.393 21.467-8.677 23.874-8.72.53-.009 1.713.122 2.48.745.648.525.826 1.235.911 1.733.085.498.191 1.633.107 2.52-.963 10.12-5.13 34.677-7.25 46.012-.898 4.796-2.664 6.404-4.375 6.561-3.716.342-6.538-2.456-10.138-4.815-5.633-3.693-8.815-5.991-14.283-9.594-6.319-4.164-2.222-6.453 1.379-10.193.942-.98 17.318-15.874 17.634-17.225.04-.169.077-.799-.297-1.131-.375-.333-.927-.22-1.325-.129-.565.128-9.564 6.076-26.996 17.843-2.554 1.754-4.868 2.609-6.94 2.564-2.286-.05-6.681-1.292-9.95-2.354-4.007-1.303-7.193-1.992-6.915-4.205.144-1.152 1.731-2.33 4.761-3.536Z"}))},{name:"tumblr",attributes:{service:"tumblr"},title:"Tumblr",icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Path,{d:"M17.04 21.28h-3.28c-2.84 0-4.94-1.37-4.94-5.02v-5.67H6.08V7.5c2.93-.73 4.11-3.3 4.3-5.48h3.01v4.93h3.47v3.65H13.4v4.93c0 1.47.73 2.01 1.92 2.01h1.73v3.75z"}))},{isDefault:!0,name:"twitter",attributes:{service:"twitter"},title:"Twitter",icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Path,{d:"M22.23,5.924c-0.736,0.326-1.527,0.547-2.357,0.646c0.847-0.508,1.498-1.312,1.804-2.27 c-0.793,0.47-1.671,0.812-2.606,0.996C18.324,4.498,17.257,4,16.077,4c-2.266,0-4.103,1.837-4.103,4.103 c0,0.322,0.036,0.635,0.106,0.935C8.67,8.867,5.647,7.234,3.623,4.751C3.27,5.357,3.067,6.062,3.067,6.814 c0,1.424,0.724,2.679,1.825,3.415c-0.673-0.021-1.305-0.206-1.859-0.513c0,0.017,0,0.034,0,0.052c0,1.988,1.414,3.647,3.292,4.023 c-0.344,0.094-0.707,0.144-1.081,0.144c-0.264,0-0.521-0.026-0.772-0.074c0.522,1.63,2.038,2.816,3.833,2.85 c-1.404,1.1-3.174,1.756-5.096,1.756c-0.331,0-0.658-0.019-0.979-0.057c1.816,1.164,3.973,1.843,6.29,1.843 c7.547,0,11.675-6.252,11.675-11.675c0-0.178-0.004-0.355-0.012-0.531C20.985,7.47,21.68,6.747,22.23,5.924z"}))},{name:"viber",attributes:{service:"viber"},title:"Viber",icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Path,{d:"M11.71203.0005c.38638.0028.61172.01625.61172.01625 5.38513.0315 7.77852 1.79504 8.37687 2.3304 1.984 1.70057 3.05472 5.5111 2.29891 11.55756-.72431 5.82602-5.1017 6.39288-5.889 6.64481-.3464.12597-3.30666.85029-7.14868.53537-.4094.50387-.97625 1.1337-1.38564 1.5746-.75581.7873-1.1967 1.5431-1.984 1.29117-.5511-.16534-.59589-.93344-.59847-1.12289l.00012-2.4672C1.06143 18.95524.51721 14.31903.50042 11.09332l.00032-.38762c.00202-.31662.0079-.61658.01352-.89494.06298-3.11771.66133-5.60558 2.39339-7.33764C5.2951.28057 9.62367.0103 11.46139.0003Zm-.10405 1.6677-.2646.00072c-1.65181.01656-5.1351.27353-7.08158 2.0324-1.44863 1.44862-1.921 3.55859-1.984 6.17242-.00363.3016-.01061.63464-.01283.98989l-.00032.3623c.01372 2.70618.42982 6.44087 4.45353 7.56004 0 0-.0315 3.71606-.0315 4.03098 0 .22044.0315.3779.15747.4094.09447 0 .22044-.0315.3464-.15747.31493-.31492.89186-.97247 1.47081-1.64816l.28844-.33786c.7632-.89696 1.45294-1.73003 1.45294-1.73003 3.27517.18895 5.85751-.44089 6.14094-.53537.66133-.18895 4.21992-.50387 4.81827-5.38513.59835-5.00722-.25193-8.43985-1.88952-9.88848-.50387-.47238-2.67682-1.82653-7.21166-1.85803 0 0-.24378-.01568-.65279-.01762Zm-3.3152 3.6392s.10411.12726.24294.29996l.14782.18482c.15424.1939.32006.406.42803.55446.22044.31492.53536.81879.72431 1.10222.28343.50387.09448 1.03923-.15746 1.25968l-.56685.44088c-.28343.22045-.25194.66134-.25194.66134l.00756.02794c.08711.31137.95295 3.13525 3.89745 3.90855 0 0 .44089.0315.66133-.25193l.44089-.56686c.22044-.28342.72431-.47238 1.25968-.18895.28343.15746.7873.47238 1.10222.72432.14846.10797.36055.27378.55446.42803l.18482.14782c.1727.13882.29995.24294.29995.24294.34642.28343.4094.69282.18896 1.13371-.22045.4094-.53537.7873-.94476 1.13371-.31492.28343-.62984.4094-.94476.47238h-.12597c-.12597 0-.28343-.0315-.4094-.06298-.47238-.12597-1.25968-.47238-2.61383-1.1967-.85029-.47238-1.5746-.97625-2.17295-1.44863-.31492-.25194-.66133-.53536-.97625-.88178l-.12597-.12596c-.34641-.34642-.62984-.66133-.88177-.97625-.47238-.59835-.97626-1.32267-1.44864-2.17295-.72431-1.32267-1.07072-2.10996-1.1967-2.61384-.03148-.12596-.06298-.25193-.06298-.4094v-.12596c.0315-.31492.18896-.62984.47238-.94476.34642-.3779.72432-.69282 1.13372-.94476.44088-.22044.85028-.15746 1.1337.18895Zm3.40113-.99625c1.76853 0 3.26497.59027 4.46293 1.75495 1.20774 1.1742 1.82397 2.77306 1.82397 4.7524 0 .16758-.13584.30343-.30342.30343-.16758 0-.30343-.13585-.30343-.30343 0-1.82183-.55528-3.26256-1.64014-4.3173-1.0831-1.053-2.42726-1.5832-4.0399-1.5832-.16759 0-.30343-.13584-.30343-.30342 0-.16758.13584-.30343.30342-.30343Zm.5868 1.5433.03543.00075c1.28041.10109 2.29241.54805 3.03447 1.35758.72375.79268 1.0888 1.81829 1.05548 2.98455-.00478.1675-.14446.29942-.31197.29463-.1675-.00478-.29942-.14446-.29463-.31197.0289-1.0118-.2815-1.88388-.89662-2.5576-.63187-.6893-1.4998-1.07264-2.6345-1.16222-.16705-.01319-.29178-.1593-.2786-.32636.01225-.15513.13912-.27376.29093-.27936Zm.43732 1.63784c1.31837.07126 2.04193.82301 2.11317 2.17655.0088.16735-.11972.31015-.28706.31895-.16735.00881-.31015-.1197-.31896-.28705-.05518-1.0485-.53616-1.54823-1.5399-1.60249-.16733-.00904-.29565-.15203-.2866-.31936.00904-.16733.15202-.29565.31935-.2866Z"}))},{name:"whatsapp",attributes:{service:"whatsapp"},title:"WhatsApp",icon:()=>(0,e.createElement)(t.SVG,{width:"24",height:"24",viewBox:"0 0 24 24",version:"1.1"},(0,e.createElement)(t.Path,{d:"M12.164 3a8.836 8.836 0 1 1-4.272 16.574L3 21.14l1.595-4.74A8.837 8.837 0 0 1 12.164 3Zm0 1.407c-4.097 0-7.43 3.333-7.43 7.43 0 1.625.526 3.13 1.415 4.355l-.928 2.76 2.855-.915a7.386 7.386 0 0 0 4.088 1.228c4.096 0 7.429-3.332 7.429-7.429 0-4.096-3.333-7.429-7.43-7.429Zm-2.795 3.4c.09 0 .172.004.248.007.221.01.33.023.474.368.103.247.289.702.439 1.066l.104.251c.063.15.11.26.125.29.054.109.103.258.03.402-.072.145-.132.212-.24.339-.109.126-.211.223-.322.357-.098.118-.213.248-.087.464.127.217.562.926 1.205 1.5.828.738 1.503.973 1.743 1.075.182.078.394.058.526-.081.167-.178.37-.478.58-.77.154-.21.337-.233.536-.16.083.03.316.138.575.262l.316.153c.261.126.499.244.59.289.216.109.36.162.414.253.054.09.054.524-.126 1.03-.18.505-.892.922-1.459 1.046-.389.085-.896.148-2.602-.559-2.187-.906-3.593-3.125-3.701-3.27-.108-.144-.884-1.174-.884-2.24 0-1.065.541-1.584.758-1.806.178-.182.473-.266.758-.266Z"}))}];m.forEach((e=>{e.isActive||(e.isActive=(e,t)=>e.service===t.service)}));const d=m,u=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"outermost/social-sharing-link","title":"Social Sharing Link","category":"widgets","description":"Display an icon that shares the current page when clicked.","parent":["outermost/social-sharing"],"textdomain":"social-sharing-block","attributes":{"service":{"type":"string"},"label":{"type":"string"},"phone":{"type":"string"}},"usesContext":["iconBackgroundColor","iconBackgroundColorValue","iconColor","iconColorValue","showLabels","shareCustomLink","linkTitle","url"],"supports":{"reusable":false,"html":false},"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","render":"file:./render.php"}'),{name:p}=u,w={icon:i,edit:t=>{let{attributes:c,context:i,setAttributes:l}=t;const{service:a,label:m,phone:u}=c,{showLabels:p,iconColor:w,iconColorValue:b,iconBackgroundColor:g,iconBackgroundColorValue:E}=i,k=r()("outermost-social-sharing-link","outermost-social-sharing-link-"+a,{[`has-${w}-color`]:w,[`has-${g}-background-color`]:g}),C=(e=>{const t=(0,h.find)(d,{name:e});return t?t.icon:v})(a),V=(e=>{const t=(0,h.find)(d,{name:e});return t?t.title:(0,s.__)("Email this Page","social-sharing-block")})(a),f=m||(e=>{var t,c;const i=(0,h.find)(d,{name:e});if(!i)return(0,s.__)("Mail","social-sharing-block");const l=null!==(t=i?.title)&&void 0!==t?t:(0,s.__)("Social Link","social-sharing-block");return null!==(c=i?.label)&&void 0!==c?c:/* translators: %s: title of the social service. */
(0,s.sprintf)((0,s.__)("Share on %s","social-sharing-block"),l)})(a),x=(0,n.useBlockProps)({className:k,style:{color:b,backgroundColor:E}});return(0,e.createElement)(e.Fragment,null,(0,e.createElement)(n.InspectorControls,null,(0,e.createElement)(o.PanelBody,{title:(0,s.sprintf)(/* translators: %s: name of the social service. */
(0,s.__)("%s settings","social-sharing-block"),V),initialOpen:!1},(0,e.createElement)(o.PanelRow,null,(0,e.createElement)(o.TextControl,{label:(0,s.__)("Share label","social-sharing-block"),help:(0,s.__)("Briefly describe the share link to help screen reader users.","social-sharing-block"),value:m,onChange:e=>l({label:e})})),"whatsapp"===a&&(0,e.createElement)(o.PanelRow,null,(0,e.createElement)(o.TextControl,{label:(0,s.__)("Phone number","social-sharing-block"),value:u,onChange:e=>l({phone:e})})))),(0,e.createElement)("li",x,(0,e.createElement)(o.Button,{className:"wp-block-outermost-social-sharing-link-anchor"},(0,e.createElement)(C,null),(0,e.createElement)("span",{className:r()("wp-block-outermost-social-sharing-link-label",{"screen-reader-text":!p})},f))))},variations:d};(0,l.registerBlockType)({name:p,...u},w)})()})();