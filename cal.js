var fs = require('fs');
let rawdata = fs.readFileSync('data.json');
let arr = JSON.parse(rawdata);
let arrSort = arr.sort((a, b) => a.bd - b.bd)
console.log(arrSort);

function yearMaxAlive(arr) {
    //sort DESC
    arr.sort((a, b) => a.bd - b.bd)
    let high = {
        year: 0,
        count: 0
      },
      alive = 0,
      survivors = [];
    for (let [year, count] of Object.entries(arr.reduce((dds => (ledger, year) => {
        if (ledger[year.bd]) {
          alive++
          ledger[year.bd].alive = alive
        } else if (!ledger[year.bd]) {
          if (dds.length > 0) {
            let deleted = dds.filter((a, i, aa) => {
              if (a <= year.bd) {
                return true
              } else {
                survivors.push(a)
                return false
              }
            })
            dds = survivors
            survivors = []
            alive = alive - deleted.length
            alive++
            ledger[year.bd] = {
              alive: alive,
              dds: dds
            }
          } else {
            alive++
            ledger[year.bd] = {
              alive: alive,
              dds: dds
            }
          }
        }
        dds.push(year.dd)
        return ledger
      })([]), {}))) 
      {
      if (high.count < count.alive) {
        high = {
          year: year,
          count: count.alive
        }
      }
    }
    return high
  }
  
  console.log(yearMaxAlive(arr))