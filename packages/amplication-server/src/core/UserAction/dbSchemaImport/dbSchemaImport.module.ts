import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { KafkaModule } from "@amplication/util/nestjs/kafka";
import { DBSchemaImportController } from "./dbSchemaImport.controller";
import { DBSchemaImportService } from "./dbSchemaImport.service";
import { DBSchemaImportResolver } from "./dbSchemaImport.resolver";
import { PrismaModule } from "../../../prisma";
import { EntityModule } from "../../entity/entity.module";
import { PermissionsModule } from "../../permissions/permissions.module";
import { UserModule } from "../../user/user.module";
import { ActionModule } from "../../action/action.module";
import { UserActionModule } from "../userActionModule";

@Module({
  imports: [
    ConfigModule,
    PermissionsModule,
    KafkaModule,
    PrismaModule,
    EntityModule,
    UserModule,
    ActionModule,
    UserActionModule,
  ],
  controllers: [DBSchemaImportController],
  providers: [DBSchemaImportService, DBSchemaImportResolver],
  exports: [DBSchemaImportService, DBSchemaImportResolver],
})
export class DBSchemaImportModule {}
