let min = prompt('Введите число от 0 до 59')

if(min < 0) {
    alert('Введите число от 0 до 59')
} else if(min  <=15) {
    alert('1-я четверть часа')
} else if(min <= 30) {
    alert('2-я четверть часа')
} else if(min <= 45) {
    alert('3-я четверть часа')
} else if(min <= 59) {
    alert('4-я четверть часа')
} else {
    alert('Введите число от 0 до 59')
}