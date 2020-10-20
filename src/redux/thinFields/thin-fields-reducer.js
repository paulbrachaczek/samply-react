import { ThinFieldsActionTypes } from './thin-fields-types';

const INITIAL_STATE = {
    thinFields: null
}
const thinFieldsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ThinFieldsActionTypes.SET_THIN_FIELDS:
            return {
                ...state, 
                thinFields: [...action.payload]
            }
        case ThinFieldsActionTypes.SET_THIN_FIELD:
            let title = '';
            let data = '';
            switch(action.payload) {
                case 'short_text':
                case 'long_text':
                    title = 'Text Field';
                    break;
                case 'image':
                    title = 'Image';
                    data = 'http://www.fillmurray.com/400/200'
                    break;
                case 'image_gallery':
                    title = 'Image gallery';
                    data = [
                        {image: null},
                        {image:'http://www.fillmurray.com/400/200'}
                    ];
                    break;
                default:
                    title = "Text Field"
            };
            let field = {
                column_id: 1,
                data: data,
                field_type: action.payload,
                id: state.thinFields[state.thinFields.length-1].id+1,
                next_id: null,
                prev_id: state.thinFields[state.thinFields.length-1].id,
                title: title
            }
            return {
                ...state, 
                thinFields: [...state.thinFields, field]
            }
        case ThinFieldsActionTypes.DELETE_THIN_FIELD:
            return {
                ...state, 
                thinFields: state.thinFields.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}

export default thinFieldsReducer;