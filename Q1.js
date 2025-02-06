// Q1){a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array consisting of all the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])

var obj={a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' };
var res=Object.keys(obj).reverse();
console.log(res);