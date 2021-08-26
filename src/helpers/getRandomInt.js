
// This dont work as expected, until the return is done 
// no promise is returned

// const getRandomInt = async () => {

//     const rndInt = Math.floor( ( Math.random() * 20 ) + 1 )

//     setTimeout(() => {
//         return rndInt
//     }, 1000)

// }

const getRandomInt = () => {

    return new Promise( resolve => {
        const rndInt = Math.floor( ( Math.random() * 20 ) + 1 )
    
        setTimeout(() => {
            resolve(rndInt)
        }, 2000)
    })
}

export default getRandomInt