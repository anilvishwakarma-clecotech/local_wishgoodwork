const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/

export const emailValidation=(val:string)=>{
    return emailRegex.test(val)
}

