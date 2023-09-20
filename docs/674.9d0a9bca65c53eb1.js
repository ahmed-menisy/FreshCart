"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[674],{1731:(x,p,n)=>{n.d(p,{J:()=>C});var u=n(5619);const s_baseUrlData="https://ecommerce.routemisr.com/api/v1";var d=n(4769),g=n(9862),t=n(2425);let C=(()=>{var h;class m{constructor(e,o){this._HttpClient=e,this._ToastrService=o,this.cartNumber=new u.X(0)}getUserOrders(e){return this._HttpClient.get(s_baseUrlData+"/orders/user/"+e)}addToCart(e){this.sendToCart(e).subscribe({next:o=>{"success"===o.status&&(this._ToastrService.success(o.message),this.cartNumber.next(o.numOfCartItems))}})}SetcheckOut(e,o){return this._HttpClient.post(s_baseUrlData+`/orders/checkout-session/${e}?url=https://ahmed-menisy.github.io/FreshCart/#`,o)}getProducts(e=1){return this._HttpClient.get(s_baseUrlData+`/products?page=${e}`)}getProductById(e){return this._HttpClient.get(s_baseUrlData+"/products/"+e)}getCategories(){return this._HttpClient.get(s_baseUrlData+"/categories")}getCategoriesById(e){return this._HttpClient.get(s_baseUrlData+"/categories/"+e)}getSubCategoriesToCat(e){return this._HttpClient.get(s_baseUrlData+`/categories/${e}/subcategories`)}sendToCart(e){return this._HttpClient.post(s_baseUrlData+"/cart",{productId:e})}getCartData(){return this._HttpClient.get(s_baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(s_baseUrlData+"/cart")}updatePoductCount(e,o){return this._HttpClient.put(s_baseUrlData+"/cart/"+e,{count:o})}deletePoductCart(e){return this._HttpClient.delete(s_baseUrlData+"/cart/"+e)}getBrands(e=1){return this._HttpClient.get(s_baseUrlData+`/brands?page=${e}`)}getBrandData(e){return this._HttpClient.get(s_baseUrlData+`/brands/${e}`)}setWishlist(e){return this._HttpClient.post(s_baseUrlData+"/wishlist",{productId:e})}removeWishlist(e){return this._HttpClient.delete(s_baseUrlData+`/wishlist/${e}`)}getWishlist(){return this._HttpClient.get(s_baseUrlData+"/wishlist")}setAddresses(e){return this._HttpClient.post(s_baseUrlData+"/addresses",e)}getAddresses(){return this._HttpClient.get(s_baseUrlData+"/addresses")}removeAddresses(e){return this._HttpClient.delete(s_baseUrlData+`/addresses/${e}`)}}return(h=m).\u0275fac=function(e){return new(e||h)(d.LFG(g.eN),d.LFG(t._W))},h.\u0275prov=d.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),m})()},3674:(x,p,n)=>{n.r(p),n.d(p,{WhishlistComponent:()=>D});var u=n(6814),s=n(1120),d=n(2425),g=n(1651),t=n(4769),C=n(1731);function h(i,c){1&i&&t._UZ(0,"i",21)}function m(i,c){if(1&i&&(t.TgZ(0,"li"),t.YNc(1,h,1,0,"i",20),t.qZA()),2&i){const r=c.$implicit,a=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",r<=a.ratingsAverage)}}function f(i,c){1&i&&(t.TgZ(0,"li"),t._UZ(1,"i",22),t.qZA())}const e=function(i){return["/products",i]},o=function(){return[1,2,3,4,5]};function U(i,c){if(1&i){const r=t.EpF();t.TgZ(0,"div",4)(1,"div",5)(2,"div",6)(3,"span",7),t.NdJ("click",function(){const _=t.CHM(r).$implicit,v=t.oxw(2);return t.KtG(v.removeFromWhish(_._id))}),t._UZ(4,"i",8),t.qZA(),t.TgZ(5,"header",9),t._UZ(6,"img",10),t.TgZ(7,"h4",11),t._uU(8),t.qZA(),t.TgZ(9,"h3",12),t._uU(10),t.ALo(11,"cuttext"),t.qZA()(),t.TgZ(12,"footer",13)(13,"span",14),t._uU(14),t.ALo(15,"currency"),t.qZA(),t.TgZ(16,"div",15)(17,"ul",16),t.YNc(18,m,2,1,"li",17),t.YNc(19,f,2,0,"li",18),t.qZA(),t.TgZ(20,"span"),t._uU(21),t.qZA()()()(),t.TgZ(22,"button",19),t.NdJ("click",function(){const _=t.CHM(r).$implicit,v=t.oxw(2);return t.KtG(v.addToCart(_._id))}),t._uU(23," + Add To Cart "),t.qZA()()()}if(2&i){const r=c.$implicit;t.xp6(5),t.Q6J("routerLink",t.VKq(15,e,r._id)),t.xp6(1),t.Q6J("src",r.imageCover,t.LSH)("alt",r.title),t.xp6(2),t.Oqu(r.category.name),t.xp6(2),t.Oqu(t.xi3(11,9,r.title,3)),t.xp6(4),t.hij(" ",t.xi3(15,12,r.price,"EGP")," "),t.xp6(4),t.Q6J("ngForOf",t.DdM(17,o)),t.xp6(1),t.Q6J("ngIf",r.ratingsAverage%1!=0),t.xp6(2),t.hij(" ",r.ratingsAverage," ")}}function T(i,c){if(1&i&&(t.TgZ(0,"section")(1,"div",2),t.YNc(2,U,24,18,"div",3),t.qZA()()),2&i){const r=t.oxw();t.xp6(2),t.Q6J("ngForOf",r.whishList)}}function b(i,c){1&i&&(t.TgZ(0,"h1",23),t._uU(1,"Your WhishList Is Empty..."),t.qZA())}let D=(()=>{var i;class c{constructor(a,l){this._EcomdataService=a,this._ToastrService=l,this.whishList=[]}ngOnInit(){this._EcomdataService.getWishlist().subscribe({next:a=>{"success"===a.status&&(this.whishList=a.data)}})}addToCart(a){this._EcomdataService.addToCart(a)}removeFromWhish(a){this._EcomdataService.removeWishlist(a).subscribe({next:l=>{"success"===l.status&&(this._ToastrService.success(l.message,"",{positionClass:"toast-bottom-right"}),this.whishList=this.whishList.filter(_=>l.data.includes(_._id)),console.log(this.whishList))}})}}return(i=c).\u0275fac=function(a){return new(a||i)(t.Y36(C.J),t.Y36(d._W))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-whishlist"]],standalone:!0,features:[t.jDz],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["whish",""],[1,"row","row-cols-1","row-cols-md-2","row-cols-lg-4","row-cols-xl-6","justify-content-center"],["class","col",4,"ngFor","ngForOf"],[1,"col"],[1,"product"],[1,"ptorcut-area","position-relative"],["role","button",1,"heart",3,"click"],[1,"fa-solid","fa-heart-crack"],["role","button",3,"routerLink"],["loading","lazy",1,"w-100",3,"src","alt"],[1,"h6","font-sm","text-main"],[1,"h6","small"],[1,"hstack","justify-content-between"],[1,"small"],[1,"d-flex","font-sm","align-items-center"],[1,"d-flex","mb-0","list-unstyled"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"add-btn","main-btn","w-100",3,"click"],["class","fas fa-star rating-color",4,"ngIf"],[1,"fas","fa-star","rating-color"],[1,"fas","fa-star-half","rating-color"],[1,"text-center","my-3","display-3"]],template:function(a,l){if(1&a&&(t.YNc(0,T,3,1,"section",0),t.YNc(1,b,2,0,"ng-template",null,1,t.W1O)),2&a){const _=t.MAs(2);t.Q6J("ngIf",l.whishList.length)("ngIfElse",_)}},dependencies:[u.ez,u.sg,u.O5,u.H9,s.rH,g.r,d.Rh],styles:[".product[_ngcontent-%COMP%]:hover   .heart[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.product[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%]{position:absolute;top:5px;right:5px;z-index:99;font-size:40px;color:#0aad0a;opacity:0;transform:translateY(20px);transition:opacity 1s,transform 1s}"]}),c})()}}]);