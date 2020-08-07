# Migration `20200806140416-add-name-to-location`

This migration has been generated at 8/6/2020, 2:04:16 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE `jiuji-theory`.`Location` ADD COLUMN `name` varchar(191) NOT NULL ;
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200806133420-intro..20200806140416-add-name-to-location
--- datamodel.dml
+++ datamodel.dml
@@ -3,9 +3,9 @@
 }
 datasource mysql {
   provider = "mysql"
-  url = "***"
+  url = "***"
 }
 model Club {
   id         Int       @default(autoincrement()) @id
@@ -35,8 +35,9 @@
 }
 model Location {
   id        Int      @default(autoincrement()) @id
+  name      String
   createdAt DateTime @default(now())
   updatedAt DateTime
   Club      Club[]
   User      User[]
```


