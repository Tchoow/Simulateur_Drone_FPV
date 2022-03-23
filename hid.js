//Get the HID from QX7 Controller
let HID = require("node-hid")
let devices = HID.devices()


;(async () => {
    let controller = devices.find(device => device.manufacturer == "OpenTX")
    if(!controller) return console.log("No OpenTX controller found")

    console.log(`Connected to ${controller.product}`)

    let device = new HID.HID(controller.path) // Ou (vid, pid)

    device.on("data", data => {
        //Réglages des offsets
        let max = 1991// -24 + 7*255 + 230 = 1991 
        let middle = 1009 //-24 + 4*255 + 13 = 1009

        let throttle = data[7] + 255*data[8] - 24
        let yaw = (data[9] + 255*data[10]) - middle
        let pitch = (data[5] + 255*data[6]) - middle
        let roll = (data[3] + 255*data[4]) - middle
    })
})()
