import Homepage from '../components/Homepage';
import Boil from '../components/Boil';
import Brochure from '../components/Brochure';
import Activity from '../components/Activity';
import Recommend from '../components/boil/Recommend';
import Trends from '../components/boil/Trends';

export default [
    {
        path:'/homepage',
        component:Homepage
    },
    {
        path:'/boil',
        component:Boil,
        children:[
            {
                path:'/boil/recommend',
                component:Recommend,
            },
            {
                path:'/boil/trends',
                component:Trends,
            }
        ]
    },
    {
        path:'/brochure',
        component:Brochure
    },
    {
        path:'/activity',
        component:Activity
    }
]
