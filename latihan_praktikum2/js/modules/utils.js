export function formatDate(date){
    return new Date(date).toLocaleDataString('id-ID', {
        year: ' numeric',
        month: 'long',
        day: 'numeric'
    });
}

export function capitalizeString(str){
    return str
    .split(' ')
    .map(word => word.charAt(0). toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

export function calculateYears(startDate, endDate = new Date()){
    const start = new Date(startDate);
    const end = new Date(endDate);
    const yearDiff = end.getFullYear() - start.getFullYear();

    if(
        end.getMonth() < start.getMonth() || 
        (end.getMonth()) === start.getMonth () && end.getDate() < start.getDate())
    {
        return yearDiff - 1;
    }
    return yearDiff;
}