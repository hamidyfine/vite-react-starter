import { ChangeLocale, Locale, useLocale } from '@/components/locale';
import './home.scss';

const Home = () => {
    const { t } = useLocale();

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                <Locale alias="hello" />
            </h1>
            <br />
            <button>
                {t('button:click')}
            </button>
            <br />
            <ChangeLocale />
        </>
    );
};

export default Home;
