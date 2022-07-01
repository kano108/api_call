const initialData = {
    list : [],

}

const imageReducer = (state=initialData , action) => {
    switch(action.type){
        case "SHOW_IMAGE" :
            
            // const new_data = state.list.find((elem)=>elem.id == action.payload.id) ;
            // console.log("++newdata",new_data);
            // console.log("action",action);
            // console.log("state",state);
            // return{
            //          ...state,
            //          list:new_data
            // }

            const { id ,data } = action.payload;
            console.log("id",id);
            console.log("action",action);
            console.log("data:",data);
            console.log("state",state);
            return {
                // ...state,
                list :[
                    //  ...state.list,
                    
                    {
                        id:id,
                        data: data
                    }
                ]
            }
            default : return state;
        }
}
export default imageReducer;