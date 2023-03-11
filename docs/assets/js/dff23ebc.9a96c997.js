"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[110],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=i.createContext({}),p=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return i.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=a,k=c["".concat(d,".").concat(h)]||c[h]||u[h]||r;return n?i.createElement(k,l(l({ref:t},m),{},{components:n})):i.createElement(k,l({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=h;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>m});var i=n(7462),a=(n(7294),n(3905)),r=n(2650);const l={sidebar_position:5,sidebar_label:"OpacitySlider",description:"A slider to change the color's opacity."},o="<OpacitySlider />",d={unversionedId:"API/OpacitySlider",id:"API/OpacitySlider",title:"<OpacitySlider />",description:"A slider to change the color's opacity.",source:"@site/docs/API/OpacitySlider.mdx",sourceDirName:"API",slug:"/API/OpacitySlider",permalink:"/reanimated-color-picker/docs/API/OpacitySlider",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"OpacitySlider",description:"A slider to change the color's opacity."},sidebar:"tutorialSidebar",previous:{title:"SaturationSlider",permalink:"/reanimated-color-picker/docs/API/SaturationSlider"},next:{title:"Panel1",permalink:"/reanimated-color-picker/docs/API/Panel1"}},p={},m=[],c={toc:m};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"opacityslider-"},(0,a.kt)("inlineCode",{parentName:"h1"},"<OpacitySlider />")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"opacity",src:n(1962).Z,width:"256",height:"40"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("h3",{parentName:"li",id:"a-slider-to-change-the-colors-opacity"},"A slider to change the color's opacity."))),(0,a.kt)(r.ZP,{mdxType:"SliderProps"}))}u.isMDXComponent=!0},2650:(e,t,n)=>{n.d(t,{ZP:()=>l});var i=n(7462),a=(n(7294),n(3905));const r={toc:[{value:"Props",id:"props",level:2},{value:"<code>thumbSize</code>",id:"thumbsize",level:3},{value:"<code>thumbColor</code>",id:"thumbcolor",level:3},{value:"<code>thumbShape</code>",id:"thumbshape",level:3},{value:"<code>thumbStyle</code>",id:"thumbstyle",level:3},{value:"<code>thumbInnerStyle</code>",id:"thumbinnerstyle",level:3},{value:"<code>renderThumb</code>",id:"renderthumb",level:3},{value:"<code>ThumbProps</code>",id:"thumbprops",level:4},{value:"<code>reverse</code>",id:"reverse",level:3},{value:"<code>vertical</code>",id:"vertical",level:3},{value:"<code>adaptSpectrum</code>",id:"adaptspectrum",level:3},{value:"<code>style</code>",id:"style",level:3}]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"props"},"Props"),(0,a.kt)("h3",{id:"thumbsize"},(0,a.kt)("inlineCode",{parentName:"h3"},"thumbSize")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The size of the slider's thumb."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: number")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default: 35"))),(0,a.kt)("h3",{id:"thumbcolor"},(0,a.kt)("inlineCode",{parentName:"h3"},"thumbColor")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The color of the slider's thumb."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default: interactive*"))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"mdxAdmonitionTitle"},"*","interactive")),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"The color of the thumb will be adjusted according to the contrast ratio, in the absence of a specific color value."))),(0,a.kt)("h3",{id:"thumbshape"},(0,a.kt)("inlineCode",{parentName:"h3"},"thumbShape")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The shape and appearance of the slider's thumb."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: string")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default: 'ring'")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"values:"),(0,a.kt)("shapes",null))),(0,a.kt)("h3",{id:"thumbstyle"},(0,a.kt)("inlineCode",{parentName:"h3"},"thumbStyle")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Thumb's containing View's style."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: ViewStyle"))),(0,a.kt)("h3",{id:"thumbinnerstyle"},(0,a.kt)("inlineCode",{parentName:"h3"},"thumbInnerStyle")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Thumb's inner View(s) style."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: ViewStyle"))),(0,a.kt)("h3",{id:"renderthumb"},(0,a.kt)("inlineCode",{parentName:"h3"},"renderThumb")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Function which receives ",(0,a.kt)("inlineCode",{parentName:"li"},"ThumbProps")," and returns a custom thumb component."),(0,a.kt)("li",{parentName:"ul"},"Overrides ",(0,a.kt)("inlineCode",{parentName:"li"},"thumbShape"))),(0,a.kt)("h4",{id:"thumbprops"},(0,a.kt)("inlineCode",{parentName:"h4"},"ThumbProps")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Prop"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"positionStyle")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"StyleProp")),(0,a.kt)("td",{parentName:"tr",align:"left"},"This style determines the position of the thumb and is a crucial element that should be included.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"width")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Extracted from the ",(0,a.kt)("inlineCode",{parentName:"td"},"thumbSize")," prop and it's important for thumb position calculation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"height")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"number")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Extracted from the ",(0,a.kt)("inlineCode",{parentName:"td"},"thumbSize")," prop and it's important for thumb position calculation.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"adaptiveColor")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"SharedValue<string>")),(0,a.kt)("td",{parentName:"tr",align:"left"},"White or black based on the contrast ratio.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"currentColor")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"SharedValue<string>")),(0,a.kt)("td",{parentName:"tr",align:"left"},"This shared value will update whenever the color changes.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"initialColor")),(0,a.kt)("td",{parentName:"tr",align:"center"},(0,a.kt)("inlineCode",{parentName:"td"},"string")),(0,a.kt)("td",{parentName:"tr",align:"left"},"The initial color value as a ",(0,a.kt)("inlineCode",{parentName:"td"},"string"),".")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Example Usage:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import Animated, { useAnimatedStyle } from 'react-native-reanimated';\nimport type { RenderThumbProps } from 'reanimated-color-picker';\n\nfunction MyCustomThumb({\n  width,\n  height,\n  positionStyle,\n  adaptiveColor,\n  currentColor,\n  initialColor,\n}: RenderThumbProps) {\n\n  const animatedStyle = useAnimatedStyle(() => ({\n    borderColor: adaptiveColor.value,\n    backgroundColor: currentColor.value,\n  }));\n\n  return (\n    <Animated.View\n      style={[\n        { width, height, borderWidth: 1, borderRadius: width / 2, overflow: 'hidden' },\n        animatedStyle,\n        positionStyle,\n        ]}\n    >\n      <View style={{ backgroundColor: initialColor, width: '50%', height, alignSelf: 'flex-end' }} />\n    </Animated.View>\n  );\n}\n")),(0,a.kt)("h3",{id:"reverse"},(0,a.kt)("inlineCode",{parentName:"h3"},"reverse")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Reverse the slider direction."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: boolean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default: false"))),(0,a.kt)("h3",{id:"vertical"},(0,a.kt)("inlineCode",{parentName:"h3"},"vertical")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Change the slider orientation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: boolean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default: false"))),(0,a.kt)("h3",{id:"adaptspectrum"},(0,a.kt)("inlineCode",{parentName:"h3"},"adaptSpectrum")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Slider background color spectrum adapts to changes in saturation and brightness."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: boolean")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default: false"))),(0,a.kt)("h3",{id:"style"},(0,a.kt)("inlineCode",{parentName:"h3"},"style")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The style of the slider's container."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type: ViewStyle"))),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Certain style properties will be overridden."))))}l.isMDXComponent=!0},1962:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAoCAYAAAAR+iSJAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAHtGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTA2LTIzVDE3OjIxOjA5KzAzOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0wNy0wNFQyMjoyMDo1MiswMzowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0wNy0wNFQyMjoyMDo1MiswMzowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo2NGFlYjY2NC1kZDNlLWE5NDItYWU2Mi05ODBjNDI3NTU4MjUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDowMTMzYzk3MS02ZWVmLWFmNDQtOWJhOC00ZmY5MDhlOTcxNzQiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiNjNlYTlmNy0zZGMzLTk1NGEtODQ5Ny04Y2Y1Y2Q1Mjg2MzYiPiA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8cmRmOkJhZz4gPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6ODIzOGUxYzItNTNmMy1iYTQ5LWI2NGEtMGZjMjYyNTcwYWMyPC9yZGY6bGk+IDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmI5NjIxN2JiLWIyYjYtODE0OS04NTdlLTA3NTEzYjQyZDhjNTwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmI2M2VhOWY3LTNkYzMtOTU0YS04NDk3LThjZjVjZDUyODYzNiIgc3RFdnQ6d2hlbj0iMjAyMi0wNi0yM1QxNzoyMTowOSswMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDphMjYxOThlOC00MDhmLWY2NDItOWY3NC1mZTVlODUwMDY2ZDQiIHN0RXZ0OndoZW49IjIwMjItMDYtMjNUMTc6MjQ6MTgrMDM6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NjRhZWI2NjQt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"}}]);