import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {


  getBannerAd(){
    return this.http.get<any>(baseURL + 'banner_ads')
    .pipe(map(bannerAds => {
      const bannerAdsArray = Object.values(bannerAds)

      return bannerAdsArray[0]
    }),
    catchError(errRes => {
      return throwError(errRes);
    })
    )
  }

  getCategories(){
    return this.http.get<any>(baseURL + 'categories')
    .pipe(map(categories => {
      const categoriesArray = Object.values(categories)

      return categoriesArray[0]
    }), catchError(errRes => {
      return throwError(errRes)
    }) )
  }

  getHomeAds(){
    return this.http.get<any>(baseURL + 'home_ads')
    .pipe(map (ads => {
      const adsArray = Object.values(ads)

      return adsArray[0]
    }), catchError( errorRes => {
      return throwError(errorRes)
    }) )
  }

  getFeaturedProducts(){
    return this.http.get<any>(baseURL + 'featured_products')
    .pipe(map(feautured_prods => {
      const fProdArray = Object.values(feautured_prods)

      return fProdArray[0]
    }), catchError( errorRes => {
      return throwError(errorRes)
    }))
  }

  removeItemFromCart(id: number){
    return this.http.post<any>(baseURL + '/remove_cart_item/' + id, {})
    .pipe(map(res => {
      console.log(res)
    }), 
      catchError(erroRes => {
        return throwError(erroRes)
      })
    )

  }

  getLatestProducts(){
    return this.http.get<any>(baseURL + 'latest_products')
    .pipe(map( latest_products => {
      const LprodArray = Object.values(latest_products)

      return LprodArray[0]
    }), catchError(errorRes => {
      return throwError(errorRes)
    }))
  }

  getSingleProduct(id : number){
    return this.http.get<any>(baseURL + 'products/' + id)
    .pipe(map( product => {
      const productResArray = Object.values(product)

      return productResArray[0]
    }), catchError( errorRes => {
      return throwError(errorRes)
    }))
  }


  getBlogs() {
    return this.http.get<any> (baseURL + 'blog')
    .pipe(map ( blogs => {
      const blogsArray = Object.values(blogs)

      return blogsArray[0]
    }), catchError( errorRes => {
      return throwError(errorRes)
    })) 
  }



  constructor(
    private http : HttpClient
  ) { }


}
