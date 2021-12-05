class Board {
    constructor(board) {
        this.rows = this.cloneBoard(board)
        this.remainingSum = 0
        this.finished = false

        this.rows.forEach((row) => {
            row.forEach((num) => {
                this.remainingSum += num
            })
        })
    }

    cloneBoard = (board) => {
        return [...board.map((row) => [...row])]
    }

    getColumns = () => {
        const columns = []
        for (let i = 0; i < this.rows[0].length; i += 1) {
            const column = []
            for (let j = 0; j < this.rows.length; j += 1) {
                column.push(this.rows[j][i])
            }
            columns.push(column)
        }
        return columns
    }

    markRow = (row, nextNumber) => {
        const updatedRow = [...row]
        const index = updatedRow.indexOf(nextNumber)
        if (index !== -1) {
            updatedRow[index] = ''
            this.remainingSum -= nextNumber
        }
        return updatedRow
    }

    markBoard = (nextNumber) => {
        const updatedRows = this.cloneBoard(this.rows)
        updatedRows.forEach((row, idx) => {
            updatedRows[idx] = this.markRow(row, nextNumber)
        })
        this.rows = updatedRows
        const bingo = this.checkBingo()
        if (bingo === true) {
            this.winner = nextNumber
        }
        return bingo
    }

    checkBingoInList = (row) => {
        const unmarkedNums = row.filter((num) => num !== '')
        return unmarkedNums.length === 0
    }

    checkBingo = () => {
        let BINGO = false
        // Checking rows
        this.rows.forEach((row) => {
            const bingo = this.checkBingoInList(row)
            if (bingo === true) {
                BINGO = true
            }
        })
        // Checking columns
        const columns = this.getColumns()
        columns.forEach((column) => {
            const bingo = this.checkBingoInList(column)
            if (bingo === true) {
                BINGO = true
            }
        })
        return BINGO
    }

    fnishBoard = () => {
        this.finished = true
    }
}

export default Board
