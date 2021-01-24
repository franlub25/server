const sequelize = require("./db");
const app = require('./app');

const port = 3999;

console.clear();

try {
    sequelize.authenticate()
        .then(() => {
            console.log('db OK');
            app.listen(port, () => {
                console.log('Server OK', port);
            })
        })
        .catch(err => {
            console.error(err)
    })
} catch (err) {
    console.error(err);
}
