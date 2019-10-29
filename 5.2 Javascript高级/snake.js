// 自调用函数---小蛇的
(function () {
    var elements = [];
    // 小蛇的构造函数
    function Snake(width, height, direction) {
        this.width = width || 20;
        this.height = height || 20;
        // 小蛇的身体
        this.body = [{
                x: 3,
                y: 2,
                color: "red"
            }, //头
            {
                x: 2,
                y: 2,
                color: "orange"
            }, //身体
            {
                x: 1,
                y: 2,
                color: "orange"
            } //身体
        ];
        this.direction = direction || "right";
    }
    // 为原型添加方法-小蛇的初始化
    Snake.prototype.init = function (map) {
        remove();
        // 循环遍历创建div
        for (var i = 0; i < this.body.length; i++) {
            var obj = this.body[i];
            // 创建div
            var div = document.createElement("div");
            // 把div加入到map地图中
            map.appendChild(div);
            // 设置div的样式
            div.style.position = "absolute";
            div.style.width = this.width + "px";
            div.style.height = this.height + "px";
            div.style.left = obj.x * this.width + "px";
            div.style.top = obj.y * this.height + "px";
            div.style.backgroundColor = obj.color;
            // 把div加入到elements数组中---目的为了删除
            elements.push(div);
        }
    };
    Snake.prototype.move = function (food, map) {
        var i = this.body.length - 1;
        for (; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        switch (this.direction) {
            case "right":
                this.body[0].x += 1;
                break;
            case "left":
                this.body[0].x -= 1;
                break;
            case "top":
                this.body[0].y -= 1;
                break;
            case "bottom":
                this.body[0].y += 1;
                break;
        }
        var headX = this.body[0].x * this.width;
        var headY = this.body[0].y * this.height;
        if (headX == food.x && headY == food.y) {
            var last = this.body[this.body.length - 1];
            this.body.push({
                x: last.x,
                y: last.y,
                color: last.color
            });
            food.init(map);
        }
    };

    function remove() {
        var i = elements.length - 1;
        for (; i >= 0; i--) {
            var ele = elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }
    }
    window.Snake = Snake;
}());