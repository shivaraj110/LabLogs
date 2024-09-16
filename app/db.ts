import { PrismaClient } from "@prisma/client"
const prisma  = new PrismaClient()
type assignmentPayload = {
    title : string,
    description : string,
    codeSnippet : string,
    subjectId : number
}
export const addAssignment = async (payload : assignmentPayload) => {
  try{
    const res = prisma.assignment.create({
      data : {
          title : payload.title,
          codeSnippet : payload.codeSnippet,
          description : payload.description,
          subjectId : payload.subjectId
      },
      select : {
          title : true,
          subjectId :true
      }
  })
  return res
  }
  catch{
    alert("somthing went wrong!")
  }
    
}

interface userType{
    fname? : string,
    lname? : string,
    email : string,
    password : string,
}
export const insertUser = async ( userPayload : userType ) => {
  try{
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
  catch{
    alert("something went wrong !")
  }
}
    
export const getUser = async (userPayload : userType) => {
  try{
    const res = await prisma.user.findFirst({
      where: {
        email: userPayload.email,
        password: userPayload.password,
      },
      select: {
        userId: true,
      },
    });
    return res
  }
  catch{
alert("something went wrong !")
  }
    
}


export const addSubject = async (
    name: string,
    desc: string,
    userId: number
  ) => {
    try{
      const res = await prisma.user.update({
        where: {
          userId: userId,
        },
        data: {
          subjects: {
            create: {
              subjectName: name,
              subDescription: desc,
            },
          },
        },
        select: {
          subjects: {
            select: {
              subjectName: true,
            },
          },
          userId : true
        },
      });
      return res;
    }
    catch{
      alert("somthing went wrong !")
    }
  };



  export const deleteAssignment = async ( assignmentId : number ) => {
    try{
      prisma.assignment.delete({
        where : {
          assignmentId : assignmentId
        }
      })
    }
    catch {
      alert("somthing went wrong!")
    }
  }


  export const deleteSubject = async (subjectId : number) => {
    try{
      prisma.subject.delete({
        where : {
          subjectId : subjectId
        }
      })
    }
    catch{
    alert("someting went wrong !")
    }
  }