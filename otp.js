function generateotp(){
    let otp = Math.floor(100000 + Math.random() * 90000);
    document.getElementById("OTP").value = otp;
}
