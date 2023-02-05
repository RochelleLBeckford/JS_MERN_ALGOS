/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.

Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.

return an array of the song indexes or [-1, -1] if no pair is found.

If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */

/*
* Notes
-> RIOT -> restate the challange of this algo (what we are looking for) -> ,
-> not what the code is doing but why it exits
-> for loop -> ++ through the array
-> while loop may be better
-> if -> bus duration is greater than the 30 difference of 300 then return [-1, -1]

*/

function musicRuntime(busDuration, songDurations) {
    // your code -> guidance from Jalen 
    const target = busDuration - 30;
    let longestDuration = 0;
    let longestDurationIndex = [-1, -1];

    for (let i = 0; i < songDurations.length; i++) {
        for (let j = i + 1; j < songDurations.length; j++) {
            if (songDurations[i] + songDurations[j] === target) {
                if (
                    songDurations[i] > longestDuration ||
                    songDurations[j] > longestDuration
                ) {
                    longestDuration = Math.max(
                        songDurations[i],
                        songDurations[j]
                    );
                    longestDurationIndex = [i, j];
                }
            }
        }
    }

    return longestDurationIndex;
}

console.log(musicRuntime(busDuration1, songDurations1));
console.log(musicRuntime(busDuration2, songDurations2));
console.log(musicRuntime(busDuration3, songDurations3));