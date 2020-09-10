import fs from 'fs';

const matches = fs.readFileSync('./3.1 football.csv.csv', {
    encoding: 'utf-8'
}).split('\n')
.map((row: string): string[] => {
    return row.split(',')
})

enum MatchResult {
    homeWin = 'H',
    awayWin = 'A',
    draw = 'D'
}

let manUnitedWin = 0;

for (let match of matches){
    if (match[1] === 'Man United' && match[5] === MatchResult.homeWin){
        manUnitedWin++
    } else if (match[2] === 'Man United' && match[5] === MatchResult.awayWin){
        manUnitedWin++
    }
}

