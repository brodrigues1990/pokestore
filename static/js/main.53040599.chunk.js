(this.webpackJsonppokestore=this.webpackJsonppokestore||[]).push([[0],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),i=(a(85),a(32)),l=a(8),m=a(29),s=a(151),p=a(152),u=a(154),d=a(68),b=a.n(d).a.create({baseURL:"https://pokeapi.co/api/v2/"}),g=a(77),h=(Object(g.a)({palette:{primary:{light:"#015d82",main:"#004561",dark:"#03374c",contrastText:"#000"}}}),Object(g.a)({palette:{primary:{light:"#da1e37",main:"#bd1f36",dark:"#85182a",contrastText:"#fff"}}}),Object(g.a)({palette:{primary:{light:"#97d1f4",main:"#74bbe8",dark:"#2d92d1",contrastText:"#fff"}}}),Object(g.a)({palette:{primary:{light:"#73a942",main:"#538d22",dark:"#245501",contrastText:"#fff"}}}),Object(s.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}))),E=function(e){var t=h(),a=(Object(l.f)(),Object(n.useState)([])),o=Object(m.a)(a,2);o[0],o[1];return Object(n.useEffect)((function(){}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/market"},r.a.createElement(p.a,{color:"primary","aria-label":"Adicionar Noticia",className:t.fab},r.a.createElement(u.a,null))))},f=a(170),k=a(176),x=a(54),v=a.n(x),j=a(72),O=Object(n.createContext)(),w=function(){var e=Object(n.useContext)(O);return{pokemon:e.pokemon,setPokemon:e.setPokemon}},C=function(e){var t=e.children,a=Object(n.useState)(),o=Object(m.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)({}),s=Object(m.a)(l,2),p=(s[0],s[1],function(){var e=Object(j.a)(v.a.mark((function e(){return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b.get("/pokemon?limit=100").then((function(e){var t=e.data.results,a=[];return t.forEach((function(e,t){a.push({id:t+1,name:e.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png"),image:"https://pokeres.bastionbot.org/images/pokemon/".concat(t+1,".png"),price:Math.floor(100*Math.random())})})),i(a),!0}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());return Object(n.useEffect)((function(){p(),console.log(c)}),[]),r.a.createElement(O.Provider,{value:{pokemon:c,setPokemon:i}},t)},y=a(27),I=a(166),N=a(167),P=a(180),F=a(163),S=a(181),B=a(179),T=a(168),R=a(169),A=a(12),M=a(73),z=a.n(M),L=a(155),G=a(74),X=a.n(G),D=a(156),H=Object(s.a)((function(e){return{root:Object(y.a)({position:"fixed",bottom:e.spacing(2),right:"315px"},e.breakpoints.down("xs"),{right:e.spacing(2)}),ScrollTopFab:{backgroundColor:"#005BAC",color:"#fff","&:active":{color:"#000",boxShadow:"none"}}}})),J=function(e){var t=e.window,a=H(),n=Object(L.a)({target:t?t():void 0,disableHysteresis:!0,threshold:100});return r.a.createElement(D.a,{in:n},r.a.createElement("div",{onClick:function(e){e.preventDefault();var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",className:a.root},r.a.createElement(p.a,{className:a.ScrollTopFab,size:"small","aria-label":"de volta ao inicio"},r.a.createElement(X.a,null))))},U=a(157),V=a(158),$=a(159),q=a(183),_=a(160),K=a(182),Q=a(161),W=a(162),Y=a(165),Z=a(164),ee=Object(n.createContext)(),te=function(){var e=Object(n.useContext)(ee);return{cartItem:e.cartItem,setCartItem:e.setCartItem}},ae=function(e){var t=e.children,a=Object(n.useState)(),o=Object(m.a)(a,2),c=o[0],i=o[1];return r.a.createElement(ee.Provider,{value:{cartItem:c,setCartItem:i}},t)},ne=a(75),re=a.n(ne),oe=Object(s.a)((function(e){return{toolbar:e.mixins.toolbar,buyButton:{position:"absolute",bottom:0,right:0,width:"100%",textAlign:"center",height:"50px",borderRadius:0},resumeBuy:{position:"absolute",bottom:"55px",right:0,width:"100%",height:"30px",borderTop:"1px solid rgba(0, 0, 0, 0.12)"},avatarContainer:{borderRadius:0},pokedexImage:{top:5,height:25,position:"relative",paddingRight:10}}})),ce=function(e){var t=oe(),a=te(),n=a.cartItem;a.setCartItem;return console.log(n),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:t.toolbar}),r.a.createElement(U.a,{subheader:r.a.createElement(V.a,{component:"div",id:"nested-list-subheader"},r.a.createElement("img",{src:re.a,alt:"PokeStore",className:t.pokedexImage}),"Carrinho")},r.a.createElement($.a,null),n?r.a.createElement(q.a,{key:n.id},r.a.createElement(_.a,null,r.a.createElement(K.a,{className:t.avatarContainer,alt:"Pokemon",src:n.image})),r.a.createElement(Q.a,{primary:"Pokemon",secondary:"R$ XX,XX"}),r.a.createElement(W.a,null,r.a.createElement(F.a,{edge:"end","aria-label":"delete"},r.a.createElement(Z.a,null)))):"Carrinho Vazio"),r.a.createElement(Y.a,{variant:"contained",className:t.buyButton,color:"primary",href:"#contained-buttons"},"Finalizar"))},ie=Object(s.a)((function(e){var t;return{root:{display:"flex"},logoContainer:Object(y.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),logoImage:{height:"75px",position:"absolute",top:"5px"},search:(t={position:"relative",backgroundColor:Object(A.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(A.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},Object(y.a)(t,e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),Object(y.a)(t,"borderRadius",100),t),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(y.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"0","&:focus":{width:"20ch"}}),drawer:Object(y.a)({},e.breakpoints.up("sm"),{width:300,flexShrink:0}),appBar:Object(y.a)({zIndex:"1000000000000",padding:e.spacing(0)},e.breakpoints.up("sm"),{width:"100%",padding:e.spacing(0,2)}),menuButton:Object(y.a)({},e.breakpoints.up("sm"),{display:"none"}),drawerPaper:{width:300},content:{flexGrow:1,padding:e.spacing(13,5,5,5)}}})),le=function(e){var t=e.window,a=e.children,n=ie(),o=r.a.useState(!1),c=Object(m.a)(o,2),i=c[0],l=c[1],s=function(){l(!i)},p=void 0!==t?function(){return t().document.body}:void 0;return r.a.createElement("div",{className:n.root},r.a.createElement(I.a,{position:"fixed",className:n.appBar},r.a.createElement(N.a,null,r.a.createElement("div",{className:n.logoContainer},r.a.createElement("img",{src:z.a,alt:"PokeStore",className:n.logoImage})),r.a.createElement("div",{className:n.search},r.a.createElement("div",{className:n.searchIcon},r.a.createElement(T.a,null)),r.a.createElement(P.a,{placeholder:"Ca\xe7ar Pok\xe9mon...",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"Ca\xe7ar Pok\xe9mon..."}})),r.a.createElement(F.a,{color:"inherit","aria-label":"open drawer",edge:"end",onClick:s,className:n.menuButton},r.a.createElement(R.a,null)))),r.a.createElement("main",{className:n.content},a,r.a.createElement(J,e)),r.a.createElement("nav",{className:n.drawer,"aria-label":"mailbox folders"},r.a.createElement(S.a,{smUp:!0,implementation:"css"},r.a.createElement(B.a,{container:p,variant:"temporary",anchor:"right",open:i,onClose:s,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement(ce,null))),r.a.createElement(S.a,{xsDown:!0,implementation:"css"},r.a.createElement(B.a,{classes:{paper:n.drawerPaper},variant:"permanent",anchor:"right",open:!0},r.a.createElement(ce,null)))))},me=a(171),se=a(172),pe=a(173),ue=a(48),de=a(174),be=a(175),ge=a(42),he=Object(s.a)((function(e){return{cardMedia:{width:"130px",height:"130px",margin:"auto",marginTop:"10px"},cardContent:{textAlign:"center"},cardActions:{padding:0},cardButton:{width:"100%"}}})),Ee=function(e){var t=e.pokemonId,a=he(),n=w().pokemon,o=te().setCartItem,c=n[t],i=c.id,l=c.name,m=c.image,s=c.price;return r.a.createElement(f.a,{item:!0,xs:12,sm:6,md:4,lg:3},r.a.createElement(me.a,null,r.a.createElement(se.a,{className:a.cardMedia,image:m}),r.a.createElement(pe.a,{className:a.cardContent},r.a.createElement(ue.a,null,"".concat(i,". ").concat(l)),r.a.createElement(ue.a,null,"R$ ".concat(s,",00"))),r.a.createElement(de.a,{className:a.cardActions,aligh:"center"},r.a.createElement(Y.a,{className:a.cardButton,onClick:function(){return function(e){o(n[e-1])}(i)},startIcon:r.a.createElement(be.a,null),color:"primary",href:"#contained-buttons"},"Capturar Pokemon"))))},fe=window.innerHeight,ke=Object(s.a)((function(e){return{pokedexContainer:{padding:0},loadingContainer:{height:fe-200}}})),xe=function(e){var t=w(),a=t.pokemon,n=(t.setPokemon,ke());return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,null,a?r.a.createElement(f.a,{container:!0,spacing:2,className:n.pokedexContainer},Object.keys(a).map((function(e){return r.a.createElement(Ee,{pokemonId:e,key:e})}))):r.a.createElement(f.a,{container:!0,className:n.loadingContainer,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(f.a,{item:!0},r.a.createElement(k.a,null)))))},ve=a(78),je=a(76),Oe=a.n(je),we=a(177),Ce=Object(s.a)((function(e){return{root:{flexGrow:1},grid404:{margin:e.spacing(2,2)}}})),ye=function(){var e=Object(l.g)(),t=Object(l.f)(),a=Ce();return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.a,{elevation:2,className:a.root},r.a.createElement(f.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement("img",{src:Oe.a})),r.a.createElement(f.a,{item:!0,xs:12},"Nenhum resultado para ",r.a.createElement("strong",null,e.pathname)),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(i.b,{onClick:function(e){return t.goBack()}},r.a.createElement(we.a,{color:"action",style:{fontSize:30}}))))))};function Ie(){return r.a.createElement(i.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:E}),r.a.createElement(l.a,{path:"/pokestore",component:E}),r.a.createElement(l.a,{path:"/market",component:xe}),r.a.createElement(l.a,{path:"*",component:ye})))}var Ne=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(C,null,r.a.createElement(ae,null,r.a.createElement(Ie,null))))},Pe=(Object(g.a)({palette:{primary:{light:"#FFF",main:"#005BAC",dark:"#FFF",contrastText:"#FFF"}}}),a(178));c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"back-to-top-anchor"}),r.a.createElement(Ne,null),r.a.createElement(ge.ToastsContainer,{store:ge.ToastsStore,position:ge.ToastsContainerPosition.TOP_RIGHT,lightBackground:!0}),r.a.createElement(Pe.a,null)),document.getElementById("root"))},73:function(e,t,a){e.exports=a.p+"static/media/PokeStoreLogo.7cc2f872.png"},75:function(e,t,a){e.exports=a.p+"static/media/Pokedex.1575f911.png"},76:function(e,t,a){e.exports=a.p+"static/media/Error404.b47d9f87.png"},80:function(e,t,a){e.exports=a(121)},85:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.53040599.chunk.js.map