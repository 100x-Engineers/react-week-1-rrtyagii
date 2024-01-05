export const dateFormat = (form) => {
    const dateOfBirth = new Date(form.year, form.month - 1, form.day);

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const displayDate = formatDate(dateOfBirth);
    return displayDate
}