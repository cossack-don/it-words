module.exports = {
    // publicPath: '/it-words/'
    publicPath: process.env.NODE_ENV === 'production' ?
        '/it-words/' :
        '/'
    // используется для продакшена '/group/' имя репозитория
}