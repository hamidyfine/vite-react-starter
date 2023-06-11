import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from '@/routes/index';
import { TLayoutProps } from '@/layouts';

type TRoute = {
    name: string;
    path: string;
    layout: ({ children }: TLayoutProps) => JSX.Element;
    component: () => JSX.Element;
    children?: TRoute[];
}

type TRouteComponentProps = {
    route: TRoute;
}

const RouteComponent = ({ route }: TRouteComponentProps) => {
    if (route.layout) {
        return (
            <route.layout>
                <route.component />
            </route.layout>
        );
    }

    return <route.component />;
};

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                {routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            element={<RouteComponent route={route} />}
                            path={route.path}
                        >
                            {route.children?.length && route.children.map((child: TRoute, i) => {
                                return (
                                    <Route
                                        key={i}
                                        element={<RouteComponent route={child} />}
                                        path={`${route.path}${child.path}`}
                                    />
                                );
                            })}
                        </Route>
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
