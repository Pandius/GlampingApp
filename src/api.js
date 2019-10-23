import axios from "axios";
const instance = axios.create({
    baseURL: "https://my-json-server.typicode.com/pandius/glampingDB/"
});


export const getSingleSite = id => {
    return instance.get(`sites/${id}`).then(({ data }) => {
        return data;
    });
};



export const getSites = (activity, pitch) => {
    return instance
        .get("sites", { params: { q: pitch || activity } })
        .then(({ data }) => {
            return data;
        });
};






