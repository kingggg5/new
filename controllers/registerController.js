module.exports = (req, res) => {
    let email = "";
    let password = "";
    let credit = 0; // Add a variable for credit
    let data = req.flash('data')[0];

    if (typeof data !== "undefined") {
        email = data.email;
        password = data.password;
        credit = data.credit; // Update to capture credit
    }

    res.render('register', {
        errors: req.flash('validationErrors'),
        email: email,
        password: password,
        credit: credit // Pass credit to the view
    });
}
