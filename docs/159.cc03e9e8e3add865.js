"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[159],{159:(T,m,n)=>{n.r(m),n.d(m,{HomeComponent:()=>v});var c=n(6814),r=n(756),l=n(5830),e=n(4769),g=n(5491);function p(t,i){1&t&&e._UZ(0,"img",11)}function _(t,i){1&t&&e._UZ(0,"img",12)}function u(t,i){1&t&&e._UZ(0,"img",13)}function d(t,i){if(1&t&&(e._UZ(0,"img",16),e.TgZ(1,"h3",17),e._uU(2),e.qZA()),2&t){const s=e.oxw().$implicit;e.Q6J("src",s.image,e.LSH)("alt",s.name)("title",s.name),e.xp6(2),e.Oqu(s.name)}}function h(t,i){1&t&&(e.ynx(0),e.YNc(1,d,3,4,"ng-template",4),e.BQk())}function f(t,i){if(1&t&&(e.TgZ(0,"section",14)(1,"h2"),e._uU(2,"Shop Popular Categories"),e.qZA(),e.TgZ(3,"owl-carousel-o",3),e.YNc(4,h,2,0,"ng-container",15),e.qZA()()),2&t){const s=e.oxw();e.xp6(3),e.Q6J("options",s.categoriesSlider),e.xp6(1),e.Q6J("ngForOf",s.categories)}}function x(t,i){if(1&t&&e._UZ(0,"app-card",18),2&t){const s=i.$implicit,o=e.oxw();e.Q6J("cutTextNum",2)("product",s)("whish",o.whishList)}}let v=(()=>{var t;class i{constructor(o){this._EcomdataService=o,this.products=[],this.whishList=[],this.mainSlider={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,autoplay:!0,navSpeed:700,navText:["",""],items:1,nav:!0},this.categoriesSlider={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,autoplay:!0,dots:!1,navSpeed:700,navText:["",""],responsive:{0:{items:2},400:{items:3},740:{items:5},940:{items:7}},nav:!0}}ngOnInit(){this._EcomdataService.getProducts().subscribe({next:o=>{this.products=o.data.slice(0,12)}}),this._EcomdataService.getCategories().subscribe({next:o=>{this.categories=o.data}}),this._EcomdataService.getWishlist().subscribe({next:o=>{"success"===o.status&&(this.whishList=o.data.map(a=>a._id),console.log(this.whishList))}})}}return(t=i).\u0275fac=function(o){return new(o||t)(e.Y36(g.J))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],standalone:!0,features:[e.jDz],decls:14,vars:3,consts:[[1,"rounded","overflow-hidden"],[1,"row","g-0"],[1,"col-md-9"],[3,"options"],["carouselSlide",""],[1,"col-md-3","d-none","d-md-block"],["height","200","src","../../../assets/images/slider-3.jpeg","alt","slider",1,"w-100"],["height","200","src","../../../assets/images/slider-1.jpeg","alt","slider",1,"w-100"],["class","my-4 categories",4,"ngIf"],[1,"row","justify-content-center","row-cols-1","row-cols-sm-2","row-cols-md-3","row-cols-lg-4","row-cols-xl-5","g-4"],["class","col",3,"cutTextNum","product","whish",4,"ngFor","ngForOf"],["height","400","src","../../../assets/images/slider-image-1.jpeg","alt","slide Img Procudt"],["height","400","src","../../../assets/images/slider-image-2.jpeg","alt","slide Img Procudt"],["height","400","src","../../../assets/images/slider-image-3.jpeg","alt","slide Img Procudt"],[1,"my-4","categories"],[4,"ngFor","ngForOf"],["loading","lazy",3,"src","alt","title"],[1,"h6","text-main"],[1,"col",3,"cutTextNum","product","whish"]],template:function(o,a){1&o&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"owl-carousel-o",3),e.YNc(4,p,1,0,"ng-template",4),e.YNc(5,_,1,0,"ng-template",4),e.YNc(6,u,1,0,"ng-template",4),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"img",6)(9,"img",7),e.qZA()()(),e.YNc(10,f,5,2,"section",8),e.TgZ(11,"section")(12,"div",9),e.YNc(13,x,1,3,"app-card",10),e.qZA()()),2&o&&(e.xp6(3),e.Q6J("options",a.mainSlider),e.xp6(7),e.Q6J("ngIf",a.categories),e.xp6(3),e.Q6J("ngForOf",a.products))},dependencies:[c.ez,c.sg,c.O5,r.bB,r.Fy,r.Mp,l.A],styles:[".categories[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:200px}"]}),i})()}}]);