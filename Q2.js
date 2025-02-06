// Q2){ data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
// From the given object remove the data arrays item with id as '24'. (consider that the data arrays order will be different every time you get, so write code in such a way that given any object it will remove the item with id as 24 if it exists )

var obj={ data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
var res=obj.data.filter(item => item.id!='24');
console.log(res);
