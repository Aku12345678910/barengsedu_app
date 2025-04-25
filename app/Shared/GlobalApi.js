import { create } from "apisauce";

const api = create({
    baseURL: 'https://192.168.1.6:1337/api',
    headers: { 
        "X-API-Key":"80bedcbb435a1d873679726d13b7879806fef1cd344b5017ed15643511231c3067cd34ba7bb7f8686eed15e81c02319b8e3dbc22571cb3d287e2c4b8ef910091504c08a9075b6750ea554bce1f496c6927e31fbd360973a97b09b4695fe83c7817de564e3725f2815e50aadd023a2d28763c232a00cbc32f21ce78cf78e389ae"
    },
})

const getSlider=()=>api.get('/sliders?populate=*');
const getVideoCourse=()=>api.get('video-source?populate=*');
const getCourseList=(type)=>api.get('course-lists?filters[type][$eq]='
    +type+'&populate[Topic][populate][0]=image');

export default {
    getSlider,
    getVideoCourse,
    getCourseList
}