let pricelist = [
    {from: "2020-01-01", to: "2020-02-01", price: 34.5},
    {from: "2020-02-02", to: "2020-03-01", price: 37.0},
    {from: "2020-03-02", to: "2020-05-15", price: 39.0},
    {from: "2020-05-16", to: "2020-06-15", price: 37.0},
   ];

function logPricelist(pricelist) {
    /*
    Vaš zadatak je napisati funkciju koja prima 
    gore specificiran podatak te na konzolu, z
    a potrebe logiranja, ispisuje istu u slijedećem formatu:
    
    Cijena : lista perioda na koje se primjenjuje 
    
    (sortirano od manje do veće cijene)
    */
}

logPricelist(pricelist);
//gtreba ispisati slijedeće:
/*
34.5 : 2020-01-01 do 2020-02-01
37.0 : 2020-02-02 do 2020-03-01 , 2020-05-15 do 2020-06-15
39.0 : "2020-03-02 do 2020-05-15
*/