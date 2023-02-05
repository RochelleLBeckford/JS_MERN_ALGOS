/* 
Given a string representing a table name and an object
whose key value pairs represent column names and column
values, return a SQL insert statement string.

Tip: string interpolation (using back ticks, the key to
the left of num 1 key) make it easy to add variables into
a string or to add quotations without needing to escape them.

Bonus: after solving it, write a 2nd solution focusing on
functional programming using built in methods.
*/

const table = "users";
const insertData1 = { first_name: "John", last_name: "Doe" };
const expected1 =
    "INSERT INTO users (first_name, last_name) VALUES ('John', 'Doe');";

// Bonus:
const insertData2 = {
    first_name: "John",
    last_name: "Doe",
    age: 30,
    is_admin: false,
};
const expected2 =
    "INSERT INTO users (first_name, last_name, age, is_admin) VALUES ('John', 'Doe', 30, false);";
// Explanation: no quotes around the int or the bool, technically in SQL the bool would become a 0 or 1, but don't worry about that here.

/**
 * Generates a SQL insert statement from the inputs
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} tableName
 * @param {Object} columnValuePairs
 * @returns {string} A string formatted as a SQL insert statement where the
 *    columns and values are extracted from columnValuePairs.
 */

// same thing as objectEntries not returning an array -> want the sql type string to return
// loop through an array 
// look at Object.Keys() & Object.Values
// gives them back to you as an array
// get both vcalues for 2 arrays
// can use .join -> turns an array into a string and pass in sub array
// we need all if these statements -> can grab all of the items after we loop over an object and then join them

function insert(tableName, columnValuePairs) {
    // your code here
    let columns = "";
    let values = "";

    for ( const colName in columnValuePairs) {
        if ( columnValuePairs.hasOwnProperty(colName)) {
            let val = columnValuePairs[colName];

            if ( typeof val === "string" ) {
                val = `${val}`;
            }

            // prepend a comma and space if it's not the first column added to string
            if ( columns === "string" ) {
                columns += colName;
            } else {
                columns += `, ${colName}`;
            }

            if ( values === "") {
                values += val;
            } else {
                values += `, ${val}`;
            }
        }
    }
    return `INSERT INTO ${tableName} (${columns}) VALUES (${values});`;
}

console.log(insert(table, insertData1));

//********************** Bonus
/**
 * - Time: O(?).
 * - Space: O(?).
 */
function insertFunctional(tableName, columnValuePairs) {
    // your code here
    const columns = Object.keys( columnValuePairs).join(",");

    const values = Object.values(columnValuePairs)
    .map((val) => (typeof val === "string" ? `'${val}'` : val ))
    .join(",");

    return `INSERT INTO &{tableName} (${columns}) VALUES (  ${values});`;
}

console.log(insertFunctional(table, insertData2));

// export { insert, insertFunctional };
