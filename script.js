
function random(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

let savol = +prompt("Nechta misol ishlamoqchisiz?")

for (let i = 0; i <= savol; i++) {
    let son1 = random(50, 1)
    let son2 = random(50, 1)
    let simvol = random(0, 5)
    let result = null
    let truee = null
    if (simvol == 1) {
        simvol = '+'
        result = prompt(`${son1} ${simvol} ${son2} = ?`)
        truee = son1 + son2
        if (result == truee) {
            alert(`Javobingiz Tog'ri ✅ : ${result}`)
        } else {
            alert(`Javobingiz Notog'ri ❌: ${result} \nTog'ri javob : ${truee} edi 😐`)
        }
    } else if (simvol == 2) {
        simvol = '-'
        result = prompt(`${son1} ${simvol} ${son2} = ?`)
        truee = son1 - son2
        if (result == truee) {
            alert(`Javobingiz Tog'ri ✅ : ${result}`)
        } else {
            alert(`Javobingiz Notog'ri ❌: ${result} \nTog'ri javob : ${truee} edi 😐`)
        }
    } else if (simvol == 3) {
        simvol = '*'
        result = prompt(`${son1} ${simvol} ${son2} = ?`)
        truee = son1 * son2
        if (result == truee) {
            alert(`Javobingiz Tog'ri ✅ : ${result}`)
        } else {
            alert(`Javobingiz Notog'ri ❌: ${result} \nTog'ri javob : ${truee} edi 😐`)
        }
    } else if (simvol == 4) {
        simvol = '/'
        result = prompt(`${son1} ${simvol} ${son2} = ?`)
        truee = son1 / son2
        if (result == truee) {
            alert(`Javobingiz Tog'ri ✅ : ${result}`)
        } else {
            alert(`Javobingiz Notog'ri ❌: ${result} \nTog'ri javob : ${truee} edi 😐`)
        }
    } else if (simvol == 5) {
        simvol = '%'
        result = prompt(`${son1} ${simvol} ${son2} = ?`)
        truee = son1 % son2
        if (result == truee) {
            alert(`Javobingiz Tog'ri ✅ : ${result}`)
        } else {
            alert(`Javobingiz Notog'ri ❌: ${result} \nTog'ri javob : ${truee} edi 😐`)
        }
    }
}