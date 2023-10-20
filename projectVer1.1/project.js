x = 0
y = 0
class Car{
constructor(color,model, x, y){
this.color = color
this.model = model
this.y = y
this.x = x
    }
    moveRight(){
        y++
        console.log(`${this.model} -Машина едет вправо`)
    }
    moveLeft(){
        y--
        console.log(`${this.model} - Машина едет влево`)
    }
    moveForward(){
        x++
        console.log(`${this.model} - Машина едет вперед`)
    }
    moveBackward(){
        x--
        console.log(`${this.model} - Машина едет назад`)
    }

}
let cars = [
    new Car("Синий", "Матиз",0 , 0 ),
    new Car("Красный", "Жигуль", 0 , 0 ),
    new Car("Зеленый", "Запорожец",0 , 0 ),
    new Car("Черный", "Волга", 0 , 0 ),
    new Car("Оранженый", "Ака", 0 , 0 ),
    new Car("Черный", "Лада", 0 , 0 ),
    new Car("Бежевый", "БМВ", 0 , 0 ),
    new Car("Белый", "Мерседес", 0 , 0 ),
    new Car("Фиолетовый", "Порше", 0 , 0 )
]

cars[0].moveBackward()