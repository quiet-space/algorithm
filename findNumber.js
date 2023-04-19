function solution(numbers) {
    const cards = [...numbers];
    let possibleMap = []
    cards.forEach((number, nIdx) => {
        possibleMap.push(Number(number))

        const filteredCards = cards.filter((item, cIdx) => cIdx !== nIdx)

        for (let i = 0; i < filteredCards.length; i++) {
            const card = filteredCards[i]

            possibleMap.push(possibleMap[i] + number)
        }
    })

    possibleMap = new Set(possibleMap)

    possibleMap.forEach(pItem => {
        pItem = Number(pItem)

        if (pItem <= 1) possibleMap.delete(pItem)

        for (let i = 2; i*i <= pItem; i++) {
            if (pItem % i === 0) possibleMap.delete(pItem)
        }
    })


    console.log(possibleMap)
    return possibleMap.size;
}

console.log(solution('17')) // 3
console.log(solution('011')) // 2