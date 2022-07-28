import {
    ADD_PROFILE,
    // DUPLICATE_PROFILE,
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
    // CHANGE_CONFIG,
    // ENABLE_FEATURE,
    // features,
} from "./constants";

const initState = {
    listData: [
        {
            id: 0,
            name: "default profile",
            mic: {
                enabled: false,
                value: 55,
            },
            micSensitivity: {
                enabled: false,
                value: 55,
            },
            sidetone: {
                enabled: false,
                value: 50,
            },
            volumeNormalization: {
                enabled: false,
                value: 50,
            },
            ambientNoiseReduction: {
                enabled: false,
                value: 50,
            },
            voiceClarity: {
                enabled: false,
                value: 50,
            },
        },
    ],
    selectedIndex: 0,
};

// const cloneProfile = (profile, newId) => {
//     const newProfile = [...initState.listData]
//     newProfile.id = newId
//     return newProfile;
// }

function reducer(state, action) {

    console.log(action)

    switch (action.type) {
        // ACTIONS
        case SELECT_PROFILE:
            return {
                ...state,
                selectedIndex: action.payload,
            };
        case ADD_PROFILE:
            return {
                ...state,
                listData: [...state.listData, action.payload],
            };
        case DELETE_PROFILE: {
            const id = action.payload;
            const newProfile = [...state.listData];
            if (newProfile.length < 2) return state.listData;
            newProfile.filter((profile) => profile.id !== id);
            return {
                ...state,
                listData: newProfile,
                selectedIndex: id,
            };
        }
        case RENAME_PROFILE: {
            const newProfile = [...state.listData];
            const profile = newProfile.find(
                (profile) => profile.id === state.selectedIndex
            );
            profile.name = action.payload;
            return {
                ...state,
                listData: profile,
            };
        }

        //MICPHONE
        case ENABLE_MIC: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listProfile = [...state.listProfile];
            listProfile.find(profile => profile.id === id).mic.enabled = newValue;
            return {
                ...state,
                listProfile: listProfile,
            }
        }
        case CHANGE_MIC_VALUE: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listProfile = [...state.listProfile];
            listProfile.find(profile => profile.id === id).mic.value = newValue;
            return {
                ...state,
                listProfile: listProfile,
            }
        }

        //MICSENSITIVITY
        case ENABLE_MIC_SENSITIVITY: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listProfile = [...state.listProfile];
            listProfile.find(profile => profile.id === id).micSensitivity.enabled = newValue;
            return {
                ...state,
                listProfile: listProfile,
            }
        }
        case CHANGE_MIC_SENSITIVITY: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listProfile = [...state.listProfile];
            listProfile.find(profile => profile.id === id).micSensitivity.value = newValue;
            return {
                ...state,
                listProfile: listProfile,
            }
        }

        //SIDETONE 
        case ENABLE_SIDETONE: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listProfile = [...state.listProfile];
            listProfile.find(profile => profile.id === id).sidetone.enabled = newValue;
            return {
                ...state,
                listProfile: listProfile,
            }
        }
        case CHANGE_SIDETONE: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listProfile = [...state.listProfile];
            listProfile.find(profile => profile.id === id).sidetone.value = newValue;
            return {
                ...state,
                listProfile: listProfile,
            }
        }

        //VOLUME NORMALIZATION
        case ENABLE_VOLUME_NORMALIZATION: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listProfile = [...state.listProfile];
            listProfile.find(profile => profile.id === id).volumeNormalization.enabled = newValue;
            return {
                ...state,
                listProfile: listProfile,
            }
        }
        case CHANGE_VOLUME_NORMALIZATION: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listProfile = [...state.listProfile];
            listProfile.find(profile => profile.id === id).volumeNormalization.value = newValue;
            return {
                ...state,
                listProfile: listProfile,
            }
        }

        //AMBIENT NOISE REDUCTION
        case ENABLE_AMBIENT_NOISE_REDUCTION: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listProfile = [...state.listProfile];
            listProfile.find(profile => profile.id === id).ambientNoiseReduction.enabled = newValue;
            return {
                ...state,
                listProfile: listProfile,
            }
        }
        case CHANGE_AMBIENT_NOISE_REDUCTION: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listProfile = [...state.listProfile];
            listProfile.find(profile => profile.id === id).ambientNoiseReduction.value = newValue;
            return {
                ...state,
                listProfile: listProfile,
            }
        }

        //VOICE CLARITY
        case ENABLE_VOICE_CLARITY: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listProfile = [...state.listProfile];
            listProfile.find(profile => profile.id === id).voiceClarity.enabled = newValue;
            return {
                ...state,
                listProfile: listProfile,
            }
        }
        case CHANGE_VOICE_CLARITY: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listProfile = [...state.listProfile];
            listProfile.find(profile => profile.id === id).voiceClarity.value = newValue;
            return {
                ...state,
                listProfile: listProfile,
            }
        }

    }
}

export { initState };
export default reducer;

// case CHANGE_CONFIG:{
//     const field = features[action.payload.feature];
//     if (!field) return;

//     const selectedProfile = state.listData.find(
//         (profile) => state.selectedIndex === profile.id
//     );
//     selectedProfile[field].value = action.payload.value;
//     return {
//         ...state,
//         listData: selectedProfile,
//     };
// }
// case ENABLE_FEATURE:{
//     const field = features[action.payload.feature];
//     if (!field) return;

//     const selectedProfile = state.listData.find(
//         (profile) => state.selectedIndex === profile.id
//     );
//     selectedProfile[field].enabled = action.payload.enabled;
//     return {
//         ...state,
//         listData: selectedProfile
//     }
// }