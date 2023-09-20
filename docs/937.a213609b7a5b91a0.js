"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[937],{5491:(p,l,a)=>{a.d(l,{J:()=>g});var c=a(5619),r=a(5516),e=a(4769),u=a(9862),d=a(2425);let g=(()=>{var o;class _{constructor(t,s){this._HttpClient=t,this._ToastrService=s,this.cartNumber=new c.X(0)}getUserOrders(t){return this._HttpClient.get(r.N.baseUrlData+"/orders/user/"+t)}addToCart(t){this.sendToCart(t).subscribe({next:s=>{"success"===s.status&&(this._ToastrService.success(s.message),this.cartNumber.next(s.numOfCartItems))}})}SetcheckOut(t,s){return this._HttpClient.post(r.N.baseUrlData+`/orders/checkout-session/${t}?url=${r.N.payUrl}`,s)}getProducts(t=1){return this._HttpClient.get(r.N.baseUrlData+`/products?page=${t}`)}getProductById(t){return this._HttpClient.get(r.N.baseUrlData+"/products/"+t)}getCategories(){return this._HttpClient.get(r.N.baseUrlData+"/categories")}getCategoriesById(t){return this._HttpClient.get(r.N.baseUrlData+"/categories/"+t)}getSubCategoriesToCat(t){return this._HttpClient.get(r.N.baseUrlData+`/categories/${t}/subcategories`)}sendToCart(t){return this._HttpClient.post(r.N.baseUrlData+"/cart",{productId:t})}getCartData(){return this._HttpClient.get(r.N.baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(r.N.baseUrlData+"/cart")}updatePoductCount(t,s){return this._HttpClient.put(r.N.baseUrlData+"/cart/"+t,{count:s})}deletePoductCart(t){return this._HttpClient.delete(r.N.baseUrlData+"/cart/"+t)}getBrands(t=1){return this._HttpClient.get(r.N.baseUrlData+`/brands?page=${t}`)}getBrandData(t){return this._HttpClient.get(r.N.baseUrlData+`/brands/${t}`)}setWishlist(t){return this._HttpClient.post(r.N.baseUrlData+"/wishlist",{productId:t})}removeWishlist(t){return this._HttpClient.delete(r.N.baseUrlData+`/wishlist/${t}`)}getWishlist(){return this._HttpClient.get(r.N.baseUrlData+"/wishlist")}setAddresses(t){return this._HttpClient.post(r.N.baseUrlData+"/addresses",t)}getAddresses(){return this._HttpClient.get(r.N.baseUrlData+"/addresses")}removeAddresses(t){return this._HttpClient.delete(r.N.baseUrlData+`/addresses/${t}`)}}return(o=_).\u0275fac=function(t){return new(t||o)(e.LFG(u.eN),e.LFG(d._W))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),_})()},937:(p,l,a)=>{a.r(l),a.d(l,{CategoriesComponent:()=>_});var c=a(6814),r=a(1120),e=a(4769),u=a(5491);const d=function(n){return["/categories",n]};function g(n,t){if(1&n&&(e.TgZ(0,"div",4)(1,"div",5),e._UZ(2,"img",6),e.TgZ(3,"div",7)(4,"h3",8),e._uU(5),e.qZA()()()()),2&n){const s=t.$implicit;e.xp6(1),e.Q6J("routerLink",e.VKq(4,d,s._id)),e.xp6(1),e.Q6J("src",s.image,e.LSH)("alt",s.name),e.xp6(3),e.Oqu(s.name)}}function o(n,t){if(1&n&&(e.TgZ(0,"section",1)(1,"div",2),e.YNc(2,g,6,6,"div",3),e.qZA()()),2&n){const s=e.oxw();e.xp6(2),e.Q6J("ngForOf",s.categoriesData)}}let _=(()=>{var n;class t{constructor(i){this._EcomdataService=i,this.categoriesData=[]}ngOnInit(){this._EcomdataService.getCategories().subscribe({next:i=>{this.categoriesData=i.data}})}}return(n=t).\u0275fac=function(i){return new(i||n)(e.Y36(u.J))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-categories"]],standalone:!0,features:[e.jDz],decls:1,vars:1,consts:[["class","my-4 categories",4,"ngIf"],[1,"my-4","categories"],[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","row-cols-lg-4","row-cols-xl-5","g-4","justify-content-center"],["class","col",4,"ngFor","ngForOf"],[1,"col"],["role","button",1,"card",3,"routerLink"],["loading","lazy","height","300",1,"card-img-top",3,"src","alt"],[1,"card-body"],[1,"h6","text-main","text-center"]],template:function(i,C){1&i&&e.YNc(0,o,3,1,"section",0),2&i&&e.Q6J("ngIf",C.categoriesData.length)},dependencies:[c.ez,c.sg,c.O5,r.rH]}),t})()},5516:(p,l,a)=>{a.d(l,{N:()=>c});const c={baseUrlAuth:"https://ecommerce.routemisr.com/api/v1/auth",baseUrlData:"https://ecommerce.routemisr.com/api/v1",payUrl:"http://localhost:4200"}}}]);