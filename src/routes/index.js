const routes = require('express').Router();
const mailer = require("nodemailer");
const config = require("./config");

const transporter = mailer.createTransport(config);

routes.post("/send-email", (req, res) => {
    const message = {
        from: req.body.from,
        to: req.body.to,
        subject: req.body.subject,
        text: req.body.text,
    }

    transporter.sendMail(message, (error, info) => {
        if (error) {
            return res.status(400).send('Ocorreu um erro no envio de E-mail!');
        }
        return res.status(200).send('E-mail enviado com sucesso!');
    })
});

module.exports = routes;