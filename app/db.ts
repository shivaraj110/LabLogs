import { Assignment, User } from "@prisma/client";
import { prisma } from "./routes/subjects.$userId";
import { truncate } from "fs";
import test from "node:test";
type assignmentPayload = Assignment
export const addAssignment = async (payload : assignmentPayload) => {
    const res = prisma.assignment.create({
        data : {
             title : payload.title,
             codeSnippet : payload.codeSnippet,
             description : payload.description,
            postedBy : payload.postedBy,
            subjectId : payload.subjectId
        },
        select : {
            title : true
        }
    })
    return res
}

interface userType{
    fname? : string,
    lname? : string,
    email : string,
    password : string,
}
    export const insertUser = async ( userPayload : userType ) => {
    const res = await prisma.user.create({
        data : {
            fname : userPayload.fname,
            lname : userPayload.lname,
            email : userPayload.email,
            password : userPayload.password,
        },
        select :{
            userId : true,
            
        }
    })
    return res
}
