module.exports.expressFunctions = function(app) {
    app.get('/cart', async (req, res) => {
    
        res.json({
            products: ['laptop','mobile']
        })
    
    })
}