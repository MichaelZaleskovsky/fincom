const input = {
    "InitiationContext": {
    "id": "RealTime",
        "subId": "string",
        "targetSchemeNm": "string",
        "saveOnError": true,
        "sourceId": "string"
},
    "CstmrCdtTrfInitn": {
    "GrpHdr": {
        "MsgId": "06112018000013",
            "CreDtTm": "2017-04-12T19:20:50.52-04:00",
            "NbOfTxs": "1",
            "CtrlSum": 10.01,
            "InitgPty": {
            "Nm": "Direct Branch FrankfurtTR2X200",
                "Id": {
                "OrgId": {
                    "Othr": [
                        {
                            "Id": "1BSITFRANKFURT1"
                        }
                    ]
                }
            }
        }
    },
    "PmtInf": [
        {
            "PmtInfId": "06112018000013",
            "PmtMtd": "TRF",
            "BtchBookg": false,
            "PmtTpInf": {
                "InstrPrty": "HIGH",
                "SvcLvl": {
                    "Cd": "SEPA"
                },
                "LclInstrm": {
                    "Cd": "INST"
                }
            },
            "ReqdExctnDt": "2018-05-07",
            "Dbtr": {
                "Nm": "Joe Nick TRANS1TR2X2001",
                "Id": {
                    "OrgId": {
                        "Othr": [{ "Id": "1BSITFRANKFURT1" }]
                    }
                }

            },
            "DbtrAcct": {
                "Id": {
                    "IBAN": "FR7612345543216019333320929"
                }
            },

            "DbtrAgt": {
                "FinInstnId": {
                    "BICFI": "FNSTFRP1XXX"
                }
            },

            "CdtTrfTxInf": [
                {
                    "PmtId": {
                        "InstrId": "06112018000013",
                        "EndToEndId": "06112018000013"
                    },
                    "Amt": {
                        "InstdAmt": {
                            "@Ccy": "USD",
                            "$": 10.01

                        }
                    },
                    "ChrgBr": "SHAR",
                    "CdtrAgt": {
                        "FinInstnId": { "BICFI": "CITIDEFFXXX" }
                    },

                    "Cdtr": {
                        "Nm": "Jerry WalkerTR2X2001"
                    },
                    "CdtrAcct": {
                        "Id": { "IBAN": "DE89370400440532013000" }
                    },

                    "RmtInf": {
                        "Strd": [{
                            "RfrdDocInf": [{
                                "Tp": {
                                    "CdOrPrtry": { "Cd": "MSIN" }
                                }
                            }]
                        }]
                    }

                }
            ]
        }
    ]
},
    "@xmlns": "urn:iso:std:iso:20022:tech:xsd:pain.001.001.06"
};

function loadAnswer() {
    var http = new XMLHttpRequest();
    http.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("answer").innerHTML = this.responseText;
        }
    };
    http.open("POST", "http://localhost:8000/test", true);
    http.setRequestHeader('Content-type', 'application/json');
    var str = JSON.stringify(input);
    http.send(str);
}
