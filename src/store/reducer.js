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
} from "./constants";

const initState = {
    listData: [
        {
            id: 0,
            name: "default profile",
            mic: {
                enabled: true,
                value: 55,
            },
            micSensitivity: {
                enabled: true,
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
        {
            id: 1,
            name: "profile 2",
            mic: {
                enabled: true,
                value: 55,
            },
            micSensitivity: {
                enabled: true,
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
        {
            id: 2,
            name: "profile 3",
            mic: {
                enabled: true,
                value: 55,
            },
            micSensitivity: {
                enabled: true,
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
        {
            id: 3,
            name: "profile 4",
            mic: {
                enabled: true,
                value: 55,
            },
            micSensitivity: {
                enabled: true,
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
        {
            id: 4,
            name: "profile 5",
            mic: {
                enabled: true,
                value: 55,
            },
            micSensitivity: {
                enabled: true,
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
        {
            id: 5,
            name: "profile 6",
            mic: {
                enabled: true,
                value: 55,
            },
            micSensitivity: {
                enabled: true,
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
        {
            id: 6,
            name: "profile 7",
            mic: {
                enabled: true,
                value: 55,
            },
            micSensitivity: {
                enabled: true,
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
        {
            id: 7,
            name: "profile 8",
            mic: {
                enabled: true,
                value: 55,
            },
            micSensitivity: {
                enabled: true,
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

function reducer(state, action) {
    switch (action.type) {
        // ACTIONS
        case SELECT_PROFILE:
            return {
                ...state,
                selectedIndex: action.payload,
            };
        case ADD_PROFILE: {
            return {
                ...state,
                listData: [...state.listData, action.payload],
                selectedIndex: state.listData.length,
            };
        }
        case DUPLICATE_PROFILE: {
            return {
                ...state,
                listData: [...state.listData, action.payload],
                selectedIndex: state.listData.length,
            };
        }
        case DELETE_PROFILE: {
            const id = state.selectedIndex;
            if (state.listData.length < 2) return state;
            const listData = [...state.listData];
            const newProfiles = listData.filter((profile) => profile.id !== id);
            return {
                ...state,
                listData: newProfiles,
                selectedIndex: newProfiles[0].id,
            };
        }
        case RENAME_PROFILE: {
            const id = action.payload.id;
            const newTitle = action.payload.value;
            const newProfile = [...state.listData];
            newProfile.find((profile) => profile.id === id).name = newTitle;
            return {
                ...state,
                listData: newProfile,
            };
        }

        //MICPHONE
        case ENABLE_MIC: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find((profile) => profile.id === id).mic.enabled =
                newValue;
            return {
                ...state,
                listData: listData,
            };
        }
        case CHANGE_MIC_VALUE: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find((profile) => profile.id === id).mic.value = newValue;
            return {
                ...state,
                listData: listData,
            };
        }

        //MICSENSITIVITY
        case ENABLE_MIC_SENSITIVITY: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find(
                (profile) => profile.id === id
            ).micSensitivity.enabled = newValue;
            return {
                ...state,
                listData: listData,
            };
        }
        case CHANGE_MIC_SENSITIVITY: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find((profile) => profile.id === id).micSensitivity.value =
                newValue;
            return {
                ...state,
                listData: listData,
            };
        }

        //SIDETONE
        case ENABLE_SIDETONE: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find((profile) => profile.id === id).sidetone.enabled =
                newValue;
            return {
                ...state,
                listData: listData,
            };
        }
        case CHANGE_SIDETONE: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find((profile) => profile.id === id).sidetone.value =
                newValue;
            return {
                ...state,
                listData: listData,
            };
        }

        //VOLUME NORMALIZATION
        case ENABLE_VOLUME_NORMALIZATION: {
            // const id = action.payload.id;
            // const newValue = action.payload.value;
            // const listData = state.listData.map((profile) => {
            //     if (profile.id === id) {
            //         return {
            //             ...profile,
            //             volumeNormalization: {
            //                 ...profile.volumeNormalization,
            //                 enabled: newValue,
            //             },
            //         };
            //     }
            //     return profile;
            // });
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find(
                (profile) => profile.id === id
            ).volumeNormalization.enabled = newValue;
            return {
                ...state,
                listData: listData,
            };
        }
        case CHANGE_VOLUME_NORMALIZATION: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find(
                (profile) => profile.id === id
            ).volumeNormalization.value = newValue;
            return {
                ...state,
                listData: listData,
            };
        }

        //AMBIENT NOISE REDUCTION
        case ENABLE_AMBIENT_NOISE_REDUCTION: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find(
                (profile) => profile.id === id
            ).ambientNoiseReduction.enabled = newValue;
            return {
                ...state,
                listData: listData,
            };
        }
        case CHANGE_AMBIENT_NOISE_REDUCTION: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find(
                (profile) => profile.id === id
            ).ambientNoiseReduction.value = newValue;
            return {
                ...state,
                listData: listData,
            };
        }

        //VOICE CLARITY
        case ENABLE_VOICE_CLARITY: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find(
                (profile) => profile.id === id
            ).voiceClarity.enabled = newValue;
            return {
                ...state,
                listData: listData,
            };
        }
        case CHANGE_VOICE_CLARITY: {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find((profile) => profile.id === id).voiceClarity.value =
                newValue;
            return {
                ...state,
                listData: listData,
            };
        }

        default:
            throw new Error("Invalid Action.");
    }
}

export { initState };
export default reducer;
