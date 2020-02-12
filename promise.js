let getBeers = require('./fileio')

async function main() {

    getBeers()
        .then(result => {
            return JSON.parse(result)
        })
        .then(objBeers => {
            console.log(objBeers[0])
            throw new Error("this is a very bad error")
        })
        .catch(error => {
            console.log(error)
        })
        .finally(() => {
            console.log("Finally Run")
        })

    let newBeers = await getBeers()

    console.log("New Beers")
    console.log(JSON.parse(newBeers)[1])

    console.log("End of program")
}

main()


