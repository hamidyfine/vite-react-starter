import i18n from '@/i18n';

export const trans = (alias: string, ns?: string) => {
    const { t } = i18n;

    return t(`${ns ? `${ns}:` : ''}${alias}`);
};
