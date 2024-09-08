import { Assignment } from "@prisma/client";
import { prisma } from "./routes/subjects";
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
}