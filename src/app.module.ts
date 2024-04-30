import { Module } from '@nestjs/common';
import { DatosModule } from './datos/datos.module';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [DatosModule, OrdersModule, ProductsModule],
})
export class AppModule {}
