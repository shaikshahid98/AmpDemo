/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PluginWhereUniqueInput } from "./PluginWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PluginUpdateInput } from "./PluginUpdateInput";

@ArgsType()
class UpdatePluginArgs {
  @ApiProperty({
    required: true,
    type: () => PluginWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PluginWhereUniqueInput)
  @Field(() => PluginWhereUniqueInput, { nullable: false })
  where!: PluginWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PluginUpdateInput,
  })
  @ValidateNested()
  @Type(() => PluginUpdateInput)
  @Field(() => PluginUpdateInput, { nullable: false })
  data!: PluginUpdateInput;
}

export { UpdatePluginArgs as UpdatePluginArgs };
