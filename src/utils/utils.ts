export const formatDate = (isString : string) : string => {
    const date = new Date(isString);
    const formatter = new Intl.DateTimeFormat('en-En', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    return formatter.format(date);
}