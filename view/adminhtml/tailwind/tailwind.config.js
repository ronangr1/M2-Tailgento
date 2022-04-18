module.exports = {
    content: [
        '../../../../**/*.phtml',
        '../../../../**/*.html',
    ],
    theme: {
        extend: {
            colors: {
                modalBackgroundColor: 'rgba(0,0,0,0.4)'
            },
            width: {
                '256': '64rem',
            },
            zIndex: {
                '9999': '9999'
            }
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio')
    ]
}
