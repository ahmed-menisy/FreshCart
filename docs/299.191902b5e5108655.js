"use strict";(self.webpackChunkfreshcart=self.webpackChunkfreshcart||[]).push([[299],{5299:(P,d,o)=>{o.r(d),o.d(d,{BrandsComponent:()=>h});var g=o(6814),s=o(6472),u=o(1120),t=o(4769),l=o(5491);const m=function(a){return["/brands",a]};function _(a,i){if(1&a&&(t.TgZ(0,"div",4)(1,"div",5),t._UZ(2,"img",6),t.TgZ(3,"div",7)(4,"h4",8),t._uU(5),t.qZA()()()()),2&a){const r=i.$implicit;t.Q6J("routerLink",t.VKq(4,m,r._id)),t.xp6(2),t.Q6J("src",r.image,t.LSH)("alt",r.name),t.xp6(3),t.Oqu(r.name)}}const p=function(a,i,r){return{id:"brand",itemsPerPage:a,currentPage:i,totalItems:r}};let h=(()=>{var a;class i{constructor(e){this._EcomdataService=e,this.brandsData=[],this.pageSize=0,this.curentPage=0,this.totalItem=0}ngOnInit(){this._EcomdataService.getBrands().subscribe({next:e=>{this.brandsData=e.data,this.pageSize=e.metadata.limit,this.totalItem=e.results,this.curentPage=e.metadata.currentPage}})}pageChanged(e){this.curentPage=e,this._EcomdataService.getBrands(e).subscribe({next:n=>{this.brandsData=n.data,this.pageSize=n.metadata.limit,this.totalItem=n.results,this.curentPage=n.metadata.currentPage}})}}return(a=i).\u0275fac=function(e){return new(e||a)(t.Y36(l.J))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-brands"]],standalone:!0,features:[t.jDz],decls:6,vars:12,consts:[[1,"row","row-cols-1","row-cols-sm-2","row-cols-md-3","row-cols-lg-4","g-4"],["role","button","class","col",3,"routerLink",4,"ngFor","ngForOf"],[1,"d-flex","justify-content-center","mt-3"],["id","brand","previousLabel","Previous","nextLabel","Next","screenReaderPaginationLabel","Pagination","screenReaderPageLabel","page","screenReaderCurrentLabel","You're on page",3,"maxSize","directionLinks","autoHide","responsive","pageChange","pageBoundsCorrection"],["role","button",1,"col",3,"routerLink"],[1,"card"],[1,"card-img-top",3,"src","alt"],[1,"card-body"],[1,"card-title","text-main"]],template:function(e,n){1&e&&(t.TgZ(0,"section")(1,"div",0),t.YNc(2,_,6,6,"div",1),t.ALo(3,"paginate"),t.qZA()(),t.TgZ(4,"footer",2)(5,"pagination-controls",3),t.NdJ("pageChange",function(c){return n.pageChanged(c)})("pageBoundsCorrection",function(c){return n.pageChanged(c)}),t.qZA()()),2&e&&(t.xp6(2),t.Q6J("ngForOf",t.xi3(3,5,n.brandsData,t.kEZ(8,p,n.pageSize,n.curentPage,n.totalItem))),t.xp6(3),t.Q6J("maxSize",9)("directionLinks",!0)("autoHide",!0)("responsive",!0))},dependencies:[g.ez,g.sg,s.JX,s._s,s.LS,u.rH]}),i})()}}]);