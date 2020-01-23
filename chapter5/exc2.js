function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}
/*

OWN CODE

function loop(element,cond,mov,action) {
  	if (cond(element)){
      	action(element);
      	element=mov(element);
	    loop(element,cond,mov,action);
    }
}*/

loop(3, n => n > 0, n => n - 1, console.log);