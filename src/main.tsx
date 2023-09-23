import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { MantineProvider } from '@mantine/core';
import AppRoutes from '@/routes/Routes';
import reportWebVitals from './reportWebVitals';
import store from '@/stores/store';
import { theme } from './config/theme';
import '@mantine/core/styles.css';
import '@fontsource-variable/quicksand';
import './main.scss';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
    // @ts-expect-error
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <MantineProvider theme={theme}>
                <Provider store={store}>
                    <AppRoutes />
                </Provider>
            </MantineProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
