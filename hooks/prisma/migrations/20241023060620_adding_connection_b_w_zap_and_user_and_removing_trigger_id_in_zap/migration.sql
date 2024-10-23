/*
  Warnings:

  - You are about to drop the column `triggerId` on the `Zap` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Zap" DROP COLUMN "triggerId",
ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "Zap" ADD CONSTRAINT "Zap_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
