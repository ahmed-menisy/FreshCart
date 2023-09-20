"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[639],{1731:(b,c,p)=>{p.d(c,{J:()=>m});var u=p(5619);const n_baseUrlData="https://ecommerce.routemisr.com/api/v1";var t=p(4769),h=p(9862),_=p(2425);let m=(()=>{var l;class g{constructor(e,d){this._HttpClient=e,this._ToastrService=d,this.cartNumber=new u.X(0)}getUserOrders(e){return this._HttpClient.get(n_baseUrlData+"/orders/user/"+e)}addToCart(e){this.sendToCart(e).subscribe({next:d=>{"success"===d.status&&(this._ToastrService.success(d.message),this.cartNumber.next(d.numOfCartItems))}})}SetcheckOut(e,d){return this._HttpClient.post(n_baseUrlData+`/orders/checkout-session/${e}?url=https://ahmed-menisy.github.io/FreshCart/#`,d)}getProducts(e=1){return this._HttpClient.get(n_baseUrlData+`/products?page=${e}`)}getProductById(e){return this._HttpClient.get(n_baseUrlData+"/products/"+e)}getCategories(){return this._HttpClient.get(n_baseUrlData+"/categories")}getCategoriesById(e){return this._HttpClient.get(n_baseUrlData+"/categories/"+e)}getSubCategoriesToCat(e){return this._HttpClient.get(n_baseUrlData+`/categories/${e}/subcategories`)}sendToCart(e){return this._HttpClient.post(n_baseUrlData+"/cart",{productId:e})}getCartData(){return this._HttpClient.get(n_baseUrlData+"/cart")}clearCart(){return this._HttpClient.delete(n_baseUrlData+"/cart")}updatePoductCount(e,d){return this._HttpClient.put(n_baseUrlData+"/cart/"+e,{count:d})}deletePoductCart(e){return this._HttpClient.delete(n_baseUrlData+"/cart/"+e)}getBrands(e=1){return this._HttpClient.get(n_baseUrlData+`/brands?page=${e}`)}getBrandData(e){return this._HttpClient.get(n_baseUrlData+`/brands/${e}`)}setWishlist(e){return this._HttpClient.post(n_baseUrlData+"/wishlist",{productId:e})}removeWishlist(e){return this._HttpClient.delete(n_baseUrlData+`/wishlist/${e}`)}getWishlist(){return this._HttpClient.get(n_baseUrlData+"/wishlist")}setAddresses(e){return this._HttpClient.post(n_baseUrlData+"/addresses",e)}getAddresses(){return this._HttpClient.get(n_baseUrlData+"/addresses")}removeAddresses(e){return this._HttpClient.delete(n_baseUrlData+`/addresses/${e}`)}}return(l=g).\u0275fac=function(e){return new(e||l)(t.LFG(h.eN),t.LFG(_._W))},l.\u0275prov=t.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),g})()},6019:(b,c,p)=>{p.r(c),p.d(c,{ShopingaddressComponent:()=>Z});var u=p(6814),n=p(95),t=p(4769),h=p(1731),_=p(1120);function m(r,i){1&r&&(t.TgZ(0,"p",15),t._uU(1," Details Is Required "),t.qZA())}function l(r,i){1&r&&(t.TgZ(0,"p",15),t._uU(1," Details MinLength is 2 "),t.qZA())}function g(r,i){if(1&r&&(t.ynx(0),t.YNc(1,m,2,0,"p",14),t.YNc(2,l,2,0,"p",14),t.BQk()),2&r){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.f.details.getError("required")),t.xp6(1),t.Q6J("ngIf",a.f.details.getError("minlength"))}}function f(r,i){1&r&&(t.TgZ(0,"p",15),t._uU(1," phone Is Required "),t.qZA())}function e(r,i){1&r&&(t.TgZ(0,"p",15),t._uU(1," accept only egypt phone numbers "),t.qZA())}function d(r,i){if(1&r&&(t.ynx(0),t.YNc(1,f,2,0,"p",14),t.YNc(2,e,2,0,"p",14),t.BQk()),2&r){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.f.phone.getError("required")),t.xp6(1),t.Q6J("ngIf",a.f.phone.getError("pattern"))}}function U(r,i){1&r&&(t.TgZ(0,"p",15),t._uU(1," city Is Required "),t.qZA())}function v(r,i){1&r&&(t.TgZ(0,"p",15),t._uU(1," City MinLength is 2 "),t.qZA())}function x(r,i){if(1&r&&(t.ynx(0),t.YNc(1,U,2,0,"p",14),t.YNc(2,v,2,0,"p",14),t.BQk()),2&r){const a=t.oxw();t.xp6(1),t.Q6J("ngIf",a.f.city.getError("required")),t.xp6(1),t.Q6J("ngIf",a.f.city.getError("minlength"))}}function I(r,i){if(1&r&&(t.TgZ(0,"button",16)(1,"span"),t._uU(2,"Next"),t.qZA()()),2&r){const a=t.oxw();t.Q6J("disabled",a.shopForm.invalid)}}function T(r,i){1&r&&(t.TgZ(0,"button",17)(1,"span"),t._UZ(2,"i",18),t.qZA()())}function D(r,i){if(1&r&&(t.TgZ(0,"p",19),t._uU(1),t.qZA()),2&r){const a=t.oxw();t.xp6(1),t.hij(" ",a.errMsg," ")}}let Z=(()=>{var r;class i{constructor(o,s,C){this._fb=o,this._EcomdataService=s,this._ActivatedRoute=C,this.isLoading=!1,this.errMsg="",this.userId=""}ngOnInit(){this.shopForm=this._fb.group({details:["",[n.kI.required,n.kI.minLength(2)]],phone:["",[n.kI.required,n.kI.pattern(/^01[0125][0-9]{8}$/)]],city:["",[n.kI.required,n.kI.minLength(2)]]}),this._ActivatedRoute.queryParamMap.subscribe({next:o=>{this.userId=o.get("userid")}})}get f(){return this.shopForm.controls}handleForm(){this.isLoading=!0,this.shopForm.valid&&this._EcomdataService.SetcheckOut(this.userId,this.shopForm.value).subscribe({next:o=>{"success"===o.status&&(this.isLoading=!1,window.open(o.session.url,"_blank"),console.log(o))},error:o=>{console.log(o),this.errMsg=o?.error?.message,this.isLoading=!1}})}}return(r=i).\u0275fac=function(o){return new(o||r)(t.Y36(n.qu),t.Y36(h.J),t.Y36(_.gz))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-shopingaddress"]],standalone:!0,features:[t.jDz],decls:22,vars:7,consts:[[1,"w-50","mx-auto","shadow","rounded","bg-main-light","p-3"],[1,"text-center"],[1,"vstack","gap-3",3,"formGroup","ngSubmit"],[1,"form-item"],["for","details"],["id","details","formControlName","details","placeholder","Your Details...",1,"form-control"],[4,"ngIf"],["for","phone"],["id","phone","type","tel","formControlName","phone","placeholder","Your Phone...",1,"form-control"],["for","city"],["id","city","type","text","formControlName","city","placeholder","Your City...",1,"form-control"],["type","submit","class","main-btn",3,"disabled",4,"ngIf"],["type","button","disabled","","class","main-btn ms-auto",4,"ngIf"],["class","alert alert-danger text-center w-50 mx-auto mb-0 p-1 mt-3",4,"ngIf"],["class","alert alert-danger w-50 mx-auto p-1 mb-0",4,"ngIf"],[1,"alert","alert-danger","w-50","mx-auto","p-1","mb-0"],["type","submit",1,"main-btn",3,"disabled"],["type","button","disabled","",1,"main-btn","ms-auto"],[1,"fas","fa-spinner","fa-spin"],[1,"alert","alert-danger","text-center","w-50","mx-auto","mb-0","p-1","mt-3"]],template:function(o,s){1&o&&(t.TgZ(0,"section",0)(1,"h1",1),t._uU(2,"shipping Address"),t.qZA(),t.TgZ(3,"form",2),t.NdJ("ngSubmit",function(){return s.handleForm()}),t.TgZ(4,"div",3)(5,"label",4),t._uU(6,"Details:"),t.qZA(),t._UZ(7,"textarea",5),t.YNc(8,g,3,2,"ng-container",6),t.qZA(),t.TgZ(9,"div",3)(10,"label",7),t._uU(11,"Phone:"),t.qZA(),t._UZ(12,"input",8),t.YNc(13,d,3,2,"ng-container",6),t.qZA(),t.TgZ(14,"div",3)(15,"label",9),t._uU(16,"City:"),t.qZA(),t._UZ(17,"input",10),t.YNc(18,x,3,2,"ng-container",6),t.qZA(),t.YNc(19,I,3,1,"button",11),t.YNc(20,T,3,0,"button",12),t.YNc(21,D,2,1,"p",13),t.qZA()()),2&o&&(t.xp6(3),t.Q6J("formGroup",s.shopForm),t.xp6(5),t.Q6J("ngIf",s.f.details.errors&&(s.f.details.value.length||s.f.details.touched)),t.xp6(5),t.Q6J("ngIf",s.f.phone.errors&&(s.f.phone.value.length||s.f.phone.touched)),t.xp6(5),t.Q6J("ngIf",s.f.city.errors&&(s.f.city.value.length||s.f.city.touched)),t.xp6(1),t.Q6J("ngIf",!s.isLoading),t.xp6(1),t.Q6J("ngIf",s.isLoading),t.xp6(1),t.Q6J("ngIf",s.errMsg))},dependencies:[u.ez,u.O5,n.UX,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u]}),i})()}}]);