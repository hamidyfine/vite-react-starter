import routes_list, { TRoute } from '@/config/routes';
import * as Layout from '@/layouts';

const routes: TRoute[] = [];

Object.keys(routes_list).forEach((key) => {
    const route = routes_list[key];
    routes.push({
        name: route.name,
        path: route.path,
        layout: Layout[route.layout as keyof typeof Layout],
        component: route.component,
        children: route.children,
    });
});

export default routes;
