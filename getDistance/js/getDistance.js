var inch = 1,
    feet = inch*12,
    yard = inch*3,
    mile = inch*63360;

function distance(start, finish){
  var getDistance = finish - start;
  return getDistance;
}

console.log(distance(0, feet*2));
console.log(
  inch + "inch",
  feet + "inches in one foot",
  yard + "feet in one yard",
  mile + "feet in one mile"
)
