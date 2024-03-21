// parem klõps lehel -> inspect -> console

// välja logimine brauseri konsooli.
// see on sõnumite edastamiseks.
// kui asi läheb LIVE-i, siis ideaalis kustutatakse kõik console.log()
console.log("Töötab")

// muutuja on muutuva väärtusega. 
// saan neile anda lõputult palju erinevaid väärtusi
// sisselogitud kasutaja.
// kogus.
// kogusumma.
// toote nimi.
nimi = "Mihkel"

console.log(nimi)
console.log("nimi")
//console.log(muutuja)

nimi = "Paul"

console.log(nimi)

number = 1
number = 2
number = 3
number = 4
console.log(number)

number = number + 1
number = number + 1
number = number + 1 // kui "1" -> "61"
number = number + 1
number = number + 1
console.log(number) // 9

nimi = nimi + 1 // "Paul" + 1 -> kui liidetakse sõna ja number, 
//    on tulem pikem sõna
console.log(nimi) // Paul1

if (nimi === "Paul1") { // === kontrollib kas vasak pool ja parem pool on identsed
  console.log("Kõik on korrektne!")
}

if (number > 8) {
  console.log("Kogus piisav!")
}

// kõiki asju saab kontrollida, kas on identne:
// ===

// Numbrite eriomadus on, et saan vaadata:
// > suurem    < väiksem     >= suurem/võrdne

// Sõnade eriomadus on, et saan kontrollida sisu:
// funktsioonide abil
// .startsWith()
// .endsWith()
// .includes()
// .charAt()
// jnejne

nimi = "Toomas"
nimi = "Pille"
nimi = "Mart"

// KUI EI LÄHE ESIMESSE BLOKKI, SIIS LÄHEB TEISE
if (nimi.startsWith("P")) {
  console.log("Nimi algab P-ga")
} else {
  console.log("Nimi ei alga P-ga")
}

// 0123    0123   012345
// Paul    Mart   Toomas
if (nimi[1] === "a") {
  console.log("Nime teine täht on a")
} else {
  console.log("Nime teine täht pole a")
}

email = "paul@google.com"

// SIIA kas läheb või ei lähe
if (email.includes("@")) {
  console.log("Email on korrektne")
}

// m@m.ee
if (email.length >= 6) {
  console.log("Email on korrektne")
} else {
  console.log("Email pole korrektne")
}

// .length --> sõna pikkus
// [2] --> kindel tähemärk. kolmas täht.
// boolean

// kolm tüüpi.
// 1. Sõna -> "Paul"  . "paul@google.com"
// String

// 2. Number -> number = 1

// 3. Kahendväärtus ehk boolean.
// sisselogitud/mitte
// makstud/mitte
// registreerunud/mitte
// täisealine/mitte
// raha piisavalt/mitte
// linnuke/mitte

// Sõnal on jutumärgid ümber ja värvub oranžiks
// Number on kirjutatud kui number ja värvub roheliseks
// Kahendväärtus on kindel sõna: true/false ja värvub siniseks

täisealine = false
täisealine = true

if (täisealine) {
  console.log("On täisealine")
} else {
  console.log("On alaealine")
}