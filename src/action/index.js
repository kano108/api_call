import { type } from "@testing-library/user-event/dist/type"

export const image_display = (data) =>{
    return {
        type : "SHOW_IMAGE",
        payload:{
            id : data.id,
            data: data.url   
        },
    };
};