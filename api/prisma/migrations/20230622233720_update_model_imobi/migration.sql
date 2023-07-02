/*
  Warnings:

  - You are about to drop the column `created_at` on the `imoveis` table. All the data in the column will be lost.
  - Added the required column `email` to the `imoveis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `imoveis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `imoveis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `imoveis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `imoveis` DROP COLUMN `created_at`,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `name` VARCHAR(191) NOT NULL,
    ADD COLUMN `slug` VARCHAR(191) NOT NULL,
    ADD COLUMN `telefone` VARCHAR(191) NOT NULL,
    MODIFY `descricao` VARCHAR(255) NULL;
