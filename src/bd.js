const express = require('express');
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
const cors = require("cors")
app.use(
    cors({
        origin: "http://localhost:3000"
    })
)

const sql = require('mssql/msnodesqlv8');
// const sql = require('mssql');
sql.connect({
    user: 'PANELKAA\wonka',
    database: 'giz-shop',
    server: 'PANELKAA\\SQLEXPRESS',
    driver: 'msnodesqlv8',
    options: {
        trustedConnection: true,
    }
});



sql.connect((err) => {
    if (!err) {       
        console.log('Success')
    } else {       
        console.log(err)
    }
});

// --------------------- AUTH ------------------------

app.post('/GIZ/Auth/Register', (req, res) => {
    
        const userName =  req.body.userName
        const userSurname =  req.body.userSurname
        const email =  req.body.email
        const phone =  req.body.phone
        const password =  req.body.password
        const birthday =  req.body.birthday
        const gender =  Number(req.body.gender)

    sql.query(`SELECT * FROM [dbo].[user] WHERE (eMail = '${email}') OR (phoneNumber = '${phone}')`, (err,data) => {
        if (err) res.status(500).json(err);
        if (data.recordset.length) return res.status(409).json('Такой пользователь уже существует');
        else {
            sql.query(`USE [giz-shop] 
            INSERT INTO [dbo].[user]  (name, surname, birthday, phoneNumber, eMail, login, password, role, gender, userPhoto) 
                VALUES ('${userName}', '${userSurname}', '${birthday}', '${phone}', '${email}', '${email}', '${password}', 2, '${gender}', NUll)`, (err, data) => {
                if (err) {
                    res.status(500)
                    console.error("Err: ", err);
                } else {
                    res.status(200)
                    sql.query(`SELECT * FROM [dbo].[user] WHERE eMail = '${email}'`, (err,data) => {
                        res.json(data);
                        console.log(data);
                    })
                }
            })
        }

        // console.log(data);
        // console.log(phone);
    })
    
})

app.post('/GIZ/Auth/Login', (req, res) => {
    const email =  req.body.email
    const password =  req.body.password

    

    sql.query(`SELECT * FROM [dbo].[user] WHERE eMail = '${email}')`, (err,data) => {
    if (err) res.status(500).json(err);
    if (data.recordset.length === 0) return res.status(409).json('Такого пользователя нет');
    if (data.recordset[0].password !== password) return res.status(400).json('Неправильный пароль');
    else {
        res.json(data);
    }
    
})

})

app.get('/GIZ/Product', (req, res) => {
    // var request = new connection.Request();
    sql.query('SELECT [Products].[idProduct],nameElectro, [Models].[ModelElectro], [maker].[nameOfMaker], [Products].[description],[Color].[nameColor],[TypeElectro].[typeElectro],Country.[nameCountry],[productStatuses].nameStatus, priceElectro,priceTotal, image, count FROM            dbo.[Products] INNER JOIN dbo.Models ON dbo.[Products].model = dbo.[Models].[idModel]  INNER JOIN dbo.Color ON dbo.[Products].idColor = dbo.Color.[idColor] INNER JOIN dbo.TypeElectro ON dbo.[Products].idTypeElectro = dbo.TypeElectro.[idTypeElectro]  INNER JOIN dbo.Country ON dbo.[Products].country = dbo.Country.[idCountry] INNER JOIN dbo.productStatuses ON dbo.[Products].[idProductStatus] = dbo.productStatuses.idStatusProduct INNER JOIN dbo.[maker] ON dbo.[Models].idMaker = dbo.[maker].idMaker', (err, data) => {
        if (err) {
            console.error("Err: ", err);
            return res.status(500)
        } else {
            res.json(data);
            // sql.close()
        }
    })
})

