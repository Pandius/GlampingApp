import format from "date-fns/format";




export const activitiesArray = (arr) => {
    const result = []
    arr.forEach(element => {
        element.activities.forEach(activity => {
            result.push(activity)
        })

    });

    return [...new Set(result)]
};

export const pitchesArr = (arr) => {
    const result = []
    arr.forEach(element => {
        element.pitches.forEach(pitch => {
            result.push(pitch)
        })

    });

    return [...new Set(result)]
};





export const dateFormat = date => {
    const time = new Date(date);
    return `${format(time, "dd-MMMM-yyyy")}`;
};
