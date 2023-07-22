import { ElementType, lazy } from 'react';

export type TRoute = {
    name: string;
    path: string;
    layout: ElementType;
    component: ElementType;
    children: TRoute[];
}

type TRoutesList = {
    [key: string]: TRoute;
}

const routes_list: TRoutesList = {
    home: {
        name: 'Home',
        path: '/',
        layout: 'DefaultLayout' as ElementType,
        component: lazy(() => import(/*webpackChunkName: "home" */ '@/pages/home')),
        children: [],
    },
};

export default routes_list;

