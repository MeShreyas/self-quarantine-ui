/*
export function someGetter (state) {
}
*/


export const getSymptoms = (state) => {
    return state.symptoms;
};
export const getTemperature = (state) => {
    return state.temperature;
};
export const getAdditional = (state) => {
    return state.additionalSymptoms;
};
export const getDistrict = (state) => {
    return state.district;
};
export const getGender = (state) => {
    return state.gender;
};
export const getRisk = (state) => {
    return state.risk;
};
export const getExposure = (state) => {
    return state.exposure;
};
export const getUnderlying = (state) => {
    return state.underlying;
};
export const getProgress = (state) => {
    return state.progress;
};

export const getTotalQuizes = (state) => {
    return state.quizes.length;
};

export const getLowRisk = (state) => {
    var t = state.quizes.filter(elem => {
        return elem.risk === 'low';
    });
    return t.length;
};

export const getMediumRisk = (state) => {
    var t = state.quizes.filter(elem => {
        return elem.risk === 'medium';
    });
    return t.length;
};

export const getHighRisk = (state) => {
    var t = state.quizes.filter(elem => {
        return elem.risk === 'high';
    });
    return t.length;
};