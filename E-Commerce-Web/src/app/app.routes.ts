import { Routes } from '@angular/router';

export const routes: Routes = [{
    path:'',
    pathMatch:'full',
    loadComponent:()=>{
        return import('./home/home.component').then((m)=>m.HomeComponent);
    }
},{
    path:'Home',
    loadComponent:() =>{
        return import('./home/home.component').then((m)=>m.HomeComponent)
    }
},{
    path:'Login',
    loadComponent:()=>{
        return import('./login/login.component').then((m)=>m.LoginComponent)
    }
},{
    path:'Register',
    loadComponent:()=>{
        return import('./register/register.component').then((m)=>m.RegisterComponent)
    }
},{
    path:'Shop',
    loadComponent:()=>{
        return import('./shop/shop.component').then((m)=>m.ShopComponent)
    }
},{
    path:'Product',
    loadComponent:()=>{
        return import('./product/product.component').then((m)=>m.ProductComponent)
    }
},{
    path:'Edit-Product',
    loadComponent:()=>{
        return import('./edit-product/edit-product.component').then((m)=>m.EditProductComponent)
    }
},{
    path:'Checkout',
    loadComponent:()=>{
        return import('./checkout/checkout.component').then((m)=>m.CheckoutComponent)
    }
},{
    path:'Cart',
    loadComponent:()=>{
        return import('./cart/cart.component').then((m)=>m.CartComponent)
    }
},{
    path:'Add-Product',
    loadComponent:()=>{
        return import('./add-product/add-product.component').then((m)=>m.AddProductComponent)
    }
}

];
