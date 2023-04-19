function solution(tickets) {
    const answer = [...tickets[0]]

    while (tickets.length) {
        const nextArr = tickets.filter(item => item[0] === answer[answer.length - 1])
        if (!nextArr.length) break

        const alignedNextArr = tickets.sort()
        let next = alignedNextArr[0]

        if (alignedNextArr.length > 1) {
            for (let i = 0; i < alignedNextArr.length; i++) {
                const nNext = tickets.find(item => item[0] === alignedNextArr[i][1])

                if (nNext) {
                    const passable = tickets.find(item => item[0] === nNext[1])

                    if(!passable) {
                        // next = alignedNextArr[i]
                    }
                }
            }
        }

        answer.push(next[1])

        const removeTarget = tickets.indexOf(tickets.find(item => item === next))
        tickets = tickets.filter((_, index) => index !== removeTarget)
    }

    return answer
}

console.log(solution([["ICN", "A"], ["A", "B"], ["A", "C"], ["C", "A"], ["B", "D"]]))
// ["ICN", "A", "C", "A", "B", "D"]

console.log(solution([["ICN", "A"], ["A", "C"], ["A", "D"], ["D", "B"], ["B", "A"]]))
// : ["ICN", "A", "D", "B", "A", "C"]

console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]))
// ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
