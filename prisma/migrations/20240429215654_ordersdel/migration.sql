/*
  Warnings:

  - You are about to drop the column `deliveredAt` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "deliveredAt",
ADD COLUMN     "delivered" BOOLEAN NOT NULL DEFAULT false;