app.get('/GIZ/Card/Characteristics/:id', (req, res) => {
    sql.query('SELECT  characteristicsList.[nameCharacteristics], ASetCharacteristics.[name],  UnitList.nameUnit, Products.idProduct FROM dbo.characteristicsList INNER JOIN dbo.ASetCharacteristics ON dbo.[ASetCharacteristics].idCharacteristics = dbo.characteristicsList.idCharacteristics INNER JOIN dbo.UnitList ON dbo.[ASetCharacteristics].idUnit = dbo.UnitList.idUnit INNER JOIN dbo.Products ON dbo.Products.idProduct = [ASetCharacteristics].idProduct ', (err, data) => {
        if (err) {
            console.error("Err: ", err);
            return res.status(500)
        } else {
            const result = data.recordset.filter((item) => item.idProduct === +req.params.id)
            res.json(result);
        }
    })
})

app.get('/GIZ/Recommended', (req, res) => {
    sql.query('SELECT [Products].[idProduct],nameElectro, [Models].[ModelElectro], [maker].[nameOfMaker], [Products].[description],[Color].[nameColor],[TypeElectro].[typeElectro],Country.[nameCountry],[productStatuses].nameStatus, priceElectro,priceTotal, image, count FROM            dbo.[Products] INNER JOIN dbo.Models ON dbo.[Products].model = dbo.[Models].[idModel]  INNER JOIN dbo.Color ON dbo.[Products].idColor = dbo.Color.[idColor] INNER JOIN dbo.TypeElectro ON dbo.[Products].idTypeElectro = dbo.TypeElectro.[idTypeElectro]  INNER JOIN dbo.Country ON dbo.[Products].country = dbo.Country.[idCountry] INNER JOIN dbo.productStatuses ON dbo.[Products].[idProductStatus] = dbo.productStatuses.idStatusProduct INNER JOIN dbo.[maker] ON dbo.[Models].idMaker = dbo.[maker].idMaker', (err, data) => {
        if (err) {
            console.error("Err: ", err);
            return res.status(500)
        } else {
            res.json(data);

        }
    })
})

app.get('/GIZ/LastProducts', (req, res) => {
    sql.query('SELECT [Products].[idProduct],nameElectro, [Models].[ModelElectro], [maker].[nameOfMaker], [Products].[description],[Color].[nameColor],[TypeElectro].[typeElectro],Country.[nameCountry],[productStatuses].nameStatus, priceElectro,image FROM            dbo.[Products] INNER JOIN dbo.Models ON dbo.[Products].model = dbo.[Models].[idModel]  INNER JOIN dbo.Color ON dbo.[Products].idColor = dbo.Color.[idColor] INNER JOIN dbo.TypeElectro ON dbo.[Products].idTypeElectro = dbo.TypeElectro.[idTypeElectro]  INNER JOIN dbo.Country ON dbo.[Products].country = dbo.Country.[idCountry] INNER JOIN dbo.productStatuses ON dbo.[Products].[idProductStatus] = dbo.productStatuses.idStatusProduct INNER JOIN dbo.[maker] ON dbo.[Models].idMaker = dbo.[maker].idMaker', (err, data) => {
        if (err) {
            console.error("Err: ", err);
            return res.status(500)
        } else {
            res.json(data);

        }
    })
})

app.get('/GIZ/Card/:id', (req, res) => {
    sql.query('SELECT [Products].[idProduct],nameElectro, [Models].[ModelElectro], [maker].[nameOfMaker], [Products].[description],[Color].[nameColor],[TypeElectro].[typeElectro],Country.[nameCountry],[productStatuses].nameStatus, priceElectro,priceTotal, image, count FROM            dbo.[Products] INNER JOIN dbo.Models ON dbo.[Products].model = dbo.[Models].[idModel]  INNER JOIN dbo.Color ON dbo.[Products].idColor = dbo.Color.[idColor] INNER JOIN dbo.TypeElectro ON dbo.[Products].idTypeElectro = dbo.TypeElectro.[idTypeElectro]  INNER JOIN dbo.Country ON dbo.[Products].country = dbo.Country.[idCountry] INNER JOIN dbo.productStatuses ON dbo.[Products].[idProductStatus] = dbo.productStatuses.idStatusProduct INNER JOIN dbo.[maker] ON dbo.[Models].idMaker = dbo.[maker].idMaker', (err, data) => {
        if (err) {
            res.status(500)
        } else {
            const result = data.recordset.filter((item) => item.idProduct === +req.params.id)
            res.json(...result)
        }
    })
})

