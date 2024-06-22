(()=>{var e,o={978:(e,o,l)=>{"use strict";const n=window.React,a=window.wp.primitives,r=(0,n.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.Path,{d:"M19.5 4.5h-7V6h4.44l-5.97 5.97 1.06 1.06L18 7.06v4.44h1.5v-7Zm-13 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-3H17v3a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h3V5.5h-3Z"})),t=window.wp.blocks;var i=l(184),s=l.n(i);const c=window.wp.element,u=window.wp.blockEditor,h=window.wp.components,g=window.wp.keycodes,m=window.wp.url,p=window.wp.compose,d=window.wp.i18n,k=(0,n.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})),v=(0,n.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.Path,{d:"M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"})),b=(0,n.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,n.createElement)(a.Path,{d:"M17.031 4.703 15.576 4l-1.56 3H14v.03l-2.324 4.47H9.5V13h1.396l-1.502 2.889h-.95a3.694 3.694 0 0 1 0-7.389H10V7H8.444a5.194 5.194 0 1 0 0 10.389h.17L7.5 19.53l1.416.719L15.049 8.5h.507a3.694 3.694 0 0 1 0 7.39H14v1.5h1.556a5.194 5.194 0 0 0 .273-10.383l1.202-2.304Z"})),w=["outermost/social-sharing-link"],f=[{name:(0,d.__)("Small","social-sharing-block"),value:"has-small-icon-size"},{name:(0,d.__)("Normal","social-sharing-block"),value:"has-normal-icon-size"},{name:(0,d.__)("Large","social-sharing-block"),value:"has-large-icon-size"},{name:(0,d.__)("Huge","social-sharing-block"),value:"has-huge-icon-size"}],C=(0,u.withColors)({iconBackgroundColor:"icon-background-color",iconColor:"icon-color"})((function(e){var o,l;const{clientId:a,attributes:r,iconBackgroundColor:t,iconColor:i,isSelected:C,setAttributes:_,setIconBackgroundColor:y,setIconColor:x}=e,{iconBackgroundColorValue:E,customIconBackgroundColor:B,iconColorValue:S,layout:V,size:L,showLabels:I,shareCustomLink:T,url:O,linkTitle:P}=r,[z,A]=(0,c.useState)(!1),[H,N]=(0,c.useState)(null),M=r.className?.includes("is-style-logos-only"),D=(0,c.useRef)(),G=(0,c.useRef)({});(0,c.useEffect)((()=>{M?(G.current={iconBackgroundColor:t,iconBackgroundColorValue:E,customIconBackgroundColor:B},_({iconBackgroundColor:void 0,customIconBackgroundColor:void 0,iconBackgroundColorValue:void 0})):_({...G.current})}));const j=s()(L,{"has-icon-color":i.color||S,"has-icon-background-color":t.color||E}),R=(0,n.createElement)("li",{className:"wp-block-outermost-social-sharing__social-placeholder"},(0,n.createElement)("div",{className:"wp-block-outermost-social-sharing__social-placeholder-icons"},(0,n.createElement)("div",{className:"outermost-social-sharing-link outermost-social-sharing-link-facebook"}),(0,n.createElement)("div",{className:"outermost-social-sharing-link outermost-social-sharing-link-twitter"}),(0,n.createElement)("div",{className:"outermost-social-sharing-link outermost-social-sharing-link-linkedin"}))),Z=(0,n.createElement)("li",{className:"wp-block-outermost-social-sharing__social-prompt"},(0,d.__)("Click plus to add","social-sharing-block")),F=(0,u.useBlockProps)({ref:(0,p.useMergeRefs)([N,D]),onKeyDown:function(e){g.isKeyboardEvent.primary(e,"k")?Q(e):g.isKeyboardEvent.primaryShift(e,"k")&&W()},className:j}),K=(0,u.useInnerBlocksProps)(F,{allowedBlocks:w,placeholder:C?Z:R,templateLock:!1,orientation:null!==(o=V?.orientation)&&void 0!==o?o:"horizontal",__experimentalAppenderTagName:"li"}),U=[{value:i.color||S,onChange:e=>{x(e),_({iconColorValue:e})},label:(0,d.__)("Icon color","social-sharing-block"),resetAllFilter:()=>{x(void 0),_({iconColorValue:void 0})}}];M||U.push({value:t.color||E,onChange:e=>{y(e),_({iconBackgroundColorValue:e})},label:(0,d.__)("Icon background","social-sharing-block"),resetAllFilter:()=>{y(void 0),_({iconBackgroundColorValue:void 0})}});const $=(0,u.__experimentalUseMultipleOriginColorsAndGradients)(),J=null===(l=$?.hasColorsOrGradients)||void 0===l||l,q=!!O;function Q(e){e.preventDefault(),A(!0)}function W(){_({url:void 0}),A(!1)}return(0,n.createElement)(n.Fragment,null,(0,n.createElement)(u.BlockControls,{group:"other"},(0,n.createElement)(h.ToolbarDropdownMenu,{label:(0,d.__)("Size","social-sharing-block"),text:(0,d.__)("Size","social-sharing-block"),icon:null,popoverProps:{position:"bottom right"}},(({onClose:e})=>(0,n.createElement)(h.MenuGroup,null,f.map((o=>(0,n.createElement)(h.MenuItem,{icon:(L===o.value||!L&&"has-normal-icon-size"===o.value)&&k,isSelected:L===o.value,key:o.value,onClick:()=>{_({size:o.value})},onClose:e,role:"menuitemradio"},o.name))))))),T&&(0,n.createElement)(u.BlockControls,{group:"inline"},!q&&(0,n.createElement)(h.ToolbarButton,{name:"link",icon:v,title:(0,d.__)("Link","social-sharing-block"),shortcut:g.displayShortcut.primary("k"),onClick:Q}),q&&(0,n.createElement)(h.ToolbarButton,{name:"link",icon:b,title:(0,d.__)("Unlink","social-sharing-block"),shortcut:g.displayShortcut.primaryShift("k"),onClick:W,isActive:!0})),C&&T&&(z||q)&&(0,n.createElement)(h.Popover,{placement:"bottom",onClose:()=>A(!1),anchor:H,focusOnMount:!!z&&"firstElement",__unstableSlotName:"__unstable-block-tools-after",shift:!0},(0,n.createElement)(u.__experimentalLinkControl,{className:"wp-block-navigation-link__inline-link-input",value:{url:O},onChange:({url:e=""})=>_({url:(0,m.prependHTTP)(e)}),onRemove:()=>W(),forceIsEditingLink:z,settings:[]})),(0,n.createElement)(u.InspectorControls,null,(0,n.createElement)(h.PanelBody,{title:(0,d.__)("Share settings","social-sharing-block")},(0,n.createElement)(h.ToggleControl,{checked:I,label:(0,d.__)("Show labels","social-sharing-block"),onChange:()=>_({showLabels:!I})}),(0,n.createElement)(h.ToggleControl,{checked:T,label:(0,d.__)("Share custom link","social-sharing-block"),onChange:()=>_({shareCustomLink:!T})}),T&&(0,n.createElement)(h.TextControl,{label:(0,d.__)("Link title","social-sharing-block"),value:P,onChange:e=>_({linkTitle:e})}))),J&&(0,n.createElement)(u.InspectorControls,{group:"color"},U.map((({onChange:e,label:o,value:l,resetAllFilter:r})=>(0,n.createElement)(u.__experimentalColorGradientSettingsDropdown,{key:`social-sharing-color-${o}`,__experimentalIsRenderedInSidebar:!0,settings:[{colorValue:l,label:o,onColorChange:e,isShownByDefault:!0,resetAllFilter:r,enableAlpha:!0}],panelId:a,...$}))),!M&&(0,n.createElement)(u.ContrastChecker,{textColor:S,backgroundColor:E,isLargeText:!1})),(0,n.createElement)("ul",{...K}))})),_=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"outermost/social-sharing","title":"Social Sharing","category":"widgets","description":"Display icons that share the current page when clicked.","keywords":["icon","social","links","share"],"textdomain":"social-sharing-block","attributes":{"iconColor":{"type":"string"},"customIconColor":{"type":"string"},"iconColorValue":{"type":"string"},"iconBackgroundColor":{"type":"string"},"customIconBackgroundColor":{"type":"string"},"iconBackgroundColorValue":{"type":"string"},"showLabels":{"type":"boolean","default":false},"size":{"type":"string"},"shareCustomLink":{"type":"boolean","default":false},"linkTitle":{"type":"string"},"url":{"type":"string"}},"providesContext":{"iconBackgroundColor":"iconBackgroundColor","iconBackgroundColorValue":"iconBackgroundColorValue","iconColor":"iconColor","iconColorValue":"iconColorValue","showLabels":"showLabels","shareCustomLink":"shareCustomLink","linkTitle":"linkTitle","url":"url"},"supports":{"align":["left","center","right"],"anchor":true,"__experimentalExposeControlsToChildren":true,"layout":{"allowSwitching":false,"allowInheriting":false,"allowVerticalAlignment":false,"default":{"type":"flex"}},"__experimentalLayout":{"allowSwitching":false,"allowInheriting":false,"allowVerticalAlignment":false,"default":{"type":"flex"}},"color":{"enableContrastChecker":false,"background":true,"gradients":true,"text":false,"__experimentalDefaultControls":{"background":false}},"spacing":{"blockGap":["horizontal","vertical"],"margin":true,"padding":true,"units":["px","em","rem","vh","vw"],"__experimentalDefaultControls":{"blockGap":true,"margin":false,"padding":false}},"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":false,"radius":false,"style":false,"width":false}}},"styles":[{"name":"default","label":"Default","isDefault":true},{"name":"logos-only","label":"Logos Only"},{"name":"pill-shape","label":"Pill Shape"}],"editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}'),{name:y}=_,x={example:{innerBlocks:[{name:"outermost/social-sharing-link",attributes:{service:"facebook"}},{name:"outermost/social-sharing-link",attributes:{service:"x"}},{name:"outermost/social-sharing-link",attributes:{service:"linkedin"}}]},icon:r,edit:C,save:function(e){const{attributes:{iconBackgroundColorValue:o,iconColorValue:l,showLabels:a,size:r}}=e,t=s()(r,{"has-visible-labels":a,"has-icon-color":l,"has-icon-background-color":o}),i=u.useBlockProps.save({className:t}),c=u.useInnerBlocksProps.save(i);return(0,n.createElement)("ul",{...c})}};(0,t.registerBlockType)({name:y,..._},x)},184:(e,o)=>{var l;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],o=0;o<arguments.length;o++){var l=arguments[o];if(l){var r=typeof l;if("string"===r||"number"===r)e.push(l);else if(Array.isArray(l)){if(l.length){var t=a.apply(null,l);t&&e.push(t)}}else if("object"===r){if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]")){e.push(l.toString());continue}for(var i in l)n.call(l,i)&&l[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(l=function(){return a}.apply(o,[]))||(e.exports=l)}()}},l={};function n(e){var a=l[e];if(void 0!==a)return a.exports;var r=l[e]={exports:{}};return o[e](r,r.exports,n),r.exports}n.m=o,e=[],n.O=(o,l,a,r)=>{if(!l){var t=1/0;for(u=0;u<e.length;u++){for(var[l,a,r]=e[u],i=!0,s=0;s<l.length;s++)(!1&r||t>=r)&&Object.keys(n.O).every((e=>n.O[e](l[s])))?l.splice(s--,1):(i=!1,r<t&&(t=r));if(i){e.splice(u--,1);var c=a();void 0!==c&&(o=c)}}return o}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[l,a,r]},n.n=e=>{var o=e&&e.__esModule?()=>e.default:()=>e;return n.d(o,{a:o}),o},n.d=(e,o)=>{for(var l in o)n.o(o,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:o[l]})},n.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),(()=>{var e={751:0,680:0};n.O.j=o=>0===e[o];var o=(o,l)=>{var a,r,[t,i,s]=l,c=0;if(t.some((o=>0!==e[o]))){for(a in i)n.o(i,a)&&(n.m[a]=i[a]);if(s)var u=s(n)}for(o&&o(l);c<t.length;c++)r=t[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(u)},l=globalThis.webpackChunksocial_sharing_block=globalThis.webpackChunksocial_sharing_block||[];l.forEach(o.bind(null,0)),l.push=o.bind(null,l.push.bind(l))})();var a=n.O(void 0,[680],(()=>n(978)));a=n.O(a)})();