/**Emma is playing a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. She can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus  or . She must avoid the thunderheads. Determine the minimum number of jumps it will take Emma to jump from her starting postion to the last cloud. It is always possible to win the game. */

function jumpingOnClouds(c) {
    let jumps = 0
    for (let i = 0; i < c.length - 1; i++) {
        if (c[i + 2] !== 1) {
            i++
        }
        jumps++
    }
    return safe
}
console.log(jumpingOnClouds([0, 1, 0, 0, 0, 1, 0]))