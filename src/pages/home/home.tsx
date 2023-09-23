import { Flex } from '@mantine/core';
import { Locale } from '@/components/locale';
import './home.scss';

const Home = () => {
    return (
        <Flex
            align="center"
            h="100vh"
            justify="center"
        >
            <h1 className="text-3xl font-bold underline">
                <Locale alias="welcome" />
            </h1>
        </Flex>
    );
};

export default Home;
