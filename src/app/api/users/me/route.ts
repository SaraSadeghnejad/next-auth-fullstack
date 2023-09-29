import { connect } from "../../../../dbConfig/dbConfig";
import User from "../../../../models/userModel";
import { NextRequest, NextResponse } from "next/server";
 import { getDataFromToken } from "../../../../helpers/getDataFromToken";
connect()

export async function GET(request:NextRequest) {
    try{
       const userId = await getDataFromToken(request);
       const user = await User.findOne({_id:userId})
    }catch(err:any){
        return NextResponse.json({error:err.message},{status:400});
    }
}