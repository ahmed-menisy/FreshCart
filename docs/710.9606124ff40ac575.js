"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[710],{5491:(p,c,s)=>{s.d(c,{J:()=>g});var n=s(5619),t=s(5516),l=s(4769),d=s(9862),u=s(2425);let g=(()=>{var i;class r{constructor(e,a){this._HttpClient=e,this._ToastrService=a,this.cartNumber=new n.X(0)}getUserOrders(e){return this._HttpClient.get(t.N.baseUrlData+"/orders/user/"+e)}addToCart(e){this.sendToCart(e).subscribe({next:a=>{"success"===a.status&&(this._ToastrService.success(a.message),this.cartNumber.next(a.numOfCartItems))}})}SetcheckOut(e,a){return this._HttpClient.post(t.N.baseUrlData+`/orders/checkout-session/${e}?url=${t.N.payUrl}`,a)}getProducts(e=1){return this._HttpClient.get(t.N.baseUrlData+`/products?page=${e}`)}getProductById(e){return this._HttpClient.get(t.N.baseUrlData+"/products/"+e)}getCategories(){return this._HttpClient.get(t.N.baseUrlData+"/categories")}getCategoriesById(e){return this._HttpClient.get(t.N.baseUrlData+"/categories/"+e)}getSubCategoriesToCat(e){return this._HttpClient.get(t.N.baseUrlData+`/categories/${e}/subcategories`)}sendToCart(e){return this._HttpClient.post(t.N.baseUrlData+"/cart",{productId:e})}getCartData(){return this._HttpClient.get(t.N.baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(t.N.baseUrlData+"/cart")}updatePoductCount(e,a){return this._HttpClient.put(t.N.baseUrlData+"/cart/"+e,{count:a})}deletePoductCart(e){return this._HttpClient.delete(t.N.baseUrlData+"/cart/"+e)}getBrands(e=1){return this._HttpClient.get(t.N.baseUrlData+`/brands?page=${e}`)}getBrandData(e){return this._HttpClient.get(t.N.baseUrlData+`/brands/${e}`)}setWishlist(e){return this._HttpClient.post(t.N.baseUrlData+"/wishlist",{productId:e})}removeWishlist(e){return this._HttpClient.delete(t.N.baseUrlData+`/wishlist/${e}`)}getWishlist(){return this._HttpClient.get(t.N.baseUrlData+"/wishlist")}setAddresses(e){return this._HttpClient.post(t.N.baseUrlData+"/addresses",e)}getAddresses(){return this._HttpClient.get(t.N.baseUrlData+"/addresses")}removeAddresses(e){return this._HttpClient.delete(t.N.baseUrlData+`/addresses/${e}`)}}return(i=r).\u0275fac=function(e){return new(e||i)(l.LFG(d.eN),l.LFG(u._W))},i.\u0275prov=l.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),r})()},3710:(p,c,s)=>{s.r(c),s.d(c,{CategoriesDetailsComponent:()=>i});var n=s(6814),t=s(4769),l=s(5491),d=s(1120);function u(r,o){if(1&r&&(t.TgZ(0,"span",7),t._uU(1),t.qZA()),2&r){const e=o.$implicit;t.xp6(1),t.hij(" ",e.name," ")}}function g(r,o){if(1&r&&(t.TgZ(0,"section",1)(1,"div",2)(2,"div",3)(3,"div"),t._UZ(4,"img",4),t.qZA()(),t.TgZ(5,"div",5)(6,"div")(7,"h3"),t._uU(8),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"Sub Categories:"),t.qZA(),t.YNc(11,u,2,1,"span",6),t.qZA()()()()),2&r){const e=t.oxw();t.xp6(4),t.Q6J("src",e.categoryData.image,t.LSH)("alt",e.categoryData.name),t.xp6(4),t.Oqu(e.categoryData.name),t.xp6(3),t.Q6J("ngForOf",e.subCategoryData)}}let i=(()=>{var r;class o{constructor(a,_){this._EcomdataService=a,this._ActivatedRoute=_,this.categoryId="",this.categoryData=null,this.subCategoryData=[]}ngOnInit(){this._ActivatedRoute.paramMap.subscribe({next:a=>{this.categoryId=a.get("id")}}),this._EcomdataService.getCategoriesById(this.categoryId).subscribe({next:a=>{this.categoryData=a.data}}),this._EcomdataService.getSubCategoriesToCat(this.categoryId).subscribe({next:a=>{this.subCategoryData=a.data}})}}return(r=o).\u0275fac=function(a){return new(a||r)(t.Y36(l.J),t.Y36(d.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-categories-details"]],standalone:!0,features:[t.jDz],decls:1,vars:1,consts:[["class","mx-auto w-75 bg-main-light rounded shadow p-4",4,"ngIf"],[1,"mx-auto","w-75","bg-main-light","rounded","shadow","p-4"],[1,"row","align-items-center","g-4"],[1,"col-md-4"],[1,"w-100","rounded",3,"src","alt"],[1,"col-md-8"],["class","badge bg-secondary me-3",4,"ngFor","ngForOf"],[1,"badge","bg-secondary","me-3"]],template:function(a,_){1&a&&t.YNc(0,g,12,4,"section",0),2&a&&t.Q6J("ngIf",_.categoryData)},dependencies:[n.ez,n.sg,n.O5]}),o})()},5516:(p,c,s)=>{s.d(c,{N:()=>n});const n={baseUrlAuth:"https://ecommerce.routemisr.com/api/v1/auth",baseUrlData:"https://ecommerce.routemisr.com/api/v1",payUrl:"http://localhost:4200"}}}]);