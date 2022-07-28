import {
    ADD_PROFILE,
    DUPLICATE_PROFILE,
    RENAME_PROFILE,
    DELETE_PROFILE,
    SELECT_PROFILE,
    ENABLE_MIC,
    CHANGE_MIC_VALUE,
    ENABLE_MIC_SENSITIVITY,
    CHANGE_MIC_SENSITIVITY,
    ENABLE_SIDETONE,
    CHANGE_SIDETONE,
    ENABLE_VOLUME_NORMALIZATION,
    CHANGE_VOLUME_NORMALIZATION,
    ENABLE_AMBIENT_NOISE_REDUCTION,
    CHANGE_AMBIENT_NOISE_REDUCTION,
    ENABLE_VOICE_CLARITY,
    CHANGE_VOICE_CLARITY,
    CHANGE_CONFIG,
    ENABLE_FEATURE,
} from "./constants";

//=================ACTIONS=================
export const addProfile = (payload) => ({
    type: ADD_PROFILE,
    payload,
});

export const dupProfile = (payload) => ({
    type: DUPLICATE_PROFILE,
    payload,
});

export const renameProfile = (payload) => ({
    type: RENAME_PROFILE,
    payload,
});

export const deleteProfile = (payload) => ({
    type: DELETE_PROFILE,
    payload,
});

export const selectProfile = (payload) => ({
    type: SELECT_PROFILE,
    payload,
});
//==========================================

//=================MICPHONE=================
export const enableMic = (payload) => ({
    type: ENABLE_MIC,
    payload,
});

export const changeMicValue = (payload) => ({
    type: CHANGE_MIC_VALUE,
    payload,
});
//==========================================

//=================MICSENSITIVITY===========
export const enableMicSensitivity = (payload) => ({
    type: ENABLE_MIC_SENSITIVITY,
    payload,
});

export const changeMicSensitivity = (payload) => ({
    type: CHANGE_MIC_SENSITIVITY,
    payload,
});
//==========================================

//=================SIDETONE=================
export const enableSidetone = (payload) => ({
    type: ENABLE_SIDETONE,
    payload,
});

export const changeSidetone = (payload) => ({
    type: CHANGE_SIDETONE,
    payload,
});
//==========================================

//=================VolumeNormalization=================
export const enableVolumeNormalization = (payload) => ({
    type: ENABLE_VOLUME_NORMALIZATION,
    payload,
});

export const changeVolumeNormalization = (payload) => ({
    type: CHANGE_VOLUME_NORMALIZATION,
    payload,
});
//=====================================================

//=================AmbientNoiseReduction=================
export const enableAmbientNoiseReduction = (payload) => ({
    type: ENABLE_AMBIENT_NOISE_REDUCTION,
    payload,
});

export const changeAmbientNoiseReduction = (payload) => ({
    type: CHANGE_AMBIENT_NOISE_REDUCTION,
    payload,
});
//=====================================================

//=================VoiceClarity=================
export const enableVoiceClarity = (payload) => ({
    type: ENABLE_VOICE_CLARITY,
    payload,
});

export const changeVoiceClarity = (payload) => ({
    type: CHANGE_VOICE_CLARITY,
    payload,
});
//==============================================


// export const changeConfig = (payload) => ({
//     type: CHANGE_CONFIG,
//     payload,
// });

// export const enableFeature = (payload) => ({
//     type: ENABLE_FEATURE,
//     payload,
// });