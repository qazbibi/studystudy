// 自调用函数---游戏对象
(function () {
    var that = null;

    function Game(map) {
        this.food = new Food;
        this.snake = new Snake;
        this.map = map;
    }
    Game.prototype.init = function () {
        this.food.init(this.map);
        this.snake.init(this.map);
        that = this;
        // setInterval(function(){
        //     that.snake.move(that.food,that.map);
        //     that.snake.init(that.map);
        // }, 150);
        this.runSnake(this.food, this.map);
        this.bindKey();
    };
    Game.prototype.runSnake = function (food, map) {
        var timeID = setInterval(function () {
            this.snake.move(food, map);
            this.snake.init(map);
            var maxX = map.offsetWidth / this.snake.width;
            var headX = this.snake.body[0].x;
            var maxY = map.offsetHeight / this.snake.height;
            var headY = this.snake.body[0].y;
            if (headX < 0 || headX >= maxX || headY < 0 || headY >= maxY) {
                clearInterval(timeID);
                alert("GAME OVER!");
            }
        }.bind(that), 150);
    };
    Game.prototype.bindKey = function () {
        document.addEventListener("keydown", function (e) {
            switch (e.keyCode) {
                case 37:
                    this.snake.direction = "left";
                    break;
                case 38:
                    this.snake.direction = "top";
                    break;
                case 39:
                    this.snake.direction = "right";
                    break;
                case 40:
                    this.snake.direction = "bottom";
                    break;
            }
        }.bind(that), false);
    };
    window.Game = Game;
}());