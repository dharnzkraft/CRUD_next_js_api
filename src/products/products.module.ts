/* eslint-disable prettier/prettier */
import { Module } from "@nestjs/common";
import { ProductsController } from "./product.controller";
import { ProductsService } from "./products.service";

@Module({
    imports: [ProductsModule],
    controllers: [ProductsController],
    providers: [ProductsService]
})
export class ProductsModule{}