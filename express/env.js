//export const PORT=isNaN(process.env.PORT)?3000:parseInt(process.env.PORT);

// import {z,ZodError} from "zod";

// const ageSchema=z.number().min(10).max(100).int();
// const userAge=190;
// try {
//     const parseAge=ageSchema.parse(userAge);
//    // const {data,error,success} =ageSchema.safeParse(userAge);
//    console.log(parseAge);
// } catch (error) {
//     if(error instanceof ZodError){
//         console.log(error.issues[0].message);
//     }
//     else{
//         console.log("Unexpeted error : ",error)
//     }
// }
