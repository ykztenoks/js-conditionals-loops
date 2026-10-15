//ascending for loop

for(let i = 0; i <= 10; i++){
    console.log(i)
}

// descending for loop
for(let i = 10; i >= 0; i--){
    console.log(i)
}

const student = "Michele Carissimi"

for(let i = 0; i < student.length; i++){
    const uppercasedChard = student[i].toUpperCase()
    console.log(uppercasedChard)
}

for(let i = student.length - 1; i >= 0; i--){
    console.log(student[i])
    
}

//CONDITIONALS IN THE LOOP

for(let i = 0; i <= 10; i++){
    if(i % 2 === 0) continue //skips the loop if condition is met (condition says)

    
    console.log(i)
}