"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[753],{1731:(h,l,r)=>{r.d(l,{J:()=>u});var c=r(5619);const e_baseUrlData="https://ecommerce.routemisr.com/api/v1";var a=r(4769),d=r(9862),o=r(2425);let u=(()=>{var s;class i{constructor(t,n){this._HttpClient=t,this._ToastrService=n,this.cartNumber=new c.X(0)}getUserOrders(t){return this._HttpClient.get(e_baseUrlData+"/orders/user/"+t)}addToCart(t){this.sendToCart(t).subscribe({next:n=>{"success"===n.status&&(this._ToastrService.success(n.message),this.cartNumber.next(n.numOfCartItems))}})}SetcheckOut(t,n){return this._HttpClient.post(e_baseUrlData+`/orders/checkout-session/${t}?url=https://ahmed-menisy.github.io/FreshCart/#`,n)}getProducts(t=1){return this._HttpClient.get(e_baseUrlData+`/products?page=${t}`)}getProductById(t){return this._HttpClient.get(e_baseUrlData+"/products/"+t)}getCategories(){return this._HttpClient.get(e_baseUrlData+"/categories")}getCategoriesById(t){return this._HttpClient.get(e_baseUrlData+"/categories/"+t)}getSubCategoriesToCat(t){return this._HttpClient.get(e_baseUrlData+`/categories/${t}/subcategories`)}sendToCart(t){return this._HttpClient.post(e_baseUrlData+"/cart",{productId:t})}getCartData(){return this._HttpClient.get(e_baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(e_baseUrlData+"/cart")}updatePoductCount(t,n){return this._HttpClient.put(e_baseUrlData+"/cart/"+t,{count:n})}deletePoductCart(t){return this._HttpClient.delete(e_baseUrlData+"/cart/"+t)}getBrands(t=1){return this._HttpClient.get(e_baseUrlData+`/brands?page=${t}`)}getBrandData(t){return this._HttpClient.get(e_baseUrlData+`/brands/${t}`)}setWishlist(t){return this._HttpClient.post(e_baseUrlData+"/wishlist",{productId:t})}removeWishlist(t){return this._HttpClient.delete(e_baseUrlData+`/wishlist/${t}`)}getWishlist(){return this._HttpClient.get(e_baseUrlData+"/wishlist")}setAddresses(t){return this._HttpClient.post(e_baseUrlData+"/addresses",t)}getAddresses(){return this._HttpClient.get(e_baseUrlData+"/addresses")}removeAddresses(t){return this._HttpClient.delete(e_baseUrlData+`/addresses/${t}`)}}return(s=i).\u0275fac=function(t){return new(t||s)(a.LFG(d.eN),a.LFG(o._W))},s.\u0275prov=a.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),i})()},1337:(h,l,r)=>{r.r(l),r.d(l,{NotfoundComponent:()=>d});var c=r(6814),e=r(953),a=r(4769);let d=(()=>{var o;class u{}return(o=u).\u0275fac=function(i){return new(i||o)},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-notfound"]],standalone:!0,features:[a.jDz],decls:3,vars:0,consts:[[1,"pt-5"]],template:function(i,p){1&i&&(a._UZ(0,"app-navbar"),a.TgZ(1,"p",0),a._uU(2,"notfound works!"),a.qZA())},dependencies:[c.ez,e.S]}),u})()}}]);