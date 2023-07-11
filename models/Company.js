/** @format */

import { Schema, model } from 'mongoose'

const companySchema = model(
  'Company',
  new Schema(
    {
      name: { type: String },
      isDeleted:{type:Boolean,default:false}
     
    },
   
    {
      timestamps: true,
    }
  )
)

export default companySchema
