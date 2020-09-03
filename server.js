const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(5000, () => console.log(`Server runnig on PORT ${PORT}`));

app.get('/', (req, res) => res.json({ msg: 'Hello to CK app' }));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
