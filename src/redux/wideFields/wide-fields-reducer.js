import { WideFieldsActionTypes } from './wide-fields-types';

const moveInArray = (arr, _from, _to)=> {

    //change field position in array
    if (_to >= arr.length) {
        var k = _to - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(_to, 0, arr.splice(_from, 1)[0]);

    //updates ids and prev&next id
    arr.map((item,index) => {
        item.id = index;
        index === 0 ? item.prev_id = null : item.prev_id = index-1;
        index === arr.length - 1 ? item.next_id = null : item.next_id = index+1; 
    });

    return arr; 
};


const INITIAL_STATE = {
    wideFields: null
}
const wideFieldsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case WideFieldsActionTypes.SET_FIELDS:
            return {
                ...state, 
                wideFields: [...action.payload]
            }
        case WideFieldsActionTypes.SET_FIELD:
            let title = '';
            let data = '';
            let update = state.wideFields.length||0;
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
                id: update+1,
                next_id: null,
                prev_id: state.wideFields[update-1] ? state.wideFields[update-1].id : null,
                title: title
            }
            return {
                ...state, 
                wideFields: [...state.wideFields, field]
            }
        case WideFieldsActionTypes.DELETE_FIELD:
            return {
                ...state, 
                wideFields: state.wideFields.filter(item => item.id !== action.payload)
            }
        case WideFieldsActionTypes.REORDER_FIELDS: 
            // const newArr = [...state.wideFields];
            // moveInArray(newArr, action.payload[0], action.payload[1]);
            // const updatedArray = updateArrayIds(newArr);
            // console.log(`api request column ${updatedArray}`);

            return {
                ...state
            }
        default:
            return state;
    }
}

export default wideFieldsReducer;