# Migration `20200815130819-init`

This migration has been generated at 8/15/2020, 1:08:19 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `jiuji-theory`.`Club` (
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191) NOT NULL ,
`locationId` int NOT NULL ,
`userId` int NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`Guard` (
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191) NOT NULL ,
`userId` int NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`Location` (
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191) NOT NULL ,
`userId` int NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`Position` (
`id` int NOT NULL  AUTO_INCREMENT,
`name` ENUM('OFFENSIVE', 'DEFENSIVE') NOT NULL DEFAULT 'OFFENSIVE',
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`Submission` (
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191) NOT NULL ,
`userId` int NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`Teacher` (
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191) NOT NULL ,
`clubId` int NOT NULL ,
`userId` int NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`Technique` (
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191) NOT NULL ,
`teacherId` int NOT NULL ,
`positionId` int NOT NULL ,
`submissionId` int NOT NULL ,
`guardId` int NOT NULL ,
`userId` int NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`TechniqueStep` (
`id` int NOT NULL  AUTO_INCREMENT,
`text` varchar(191) NOT NULL ,
`order` int NOT NULL ,
`techniqueId` int NOT NULL ,
`userId` int NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`User` (
`id` int NOT NULL  AUTO_INCREMENT,
`email` varchar(191) NOT NULL ,
`name` varchar(191) NOT NULL ,
`password` varchar(191) NOT NULL ,
`belt` ENUM('WHITE', 'BLUE', 'PURPLE', 'BROWN', 'BLACK') NOT NULL DEFAULT 'WHITE',
`started` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`Video` (
`id` int NOT NULL  AUTO_INCREMENT,
`title` varchar(191) NOT NULL ,
`description` varchar(191) NOT NULL ,
`youtubeId` varchar(191) NOT NULL ,
`userId` int NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`_TechniqueToVideo` (
`A` int NOT NULL ,
`B` int NOT NULL 
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE  INDEX `locationId` ON `jiuji-theory`.`Club`(`locationId`)

CREATE  INDEX `userId` ON `jiuji-theory`.`Guard`(`userId`)

CREATE  INDEX `userId` ON `jiuji-theory`.`Submission`(`userId`)

CREATE  INDEX `clubId` ON `jiuji-theory`.`Teacher`(`clubId`)

CREATE  INDEX `guardId` ON `jiuji-theory`.`Technique`(`guardId`)

CREATE  INDEX `positionId` ON `jiuji-theory`.`Technique`(`positionId`)

CREATE  INDEX `submissionId` ON `jiuji-theory`.`Technique`(`submissionId`)

CREATE  INDEX `teacherId` ON `jiuji-theory`.`Technique`(`teacherId`)

CREATE  INDEX `techniqueId` ON `jiuji-theory`.`TechniqueStep`(`techniqueId`)

CREATE  INDEX `userId` ON `jiuji-theory`.`TechniqueStep`(`userId`)

CREATE UNIQUE INDEX `User.email_unique` ON `jiuji-theory`.`User`(`email`)

CREATE  INDEX `userId` ON `jiuji-theory`.`Video`(`userId`)

CREATE UNIQUE INDEX `_TechniqueToVideo_AB_unique` ON `jiuji-theory`.`_TechniqueToVideo`(`A`,`B`)

CREATE  INDEX `_TechniqueToVideo_B_index` ON `jiuji-theory`.`_TechniqueToVideo`(`B`)

ALTER TABLE `jiuji-theory`.`Club` ADD FOREIGN KEY (`locationId`) REFERENCES `jiuji-theory`.`Location`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Club` ADD FOREIGN KEY (`userId`) REFERENCES `jiuji-theory`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Guard` ADD FOREIGN KEY (`userId`) REFERENCES `jiuji-theory`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Location` ADD FOREIGN KEY (`userId`) REFERENCES `jiuji-theory`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Submission` ADD FOREIGN KEY (`userId`) REFERENCES `jiuji-theory`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Teacher` ADD FOREIGN KEY (`clubId`) REFERENCES `jiuji-theory`.`Club`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Teacher` ADD FOREIGN KEY (`userId`) REFERENCES `jiuji-theory`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Technique` ADD FOREIGN KEY (`guardId`) REFERENCES `jiuji-theory`.`Guard`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Technique` ADD FOREIGN KEY (`positionId`) REFERENCES `jiuji-theory`.`Position`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Technique` ADD FOREIGN KEY (`submissionId`) REFERENCES `jiuji-theory`.`Submission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Technique` ADD FOREIGN KEY (`teacherId`) REFERENCES `jiuji-theory`.`Teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Technique` ADD FOREIGN KEY (`userId`) REFERENCES `jiuji-theory`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`TechniqueStep` ADD FOREIGN KEY (`techniqueId`) REFERENCES `jiuji-theory`.`Technique`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`TechniqueStep` ADD FOREIGN KEY (`userId`) REFERENCES `jiuji-theory`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Video` ADD FOREIGN KEY (`userId`) REFERENCES `jiuji-theory`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`_TechniqueToVideo` ADD FOREIGN KEY (`A`) REFERENCES `jiuji-theory`.`Technique`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`_TechniqueToVideo` ADD FOREIGN KEY (`B`) REFERENCES `jiuji-theory`.`Video`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200815130819-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,162 @@
+generator client {
+  provider        = "prisma-client-js"
+  previewFeatures = ["connectOrCreate"]
+}
+
+datasource mysql {
+  provider = "mysql"
+  url = "***"
+}
+
+model Club {
+  id         Int       @default(autoincrement()) @id
+  name       String
+  locationId Int
+  userId     Int
+  createdAt  DateTime  @default(now())
+  updatedAt  DateTime  @default(now())
+  location   Location  @relation(fields: [locationId], references: [id])
+  user       User      @relation(fields: [userId], references: [id])
+  teachers   Teacher[]
+
+  @@index([locationId], name: "locationId")
+}
+
+model Guard {
+  id         Int         @default(autoincrement()) @id
+  name       String
+  userId     Int
+  createdAt  DateTime    @default(now())
+  updatedAt  DateTime    @default(now())
+  user       User        @relation(fields: [userId], references: [id])
+  techniques Technique[]
+
+  @@index([userId], name: "userId")
+}
+
+model Location {
+  id        Int      @default(autoincrement()) @id
+  name      String
+  userId    Int
+  createdAt DateTime @default(now())
+  updatedAt DateTime @default(now())
+  clubs     Club[]
+  user      User     @relation(fields: [userId], references: [id])
+}
+
+model Position {
+  id         Int           @default(autoincrement()) @id
+  name       Position_name @default(OFFENSIVE)
+  techniques Technique[]
+}
+
+model Submission {
+  id         Int         @default(autoincrement()) @id
+  name       String
+  userId     Int
+  createdAt  DateTime    @default(now())
+  updatedAt  DateTime    @default(now())
+  user       User        @relation(fields: [userId], references: [id])
+  techniques Technique[]
+
+  @@index([userId], name: "userId")
+}
+
+model Teacher {
+  id         Int         @default(autoincrement()) @id
+  name       String
+  clubId     Int
+  userId     Int
+  createdAt  DateTime    @default(now())
+  updatedAt  DateTime    @default(now())
+  club       Club        @relation(fields: [clubId], references: [id])
+  user       User        @relation(fields: [userId], references: [id])
+  techniques Technique[]
+
+  @@index([clubId], name: "clubId")
+}
+
+model Technique {
+  id           Int             @default(autoincrement()) @id
+  name         String
+  teacherId    Int
+  positionId   Int
+  submissionId Int
+  guardId      Int
+  userId       Int
+  createdAt    DateTime        @default(now())
+  updatedAt    DateTime        @default(now())
+  guard        Guard           @relation(fields: [guardId], references: [id])
+  position     Position        @relation(fields: [positionId], references: [id])
+  submission   Submission      @relation(fields: [submissionId], references: [id])
+  teacher      Teacher         @relation(fields: [teacherId], references: [id])
+  user         User            @relation(fields: [userId], references: [id])
+  steps        TechniqueStep[]
+  videos       Video[]
+
+  @@index([guardId], name: "guardId")
+  @@index([positionId], name: "positionId")
+  @@index([submissionId], name: "submissionId")
+  @@index([teacherId], name: "teacherId")
+}
+
+model TechniqueStep {
+  id          Int       @default(autoincrement()) @id
+  text        String
+  order       Int
+  techniqueId Int
+  userId      Int
+  createdAt   DateTime  @default(now())
+  updatedAt   DateTime  @default(now())
+  technique   Technique @relation(fields: [techniqueId], references: [id])
+  user        User      @relation(fields: [userId], references: [id])
+
+  @@index([techniqueId], name: "techniqueId")
+  @@index([userId], name: "userId")
+}
+
+model User {
+  id             Int             @default(autoincrement()) @id
+  email          String          @unique
+  name           String
+  password       String
+  belt           User_belt       @default(WHITE)
+  started        DateTime        @default(now())
+  createdAt      DateTime        @default(now())
+  updatedAt      DateTime        @default(now())
+  guards         Guard[]
+  submissions    Submission[]
+  techniqueSteps TechniqueStep[]
+  videos         Video[]
+  clubs          Club[]
+  locations      Location[]
+  teachers       Teacher[]
+  techniques     Technique[]
+}
+
+model Video {
+  id          Int         @default(autoincrement()) @id
+  title       String
+  description String
+  youtubeId   String
+  userId      Int
+  createdAt   DateTime    @default(now())
+  updatedAt   DateTime    @default(now())
+  user        User        @relation(fields: [userId], references: [id])
+  techniques  Technique[]
+
+  @@index([userId], name: "userId")
+}
+
+enum Position_name {
+  OFFENSIVE
+  DEFENSIVE
+}
+
+enum User_belt {
+  WHITE
+  BLUE
+  PURPLE
+  BROWN
+  BLACK
+}
```


