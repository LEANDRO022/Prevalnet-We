/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[userId]` on the table `Perfil`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Perfil_userId_unique` ON `Perfil`(`userId`);
