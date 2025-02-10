function add(a: number, b: number) {
    return a + b;
}

interface MyCustomObject{
    a: number,
    b:number
}

function task(obj: MyCustomObject) {
    return obj.a + obj.b;
}

console.log(add(10, 33));

console.log(task({
    a:1,b:2
}))