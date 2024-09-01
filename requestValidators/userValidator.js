export default function userValidator(user) {
    const errorMessages = [];

    if(!user) {
        errorMessages.push("Missing user information");
        return errorMessages;
    }
    
    if(!user.firstName?.trim())errorMessages.push("First name is required.");
    if(!user.lastName?.trim()) errorMessages.push("Last name is required.");
    if(!user.email?.trim()) errorMessages.push("E-Mail is required.");
    if(!user.dateOfBirth?.trim()) errorMessages.push("Date of birth is required.");
   
    const address = user.address;

    if(!address) {
        errorMessages.push("Address is required.");
        return errorMessages;
    }
    if(!address.street?.trim()) errorMessages.push("Address Street is required.");
    if(!address.number?.trim()) errorMessages.push("Address Number is required.");
    if(!address.city?.trim()) errorMessages.push("Address City is required.");
    if(!address.state?.trim()) errorMessages.push("Address State/Province is required.");
    if(!address.zip?.trim()) errorMessages.push("Address Zip/Postal Code is required.");
    if(!address.country?.trim())errorMessages.push("Address Country is required.");

    return errorMessages;
}