import axios from "axios";

const MSG91_API_KEY = process.env.MSG91_API_KEY!;
const MSG91_SENDER_ID = process.env.MSG91_SENDER_ID!;      // e.g. "MSGIND"
const MSG91_TEMPLATE_ID = process.env.MSG91_TEMPLATE_ID!;  // DLT template id
const MSG91_OTP_ROUTE = "otp";                             // or as per your MSG91 config

if (!MSG91_API_KEY) {
  console.warn("MSG91_API_KEY is not set. SMS OTP sending will fail in production.");
}

export async function sendPhoneOtp(phone: string, otp: string) {
  // phone should be in full E.164 format, e.g. +91XXXXXXXXXX
  if (!MSG91_API_KEY) {
    console.log("[DEV] Skipping MSG91 SMS. OTP:", otp, "to:", phone);
    return;
  }

  try {
    // Basic example using MSG91 v5 OTP route (check your account docs for exact URL/params)
    const url = "https://api.msg91.com/api/v5/otp";

    const payload = {
      mobile: phone,         // with country code
      otp,
      template_id: MSG91_TEMPLATE_ID,
      sender_id: MSG91_SENDER_ID,
    };

    await axios.post(url, payload, {
      headers: {
        authkey: MSG91_API_KEY,
        "Content-Type": "application/json",
      },
    });

    console.log("OTP SMS sent via MSG91 to:", phone);
  } catch (err) {
    console.error("Error sending OTP via MSG91:", err);
    throw new Error("Failed to send OTP SMS");
  }
}
