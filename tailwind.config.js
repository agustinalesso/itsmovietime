module.exports = {
    prefix: '',
    purge: {
        enabled: process?.argv?.indexOf("build") !== -1,
        content: [
            "./src/**/*.html",
            "./src/**/*.ts",
            "./projects/**/*.html",
            "./projects/**/*.ts"
        ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                'oswald': ['Oswald', 'sans-serif'],
                'code': ['Source Code Pro', 'mono'],
            },
            colors: {
                'dark' : '#111111',
                'darky': '#333333'
            }
        },
    },
    variants: {
        extend: {},
    }
};