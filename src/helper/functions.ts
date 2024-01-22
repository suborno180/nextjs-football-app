export function generateUniqueNumber() {
    // Get current timestamp
    const timestamp = new Date().getTime();

    // Generate a random number between 10000 and 99999
    const randomPart = Math.floor(Math.random() * 90000) + 10000;

    // Combine timestamp and random number to create a 15-digit unique number
    const uniqueNumber = timestamp.toString() + randomPart.toString();

    return uniqueNumber;
}
export const convertToSlug = (inputString: string) => {
    return inputString
        .replace(/\d+/g, '')                    // Remove digits
        .replace(/\s+/g, '-')                   // Replace spaces with dashes
        .replace(/-$/, '')                      // Remove the last hyphen
        .toLowerCase();                         // Convert to lowercase
}