app.get('/GIZ/Product/:type/:maker/:country/:color', (req, res) => {
    sql.query('SELECT [Products].[idProduct],nameElectro, [Models].[ModelElectro], [maker].[nameOfMaker], [Products].[description],[Color].[nameColor],[TypeElectro].[typeElectro],Country.[nameCountry],[productStatuses].nameStatus, priceElectro,priceTotal, image, count FROM            dbo.[Products] INNER JOIN dbo.Models ON dbo.[Products].model = dbo.[Models].[idModel]  INNER JOIN dbo.Color ON dbo.[Products].idColor = dbo.Color.[idColor] INNER JOIN dbo.TypeElectro ON dbo.[Products].idTypeElectro = dbo.TypeElectro.[idTypeElectro]  INNER JOIN dbo.Country ON dbo.[Products].country = dbo.Country.[idCountry] INNER JOIN dbo.productStatuses ON dbo.[Products].[idProductStatus] = dbo.productStatuses.idStatusProduct INNER JOIN dbo.[maker] ON dbo.[Models].idMaker = dbo.[maker].idMaker', (err, data) => {
        if (err) {
            res.status(500)
        } else {
            console.log(req.params);
            // console.log(data.recordset.filter((item) => item.nameColor === req.params.color));
            if (req.params.type === 'allType' && req.params.maker === 'allMaker' && req.params.country === 'allCountry' && req.params.color === 'allColor') {
                res.json(data.recordset)
            }
            else if (req.params.type !== 'allType' && req.params.maker === 'allMaker' && req.params.country === 'allCountry' && req.params.color === 'allColor') {
                res.json(data.recordset.filter((item) => item.typeElectro === req.params.type))
            }
            else if (req.params.type !== 'allType' && req.params.maker !== 'allMaker' && req.params.country === 'allCountry' && req.params.color === 'allColor') {
                res.json(data.recordset.filter((item) => item.typeElectro === req.params.type && item.nameOfMaker === req.params.maker))
            }
            else if (req.params.type !== 'allType' && req.params.maker !== 'allMaker' && req.params.country !== 'allCountry' && req.params.color === 'allColor') {
                res.json(data.recordset.filter((item) => item.typeElectro === req.params.type && item.nameOfMaker === req.params.maker && item.nameCountry === req.params.country))
            }
            else if (req.params.type !== 'allType' && req.params.maker !== 'allMaker' && req.params.country !== 'allCountry' && req.params.color !== 'allColor') {
                res.json(data.recordset.filter((item) => item.typeElectro === req.params.type && item.nameOfMaker === req.params.maker && item.nameCountry === req.params.country && item.nameColor === req.params.color))
            }
            // индив не фильтрация
            else if (req.params.type === 'allType' && req.params.maker !== 'allMaker' && req.params.country !== 'allCountry' && req.params.color !== 'allColor') {
                res.json(data.recordset.filter((item) => item.nameOfMaker === req.params.maker && item.nameCountry === req.params.country && item.nameColor === req.params.color))
            }
            else if (req.params.type !== 'allType' && req.params.maker === 'allMaker' && req.params.country !== 'allCountry' && req.params.color !== 'allColor') {
                res.json(data.recordset.filter((item) => item.typeElectro === req.params.type  && item.nameCountry === req.params.country && item.nameColor === req.params.color))
            }
            else if (req.params.type !== 'allType' && req.params.maker !== 'allMaker' && req.params.country === 'allCountry' && req.params.color === 'allColor') {
                res.json(data.recordset.filter((item) => item.typeElectro === req.params.type && item.nameOfMaker === req.params.maker && item.nameColor === req.params.color))
            }
            else if (req.params.type !== 'allType' && req.params.maker !== 'allMaker' && req.params.country !== 'allCountry' && req.params.color === 'allColor') {
                res.json(data.recordset.filter((item) => item.typeElectro === req.params.type && item.nameOfMaker === req.params.maker && item.nameCountry === req.params.country ))
            }
            // парная фильтрация
            else if (req.params.type !== 'allType' && req.params.maker !== 'allMaker' && req.params.country === 'allCountry' && req.params.color === 'allColor') {
                res.json(data.recordset.filter((item) => item.typeElectro === req.params.type && item.nameOfMaker === req.params.maker))
            }
            else if (req.params.type !== 'allType' && req.params.maker === 'allMaker' && req.params.country !== 'allCountry' && req.params.color !== 'allColor') {
                res.json(data.recordset.filter((item) => item.typeElectro === req.params.type  && item.nameCountry === req.params.country && item.nameColor === req.params.color))
            }
            else if (req.params.type !== 'allType' && req.params.maker === 'allMaker' && req.params.country === 'allCountry' && req.params.color !== 'allColor') {
                res.json(data.recordset.filter((item) => item.typeElectro === req.params.type && item.nameColor === req.params.color))
            }
            else if (req.params.type === 'allType' && req.params.maker !== 'allMaker' && req.params.country !== 'allCountry' && req.params.color === 'allColor') {
                res.json(data.recordset.filter((item) => item.nameOfMaker === req.params.maker && item.nameCountry === req.params.country ))
            }
            else if (req.params.type === 'allType' && req.params.maker !== 'allMaker' && req.params.country === 'allCountry' && req.params.color !== 'allColor') {
                res.json(data.recordset.filter((item) => item.nameOfMaker === req.params.maker && item.nameColor === req.params.color))
            }
            // пара страны
            else if (req.params.type === 'allType' && req.params.maker === 'allMaker' && req.params.country !== 'allCountry' && req.params.color !== 'allColor') {
                res.json(data.recordset.filter((item) => item.nameCountry === req.params.country && item.nameColor === req.params.color))
            }
            else if (req.params.type !== 'allType' && req.params.maker === 'allMaker' && req.params.country === 'allCountry' && req.params.color !== 'allColor') {
                res.json(data.recordset.filter((item) => item.typeElectro === req.params.type && item.nameColor === req.params.color))
            }
            // три фильтрации
            else if (req.params.type === 'allType' && req.params.maker !== 'allMaker' && req.params.country === 'allCountry' && req.params.color === 'allColor') {
                res.json(data.recordset.filter((item) => item.nameOfMaker === req.params.maker ))
            }
            else if (req.params.type === 'allType' && req.params.maker === 'allMaker' && req.params.country !== 'allCountry' && req.params.color === 'allColor') {
                res.json(data.recordset.filter((item) => item.nameCountry === req.params.country ))
            }
            else if (req.params.type === 'allType' && req.params.maker === 'allMaker' && req.params.country === 'allCountry' && req.params.color !== 'allColor') {
                res.json(data.recordset.filter((item) => item.nameColor === req.params.color))
            }
        }
    })
})

