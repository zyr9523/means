import Login from '../page/login';
import Binling from '../page/binling';
import SelectPhone from '../page/selectPhone';
import Register from '../page/register';
import Phone from '../page/phone';
import Message from '../page/message';
import Personal from '../page/Personal';
import Number from '../page/mypage/Number';
import SameMouth from '../page/mypage/SameMouth';
import Recharge from '../page/mypage/Recharge';
import Core from '../page/mypage/Core';
import Price from '../page/Price';
export default [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/personal',
        component:Personal,
        children:[
            {
                path:'/personal/number',
                component:Number
            },
            {
                path:'/personal/sameMouth',
                component:SameMouth
            },
            {
                path:'/personal/recharge',
                component:Recharge
            },
            {
                path:'/personal/core',
                component:Core
            }
        ]
    },
    {
        path:'/binling',
        component:Binling
    },
    {
        path:'/selectPhone',
        component:SelectPhone
    },
    {
        path:'/register',
        component:Register
    },
    {
        path:'/phone',
        component:Phone
    },
    {
        path:'/message',
        component:Message,
    },
    {
        path:'/price',
        component:Price
    }
]