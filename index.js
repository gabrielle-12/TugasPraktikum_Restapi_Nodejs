const express = require("express") //memanggil library express js
const bodyParser = require("body-parser") //memanggil library body-parser
const cors = require("cors") //memanggil library cors
const app = express();

// penggunaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())

// penggunaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))

// penggunaan cors agar end point dapat diakses oleh cross platform
app.use(cors())

//NOMOR 1
//----- V O L U M E ---- L U A S --- P E R M U K A A N --- B A N G U N --- R U A N G

//endpoint "/kubus" dengan method POST
app.post("/kubus", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let sisi = Number(req.body.sisi) //mengambil nilai sisi dari body

    let volume = sisi * sisi * sisi
    let luas_permukaan = 6 * (sisi * sisi)

    //membuat objek yang berisi data yang akan dijadikan response
    let response = {
        sisi: sisi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})

//endpoint "/balok" dengan method POST
app.post("/balok", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let panjang = Number(req.body.panjang) //mengambil nilai panjang dari body
    let lebar = Number(req.body.lebar) //mengambil nilai lebar dari body
    let tinggi = Number(req.body.tinggi) // mengambil nilai tinggi dari body

    let volume = panjang * lebar * tinggi
    let luas_permukaan = 2 * (panjang * lebar + lebar * tinggi + panjang * tinggi)

    //membuat objek yang berisi data yang akan dijadikan response
    let response = {
        panjang: panjang,
        lebar: lebar,
        tinggi: tinggi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})

//endpoint "/tabung" dengan method POST
app.post("/tabung", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari) 
    let tinggi = Number(req.body.tinggi) 
    let phi = 3.14

    let volume = phi * (jarijari**2) * tinggi
    let luas_permukaan = 2 * phi * jarijari * (jarijari + tinggi)

    //membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        phi: phi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})

//endpoint "/kerucut" dengan method POST
app.post("/kerucut", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let jarijari = Number(req.body.jarijari) 
    let tinggi = Number(req.body.tinggi) 
    let phi = 3.14

    let volume = phi * (jarijari**2) * tinggi
    let luas_permukaan = phi * jarijari * (jarijari + (Math.sqrt((jarijari**2) + (tinggi**2))))

    //membuat objek yang berisi data yang akan dijadikan response
    let response = {
        jarijari: jarijari,
        tinggi: tinggi,
        phi: phi,
        volume: volume,
        luas_permukaan: luas_permukaan
    }
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})

//NOMOR 2
//------------------- K O N V E R S I -------- S U H U --------------------

//celcius
app.get("/convert/celcius/:celcius", (req,res) => {
    //menampung data yang dikirimkan 
    let celcius = req.params.celcius 

    let reamur = 4/5 * celcius
    let fahrenheit = 9/5 * celcius + Number(32)
    let kelvin = (Number(celcius) + Number(273))

    //membuat objek yang berisi data yang akan dijadikan response
    let response = {
        celcius : celcius,
        result : {
            reamur: reamur,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})

//reamur
app.get("/convert/reamur/:reamur", (req,res) => {
    //menampung data yang dikirimkan 
    let reamur = req.params.reamur 

    let celcius = 5/4 * reamur
    let fahrenheit = 9/4 * reamur + Number(32)
    let kelvin = 5/4 * reamur + Number(273)

    //membuat objek yang berisi data yang akan dijadikan response
    let response = {
        reamur : reamur,
        result : {
            celcius: celcius,
            fahrenheit: fahrenheit,
            kelvin: kelvin
        }
    }
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})

//fahrenheit
app.get("/convert/fahrenheit/:fahrenheit", (req,res) => {
    //menampung data yang dikirimkan 
    let fahrenheit = req.params.fahrenheit 

    let celcius = 5/9 * (fahrenheit - Number(32))
    let reamur = 4/9 * (fahrenheit - Number(32))
    let kelvin = 5/9 * (fahrenheit - (Number(32))) + Number(273)

    //membuat objek yang berisi data yang akan dijadikan response
    let response = {
        fahrenheit : fahrenheit,
        result : {
            celcius: celcius,
            reamur: reamur,
            kelvin: kelvin
        }
    }
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})

//kelvin
app.get("/convert/kelvin/:kelvin", (req,res) => {
    //menampung data yang dikirimkan 
    let kelvin = req.params.kelvin 

    let celcius = kelvin - 273
    let reamur = 4/5 * (Number(kelvin) - 273)
    let fahrenheit = 9/5 * (Number(kelvin) - 273 ) + 32

    //membuat objek yang berisi data yang akan dijadikan response
    let response = {
        kelvin : kelvin, 
        result : {
            celcius: celcius,
            reamur: reamur,
            fahrenheit: fahrenheit
        }
    }
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})


//NOMOR 3
//--------- K O N V E R S I --- J E N I S --- B I L A N G A N -------

//decimal ke biner
app.post("/dectobiner", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let decimal = Number(req.body.decimal) //mengambil nilai decimal dari body

    let biner = decimal.toString(2);

    //membuat objek yang berisi data yang akan dijadikan response
    let response = {
        decimal: decimal,
        biner: biner
    }
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})

//biner ke desimal
app.post("/binertodec", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let biner = Number(req.body.biner) //mengambil nilai biner dari body
    
    let decimal = parseInt(biner, 2);
    
    //membuat objek yang berisi data yang akan dijadikan response
    let response = {
        biner: biner,
        decimal: decimal
    }
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})

//decimal ke octal
app.post("/decimaltooctal", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let decimal = Number(req.body.decimal) //mengambil nilai decimal dari body
    
    let octal =  decimal.toString(8);
    
    //membuat objek yang berisi data yang akan dijadikan response
    let response = {
        decimal: decimal,
        octal: octal
    }
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})

//decimal ke hexadecimal
app.post("/decimaltohexa", (req,res) => {
    //menampung data yang dikirimkan dan mengkonversi menjadi tipe numerik
    let decimal = Number(req.body.decimal) //mengambil nilai decimal dari body
    
    let hexadecimal = decimal.toString(16).toUpperCase();
    
    //membuat objek yang berisi data yang akan dijadikan response
    let response = {
        decimal: decimal,
        hexadecimal: hexadecimal
    }
    //memberikan response dengan format JSON yang berisi object diatas
    res.json(response)
})

//NOMOR 4 
//------- M E N G H I T U N G ----- B M I ----------
app.post("/bmi", (req,res) => {
    let berat = Number(req.body.berat)
    let tinggi = Number(req.body.tinggi)

    let bmi = (berat / (tinggi**2));

    if (bmi < 18.5){
        status = "Kekurangan berat badan";
    }
    else if (bmi <= 24.9){
        status = "Normal (ideal)";
    }
    else if (bmi <= 29.9){
        status = "Kelebihan berat badan";
    }
    else {
        status = "Kegemukan (obesitas)";
    }

    let response = {
        berat: berat,
        tinggi: tinggi,
        bmi: bmi,
        status: status
    }

    res.json(response)
})

app.listen(8080, () => {
    console.log("Server run on port 8080");
})