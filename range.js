module.exports = function (start, stop) {
  var array = [];

   if(!stop){
     stop = start;
     start = 0;
   }

  for (var i = 0; start < stop; start++, i++) {
    array[i] = start;
  }
  return array;
};
