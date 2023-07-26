/*
Given an array of integers, return the indices of the two numbers that add up to a given target
Función que recibe 2 elementos
1. Array [1,3,7,9,2,10]
          0 1 2 3 4
2. target: 11

output: [3,4]
*/

/*
1 Etapa : constraints
    ¿Todos los numeros son positivos? Si
    ¿Hay elementos duplicados? No, no existen duplicados
    ¿Siempre hay una solución? No -> []
    ¿La solución es única? -> Si
*/

function basicTwoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    const complementIndex = arr.findIndex((element) => element === complement);
    if (complementIndex !== -1) {
      return [i, complementIndex];
    }
  }

  return [];
}

const arr = [1, 3, 7, 9, 2];
const target = 11;

// Mapa
/*
    {
        1:0,
        3: 1,
        7: 2,
        9: 3,
        2: 4
    }
*/

function optimizedTwoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    map.set(complement, i); // {complemento : indice}
    /*
        {10:0,
            8:1,
            4:2,
            2:3,
            9:4}
        */
    const mapProperty = map.get(arr[i]) ?? null;
    if (mapProperty) {
      return [mapProperty, i];
    }
  }
  return [];
}

// console.log(basicTwoSum(arr, target));
console.time("INICIO OPTIMIZED")
console.log(optimizedTwoSum(arr,target))
console.timeEnd("INICIO OPTIMIZED");
// O(n^2) -> O(n)
// O(1) -> O(n)