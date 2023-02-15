radio.onReceivedString(function (receivedString) {
    serial.writeLine("" + (co_deco(receivedString, false)))
})
function co_deco (text: string, deco: boolean) {
    if (deco) {
        despla = despla_ini
    } else {
        despla = despla_ini * -1
    }
    resultado = ""
    for (let index = 0; index <= text.length - 1; index++) {
        letra = text.charAt(index)
        letra_posi = abcd.indexOf(letra)
        new_posi = letra_posi + despla
        if (new_posi > abcd.length) {
            new_posi = new_posi - abcd.length
        } else if (new_posi < 0) {
            new_posi = abcd.length + new_posi
        } else {
        	
        }
        letra_new = abcd.charAt(new_posi)
        resultado = "" + resultado + letra_new
    }
    return resultado
}
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    mensaje_env = serial.readUntil(serial.delimiters(Delimiters.NewLine))
    radio.sendString("" + (co_deco(mensaje_env, true)))
})
let mensaje_env = ""
let letra_new = ""
let new_posi = 0
let letra_posi = 0
let letra = ""
let resultado = ""
let despla = 0
let despla_ini = 0
let abcd = ""
abcd = "abcdefghijklmnopqrstuvwxyz1234567890 /"
despla_ini += 22
serial.redirectToUSB()
let prueba = "4 8wuywbwy 8w"
radio.setGroup(100)
basic.forever(function () {
	
})
