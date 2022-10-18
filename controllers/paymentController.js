const axios = require("axios");
var liveToken = "4RJkX2PHt2DZGRsSyWdXee58skOGjUOoAuT0zo81ZgfoofEjm8_kbsPIwE3Zi9wt_RpveDxjSs0huCTUp8gzwHZvJiArXB7eWuwra-4zDm-IiPBOpLe87UA1mp2-257N0AjMj_mFHjBxzD6rI3G3Gr0de62uqqV2IwARQVP4cn_-yJdh3iaw7Y8kTpiNobciyk60eNn6y3Y8e35DAqN2LAyuSPq7hCko5yMd2sEunwH8k8hwSDDupfSMwWYAim-ziAG07AOXw44Kbq4_hy1sStU85L8iIDw2jRDGHkQRt-0VBpf5sCrbLkcB-xnqwCiS8GHbhD_iWhbTxVAg2ZttULePL903fUksKN2959XPFVzVHVWzk7q268CPzcHxQh-OBsxn0jg1i7j3vy6NaFg18_Wxu5h3YR0-gp_x6DKaWRwtZN2m897cvr9TWJWpBt9H5HXm_tVgtxjy6TqlRxONGnDYXSPKVhXotmrzbExiBCOpkZlmiL_IFtbMLEwshlWZfG5uEjl1qKVjPypT-15Ef3BY6Q-1Pr3KlLyl0B1pyD2LCS988DBgRuhhC_CX1gvfKMs9NTjpZCyyAgvF-M4NGPFvPtK66c55U1zFheu2_ttz-hw8uPOhMUvgnS3XUkFTuyn0GiPJLnOUWigVse4L3NpXMy6MfleqdpGA-3f4mOW-OaXzjOtGLBONzpncridoOtxzUe9paZFVUnHRCBAY4Rm4atqUvYCBwWXE5eq7wfzt9Ha0"


exports.initiatePayment = (req, res, next) => {
    axios.post('https://api-sa.myfatoorah.com/v2/InitiatePayment', {
        "InvoiceAmount": req.body.InvoiceAmount,
        "CurrencyIso": req.body.CurrencyIso
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${liveToken}`,
        }

    }).then((dataRes) => {
        console.log(dataRes.data);
        res.status(200).send(dataRes.data)
    }).catch((err) => {
        console.log(err);
        res.status(401).send(err)
    })
}


exports.executePayment = (req, res, next) => {
    let body =
    {
        PaymentMethodId: req.body.PaymentMethodId,
        CustomerName: req.body.CustomerName,
        DisplayCurrencyIso: req.body.DisplayCurrencyIso,
        CustomerMobile: req.body.CustomerMobile,
        CustomerEmail: req.body.CustomerEmail,
        InvoiceValue: req.body.InvoiceValue,
        CallBackUrl: req.body.CallBackUrl,
        ErrorUrl: req.body.ErrorUrl
    };
    axios.post('https://api-sa.myfatoorah.com/v2/ExecutePayment', body , {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${liveToken}`,
        }

    }).then((dataRes) => {
        // console.log(dataRes.Data.data);
        res.status(200).send(dataRes.data)
    }).catch((err) => {
        console.log(err);
        res.status(400).send(err)
    });
}


exports.getPaymentStatus = (req, res, next) => {
   
    let body =
    {
        key: req.body.key,
        KeyType: req.body.KeyType
      };
    console.log(body);
    axios.post('https://api-sa.myfatoorah.com/v2/GetPaymentStatus', body, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${liveToken}`,
        }
    }).then((dataRes) => {
        console.log(dataRes.data);
        res.status(200).send(dataRes.data)
    }).catch((err) => {
        console.log( 'fuckkkkkkkkkkkkkkkk');
        res.status(400).send(err)
    });
}
