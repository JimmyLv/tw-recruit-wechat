export function shuffle(array, number) {
   if (array.length < number) return array
   let choosedIndecies = []
   let result = []

   while (result.length < number) {
      let index
      do {
         index = Math.floor(Math.random() * array.length)
      } while (choosedIndecies.includes(index))

      choosedIndecies.push(index)
      result.push(array[index])
   }

   return result
}

