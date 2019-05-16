module.exports = function(app){
    console.log(process.env.GMAIL_ADDRESS)
    const mailer = require('nodemailer').createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.REACT_APP_GMAIL_ADDRESS,
          pass: process.env.REACT_APP_GMAIL_PASSWORD,
        }
    });

    app.post("/api/contact/", (req, res)=>{
        
        mailer.sendMail({
            from: req.body.name,
            to: "nickmoralesdesign@gmail.com",
            subject: req.body.subject || "[No Subject]",
            html: req.body.message || "[No Message]"
        })
        console.log(req.body)
    })
}