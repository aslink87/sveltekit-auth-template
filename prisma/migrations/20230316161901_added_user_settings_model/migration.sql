-- CreateTable
CREATE TABLE "UserSettings" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "approved" BOOLEAN DEFAULT false,
    "userId" UUID NOT NULL,

    CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSettings_userId_key" ON "UserSettings"("userId");

-- AddForeignKey
ALTER TABLE "UserSettings" ADD CONSTRAINT "UserSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