const basketOrder = []

app.post('/GIZ/Order/Accept', function (req, res) {
    basketOrder.push(req.body)
        const order = JSON.stringify(...req.body.userOrder)
        const userPriceTotal =  req.body.priceTotal
        const userName =  req.body.userName
        const userPhone =  Number(req.body.userPhone)
        const userEmail =  req.body.userEmail
        const userAddress =  req.body.userAddress
        const userReview =  req.body.userReview
        const userDelivery =  req.body.userDelivery
        const orderDate = req.body.orderDate
        // console.log(orderDate)
        // ${req.body.orderDate}, 
            sql.query(`USE [giz-shop] 
            INSERT INTO [dbo].[order]  ( idStatusOrder,totalPrice,userName,userPhone,userEmail,userAddress,userReview,userDelivery,orderDate,userOrder) 
              VALUES (1,'${userPriceTotal}', '${userName}','${userPhone}','${userEmail}','${userAddress}','${userReview}','${userDelivery}','${orderDate}', '${order}')`, (err, data) => {
                if (err) {
                    res.status(500)
                    console.log("ERROR PZDC");
                } else {
                    res.status(201)
                    console.log("Good job")
                    basketOrder.length = 0
                }
            })
  });
  
app.get('/GIZ/Order/Accept', function (req, res) {
    res.json(basketOrder);
    basketOrder.length = 0
});


app.listen(3002, () => {
    console.log('Server is started on port 3002');
});
