radio.onReceivedString(function (receivedString) {
    basic.showString("" + (radio.receivedPacket(RadioPacketProperty.SignalStrength)))
})
radio.setGroup(1)
