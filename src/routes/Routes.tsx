import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routes from './index';
import { TRoute } from '@/config/routes';

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
            {/* TODO: Add Loading Component */}
            <Suspense fallback={<p>Loading....</p>}>
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
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRoutes;
