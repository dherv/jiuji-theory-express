# Migration `20200808063210-init`

This migration has been generated at 8/8/2020, 6:32:10 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE `jiuji-theory`.`Club` (
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191) NOT NULL ,
`locationId` int NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`Guard` (
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191) NOT NULL ,
`userId` int NOT NULL ,
`default` boolean NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`Location` (
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191) NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL ,
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
`default` boolean NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`Teacher` (
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191) NOT NULL ,
`clubId` int NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`Technique` (
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191) NOT NULL ,
`teacherId` int NOT NULL ,
`positionId` int NOT NULL ,
`submissionId` int NOT NULL ,
`guardId` int NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`TechniqueStep` (
`id` int NOT NULL  AUTO_INCREMENT,
`text` varchar(191) NOT NULL ,
`order` int NOT NULL ,
`techniqueId` int NOT NULL ,
`userId` int NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL ,
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`User` (
`id` int NOT NULL  AUTO_INCREMENT,
`email` varchar(191) NOT NULL ,
`name` varchar(191) NOT NULL ,
`belt` ENUM('WHITE', 'BLUE', 'PURPLE', 'BROWN', 'BLACK') NOT NULL DEFAULT 'WHITE',
`locationId` int NOT NULL ,
`started` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci

CREATE TABLE `jiuji-theory`.`Video` (
`id` int NOT NULL  AUTO_INCREMENT,
`name` varchar(191) NOT NULL ,
`channelId` varchar(191) NOT NULL ,
`description` varchar(191) NOT NULL ,
`userId` int NOT NULL ,
`createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
`updatedAt` datetime(3) NOT NULL ,
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

CREATE  INDEX `locationId` ON `jiuji-theory`.`User`(`locationId`)

CREATE  INDEX `userId` ON `jiuji-theory`.`Video`(`userId`)

CREATE UNIQUE INDEX `_TechniqueToVideo_AB_unique` ON `jiuji-theory`.`_TechniqueToVideo`(`A`,`B`)

CREATE  INDEX `_TechniqueToVideo_B_index` ON `jiuji-theory`.`_TechniqueToVideo`(`B`)

ALTER TABLE `jiuji-theory`.`Club` ADD FOREIGN KEY (`locationId`) REFERENCES `jiuji-theory`.`Location`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Guard` ADD FOREIGN KEY (`userId`) REFERENCES `jiuji-theory`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Submission` ADD FOREIGN KEY (`userId`) REFERENCES `jiuji-theory`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Teacher` ADD FOREIGN KEY (`clubId`) REFERENCES `jiuji-theory`.`Club`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Technique` ADD FOREIGN KEY (`guardId`) REFERENCES `jiuji-theory`.`Guard`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Technique` ADD FOREIGN KEY (`positionId`) REFERENCES `jiuji-theory`.`Position`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Technique` ADD FOREIGN KEY (`submissionId`) REFERENCES `jiuji-theory`.`Submission`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Technique` ADD FOREIGN KEY (`teacherId`) REFERENCES `jiuji-theory`.`Teacher`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`TechniqueStep` ADD FOREIGN KEY (`techniqueId`) REFERENCES `jiuji-theory`.`Technique`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`TechniqueStep` ADD FOREIGN KEY (`userId`) REFERENCES `jiuji-theory`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`User` ADD FOREIGN KEY (`locationId`) REFERENCES `jiuji-theory`.`Location`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`Video` ADD FOREIGN KEY (`userId`) REFERENCES `jiuji-theory`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`_TechniqueToVideo` ADD FOREIGN KEY (`A`) REFERENCES `jiuji-theory`.`Technique`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`_TechniqueToVideo` ADD FOREIGN KEY (`B`) REFERENCES `jiuji-theory`.`Video`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`_ClubToUser` ADD FOREIGN KEY (`A`) REFERENCES `jiuji-theory`.`Club`(`id`) ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE `jiuji-theory`.`_ClubToUser` ADD FOREIGN KEY (`B`) REFERENCES `jiuji-theory`.`User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200808063210-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,156 @@
+generator client {
+  provider = "prisma-client-js"
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
+  createdAt  DateTime  @default(now())
+  updatedAt  DateTime
+  Location   Location  @relation(fields: [locationId], references: [id])
+  User       User[]    @relation(references: [id])
+  Teacher    Teacher[]
+
+  @@index([locationId], name: "locationId")
+}
+
+model Guard {
+  id        Int         @default(autoincrement()) @id
+  name      String
+  userId    Int
+  default   Boolean
+  createdAt DateTime    @default(now())
+  updatedAt DateTime
+  User      User        @relation(fields: [userId], references: [id])
+  Technique Technique[]
+
+  @@index([userId], name: "userId")
+}
+
+model Location {
+  id        Int      @default(autoincrement()) @id
+  name      String
+  createdAt DateTime @default(now())
+  updatedAt DateTime
+  Club      Club[]
+  User      User[]
+}
+
+model Position {
+  id        Int           @default(autoincrement()) @id
+  name      Position_name @default(OFFENSIVE)
+  Technique Technique[]
+}
+
+model Submission {
+  id        Int         @default(autoincrement()) @id
+  name      String
+  userId    Int
+  default   Boolean
+  createdAt DateTime    @default(now())
+  updatedAt DateTime
+  User      User        @relation(fields: [userId], references: [id])
+  Technique Technique[]
+
+  @@index([userId], name: "userId")
+}
+
+model Teacher {
+  id        Int         @default(autoincrement()) @id
+  name      String
+  clubId    Int
+  createdAt DateTime    @default(now())
+  updatedAt DateTime
+  Club      Club        @relation(fields: [clubId], references: [id])
+  Technique Technique[]
+
+  @@index([clubId], name: "clubId")
+}
+
+model Technique {
+  id            Int             @default(autoincrement()) @id
+  name          String
+  teacherId     Int
+  positionId    Int
+  submissionId  Int
+  guardId       Int
+  createdAt     DateTime        @default(now())
+  updatedAt     DateTime
+  Guard         Guard           @relation(fields: [guardId], references: [id])
+  Position      Position        @relation(fields: [positionId], references: [id])
+  Submission    Submission      @relation(fields: [submissionId], references: [id])
+  Teacher       Teacher         @relation(fields: [teacherId], references: [id])
+  TechniqueStep TechniqueStep[]
+  Video         Video[]
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
+  updatedAt   DateTime
+  Technique   Technique @relation(fields: [techniqueId], references: [id])
+  User        User      @relation(fields: [userId], references: [id])
+
+  @@index([techniqueId], name: "techniqueId")
+  @@index([userId], name: "userId")
+}
+
+model User {
+  id            Int             @default(autoincrement()) @id
+  email         String          @unique
+  name          String
+  belt          User_belt       @default(WHITE)
+  locationId    Int
+  started       DateTime        @default(now())
+  createdAt     DateTime        @default(now())
+  Location      Location        @relation(fields: [locationId], references: [id])
+  Club          Club[]          @relation(references: [id])
+  Guard         Guard[]
+  Submission    Submission[]
+  TechniqueStep TechniqueStep[]
+  Video         Video[]
+
+  @@index([locationId], name: "locationId")
+}
+
+model Video {
+  id          Int         @default(autoincrement()) @id
+  name        String
+  channelId   String
+  description String
+  userId      Int
+  createdAt   DateTime    @default(now())
+  updatedAt   DateTime
+  User        User        @relation(fields: [userId], references: [id])
+  Technique   Technique[]
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


