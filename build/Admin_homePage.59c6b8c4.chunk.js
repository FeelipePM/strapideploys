"use strict";(self.webpackChunkplathanus_strapi_api=self.webpackChunkplathanus_strapi_api||[]).push([[3981],{95361:(e,t,a)=>{var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=a(97132),o=n(a(45697)),i=a(68547),d=a(49425),u=a(5493),c=a(67826),s=n(a(51623)),f=n(a(60550)),p=a(39198),m=function(e){var t=e.type,a=e.title,n=e.number,o=e.content,m=e.hasLine,g=(0,r.useIntl)().formatMessage;return l.default.createElement(u.Box,null,l.default.createElement(c.Flex,null,l.default.createElement(u.Box,{minWidth:(0,i.pxToRem)(30),marginRight:5},l.default.createElement(s.default,{type:t,number:n})),l.default.createElement(d.Typography,{variant:"delta",as:"h3"},g(a))),l.default.createElement(c.Flex,{alignItems:"flex-start"},l.default.createElement(c.Flex,{justifyContent:"center",minWidth:(0,i.pxToRem)(30),marginBottom:3,marginTop:3,marginRight:5},m&&l.default.createElement(f.default,{type:t,minHeight:t===p.IS_ACTIVE?(0,i.pxToRem)(85):(0,i.pxToRem)(65)})),l.default.createElement(u.Box,{marginTop:2},t===p.IS_ACTIVE&&o)))};m.defaultProps={content:void 0,number:void 0,type:p.IS_NOT_DONE,hasLine:!0},m.propTypes={content:o.default.node,number:o.default.number,title:o.default.shape({id:o.default.string,defaultMessage:o.default.string}).isRequired,type:o.default.oneOf([p.IS_ACTIVE,p.IS_DONE,p.IS_NOT_DONE]),hasLine:o.default.bool};var g=m;t.default=g},1639:(e,t,a)=>{var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(45697)),o=a(5493),i=n(a(95361)),d=a(39198),u=function(e,t){return-1===e||t<e?d.IS_DONE:t>e?d.IS_NOT_DONE:d.IS_ACTIVE},c=function(e){var t=e.sections,a=e.currentSectionKey,n=t.findIndex((function(e){return e.key===a}));return l.default.createElement(o.Box,null,t.map((function(e,a){return l.default.createElement(i.default,{key:e.key,title:e.title,content:e.content,number:a+1,type:u(n,a),hasLine:a!==t.length-1})})))};c.defaultProps={currentSectionKey:void 0},c.propTypes={sections:r.default.arrayOf(r.default.shape({key:r.default.string.isRequired,title:r.default.shape({id:r.default.string,defaultMessage:r.default.string}).isRequired,content:r.default.node})).isRequired,currentSectionKey:r.default.string};var s=c;t.default=s},6239:(e,t,a)=>{var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(59713)),r=n(a(63038)),o=n(a(67294)),i=a(68547),d=a(97132),u=a(9008),c=a(67826),s=a(5493),f=a(49425),p=a(60985),m=a(19408),g=n(a(77602)),h=n(a(1639)),y=n(a(28846));function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var b=function(){var e,t=(0,i.useGuidedTour)(),a=t.guidedTourState,n=t.setSkipped,b=(0,d.useIntl)().formatMessage,E=(0,i.useTracking)().trackUsage,v=Object.entries(y.default).map((function(e){var t=(0,r.default)(e,2),a=t[0],n=t[1];return{key:a,title:n.home.title,content:o.default.createElement(p.LinkButton,{onClick:function(){return E(n.home.trackingEvent)},to:n.home.cta.target,endIcon:o.default.createElement(g.default,null)},b(n.home.cta.title))}})),_=v.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){(0,l.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({isDone:Object.entries(a[e.key]).every((function(e){return(0,r.default)(e,2)[1]}))},e)})),w=null===(e=_.find((function(e){return!e.isDone})))||void 0===e?void 0:e.key;return o.default.createElement(s.Box,{hasRadius:!0,shadow:"tableShadow",paddingTop:7,paddingRight:4,paddingLeft:7,paddingBottom:4,background:"neutral0"},o.default.createElement(u.Stack,{spacing:6},o.default.createElement(f.Typography,{variant:"beta",as:"h2"},b({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"})),o.default.createElement(h.default,{sections:v,currentSectionKey:w})),o.default.createElement(c.Flex,{justifyContent:"flex-end"},o.default.createElement(m.Button,{variant:"tertiary",onClick:function(){n(!0),E("didSkipGuidedtour")}},b({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"}))))};t.default=b},39304:(e,t,a)=>{var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(63038)),r=function(e){return Object.entries(e).every((function(e){var t=(0,l.default)(e,2)[1];return Object.entries(t).every((function(e){return(0,l.default)(e,2)[1]}))}))};t.default=r},46294:(e,t,a)=>{var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(78384)),o=a(97132),i=a(9008),d=n(a(26163)),u=n(a(71533)),c=n(a(63137)),s=n(a(85340)),f=a(68547),p=r.default.a.withConfig({displayName:"ContentBlocks__BlockLink",componentId:"sc-8gdh0l-0"})(["text-decoration:none;"]),m=function(){var e=(0,o.useIntl)().formatMessage;return l.default.createElement(i.Stack,{spacing:5},l.default.createElement(p,{href:"https://strapi.io/resource-center",target:"_blank",rel:"noopener noreferrer nofollow"},l.default.createElement(f.ContentBox,{title:e({id:"app.components.BlockLink.documentation",defaultMessage:"Documentation"}),subtitle:e({id:"app.components.BlockLink.documentation.content",defaultMessage:"Discover the essential concepts, guides and instructions."}),icon:l.default.createElement(d.default,null),iconBackground:"primary100"})),l.default.createElement(p,{href:"https://strapi.io/starters",target:"_blank",rel:"noopener noreferrer nofollow"},l.default.createElement(f.ContentBox,{title:e({id:"app.components.BlockLink.code",defaultMessage:"Code example"}),subtitle:e({id:"app.components.BlockLink.code.content",defaultMessage:"Learn by using ready-made starters for your projects."}),icon:l.default.createElement(u.default,null),iconBackground:"warning100"})),l.default.createElement(p,{href:"https://strapi.io/blog/categories/tutorials",target:"_blank",rel:"noopener noreferrer nofollow"},l.default.createElement(f.ContentBox,{title:e({id:"app.components.BlockLink.tutorial",defaultMessage:"Tutorials"}),subtitle:e({id:"app.components.BlockLink.tutorial.content",defaultMessage:"Follow step-by-step instructions to use and customize Strapi."}),icon:l.default.createElement(c.default,null),iconBackground:"secondary100"})),l.default.createElement(p,{href:"https://strapi.io/blog",target:"_blank",rel:"noopener noreferrer nofollow"},l.default.createElement(f.ContentBox,{title:e({id:"app.components.BlockLink.blog",defaultMessage:"Blog"}),subtitle:e({id:"app.components.BlockLink.blog.content",defaultMessage:"Read the latest news about Strapi and the ecosystem."}),icon:l.default.createElement(s.default,null),iconBackground:"alternative100"})))};t.default=m},25522:(e,t,a)=>{var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(78384)),o=n(a(45697)),i=a(97132),d=a(49425),u=a(85104),c=a(9008),s=a(5493),f=a(19408),p=n(a(77602)),m=(0,r.default)(d.Typography).withConfig({displayName:"HomeHeader__WordWrap",componentId:"sc-12uw7de-0"})(["word-break:break-word;"]),g=(0,r.default)(c.Stack).withConfig({displayName:"HomeHeader__StackCustom",componentId:"sc-12uw7de-1"})(["align-items:flex-start;"]),h=function(e){var t=e.hasCreatedContentType,a=e.onCreateCT,n=(0,i.useIntl)().formatMessage;return l.default.createElement("div",null,l.default.createElement(s.Box,{paddingLeft:6,paddingBottom:10},l.default.createElement(g,{spacing:5},l.default.createElement(d.Typography,{as:"h1",variant:"alpha"},n(t?{id:"app.components.HomePage.welcome.again",defaultMessage:"Welcome \ud83d\udc4b"}:{id:"app.components.HomePage.welcome",defaultMessage:"Welcome on board!"})),l.default.createElement(m,{textColor:"neutral600",variant:"epsilon"},n(t?{id:"app.components.HomePage.welcomeBlock.content.again",defaultMessage:"We hope you are making progress on your project! Feel free to read the latest news about Strapi. We are giving our best to improve the product based on your feedback."}:{id:"app.components.HomePage.welcomeBlock.content",defaultMessage:"Congrats! You are logged as the first administrator. To discover the powerful features provided by Strapi, we recommend you to create your first Content type!"})),t?l.default.createElement(u.Link,{href:"https://strapi.io/blog"},n({id:"app.components.HomePage.button.blog",defaultMessage:"See more on the blog"})):l.default.createElement(f.Button,{size:"L",onClick:a,endIcon:l.default.createElement(p.default,null)},n({id:"app.components.HomePage.create",defaultMessage:"Create your first Content type"})))))};h.defaultProps={hasCreatedContentType:void 0,onCreateCT:void 0},h.propTypes={hasCreatedContentType:o.default.bool,onCreateCT:o.default.func};var y=h;t.default=y},32878:(e,t,a)=>{var n=a(95318);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(78384)),o=a(97132),i=a(49425),d=a(5493),u=a(9008),c=a(34626),s=a(60985),f=a(85104),p=n(a(43257)),m=n(a(77108)),g=n(a(2807)),h=n(a(27962)),y=n(a(70555)),k=n(a(4250)),b=n(a(30153)),E=(0,r.default)(g.default).withConfig({displayName:"SocialLinks__StyledDiscord",componentId:"sc-1ck3zd4-0"})(["path{fill:#7289da !important;}"]),v=(0,r.default)(h.default).withConfig({displayName:"SocialLinks__StyledReddit",componentId:"sc-1ck3zd4-1"})(["> path:first-child{fill:#ff4500;}"]),_=(0,r.default)(y.default).withConfig({displayName:"SocialLinks__StyledStrapi",componentId:"sc-1ck3zd4-2"})(["> path:first-child{fill:#8e75ff;}> path:nth-child(2){fill:#8e75ff;}> path:nth-child(3){fill:#8e75ff;}"]),w=(0,r.default)(k.default).withConfig({displayName:"SocialLinks__StyledTwitter",componentId:"sc-1ck3zd4-3"})(["path{fill:#1da1f2 !important;}"]),C=(0,r.default)(b.default).withConfig({displayName:"SocialLinks__StyledDiscourse",componentId:"sc-1ck3zd4-4"})(["> path:first-child{fill:#231f20;}> path:nth-child(2){fill:#fff9ae;}> path:nth-child(3){fill:#00aeef;}> path:nth-child(4){fill:#00a94f;}> path:nth-child(5){fill:#f15d22;}> path:nth-child(6){fill:#e31b23;}"]),S=[{name:"Github",link:"https://github.com/strapi/strapi/",icon:l.default.createElement(m.default,{fill:"#7289DA"}),alt:"github"},{name:"Discord",link:"https://slack.strapi.io/",icon:l.default.createElement(E,null),alt:"discord"},{name:"Reddit",link:"https://www.reddit.com/r/Strapi/",icon:l.default.createElement(v,null),alt:"reddit"},{name:"Twitter",link:"https://twitter.com/strapijs",icon:l.default.createElement(w,null),alt:"twitter"},{name:"Forum",link:"https://forum.strapi.io",icon:l.default.createElement(C,null),alt:"forum"},{name:"Blog",link:"https://strapi.io/blog?utm_source=referral&utm_medium=admin&utm_campaign=career%20page",icon:l.default.createElement(_,null),alt:"blog"},{name:"We are hiring!",link:"https://strapi.io/careers?utm_source=referral&utm_medium=admin&utm_campaign=blog",icon:l.default.createElement(_,null),alt:"career"}],O=(0,r.default)(s.LinkButton).withConfig({displayName:"SocialLinks__LinkCustom",componentId:"sc-1ck3zd4-5"})(["display:flex;align-items:center;border:none;svg{width:",";height:",";}span{word-break:keep-all;}"],(function(e){return e.theme.spaces[6]}),(function(e){return e.theme.spaces[6]})),T=(0,r.default)(c.Grid).withConfig({displayName:"SocialLinks__GridGap",componentId:"sc-1ck3zd4-6"})(["row-gap:",";column-gap:",";"],(function(e){return e.theme.spaces[2]}),(function(e){return e.theme.spaces[4]})),M=function(){var e=(0,o.useIntl)().formatMessage;return l.default.createElement(d.Box,{as:"aside","aria-labelledby":"join-the-community",background:"neutral0",hasRadius:!0,paddingRight:5,paddingLeft:5,paddingTop:6,paddingBottom:6,shadow:"tableShadow"},l.default.createElement(d.Box,{paddingBottom:7},l.default.createElement(u.Stack,{spacing:5},l.default.createElement(u.Stack,{spacing:3},l.default.createElement(i.Typography,{variant:"delta",as:"h2",id:"join-the-community"},e({id:"app.components.HomePage.community",defaultMessage:"Join the community"})),l.default.createElement(i.Typography,{textColor:"neutral600"},e({id:"app.components.HomePage.community.content",defaultMessage:"Discuss with team members, contributors and developers on different channels"}))),l.default.createElement(f.Link,{href:"https://portal.productboard.com/strapi/1-roadmap/tabs/2-under-consideration",endIcon:l.default.createElement(p.default,null)},e({id:"app.components.HomePage.roadmap",defaultMessage:"See our road map"})))),l.default.createElement(T,null,S.map((function(e){return l.default.createElement(c.GridItem,{col:6,s:12,key:e.name},l.default.createElement(O,{size:"L",startIcon:e.icon,variant:"tertiary",href:e.link},e.name))}))))};t.default=M},86094:(e,t,a)=>{var n=a(95318),l=a(50008);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!==typeof e)return{default:e};var a=_(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,a&&a.set(e,n);return n}(a(67294)),o=a(97132),i=n(a(78384)),d=a(15482),u=a(39711),c=a(68547),s=a(78862),f=a(62031),p=a(5493),m=a(34626),g=n(a(42462)),h=a(63376),y=n(a(39304)),k=n(a(6239)),b=n(a(32878)),E=n(a(25522)),v=n(a(46294));function _(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_=function(e){return e?a:t})(e)}var w=(0,i.default)(p.Box).withConfig({displayName:"HomePage__LogoContainer",componentId:"sc-1md9zz4-0"})(["position:absolute;top:0;right:0;img{width:","rem;}"],9.375),C=function(){var e=(0,h.useModels)(),t=e.collectionTypes,a=e.singleTypes,n=e.isLoading,l=(0,c.useGuidedTour)(),i=l.guidedTourState,_=l.isGuidedTourVisible,C=l.isSkipped,S=!(0,y.default)(i)&&_&&!C,O=(0,u.useHistory)().push,T=(0,r.useMemo)((function(){var e=function(e){return e.filter((function(e){return e.isDisplayed}))};return e(t).length>1||e(a).length>0}),[t,a]);return n?r.default.createElement(c.LoadingIndicatorPage,null):r.default.createElement(s.Layout,null,r.default.createElement(o.FormattedMessage,{id:"HomePage.helmet.title",defaultMessage:"Homepage"},(function(e){return r.default.createElement(d.Helmet,{title:e[0]})})),r.default.createElement(f.Main,null,r.default.createElement(w,null,r.default.createElement("img",{alt:"","aria-hidden":!0,src:g.default})),r.default.createElement(p.Box,{padding:10},r.default.createElement(m.Grid,null,r.default.createElement(m.GridItem,{col:8,s:12},r.default.createElement(E.default,{onCreateCT:function(e){e.preventDefault(),O("/plugins/content-type-builder/content-types/create-content-type")},hasCreatedContentType:T}))),r.default.createElement(m.Grid,{gap:6},r.default.createElement(m.GridItem,{col:8,s:12},S?r.default.createElement(k.default,null):r.default.createElement(v.default,null)),r.default.createElement(m.GridItem,{col:4,s:12},r.default.createElement(b.default,null))))))},S=(0,r.memo)(C);t.default=S},42462:(e,t,a)=>{e.exports=a.p+"2a9e9ef5c4c775bb7c7b.png"}}]);