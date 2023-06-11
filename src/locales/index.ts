
const config = {
    'default': {
        'ns': 'core',
        'locale': 'en',
    },
    'ns': [
        'button',
        'core',
        'field',
        'form',
    ],
    'locales': [
        'en',
        'fa',
    ],
    'resources': {
        'en': {
            'button': {
                'button': 'en button',
                'obj': {
                    'name': {
                        'first': 'en first',
                        'last': 'en last',
                        'middle': 'en middle',
                    },
                },
            },
            'core': {
                'core': 'en core',
            },
            'field': {
                'field': 'value',
            },
            'form': {},
        },
        'fa': {
            'button': {
                'button': 'fa button',
            },
            'core': {
                'core': 'fa core',
            },
            'field': {},
            'form': {
                'form': {
                    'title': 'Form',
                    'description': 'Form component',
                },
            },
        },
    },
};

export default config;
