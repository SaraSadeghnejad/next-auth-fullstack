import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import User from "../models/userModel";
export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    const hashedToken = bcryptjs.hash(userId.toString(), 10);
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenexpiry: Date.now() + 3600000
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenexpiry: Date.now() + 3600000
      });
    }
    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap",
      port: 2525,
      auth: {
        user: "",
        pass: ""
      }
  
    });
    const mailOptions ={
        from:'sara@gmail.com',
        to:'localhost',
        subject:emailType==="VERIFY"?"Verify your email":"Reset your password",
        html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}
            or copy and paste the link below in your browser. <br> ${process.env.DOMAIN}/verifyemail?token=${hashedToken}
            </p>`
    }
        const mailresponse = await transport.sendEmail(mailOptions);
        return mailresponse;
  } catch (err:any) {
    console.log(err.message);
  }
};
