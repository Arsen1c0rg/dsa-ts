function romanToIntBrute(input: string): number {
    const map = new Map<string, number>([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ])

    let count = 0

    for (let i = 0; i < input.length; i++) {
        const curr = map.get(input[i])!
        const next = map.get(input[i + 1])! // non-null assertion

        if (next > curr) {
        }
    }


    return 0
}