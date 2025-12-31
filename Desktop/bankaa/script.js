fetch("https://api.exchangerate-api.com/v4/latest/TRY")
    .then(res => res.json())
    .then(data => {
        let dolar = (1 / data.rates.USD).toFixed(2) + " ₺";
        let euro = (1 / data.rates.EUR).toFixed(2) + " ₺";
        let sterlin = (1 / data.rates.GBP).toFixed(2) + " ₺";
        let ruble = (1 / data.rates.RUB).toFixed(2) + " ₺";

        document.getElementById("dolar").innerText = dolar;

        document.getElementById("euro").innerText = euro;

        document.getElementById("sterlin").innerText = sterlin;

        document.getElementById("ruble").innerText =ruble;
    });

function faiz() {

    let krediTutar = Number(
        document.getElementById("krediTutar").value.replace(/\D/g, "")
    );

    let ay = Number(document.getElementById("aylar").value);

    if (krediTutar <= 0 || ay <= 0) {
        alert("Geçerli değer gir");
        return;
    }

    let oran = 0;

    if (ay < 6) {
        oran = krediTutar < 300000 ? 0.01 : 0.02;
    }
    else if (ay < 12) {
        oran = krediTutar < 700000 ? 0.03 : 0.02;
    }
    else if (ay < 24) {
        oran = krediTutar < 500000 ? 0.04 : 0.03;
    }
    else if (ay <= 36) {
        oran = krediTutar < 700000 ? 0.04 : 0.03;
    }
    else {
        oran = 0.03;
    }

    let toplamTutar = krediTutar + (krediTutar * oran);
    let taksit = toplamTutar / ay;

    document.getElementById("taksitTutar").innerText =
        taksit.toFixed(2) + " TL";

    document.getElementById("faizOran").innerText =
        "%" + (oran * 100).toFixed(2);

    document.getElementById("toplamTutar").innerText =
        toplamTutar.toFixed(2) + " TL";
}
