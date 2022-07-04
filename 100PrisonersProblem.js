
class PrisonProblem {
    constructor() {
        this.boxes = []
        this.loops = []
        this.prisoners = 100
        this.maxToOpen = 50
    }

    setupBoxes() {
        this.boxes = []
        let i = 0
        while (i < this.prisoners) {
            while (true) {
                let pNum = Math.floor(Math.random() * this.prisoners)
                if (!this.boxes.includes(pNum)) { // Make sure random numbers are uniq
                    this.boxes.push(pNum)
                    break
                }
            }
            i++
        }
    }

    printArray(inArr, breakOn = 10) {
        let i = 0
        let l = 0
        let outStr = ''
        while (i < inArr.length) {
            if (l > 0) {
                outStr += ', '
            }
            outStr += inArr[i]

            i++
            l++

            if (l == breakOn) {
                console.log(outStr)
                outStr = ''
                l = 0
            }
        }
        console.log(outStr)
    }

    // Randomly open N box try to find the matching number
    randomBoxCheck() {
        let foundBox = 0
        let p = 0
        let pNum = 0

        while (p < this.prisoners) {
            let i = 0
            let selectBoxes = []

            // Select boxes to open
            while (i < this.maxToOpen) {
                while (true) {
                    pNum = Math.floor(Math.random() * this.prisoners)
                    if (!selectBoxes.includes(pNum)) { // Make sure random numbers are uniq
                        selectBoxes.push(pNum)
                        break
                    }
                }

                if (this.boxes[pNum] == p) { // Prisoner found their box
                    foundBox++
                    break
                }

                i++
            }

            p++
        }

        let successRate = Math.round(foundBox / this.prisoners * 10000) / 100
        //console.log(`Found Boxes: ${foundBox} - Success Rate: ${successRate}%`)

        return successRate
    }

    // Randomly open a box, if the number does not match go to the box the it indicates, repeat until N box is checked at maximum
    loopBoxCheck() {
        let foundBox = 0
        let p = 0

        while (p < this.prisoners) {
            let i = 0
            let nextBox = p // Select prisoner's number for the first box
            let loop = []
            let found = 0

            // Select boxes to open
            while (i < this.maxToOpen) {
                if (loop.includes(nextBox)) {
                    break
                }
                loop.push(nextBox)

                if (this.boxes[nextBox] == p) { // Prisoner found their box
                    foundBox++
                    found = 1
                    break
                }

                // Open the box that this box points to
                nextBox = this.boxes[nextBox]

                i++
            }

            p++

            //console.log(`Prisoner: ${p} - Found: ${found} - Loop: ${loop} - Length: ${loop.length}`)
        }

        let successRate = Math.round(foundBox / this.prisoners * 10000) / 100
        //console.log(`Found Boxes: ${foundBox} - Success Rate: ${successRate}%`)

        return successRate
    }
}


let prison = new PrisonProblem()

let totalSuccessR = 0
let totalSuccessL = 0
let maxTests = 10000

let minRateR = 100
let maxRateR = 0

let minRateL = 100
let maxRateL = 0

let allPassR = 0
let allPassL = 0

let t = 0

while (t < maxTests) {
    prison.setupBoxes()
    //prison.printArray(prison.boxes)
    let rateR = prison.randomBoxCheck()
    let rateL = prison.loopBoxCheck()

    if (rateR == 100) {
        allPassR++
    }

    if (rateL == 100) {
        allPassL++
    }

    totalSuccessR += rateR
    totalSuccessL += rateL

    if (rateR < minRateR) {
        minRateR = rateR
    }

    if (rateR > maxRateR) {
        maxRateR = rateR
    }


    if (rateL < minRateL) {
        minRateL = rateL
    }

    if (rateL > maxRateL) {
        maxRateL = rateL
    }

    t++
}

console.log(`====================================`)
console.log(`Test Rounds: ${maxTests} - All Freed: ${Math.round(allPassR * 100 / maxTests * 100) / 100}% - Total Random Success Rate: ${Math.round(totalSuccessR * 100 / maxTests) / 100}% - Min Rate: ${minRateR}% - Max Rate: ${maxRateR}%`)
console.log(`Test Rounds: ${maxTests} - All Freed: ${Math.round(allPassL * 100 / maxTests * 100) / 100}% - Total Looper Success Rate: ${Math.round(totalSuccessL * 100 / maxTests) / 100}% - Min Rate: ${minRateL}% - Max Rate: ${maxRateL}%`)


