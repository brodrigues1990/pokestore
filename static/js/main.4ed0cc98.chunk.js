(this.webpackJsonppokestore=this.webpackJsonppokestore||[]).push([[0],{52:function(e,t,a){e.exports=a.p+"static/media/Error404.b47d9f87.png"},53:function(e,t,a){e.exports=a.p+"static/media/PokeStoreLogo.7cc2f872.png"},61:function(e,t,a){e.exports=a(90)},66:function(e,t,a){},90:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),i=(a(66),a(18)),l=a(7),m=a(30),s=a(110),p=a(111),u=a(112),f=a(47),d=a.n(f).a.create({baseURL:"https://pokeapi.co/api/v2/"}),g=a(54),E=(Object(g.a)({palette:{primary:{light:"#015d82",main:"#004561",dark:"#03374c",contrastText:"#fff"}}}),Object(g.a)({palette:{primary:{light:"#da1e37",main:"#bd1f36",dark:"#85182a",contrastText:"#fff"}}}),Object(g.a)({palette:{primary:{light:"#97d1f4",main:"#74bbe8",dark:"#2d92d1",contrastText:"#fff"}}}),Object(g.a)({palette:{primary:{light:"#73a942",main:"#538d22",dark:"#245501",contrastText:"#fff"}}}),Object(s.a)((function(e){return{fab:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}))),b=function(e){var t=E(),a=(Object(l.f)(),Object(n.useState)([])),c=Object(m.a)(a,2);c[0],c[1];return Object(n.useEffect)((function(){}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(i.b,{to:"/market"},r.a.createElement(p.a,{color:"primary","aria-label":"Adicionar Noticia",className:t.fab},r.a.createElement(u.a,null))))},h=a(33),k=a.n(h),x=a(51),j=a(113),O=a(114),y=a(115),v=a(116),F=a(117),N=a(118),w=a(119),B=a(121),C=a(120),T=Object(s.a)((function(e){return{pokedexContainer:{paddingTop:"20px",paddingLeft:"50px",paddingRight:"50px"},cardMedia:{margin:"auto"},cardContent:{textAlign:"center"},cardButton:{width:"100%"}}})),A=function(e){var t=T(),a=Object(n.useState)({}),c=Object(m.a)(a,2),o=c[0],i=c[1],l=function(){var e=Object(x.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:d.get("https://pokeapi.co/api/v2/pokemon?limit=100").then((function(e){var t=e.data.results,a={};t.forEach((function(e,t){a[t+1]={id:t+1,name:e.name,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/".concat(t+1,".png"),image:"https://pokeres.bastionbot.org/images/pokemon/".concat(t+1,".png"),price:Math.floor(100*Math.random())}})),console.log(t),i(a)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){l()}),[]);return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(j.a,{container:!0,spacing:2,className:t.pokedexContainer},Object.keys(o).map((function(e){return function(e){var a=o[e],n=a.id,c=a.name,i=a.image,l=a.price;return r.a.createElement(j.a,{item:!0,xs:12,sm:6,md:4,lg:3,key:e},r.a.createElement(O.a,null,r.a.createElement(y.a,{className:t.cardMedia,image:i,style:{width:"130px",height:"130px"}}),r.a.createElement(v.a,{className:t.cardContent},r.a.createElement(F.a,null,"".concat(n,". ").concat(c)),r.a.createElement(F.a,null,"R$ ".concat(l,",00"))),r.a.createElement(N.a,{aligh:"center"},r.a.createElement(w.a,{className:t.cardButton,startIcon:r.a.createElement(C.a,null),color:"primary",href:"#contained-buttons"},"Adicionar ao carrinho"))))}(e)}))):r.a.createElement(B.a,null))},S=a(55),I=a(52),M=a.n(I),P=a(122),L=Object(s.a)((function(e){return{root:{flexGrow:1},grid404:{margin:e.spacing(2,2)}}})),R=function(){var e=Object(l.g)(),t=Object(l.f)(),a=L();return r.a.createElement(r.a.Fragment,null,r.a.createElement(S.a,{elevation:2,className:a.root},r.a.createElement(j.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement("img",{src:M.a})),r.a.createElement(j.a,{item:!0,xs:12},"Nenhum resultado para ",r.a.createElement("strong",null,e.pathname)),r.a.createElement(j.a,{item:!0,xs:12},r.a.createElement(i.b,{onClick:function(e){return t.goBack()}},r.a.createElement(P.a,{color:"action",style:{fontSize:30}}))))))};function G(){return r.a.createElement(i.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:b}),r.a.createElement(l.a,{path:"/pokestore",component:b}),r.a.createElement(l.a,{path:"/market",component:A}),r.a.createElement(l.a,{path:"*",component:R})))}var J=a(123),z=a(124),U=a(53),$=a.n(U),q=Object(s.a)((function(e){return{root:{flexGrow:1,marginBottom:35},image:{height:70}}})),D=function(e){var t=q();return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{position:"static",className:t.root},r.a.createElement(z.a,null,r.a.createElement(j.a,{container:!0,justify:"center"},r.a.createElement(j.a,{item:!0},r.a.createElement("img",{src:$.a,alt:"PokeStore",className:t.image}))))))},H=a(125);var K=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null),r.a.createElement(H.a,{fixed:!0},r.a.createElement(G,null)))},Q=a(126),V=Object(g.a)({palette:{primary:{light:"#FFF",main:"#005BAC",dark:"#FFF",contrastText:"#FFF"}}});o.a.render(r.a.createElement(Q.a,{theme:V},r.a.createElement(K,null)),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.4ed0cc98.chunk.js.map