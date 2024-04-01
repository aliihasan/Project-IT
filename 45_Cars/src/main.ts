// Assignment no 45

function storeCarInfo(manufacture:string, modelName:string, ...exteraOption:{ [key : string]: any}[]):object {

    const CarInfo = {
        manufacture,
        modelName,
        ...Object.assign({}, ...exteraOption)
    }

    return CarInfo
};

let answer = storeCarInfo('Honda', 'Civic',{color:'Black'},{features: ['Navigation', 'Power window']})

console.log(answer);