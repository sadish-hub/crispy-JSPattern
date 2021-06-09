import mapping from "./adapterhelper.js";

const adapter = (response) => {
    return response.map(item => {
        let normalized = {};

        Object.keys(item).forEach(key => normalized[mapping[key]] = item[key]);
        return normalized;
    });
};

//Note: It can be acheived using PROXY too

export default adapter;