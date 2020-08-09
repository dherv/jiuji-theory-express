# Migration `20200809021439-init`

This migration has been generated at 8/9/2020, 2:14:39 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `jiuji-theory`.`User` ADD COLUMN `password` varchar(191) NOT NULL ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200809021439-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,154 @@
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
+  password      String
+  belt          User_belt       @default(WHITE)
+  started       DateTime        @default(now())
+  createdAt     DateTime        @default(now())
+  Location      Location[]      @relation(references: [id])
+  Club          Club[]          @relation(references: [id])
+  Guard         Guard[]
+  Submission    Submission[]
+  TechniqueStep TechniqueStep[]
+  Video         Video[]
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

