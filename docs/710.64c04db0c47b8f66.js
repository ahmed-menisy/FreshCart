"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[710],{1731:(p,l,r)=>{r.d(l,{J:()=>g});var n=r(5619);const t_baseUrlData="https://ecommerce.routemisr.com/api/v1";var c=r(4769),d=r(9862),u=r(2425);let g=(()=>{var i;class s{constructor(e,a){this._HttpClient=e,this._ToastrService=a,this.cartNumber=new n.X(0)}getUserOrders(e){return this._HttpClient.get(t_baseUrlData+"/orders/user/"+e)}addToCart(e){this.sendToCart(e).subscribe({next:a=>{"success"===a.status&&(this._ToastrService.success(a.message),this.cartNumber.next(a.numOfCartItems))}})}SetcheckOut(e,a){return this._HttpClient.post(t_baseUrlData+`/orders/checkout-session/${e}?url=https://ahmed-menisy.github.io/FreshCart/#`,a)}getProducts(e=1){return this._HttpClient.get(t_baseUrlData+`/products?page=${e}`)}getProductById(e){return this._HttpClient.get(t_baseUrlData+"/products/"+e)}getCategories(){return this._HttpClient.get(t_baseUrlData+"/categories")}getCategoriesById(e){return this._HttpClient.get(t_baseUrlData+"/categories/"+e)}getSubCategoriesToCat(e){return this._HttpClient.get(t_baseUrlData+`/categories/${e}/subcategories`)}sendToCart(e){return this._HttpClient.post(t_baseUrlData+"/cart",{productId:e})}getCartData(){return this._HttpClient.get(t_baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(t_baseUrlData+"/cart")}updatePoductCount(e,a){return this._HttpClient.put(t_baseUrlData+"/cart/"+e,{count:a})}deletePoductCart(e){return this._HttpClient.delete(t_baseUrlData+"/cart/"+e)}getBrands(e=1){return this._HttpClient.get(t_baseUrlData+`/brands?page=${e}`)}getBrandData(e){return this._HttpClient.get(t_baseUrlData+`/brands/${e}`)}setWishlist(e){return this._HttpClient.post(t_baseUrlData+"/wishlist",{productId:e})}removeWishlist(e){return this._HttpClient.delete(t_baseUrlData+`/wishlist/${e}`)}getWishlist(){return this._HttpClient.get(t_baseUrlData+"/wishlist")}setAddresses(e){return this._HttpClient.post(t_baseUrlData+"/addresses",e)}getAddresses(){return this._HttpClient.get(t_baseUrlData+"/addresses")}removeAddresses(e){return this._HttpClient.delete(t_baseUrlData+`/addresses/${e}`)}}return(i=s).\u0275fac=function(e){return new(e||i)(c.LFG(d.eN),c.LFG(u._W))},i.\u0275prov=c.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),s})()},3710:(p,l,r)=>{r.r(l),r.d(l,{CategoriesDetailsComponent:()=>i});var n=r(6814),t=r(4769),c=r(1731),d=r(1120);function u(s,o){if(1&s&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&s){const e=o.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function g(s,o){if(1&s&&(t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"div"),t._UZ(4,"img",4),t.qZA()(),t.TgZ(5,"div",5)(6,"div")(7,"h3"),t._uU(8),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"Sub Categories:"),t.qZA(),t.YNc(11,u,2,1,"span",6),t.qZA()()()()),2&s){const e=t.oxw();t.xp6(4),t.Q6J("src",e.categoryData.image,t.LSH)("alt",e.categoryData.name),t.xp6(4),t.Oqu(e.categoryData.name),t.xp6(3),t.Q6J("ngForOf",e.subCategoryData)}}let i=(()=>{var s;class o{constructor(a,h){this._EcomdataService=a,this._ActivatedRoute=h,this.categoryId="",this.categoryData=null,this.subCategoryData=[]}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:a=>{this.categoryId=a.get("id")}}),this._EcomdataService.getCategoriesById(this.categoryId).subscribe({next:a=>{this.categoryData=a.data}}),this._EcomdataService.getSubCategoriesToCat(this.categoryId).subscribe({next:a=>{this.subCategoryData=a.data}})}}return(s=o).\u0275fac=function(a){return new(a||s)(t.Y36(c.J),t.Y36(d.gz))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-categories-details"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","mx-auto w-75 bg-main-light rounded shadow p-4",4,"ngIf"],[1,"mx-auto","w-75","bg-main-light","rounded","shadow","p-4"],[1,"row","align-items-center","g-4"],[1,"col-md-4"],[1,"w-100","rounded",3,"src","alt"],[1,"col-md-8"],["class","badge bg-secondary me-3",4,"ngFor","ngForOf"],[1,"badge","bg-secondary","me-3"]],template:function(a,h){1&a&&t.YNc(0,g,12,4,"section",0),2&a&&t.Q6J("ngIf",h.categoryData)},dependencies:[n.ez,n.sg,n.O5]}),o})()}}]);