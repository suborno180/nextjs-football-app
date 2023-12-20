export const convertToSlug = (inputString: string) => {
    return inputString
        .replace(/\d+/g, '')                    // Remove digits
        .replace(/\s+/g, '-')                   // Replace spaces with dashes
        .replace(/-$/, '')                      // Remove the last hyphen
        .toLowerCase();                         // Convert to lowercase
}
