export const UPDATEUSER ='users:updateUser';
export function updateUser(newUser){

return{
    type:UPDATEUSER,
    payload: {
   user:newUser

    }
}


}