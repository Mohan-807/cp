import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})

export class ShopComponent implements OnInit {
  products = [
    { id: 1, name: 'Basic Tee', color: 'Black', price: 35, image: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg' },
    { id: 2, name: 'Classic Shirt', color: 'White', price: 40, image: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg' },
    { id: 3, name: 'Casual Polo', color: 'Blue', price: 45, image: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg' },
    { id: 4, name: 'Sporty T-Shirt', color: 'Red', price: 30, image: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg' },
    { id: 5, name: 'Graphic Tee', color: 'Green', price: 38, image: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg' },
    { id: 6, name: 'Denim Jacket', color: 'Blue', price: 70, image: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg' },
    { id: 7, name: 'Hoodie', color: 'Gray', price: 50, image: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg' },
    { id: 8, name: 'Sweatshirt', color: 'Navy', price: 55, image: 'https://tailwindui.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg' }
  ];

  paginatedProducts: any[] = [];
  pageSize = 4;
  currentPage = 0;
  isLoading = false; 

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {}

  ngOnInit() {
    this.updatePaginatedProducts();
  }

  updatePaginatedProducts() {
    this.isLoading = true;
    setTimeout(() => { 
      const start = this.currentPage * this.pageSize;
      const end = start + this.pageSize;
      this.paginatedProducts = this.products.slice(start, end);
      this.isLoading = false;
    }, 500);
  }

  onPageChange(event: any) {
    this.currentPage = event.pageIndex;
    this.updatePaginatedProducts();
  }

  openProductDialog(productId: number) {
    this.dialog.open(ProductDialogComponent, {
      width: '500px',
      data: { id: productId }
    });
  }
}