export const dateFormat = (form) => {
    const dateOfBirth = new Date(form.year, form.month - 1, form.day);

    const formatDate = (date) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    const displayDate = formatDate(dateOfBirth);
    return displayDate
}

export const timeSince = (timestamp) => {
    const now = new Date();
    const timestampDate = new Date(timestamp);
    const secondsPast = (now.getTime() - timestampDate.getTime()) / 1000;

    if(secondsPast < 3600) {
        return Math.floor(secondsPast / 60) + 'm';
    }
    if(secondsPast < 86400) {
        return Math.floor(secondsPast / 3600) + 'h';
    }
    if(secondsPast < 604800) {
        return Math.floor(secondsPast / 86400) + 'd';
    }

    const day = timestampDate.getDate();
    const month = timestampDate.getMonth() + 1; // JavaScript months are 0-based
    const year = timestampDate.getFullYear().toString().substr(-2); // Get last two digits of year

    return `${month}/${day}/${year}`;
}