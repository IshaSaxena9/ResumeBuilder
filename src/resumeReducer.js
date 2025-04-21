import resumeDataOg from './data';

export const initialState = {
    resumeData: resumeDataOg
};

function resumeReducer(state, action) {
    switch (action.type) {
        case 'ADD_SKILL': {
            return {
                resumeData: {
                    ...state.resumeData,
                    skills: [...state.resumeData.skills, action.payload]
                }
            };
        }
        case 'ADD_EDUCATION': {
            return {
                resumeData: {
                    ...state.resumeData,
                    education: [...state.resumeData.education, action.payload]
                }
            };
        }
        case 'ADD_EXPERIENCE': {
            return {
                resumeData: {
                    ...state.resumeData,
                    experience: [...state.resumeData.experience, action.payload]
                }
            };
        }
        case 'DELETE_SKILL': {
            return {
                resumeData: {
                    ...state.resumeData,
                    skills: [...state.resumeData.skills].filter(i => i !== action.payload)
                }
            }
        }
        case 'DELETE_EDUCATION': {
            return {
                resumeData: {
                    ...state.resumeData,
                    education: [...state.resumeData.education].filter(i => i !== action.payload)
                }
            }
        }
        case 'DELETE_EXPERIENCE': {
            return {
                resumeData: {
                    ...state.resumeData,
                    experience: [...state.resumeData.experience].filter(i => i.id !== action.payload.id)
                }
            }
        }
        case 'UPDATE_SKILL': {
            const newArr = [...state.resumeData.skills];
            newArr.splice(action.payload.index, 1, action.payload.item);
            return {
                resumeData: {
                    ...state.resumeData,
                    skills: newArr
                }
            }
        }
        case 'UPDATE_EDUCATION': {
            const newArr = [...state.resumeData.education];
            newArr.splice(action.payload.index, 1, action.payload.item);
            return {
                resumeData: {
                    ...state.resumeData,
                    education: newArr
                }
            }
        }
        default: return state;
    }
}

export default resumeReducer;