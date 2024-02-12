import{A as _,B as F,C as w,D as P,E as D,F as X,G as M,H as g,I as N,J as Y,K as Z,O as ee,Q as te,R as ie,S as A,V as I,W as O,Y as ne,a as k,b as z,c as U,d as J,e as y,f as H,g as T,h as G,i as h,j as B,k as K,l as Q,m as R,n as c,o as f,p as u,q as m,r as o,s as n,t as p,u as W,v as b,w as S,x as L,y as a,z as d}from"./chunk-ADLFB7KD.js";var v=(()=>{let e=class e{constructor(i){this.http=i,this.apiUrl="https://restcountries.com/v3.1",this.cacheStore={byCapital:{term:"",countries:[]},byCountry:{term:"",countries:[]},byRegion:{region:"",countries:[]}},this.loadFromLocalStorage()}saveToLocalStorage(){localStorage.setItem("cacheStore",JSON.stringify(this.cacheStore))}loadFromLocalStorage(){localStorage.getItem("cacheStore")&&(this.cacheStore=JSON.parse(localStorage.getItem("cacheStore")))}getCountriesRequest(i){return this.http.get(i).pipe(U(()=>k([])))}searchCapital(i){let r=`${this.apiUrl}/capital/${i}`;return this.getCountriesRequest(r).pipe(y(l=>this.cacheStore.byCapital={term:i,countries:l}),y(()=>this.saveToLocalStorage()))}searchCountry(i){let r=`${this.apiUrl}/name/${i}`;return this.getCountriesRequest(r).pipe(y(l=>this.cacheStore.byCountry={term:i,countries:l}),y(()=>this.saveToLocalStorage()))}searchRegion(i){let r=`${this.apiUrl}/region/${i}`;return this.getCountriesRequest(r).pipe(y(l=>this.cacheStore.byRegion={region:i,countries:l}),y(()=>this.saveToLocalStorage()))}searchCountryByAlphaCode(i){let r=`${this.apiUrl}/alpha/${i}`;return this.http.get(r).pipe(z(l=>l.length>0?l[0]:null),U(()=>k(null)),y(()=>this.saveToLocalStorage()))}};e.\u0275fac=function(r){return new(r||e)(G(Z))},e.\u0275prov=H({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();function pe(t,e){t&1&&(o(0,"div",2),a(1," No hay resultados que mostrar "),n())}var de=t=>["/countries/by",t];function ue(t,e){if(t&1&&(o(0,"tr")(1,"td"),a(2),n(),o(3,"td"),a(4),n(),o(5,"td"),p(6,"img",5),n(),o(7,"td"),a(8),n(),o(9,"td"),a(10),n(),o(11,"td"),a(12),n(),o(13,"td"),a(14),w(15,"number"),n(),o(16,"td")(17,"a",6),a(18,"Info"),n()()()),t&2){let s=e.$implicit,i=e.index;c(2),d(i+1),c(2),d(s.flag),c(2),m("src",s.flags.svg,R)("alt",s.name.common),c(2),d(s.name.common),c(2),d(s.capital),c(2),d(s.region),c(2),d(P(15,9,s.population)),c(3),m("routerLink",F(11,de,s.cca3))}}function he(t,e){if(t&1&&(o(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),n(),o(5,"th"),a(6,"Abreviaci\xF3n"),n(),o(7,"th"),a(8,"Bandera"),n(),o(9,"th"),a(10,"Nombre"),n(),o(11,"th"),a(12,"Capital"),n(),o(13,"th"),a(14,"Regi\xF3n"),n(),o(15,"th"),a(16,"Poblaci\xF3n"),n(),p(17,"th"),n()(),o(18,"tbody"),u(19,ue,19,13,"tr",4),n()()),t&2){let s=S();c(19),m("ngForOf",s.countries)}}var E=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=h({type:e,selectors:[["country-country-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(r,l){if(r&1&&u(0,pe,2,0,"div",0)(1,he,20,1,"ng-template",null,1,D),r&2){let C=L(2);m("ngIf",l.countries.length===0)("ngIfElse",C)}},dependencies:[M,g,ie,N],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let t=e;return t})();function ge(t,e){t&1&&p(0,"shared-loading-spinner")}var re=(()=>{let e=class e{constructor(i){this.countryService=i,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countryService.cacheStore.byCapital.countries,this.initialValue=this.countryService.cacheStore.byCapital.term}searchByCapital(i){this.isLoading=!0,this.countryService.searchCapital(i).subscribe(r=>{this.countries=r,this.isLoading=!1})}};e.\u0275fac=function(r){return new(r||e)(f(v))},e.\u0275cmp=h({type:e,selectors:[["country-by-capital-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Search...",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(r,l){r&1&&(o(0,"h2"),a(1,"By Capital"),n(),p(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function($){return l.searchByCapital($)}),n()()(),o(6,"div",0)(7,"div",1),p(8,"hr"),u(9,ge,1,0,"shared-loading-spinner",3),p(10,"country-country-table",4),n()()),r&2&&(c(5),m("initialValue",l.initialValue),c(4),m("ngIf",l.isLoading),c(),m("countries",l.countries))},dependencies:[g,I,O,E]});let t=e;return t})();function ye(t,e){t&1&&p(0,"shared-loading-spinner")}var ae=(()=>{let e=class e{constructor(i){this.countryService=i,this.countries=[],this.isLoading=!1,this.initialValue=""}ngOnInit(){this.countries=this.countryService.cacheStore.byCountry.countries,this.initialValue=this.countryService.cacheStore.byCountry.term}searchByCountry(i){this.isLoading=!0,this.countryService.searchCountry(i).subscribe(r=>{this.countries=r,this.isLoading=!1})}};e.\u0275fac=function(r){return new(r||e)(f(v))},e.\u0275cmp=h({type:e,selectors:[["country-by-country-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col"],["placeholder","Search...",3,"initialValue","onDebounce"],[4,"ngIf"],[3,"countries"]],template:function(r,l){r&1&&(o(0,"h2"),a(1,"By Country"),n(),p(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),b("onDebounce",function($){return l.searchByCountry($)}),n()()(),o(6,"div",0)(7,"div",1),p(8,"hr"),u(9,ye,1,0,"shared-loading-spinner",3),p(10,"country-country-table",4),n()()),r&2&&(c(5),m("initialValue",l.initialValue),c(4),m("ngIf",l.isLoading),c(),m("countries",l.countries))},dependencies:[g,I,O,E]});let t=e;return t})();var ve=t=>({"btn-outline-danger":t});function Ce(t,e){if(t&1){let s=W();o(0,"button",6),b("click",function(){let l=K(s).$implicit,C=S();return Q(C.searchByRegion(l))}),a(1),n()}if(t&2){let s=e.$implicit,i=S();m("ngClass",F(2,ve,i.selectedRegion===s)),c(),_(" ",s," ")}}function Se(t,e){t&1&&p(0,"shared-loading-spinner")}var ce=(()=>{let e=class e{constructor(i){this.countryService=i,this.countries=[],this.isLoading=!1,this.regions=["Africa","Americas","Asia","Europe","Oceania"]}ngOnInit(){this.countries=this.countryService.cacheStore.byRegion.countries,this.selectedRegion=this.countryService.cacheStore.byRegion.region}searchByRegion(i){this.selectedRegion=i,this.isLoading=!0,this.countryService.searchRegion(i).subscribe(r=>{this.countries=r,this.isLoading=!1})}};e.\u0275fac=function(r){return new(r||e)(f(v))},e.\u0275cmp=h({type:e,selectors:[["country-by-region-page"]],decls:11,vars:3,consts:[[1,"row"],[1,"col","text-center"],["class","btn mx-2",3,"ngClass","click",4,"ngFor","ngForOf"],[1,"col"],[4,"ngIf"],[3,"countries"],[1,"btn","mx-2",3,"ngClass","click"]],template:function(r,l){r&1&&(o(0,"h2"),a(1,"By Region"),n(),p(2,"hr"),o(3,"div",0)(4,"div",1),u(5,Ce,2,4,"button",2),n()(),o(6,"div",0)(7,"div",3),p(8,"hr"),u(9,Se,1,0,"shared-loading-spinner",4),p(10,"country-country-table",5),n()()),r&2&&(c(5),m("ngForOf",l.regions),c(4),m("ngIf",l.isLoading),c(),m("countries",l.countries))},dependencies:[X,M,g,I,E]});let t=e;return t})();function xe(t,e){t&1&&(o(0,"div",2),a(1," Espere por favor "),n())}function be(t,e){if(t&1&&(o(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4,"Country: "),o(5,"strong"),a(6),n()(),p(7,"hr"),n()(),o(8,"div",5)(9,"div",6),p(10,"img",7),n(),o(11,"div",8)(12,"ul",9)(13,"li",10)(14,"strong"),a(15,"Population:"),n(),a(16),w(17,"number"),n()(),o(18,"ul",9)(19,"li",10)(20,"strong"),a(21,"Code:"),n(),a(22),n()()()(),o(23,"div",11)(24,"div",8)(25,"h6"),a(26,"Traducciones"),n(),o(27,"div",12)(28,"span",13),a(29),n(),o(30,"span",13),a(31),n(),o(32,"span",13),a(33),n(),o(34,"span",13),a(35),n(),o(36,"span",13),a(37),n(),o(38,"span",13),a(39),n(),o(40,"span",13),a(41),n(),o(42,"span",13),a(43),n(),o(44,"span",13),a(45),n(),o(46,"span",13),a(47),n()()()()()),t&2){let s=S();c(6),d(s.country.name.common),c(4),m("src",s.country.flags.svg,R)("alt",s.country.name.common),c(6),_(" ",P(17,15,s.country.population)," "),c(6),_(" ",s.country.cca3," "),c(7),d(s.country.translations.ara.common),c(2),d(s.country.translations.bre.common),c(2),d(s.country.translations.ces.common),c(2),d(s.country.translations.cym.common),c(2),d(s.country.translations.deu.common),c(2),d(s.country.translations.est.common),c(2),d(s.country.translations.fin.common),c(2),d(s.country.translations.ita.common),c(2),d(s.country.translations.kor.common),c(2),d(s.country.translations.per.common)}}var se=(()=>{let e=class e{constructor(i,r,l){this.activatedRoute=i,this.router=r,this.countryService=l}ngOnInit(){this.activatedRoute.params.pipe(J(({id:i})=>this.countryService.searchCountryByAlphaCode(i))).subscribe(i=>i?this.country=i:this.router.navigateByUrl(""))}};e.\u0275fac=function(r){return new(r||e)(f(ee),f(te),f(v))},e.\u0275cmp=h({type:e,selectors:[["country-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row","mb-3"],[1,"col-12"],[1,"row"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-4"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(r,l){if(r&1&&u(0,xe,2,0,"ng-template",null,0,D)(2,be,48,17,"div",1),r&2){let C=L(1);c(2),m("ngIf",l.country)("ngIfElse",C)}},dependencies:[g,N]});let t=e;return t})();var Ie=[{path:"by-capital",component:re},{path:"by-country",component:ae},{path:"by-region",component:ce},{path:"by/:id",component:se},{path:"**",redirectTo:"by-capital"}],le=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=B({type:e}),e.\u0275inj=T({imports:[A.forChild(Ie),A]});let t=e;return t})();var We=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=B({type:e}),e.\u0275inj=T({imports:[Y,le,ne]});let t=e;return t})();export{We as CountryModule};