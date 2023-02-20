serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    mensaje_env = serial.readLine()
    for (let index = 0; index <= Math.ceil(mensaje_env.length / 18); index++) {
        radio.sendString("" + (co_deco(mensaje_env.substr(index * 18, 10), true)))
    }
})
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
let letra_new = ""
let new_posi = 0
let letra_posi = 0
let letra = ""
let resultado = ""
let despla = 0
let mensaje_env = ""
let despla_ini = 0
let abcd = ""
abcd = "abcdefghijklmnopqrstuvwxyz1234567890 /"
despla_ini += 11
let prueba = "4 8wuywbwy 8w"
radio.setGroup(5)
serial.redirectToUSB()
serial.setRxBufferSize(125)
serial.setTxBufferSize(125)
basic.forever(function () {
	
})
