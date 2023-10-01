/**
 * @return {Function}
 */
var createHelloWorld = function() {
    
    return function(...args) {
        let modifiedArgs = args
        args = "Hello World"
        return args
    }
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */