const router = require('express').Router()

router.get('/anuncio', (req, res) => {
    res.sendFile('./static/anuncio.html', {
        root: __dirname
    })
})
router.get('/anuncios', (req, res) => {
    res.sendFile('./static/anuncios.html', {
        root: __dirname
    })
})

router.get('/blog', (req, res) => {
    res.sendFile('./static/blog.html', {
        root: __dirname
    })
})

router.get('/nosotros', (req, res) => {
    res.sendFile('./static/nosotros.html', {
        root: __dirname
    })
})
router.get('/contacto', (req, res) => {
    res.sendFile('./static/contacto.html', {
        root:__dirname
    })
})
router.get('/', (req, res) => {
    res.sendFile('./static/index.html', {
        root:__dirname
    })
})
module.exports = router