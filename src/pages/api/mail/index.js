export default function (req, res) {

  let nodemailer = require('nodemailer')

  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: JSON.parse(process.env.MAIL_SECURE),
    auth: {
      user: String(process.env.MAIL_USER),
      pass: String(process.env.MAIL_PASS)
    }
  })

  let mailOptions = {
    from: String(process.env.MAIL_HOST),
    to: req.body.email,
    subject: "TESTE SITE CHAKRA MOR INFO",
    text: req.body.mensagem,
    html:
      `
    <h2>Mensagem enviada no Site da MOR INFORMATICA</h1>
    <h3>Nome: ${req.body.nome}</h2>
    <h3 >E-mail: ${req.body.email}</h2>
    <p>Mensagem: ${req.body.mensagem}</p>
    `
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(400).send(error, {
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        secure: Boolean(process.env.MAIL_SECURE),
        auth: {
          user: String(process.env.MAIL_USER),
          pass: String(process.env.MAIL_PASS)
        }
      })
    }
    return res.status(200).send({ info })
  })
}

