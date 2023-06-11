import { Trans, useTranslation, withTranslation } from 'react-i18next';
import i18n from '@/i18n';
import resources from '@/locales';

type TLocaleProps = {
    ns?: string;
    alias: string;
    trans?: string;
    values?: object;
    components?: any;
};

export const ChangeLocale = () => {
    const changeLocale = (locale: string) => {
        i18n.changeLanguage(locale);
    };

    return (
        <div>
            {resources.locales.map((locale) => (
                <button
                    key={locale}
                    onClick={() => changeLocale(locale)}
                >
                    {locale}
                </button>
            ))}
        </div>
    );
};

const LocaleParser = ({ns, alias, trans, values, components}: TLocaleProps) => {
    if (!alias) {
        return null;
    }

    const i18nKey = `${ns ? `${ns}:` : ''}${alias}`;

    return (
        <Trans
            components={components}
            defaults={trans}
            i18nKey={i18nKey}
            values={values}
        />
    );
};

export const Locale = withTranslation()(LocaleParser);

export const useLocale = useTranslation;
