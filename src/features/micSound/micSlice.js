import { createSlice } from "@reduxjs/toolkit";

export const micSlice = createSlice({
    name: "mic",
    initialState: {
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
    },
    reducers: {
        // ACTIONS
        selectProfile: (state, action) => {
            return {
                ...state,
                selectedIndex: action.payload,
            };
        },
        addProfile: (state, action) => {
            return {
                ...state,
                listData: [...state.listData, action.payload],
                selectedIndex: state.listData.length,
            };
        },
        dupProfile: (state, action) => {
            return {
                ...state,
                listData: [...state.listData, action.payload],
                selectedIndex: state.listData.length,
            };
        },
        deleteProfile: (state) => {
            const id = state.selectedIndex;
            if (state.listData.length < 2) return state;
            const listData = [...state.listData];
            const newProfiles = listData.filter((profile) => profile.id !== id);
            return {
                ...state,
                listData: newProfiles,
                selectedIndex: newProfiles[0].id,
            };
        },
        renameProfile: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = state.listData.map((profile) => {
                if (profile.id === id) {
                    return {
                        ...profile,
                        name: newValue
                    };
                }
                return profile;
            });
            return {
                ...state,
                listData: listData,
            };
        },

        //MICPHONE
        enableMic: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = state.listData.map((profile) => {
                if (profile.id === id) {
                    return {
                        ...profile,
                        mic: {
                            ...profile.mic,
                            enabled: newValue,
                        },
                    };
                }
                return profile;
            });
            return {
                ...state,
                listData: listData,
            };
        },
        changeMicValue: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = state.listData.map((profile) => {
                if (profile.id === id) {
                    return {
                        ...profile,
                        mic: {
                            ...profile.mic,
                            value: newValue,
                        },
                    };
                }
                return profile;
            });
            return {
                ...state,
                listData: listData,
            };
        },

        //MICSENSITIVITY
        enableMicSensitivity: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = state.listData.map((profile) => {
                if (profile.id === id) {
                    return {
                        ...profile,
                        micSensitivity: {
                            ...profile.micSensitivity,
                            enabled: newValue,
                        },
                    };
                }
                return profile;
            });
            return {
                ...state,
                listData: listData,
            };
        },
        changeMicSensitivity: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = state.listData.map((profile) => {
                if (profile.id === id) {
                    return {
                        ...profile,
                        micSensitivity: {
                            ...profile.micSensitivity,
                            value: newValue,
                        },
                    };
                }
                return profile;
            });
            return {
                ...state,
                listData: listData,
            };
        },

        //SIDETONE
        enableSidetone: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = state.listData.map((profile) => {
                if (profile.id === id) {
                    return {
                        ...profile,
                        sidetone: {
                            ...profile.sidetone,
                            enabled: newValue,
                        },
                    };
                }
                return profile;
            });
            return {
                ...state,
                listData: listData,
            };
        },
        changeSidetone: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = state.listData.map((profile) => {
                if (profile.id === id) {
                    return {
                        ...profile,
                        sidetone: {
                            ...profile.sidetone,
                            value: newValue,
                        },
                    };
                }
                return profile;
            });
            return {
                ...state,
                listData: listData,
            };
        },

        //VOLUME NORMALIZATION
        enableVolumeNormalization: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = state.listData.map((profile) => {
                if (profile.id === id) {
                    return {
                        ...profile,
                        volumeNormalization: {
                            ...profile.volumeNormalization,
                            enabled: newValue,
                        },
                    };
                }
                return profile;
            });
            return {
                ...state,
                listData: listData,
            };
        },
        changeVolumeNormalization: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = state.listData.map((profile) => {
                if (profile.id === id) {
                    return {
                        ...profile,
                        volumeNormalization: {
                            ...profile.volumeNormalization,
                            value: newValue,
                        },
                    };
                }
                return profile;
            });
            return {
                ...state,
                listData: listData,
            };
        },

        //AMBIENT NOISE REDUCTION
        enableAmbientNoiseReduction: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = state.listData.map((profile) => {
                if (profile.id === id) {
                    return {
                        ...profile,
                        ambientNoiseReduction: {
                            ...profile.ambientNoiseReduction,
                            enabled: newValue,
                        },
                    };
                }
                return profile;
            });
            return {
                ...state,
                listData: listData,
            };
        },
        changeAmbientNoiseReduction: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = state.listData.map((profile) => {
                if (profile.id === id) {
                    return {
                        ...profile,
                        ambientNoiseReduction: {
                            ...profile.ambientNoiseReduction,
                            value: newValue,
                        },
                    };
                }
                return profile;
            });
            return {
                ...state,
                listData: listData,
            };
        },

        //VOICE CLARITY
        enableVoiceClarity: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = state.listData.map((profile) => {
                if (profile.id === id) {
                    return {
                        ...profile,
                        voiceClarity: {
                            ...profile.voiceClarity,
                            enabled: newValue,
                        },
                    };
                }
                return profile;
            });
            return {
                ...state,
                listData: listData,
            };
        },
        changeVoiceClarity: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = state.listData.map((profile) => {
                if (profile.id === id) {
                    return {
                        ...profile,
                        voiceClarity: {
                            ...profile.voiceClarity,
                            value: newValue,
                        },
                    };
                }
                return profile;
            });
            return {
                ...state,
                listData: listData,
            };
        },
    },
});

export const {
    selectProfile,
    addProfile,
    dupProfile,
    deleteProfile,
    renameProfile,
    enableMic,
    changeMicValue,
    enableMicSensitivity,
    changeMicSensitivity,
    enableSidetone,
    changeSidetone,
    enableVolumeNormalization,
    changeVolumeNormalization,
    enableAmbientNoiseReduction,
    changeAmbientNoiseReduction,
    enableVoiceClarity,
    changeVoiceClarity,
} = micSlice.actions;

export default micSlice.reducer;
