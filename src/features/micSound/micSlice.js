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
            const newTitle = action.payload.value;
            const newProfile = [...state.listData];
            newProfile.find((profile) => profile.id === id).name = newTitle;
            return {
                ...state,
                listData: newProfile,
            };
        },

        //MICPHONE
        enableMic: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find((profile) => profile.id === id).mic.enabled =
                newValue;
            return {
                ...state,
                listData: listData,
            };
        },
        changeMicValue: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find((profile) => profile.id === id).mic.value = newValue;
            return {
                ...state,
                listData: listData,
            };
        },

        //MICSENSITIVITY
        enableMicSensitivity: (state, action) => {
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
        },
        changeMicSensitivity: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find((profile) => profile.id === id).micSensitivity.value =
                newValue;
            return {
                ...state,
                listData: listData,
            };
        },

        //SIDETONE
        enableSidetone: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find((profile) => profile.id === id).sidetone.enabled =
                newValue;
            return {
                ...state,
                listData: listData,
            };
        },
        changeSidetone: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find((profile) => profile.id === id).sidetone.value =
                newValue;
            return {
                ...state,
                listData: listData,
            };
        },

        //VOLUME NORMALIZATION
        enableVolumeNormalization: (state, action) => {
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
        },
        changeVolumeNormalization: (state, action) => {
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
        },

        //AMBIENT NOISE REDUCTION
        enableAmbientNoiseReduction: (state, action) => {
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
        },
        changeAmbientNoiseReduction: (state, action) => {
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
        },

        //VOICE CLARITY
        enableVoiceClarity: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find((profile) => profile.id === id).voiceClarity.enabled =
                newValue;
            return {
                ...state,
                listData: listData,
            };
        },
        changeVoiceClarity: (state, action) => {
            const id = action.payload.id;
            const newValue = action.payload.value;
            const listData = [...state.listData];
            listData.find((profile) => profile.id === id).voiceClarity.value =
                newValue;
            return {
                ...state,
                listData: listData,
            };
        },
    },
});

export const {
    selectedProfile,
    addProfile,
    dupProfile,
    deleteProfile,
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
