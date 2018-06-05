const greeting = require('./greeting')

if (typeof document !== "undefined") {
    document.write(greeting)
} else {
    console.log(greeting)
}
