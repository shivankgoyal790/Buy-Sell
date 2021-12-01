const nodemailer = require("nodemailer");

const sendmail = async (req, res, next) => {
  const { senderid, subject, text } = req.body;

  try {
    if (!senderid) {
      res.status(401).json("provide correct email");
    }
  } catch (err) {
    console.log(err);
    res.status(400).json("tryagain later");
  }
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "goyal.shivank790@gmail.com",
      pass: "shivank@119",
    },
  });

  var mailOptions = {
    from: "goyal.shivank790@gmail.com",
    to: "goyal.shivank790@gmail.com",
    subject: subject,
    text: text + " " + senderid,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  res.status(201).json("message send");
};

exports.sendmail = sendmail;
