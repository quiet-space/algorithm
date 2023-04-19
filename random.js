const fiveUnit = ['A', 'B', 'C', 'D', 'E']
const sevenUnit = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const eightUnit = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
const tenUnit = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']
const elevenUnit = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'L']

const exportRandomUnits = (entireUnit) => {
    let randomUnits = []
    let randomIdx

    const maxUnitLength = Math.ceil(entireUnit.length / 4)

    const assignIndex = () => {
        randomIdx = Math.floor(Math.random() * maxUnitLength)
    }

    // 배정
    entireUnit.forEach(unit => {
        assignIndex()

        if (!randomUnits[randomIdx]) {
            randomUnits[randomIdx] = []
        }

        randomUnits[randomIdx].push(unit)
    })


    randomUnits.forEach((rUnit, rIdx) => {
        if (rUnit.length > 4) {

            const preventOverFour = (targetUnit) => {
                const restLength = rUnit.length - 4
                const restArr = targetUnit.slice(3)

                if(restArr.length > 4) {
                    preventOverFour(restArr)
                }

                if (restLength >= 1) {
                    randomUnits[rIdx] = randomUnits[rIdx].slice(0, 3) // 통과
                    randomUnits.unshift(restArr)
                }
            }

            preventOverFour(rUnit)

        }

        if(rUnit.length === 1) {
            console.log(rUnit)
            let mergeTarget = randomUnits.find(item => item.length < 4)

//            mergeTarget.concat(rUnit)

            randomUnits = randomUnits.filter(item => item !== rUnit)
        }
    })


    return randomUnits
}

const result10 = exportRandomUnits(tenUnit)
// const result5 = exportRandomUnits(fiveUnit)
// const result11 = exportRandomUnits(elevenUnit)
// const result8 = exportRandomUnits(eightUnit)

console.log('result10:::::', result10)
// console.log(5, result5)
// console.log(11, result11)
// console.log(8, result8)