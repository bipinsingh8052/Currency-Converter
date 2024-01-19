const countryList = {
    AED: "AE",
    AFN: "AF",
    XCD: "AG",
    ALL: "AL",
    AMD: "AM",
    ANG: "AN",
    AOA: "AO",
    AQD: "AQ",
    ARS: "AR",
    AUD: "AU",
    AZN: "AZ",
    BAM: "BA",
    BBD: "BB",
    BDT: "BD",
    XOF: "BE",
    BGN: "BG",
    BHD: "BH",
    BIF: "BI",
    BMD: "BM",
    BND: "BN",
    BOB: "BO",
    BRL: "BR",
    BSD: "BS",
    NOK: "BV",
    BWP: "BW",
    BYR: "BY",
    BZD: "BZ",
    CAD: "CA",
    CDF: "CD",
    XAF: "CF",
    CHF: "CH",
    CLP: "CL",
    CNY: "CN",
    COP: "CO",
    CRC: "CR",
    CUP: "CU",
    CVE: "CV",
    CYP: "CY",
    CZK: "CZ",
    DJF: "DJ",
    DKK: "DK",
    DOP: "DO",
    DZD: "DZ",
    ECS: "EC",
    EEK: "EE",
    EGP: "EG",
    ETB: "ET",
    EUR: "FR",
    FJD: "FJ",
    FKP: "FK",
    GBP: "GB",
    GEL: "GE",
    GGP: "GG",
    GHS: "GH",
    GIP: "GI",
    GMD: "GM",
    GNF: "GN",
    GTQ: "GT",
    GYD: "GY",
    HKD: "HK",
    HNL: "HN",
    HRK: "HR",
    HTG: "HT",
    HUF: "HU",
    IDR: "ID",
    ILS: "IL",
    INR: "IN",
    IQD: "IQ",
    IRR: "IR",
    ISK: "IS",
    JMD: "JM",
    JOD: "JO",
    JPY: "JP",
    KES: "KE",
    KGS: "KG",
    KHR: "KH",
    KMF: "KM",
    KPW: "KP",
    KRW: "KR",
    KWD: "KW",
    KYD: "KY",
    KZT: "KZ",
    LAK: "LA",
    LBP: "LB",
    LKR: "LK",
    LRD: "LR",
    LSL: "LS",
    LTL: "LT",
    LVL: "LV",
    LYD: "LY",
    MAD: "MA",
    MDL: "MD",
    MGA: "MG",
    MKD: "MK",
    MMK: "MM",
    MNT: "MN",
    MOP: "MO",
    MRO: "MR",
    MTL: "MT",
    MUR: "MU",
    MVR: "MV",
    MWK: "MW",
    MXN: "MX",
    MYR: "MY",
    MZN: "MZ",
    NAD: "NA",
    XPF: "NC",
    NGN: "NG",
    NIO: "NI",
    NPR: "NP",
    NZD: "NZ",
    OMR: "OM",
    PAB: "PA",
    PEN: "PE",
    PGK: "PG",
    PHP: "PH",
    PKR: "PK",
    PLN: "PL",
    PYG: "PY",
    QAR: "QA",
    RON: "RO",
    RSD: "RS",
    RUB: "RU",
    RWF: "RW",
    SAR: "SA",
    SBD: "SB",
    SCR: "SC",
    SDG: "SD",
    SEK: "SE",
    SGD: "SG",
    SKK: "SK",
    SLL: "SL",
    SOS: "SO",
    SRD: "SR",
    STD: "ST",
    SVC: "SV",
    SYP: "SY",
    SZL: "SZ",
    THB: "TH",
    TJS: "TJ",
    TMT: "TM",
    TND: "TN",
    TOP: "TO",
    TRY: "TR",
    TTD: "TT",
    TWD: "TW",
    TZS: "TZ",
    UAH: "UA",
    UGX: "UG",
    USD: "US",
    UYU: "UY",
    UZS: "UZ",
    VEF: "VE",
    VND: "VN",
    VUV: "VU",
    YER: "YE",
    ZAR: "ZA",
    ZMK: "ZM",
    ZWD: "ZW",
  };

const Base_URL="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";
 

const dropDowns =document.querySelectorAll(".dropdown select");
const btn =document.querySelector( ".btn");

const fromCurrency =document.querySelector (".from select");
const toCurrency =document.querySelector(" .to select");
const message =document.querySelector(".msg");
// message="all the term";
// console.log(message);
// console.log(btn);

for (select of dropDowns)
{
    for (currcode in countryList){
        let newoption = document.createElement("option");
        newoption.innerText = currcode;
        newoption.value = currcode;
        select.append(newoption);
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    });
}

const updateFlag=(element)=>{
    let currcode =element.value;
    // console.log(currcode);
    let countryCode =countryList[currcode];
    // console.log(countryCode)
    let newScr =`https://flagsapi.com/${countryCode}/flat/64.png`;
    let image=element.parentElement.querySelector("img");
    // console.log(image);
    image.src =newScr;
};


btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount =document.querySelector(".amount input");
    // console.log(amount);
    let amountValue =amount.value;
    if(amountValue ==="" && amountValue >-1){
        amount.value = "1";
        amountValue = 1;
        alert("please Enter the curret value");
    }
    
    console.log(fromCurrency.value);
    // console.log(toCurrency.value);
    const URL =`${Base_URL}/${fromCurrency.value.toLowerCase()}/${toCurrency.value.toLowerCase()}.json`;
//     let promise = fetch(Base_URL);
//  console.log(promise);
    let response = await fetch(URL);
    let data =await response.json();
    let rate =data[toCurrency.value.toLowerCase()];
    let finalAmount =amount.value*rate;
    // console.log(finalAmount);
    // console.log(amount);
    // console.log(rate);
    // console.log(data);
    // console.log(response);
    console.log(message);
    message.innerText=`${amountValue} ${fromCurrency.value}  =  ${finalAmount} ${toCurrency.value}`;
});

