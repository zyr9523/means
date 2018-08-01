import Expert from '../page/Expert';
import ExpertsRec from '../page/ExpertsRec';
import Question from '../page/Question';
import Database from '../page/Database';
import Mine from '../page/Mine'; 
import Recommend from '../page/base/Recommend';
import Financial from '../page/base/Financial';
import HotText from '../page/base/HotText';
import Report from '../page/base/Report';

export default [
    {
        path:'/Expert',
        component:Expert
    },{
        path:'/ExpertsRec',
        component:ExpertsRec
    },{
        path:'/Question',
        component:Question
    },{
        path:'/Database',
        component:Database,
        children:[
            {
                path:'/Database/Recommend',
                component:Recommend,
            },{
                path:'/Database/Financial',
                component:Financial,
            } ,{
                path:'/Database/HotText',
                component:HotText,
            } ,{
                path:'/Database/Report',
                component:Report,
            }    
        ]
    },{
        path:'/Mine',
        component:Mine
    }
]