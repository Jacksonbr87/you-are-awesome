// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = () => {};


const createNotEnumerableProperty = (propertyName = "property", propertyValue = "value") => {
    Object.defineProperty(Object.prototype, propertyName, { get: () => propertyValue });
    return propertyName;
};


const createProtoMagicObject = () => {
    class magicObj {}
    magicObj.__proto__ = magicObj.prototype;
    return magicObj;
};


class Increm {
    constructor() {
        this.counter = 0;
        this.incrementor = this.incrementor.bind(this);
        // console.log("this.incrementor =" + this.incrementor);
        this.incrementor.valueOf = () => this.counter;
        // console.log("this.incrementor =" + this.incrementor);
    }
    incrementor() {
        this.counter++;
        // console.log("this.incrementor =" + this.incrementor);
        return this.incrementor;
    }
}

const incrementor = new Increm().incrementor;


const inc = () => {
    let counter = 0;
    const count = () => new Promise(resolve => {
        return resolve(counter++);
    });
    setTimeout(count, 0);
    console.log("count = " + count);
    return count;
};

const asyncIncrementor = inc();
// console.log("asyncIncrementorAFTER = " + asyncIncrementor);


const createIncrementer = function*() {
    let index = 0;
    while (true)
        yield ++index;
};


// return same argument not earlier than in one second, and not later, than in two

const returnBackInSecond = (param) => new Promise(resolve => {
    setTimeout(() => resolve(param), 1299);
});


const getDeepPropertiesCount = (obj, count = 0) => {
    for (let property in obj) {
        if (obj.hasOwnProperty(property)) {
            count++;
            if (typeof obj[property] === "object") {
                // console.log("typeof obj[property] = " + typeof obj[property]);
                count += getDeepPropertiesCount(obj[property]);
            }
        }
    }
    // console.log("count = " + count);
    return count;
};


const createSerializedObject = () => null;


const toBuffer = () => {}; // ?????


const sortByProto = (incomingArray) => {
    const lengthOfProto = (parentObj, counter = 0) => {
        const childObj = parentObj.__proto__;
        if (childObj !== null) {
            counter++;
            // console.log("childObj, counter = " + childObj, counter);
            return lengthOfProto(childObj, counter);
        }
        // console.log("counter = " + counter);
        return counter;
    };
    console.log("sorted array = " + incomingArray.sort((a, b) => lengthOfProto(b) - lengthOfProto(a)));
    return incomingArray.sort((a, b) => lengthOfProto(b) - lengthOfProto(a));
};


exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;