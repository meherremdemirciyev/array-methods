
                // 18 yasdan boyukleri cixardin

// const people = [
//     {name:'Alice',age:17},
//     {name:'Bob',age:20},
//     {name:'Charlie',age:18},
// ]

// let high = people.filter(person => person.age > 18)
// console.log(high);



                // arrayde 'a' ile baslayan
                // sozleri filtirleyin

// const words = ['apple','banana','apply'] 

// let startWithA = words.filter(arr => arr.startsWith('a'))

// console.log(startWithA);



                // Arrayde New York'da yasayan
                // adamlari filtirleyin

// const people = [
//     {name: "Alice",city:'New York'},
//     {name: "Bob",city:'Los Angeles'},
//     {name: "Charlie",city:'New York'}
// ]

// let address = people.filter(person => person.city.includes("New York"));

// console.log(address);



                // Arrayde yasi 30dan boyuk 
                // olanlari cixarin

// const people=[
// {name:"Alice" ,age:17,gender:"female"},
// {name:"Bob" ,age:20,gender:"male"},
// {name:"Charlie" ,age:32,gender:"male"}
// ]

// let higherthan30 = people.filter(person => person.age > 30)

// console.log(higherthan30);



            //Arraydeki icherisinde "an" olan sozleri chixarin

// const words=["apple","banana","changan"]

// let includes = words.filter(word => word.includes('an'))

// console.log(includes);




            // Arrayde 1990-07-04 tarixinden 
            //evvel dogulmush adamlari chixarin

// const people=[
// {name:"Alice" ,birthDate:"1990-01-03"},
// {name:"Bob" ,birthDate:"1985-01-25"},
// {name:"Charlie" ,birthDate:"2000-04-08"}
// ]

// // let date = people.filter(person => person.birthdate < '1990-07-04')

// // console.log(date);


// let bornBefore = person => {
//         let birthDate = new Date(person.birthDate);
//         let givenDate = new Date('1990-07-04');
//         return birthDate < givenDate;
// }

// let filteredPeople = people.filter(bornBefore)

// console.log(filteredPeople);




            //Arraydeki herkesin yashina 5 il gelin

// const people=[
// {name:"Alice", age:17},
// {name:"Bob", age:20},
// {name:"Charlie", age:18}
// ]

// let sum = people.map(person => ({...person,age:person.age += 5})) 

// console.log(people);



            // Arraydeki her kelimeni tersine chevirib yazin

// const words=["apple","banana","apply"]

// let reversed = words.map(word => word.split('').reverse().join(''))

// console.log(reversed);

            // Arraydeki herkesin yashini 1 defe artirin

// const people=[
// {name:"Alice", age:17},
// {name:"Bob", age:20},
// {name:"Charlie", age:18}
// ]

// people.forEach((value,index,arr)=>{
//     arr[index].age = value.age += 1
// })

// console.log(people);

            // Arraydeki her sozun birinci herfini
            // boyuk herfe cevirin

// const words=["apple","banana","apply"]


// words.forEach((value,index,arr)=>{
//     arr[index] = value.charAt(0).toUpperCase() + value.slice(1)
// })

// console.log(words);

            // Arraydeki regemlerin ededi ortasini tapin

// const numbers=[1,2,3,4,5]

// let sum = numbers.reduce((sum,num) => {
//     return sum+=num
// })

// let average = sum / numbers.length 

// console.log(average);


            // Arraydeki sozlerden object yaradin
            // ve value olarag uzunluglarini verin


// const words=["apple","banana","apply"]


// let newWords = words.reduce((obj,value) => {
//     if(!obj[value]){
//         obj[value] = value.length
//     }
//     obj[value] + 1

//     return obj
    
// },{})

// console.log(newWords);

            // Arraydeki regemleri bir birine vurun
            // amma menfi ededler xaric

// const num=[-5,1,-2,3,4]

// let multiple = num.reduce((prevValue,currentValue) => {
//         if(currentValue > 0){
//                 return prevValue * currentValue
//         }

//         return prevValue
                
// },1)
// console.log(multiple);


                // Arraydeki regemler arasinda en chox tekrarlanani tapin

// const numbers=[1,2,3,1,2,4,2,4,5]

// let repeat = numbers.reduce((obj,current) => {
//         if(!obj[current]){
//            obj[current] = 0
//         }

//         obj[current] += 1
        
//         return obj
        
// },{})


// let maxNumber = Object.keys(repeat).reduce((max, key) => {
//     if (repeat[key] > repeat[max]) {
//         return key;
//     } else {
//         return max;
//     }
// });

// console.log(maxNumber);


                // Arraydeki adamlari yashlarina ve adlarina gore siralayin

// const people=[
// {name:"Alice", age:17},
// {name:"Bob", age:20},
// {name:"Charlie", age:18}
// ]

// let sortedPeople = people.sort((a,b) => {
//        return a.age - b.age                    
// })

// console.log(sortedPeople);