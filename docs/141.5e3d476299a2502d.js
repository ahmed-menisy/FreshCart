"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[141],{1731:(C,p,a)=>{a.d(p,{J:()=>u});var d=a(5619);const r_baseUrlData="https://ecommerce.routemisr.com/api/v1";var c=a(4769),e=a(9862),m=a(2425);let u=(()=>{var i;class g{constructor(t,n){this._HttpClient=t,this._ToastrService=n,this.cartNumber=new d.X(0)}getUserOrders(t){return this._HttpClient.get(r_baseUrlData+"/orders/user/"+t)}addToCart(t){this.sendToCart(t).subscribe({next:n=>{"success"===n.status&&(this._ToastrService.success(n.message),this.cartNumber.next(n.numOfCartItems))}})}SetcheckOut(t,n){return this._HttpClient.post(r_baseUrlData+`/orders/checkout-session/${t}?url=https://ahmed-menisy.github.io/FreshCart`,n)}getProducts(t=1){return this._HttpClient.get(r_baseUrlData+`/products?page=${t}`)}getProductById(t){return this._HttpClient.get(r_baseUrlData+"/products/"+t)}getCategories(){return this._HttpClient.get(r_baseUrlData+"/categories")}getCategoriesById(t){return this._HttpClient.get(r_baseUrlData+"/categories/"+t)}getSubCategoriesToCat(t){return this._HttpClient.get(r_baseUrlData+`/categories/${t}/subcategories`)}sendToCart(t){return this._HttpClient.post(r_baseUrlData+"/cart",{productId:t})}getCartData(){return this._HttpClient.get(r_baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(r_baseUrlData+"/cart")}updatePoductCount(t,n){return this._HttpClient.put(r_baseUrlData+"/cart/"+t,{count:n})}deletePoductCart(t){return this._HttpClient.delete(r_baseUrlData+"/cart/"+t)}getBrands(t=1){return this._HttpClient.get(r_baseUrlData+`/brands?page=${t}`)}getBrandData(t){return this._HttpClient.get(r_baseUrlData+`/brands/${t}`)}setWishlist(t){return this._HttpClient.post(r_baseUrlData+"/wishlist",{productId:t})}removeWishlist(t){return this._HttpClient.delete(r_baseUrlData+`/wishlist/${t}`)}getWishlist(){return this._HttpClient.get(r_baseUrlData+"/wishlist")}setAddresses(t){return this._HttpClient.post(r_baseUrlData+"/addresses",t)}getAddresses(){return this._HttpClient.get(r_baseUrlData+"/addresses")}removeAddresses(t){return this._HttpClient.delete(r_baseUrlData+`/addresses/${t}`)}}return(i=g).\u0275fac=function(t){return new(t||i)(c.LFG(e.eN),c.LFG(m._W))},i.\u0275prov=c.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),g})()},9415:(C,p,a)=>{a.r(p),a.d(p,{BlankComponent:()=>g});var d=a(6814),r=a(1120),c=a(953),e=a(4769);let m=(()=>{var o;class t{}return(o=t).\u0275fac=function(s){return new(s||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-footer"]],standalone:!0,features:[e.jDz],decls:16,vars:0,consts:[[1,"p-4","bg-main-light"],[1,"container-fluid"],[1,"title"],[1,"lead","text-secondary"],[1,"footer-info","mx-4"],[1,"form-item","d-flex","gap-4"],["type","text","placeholder","Email...",1,"form-control","flex-grow-1"],[1,"main-btn","px-3","flex-shrink-0"],[1,"border-secondary"],[1,"copy-right"],[1,"text-center"]],template:function(s,l){1&s&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h4"),e._uU(4,"Get The FreshCart App"),e.qZA(),e.TgZ(5,"p",3),e._uU(6," We Will Send You a Link,open it on Your Phone "),e.qZA()(),e.TgZ(7,"div",4)(8,"div",5),e._UZ(9,"input",6),e.TgZ(10,"button",7),e._uU(11,"Share App Link"),e.qZA()(),e._UZ(12,"hr",8),e.TgZ(13,"div",9)(14,"h6",10),e._uU(15,"\xa9 2023 ahmed menisy , All Rights Reserved"),e.qZA()()()()())},dependencies:[d.ez]}),t})();var u=a(8672);const i=["goUp"];let g=(()=>{var o;class t{constructor(s){this._Renderer2=s}onScroll(){scrollY>300?this._Renderer2.removeClass(this.goUp.nativeElement,"hide"):this._Renderer2.addClass(this.goUp.nativeElement,"hide")}goToUp(){scrollTo(0,0)}}return(o=t).\u0275fac=function(s){return new(s||o)(e.Y36(e.Qsj))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-blank"]],viewQuery:function(s,l){if(1&s&&e.Gf(i,5),2&s){let h;e.iGM(h=e.CRH())&&(l.goUp=h.first)}},hostBindings:function(s,l){1&s&&e.NdJ("scroll",function(){return l.onScroll()},!1,e.Jf7)},standalone:!0,features:[e.jDz],decls:8,vars:0,consts:[[1,"container-fluid"],["bdColor","rgba(240, 240, 240, .85)","template","<img width='250' src='./assets/images/freshcart-logo.svg' />"],[1,"go-up","hide",3,"click"],["goUp",""],[1,"fa-solid","fa-angle-up",2,"color","#18812d"]],template:function(s,l){1&s&&(e._UZ(0,"app-navbar"),e.TgZ(1,"main",0),e._UZ(2,"router-outlet"),e.qZA(),e._UZ(3,"app-footer")(4,"ngx-spinner",1),e.TgZ(5,"button",2,3),e.NdJ("click",function(){return l.goToUp()}),e._UZ(7,"i",4),e.qZA())},dependencies:[d.ez,r.Bz,r.lC,c.S,m,u.ef,u.Ro],styles:['[_nghost-%COMP%]{display:flex;flex-direction:column;min-height:100vh}main[_ngcontent-%COMP%]{padding-block:70px 30px;margin-block:auto}.go-up[_ngcontent-%COMP%]{all:unset;cursor:pointer;width:40px;height:40px;display:grid;place-content:center;position:fixed;bottom:15px;right:15px;z-index:999;font-size:23px;transition:opacity 1s}.go-up.hide[_ngcontent-%COMP%]{pointer-events:none;opacity:0}.go-up[_ngcontent-%COMP%]:before{content:"";position:absolute;inset:0;z-index:-1;background-color:#f0f3f2;border:1px solid rgba(0,0,0,.3333333333);border-radius:10px;transform:rotate(45deg)}']}),t})()}}]);