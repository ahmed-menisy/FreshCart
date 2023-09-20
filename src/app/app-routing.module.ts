import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, authGuardLogin } from './common/gurads/auth.guard';

const routes: Routes = [
  {
    canActivate: [authGuard],
    path: '',
    loadComponent: () =>
      import('./layouts/blank/blank.component').then((m) => m.BlankComponent),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./components/products/products.component').then(
            (m) => m.ProductsComponent
          ),
      },
      {
        path: 'products/:id',
        loadComponent: () =>
          import(
            './components/products-details/products-details.component'
          ).then((m) => m.ProductsDetailsComponent),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./components/categories/categories.component').then(
            (m) => m.CategoriesComponent
          ),
      },
      {
        path: 'categories/:id',
        loadComponent: () =>
          import(
            './components/categories-details/categories-details.component'
          ).then((m) => m.CategoriesDetailsComponent),
      },
      {
        path: 'whishlist',
        loadComponent: () =>
          import('./components/whishlist/whishlist.component').then(
            (m) => m.WhishlistComponent
          ),
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./components/brands/brands.component').then(
            (m) => m.BrandsComponent
          ),
      },
      {
        path: 'brands/:id',
        loadComponent: () =>
          import('./components/brandsdetails/brandsdetails.component').then(
            (m) => m.BrandsdetailsComponent
          ),
      },
      {
        path: 'cart',
        loadComponent: () =>
          import('./components/cart/cart.component').then(
            (m) => m.CartComponent
          ),
      },

      {
        path: 'shopaddress',
        loadComponent: () =>
          import('./components/shopingaddress/shopingaddress.component').then(
            (m) => m.ShopingaddressComponent
          ),
      },

      {
        path: 'allorders',
        loadComponent: () =>
          import('./components/allorders/allorders.component').then(
            (m) => m.AllordersComponent
          ),
      },
      {
        path: 'forgot',
        loadComponent: () =>
          import('./components/forgotpassword/forgotpassword.component').then(
            (m) => m.ForgotpasswordComponent
          ),
      },
      {
        path: 'updatepass',
        loadComponent: () =>
          import('./components/updatepass/updatepass.component').then(
            (m) => m.UpdatepassComponent
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./components/profile/profile.component').then(
            (m) => m.ProfileComponent
          ),
      },
    ],
  },
  {
    canActivate: [authGuardLogin],
    path: '',
    loadComponent: () =>
      import('./layouts/auth/auth.component').then((m) => m.AuthComponent),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./components/login/login.component').then(
            (m) => m.LoginComponent
          ),
      },
      {
        path: 'forgotlogin',
        loadComponent: () =>
          import('./components/forgotpassword/forgotpassword.component').then(
            (m) => m.ForgotpasswordComponent
          ),
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./components/register/register.component').then(
            (m) => m.RegisterComponent
          ),
      },
    ],
  },

  {
    path: '**',
    loadComponent: () =>
      import('./components/notfound/notfound.component').then(
        (m) => m.NotfoundComponent
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
