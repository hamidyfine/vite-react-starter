import { Outlet } from 'react-router-dom';
import { AppShell, Header, Footer } from '@mantine/core';
import './App.scss';

function App() {
    return (
        <AppShell
            padding="md"
            header={<Header height={60} p="xs">{/* Footer content */}</Header>}
            footer={<Footer height={60} p="xs">{/* Header content */}</Footer>}
        >
            <Outlet />
        </AppShell>
    );
}

export default App;
