/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
    constructor(
        private readonly productService: ProductsService
    ){}
  @Post()
  addProducts(
    @Body('title') prodTitle: string,
    @Body('description') prodDesc: string,
    @Body('price') prodPrice: number
  ): any {
    const generatedId = this.productService.insertProduct(prodDesc, prodTitle, prodPrice);
    return {id: generatedId}
  }

  @Get()
  getProducts(){
    return this.productService.fetchProducts()
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string){
    return this.productService.getSingleProduct(prodId)
  }

  @Patch(':id')
  updateProduct(
    @Param('id') prodId: string, 
    @Body('title') prodTitle: string, 
    @Body('description') prodDesc: string, 
    @Body('price') prodPrice: number){
    this.productService.updateProduct(prodId, prodTitle, prodDesc, prodPrice);
    return null;
  }

  @Delete('id')
  removeProduct(@Param('id') prodId: string){
    this.productService.deleteProduct(prodId);
    return null;
  }
}
