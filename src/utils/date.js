export function timeDifference(prevTime) {
    const msPerMinute = 60 * 1000,
        msPerHour = msPerMinute * 60,
        msPerDay = msPerHour * 24,
        msPerMonth = msPerDay * 30,
        msPerYear = msPerDay * 365;
    const elapsed = Date.now() - new Date(prevTime).getTime();

    return (elapsed < msPerMinute) ? 
        Math.round(elapsed/1000) + ' seconds ago'  
        : (elapsed < msPerHour) ?
            Math.round(elapsed/msPerMinute) + ' minutes ago'
            : (elapsed < msPerDay ) ?
                Math.round(elapsed/msPerHour) + ' hours ago'
                : (elapsed < msPerMonth) ? 
                    Math.round(elapsed/msPerDay) + ' days ago'
                    : (elapsed < msPerYear) ?
                        Math.round(elapsed/msPerMonth) + ' months ago'
                        : Math.round(elapsed/msPerYear ) + ' years ago';
}