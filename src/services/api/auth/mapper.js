/**
 * function to format login credentials
 * @param {Login object} auth
 * @returns formatted login obj
 */

 export const mapAuthFromServerToClient = (data) => ({
    token: data.token,
    user: {
        ...data.user,
        username: data.user.name
    }
})
