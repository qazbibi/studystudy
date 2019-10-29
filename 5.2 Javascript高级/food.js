// 自调用函数---食物的
(function () {
    var elements = [];
    // 食物对象，有宽，有高，有颜色，有横纵坐标，先定义构造函数，然后创建对象
    function Food(x, y, width, height, color) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 20;
        this.height = height || 20;
        this.color = color || "green";
    };
    // 为原型添加初始化的方法
    Food.prototype.init = function (map) {
        // 删除前一个食物
        remove();
        // 创建div
        var div = document.createElement("div");
        // 把div加到map中
        map.appendChild(div);
        // 设置该div的样式
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        // 横纵坐标应该随机产生
        // div.style.left=this.x+"px";
        // div.style.top=this.y+"px";
        // 先脱离文档流
        div.style.position = "absolute";
        // 随机横纵坐标
        this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
        this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
        div.style.left = this.x + "px";
        div.style.top = this.y + "px";
        // 把div加入到数组elements中
        elements.push(div);
    };
    function remove() {
        for (var i = 0; i < elements.length; i++) {
            var ele = elements[i];
            ele.parentNode.removeChild(ele);
            elements.splice(i, 1);
        }
    }
    // 把Food暴露给window，外部可以使用
    window.Food = Food;
}());