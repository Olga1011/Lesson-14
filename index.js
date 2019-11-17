function Dis(a, b, c) {
    // return  alert((b * b) - (4 * a * c));
    var D = (b * b) - (4 * a * c); 
    if (D == 0) {
        alert(x = -(b / (2 * a)));
    } if (D < 0) {
        alert("x has no answer");
    } if (D > 0) {
        alert(x1 = (-b + Math.sqrt(D)) / (2 * a));
        alert(x2 = (-b - Math.sqrt(D)) / (2 * a));
    };
};

var a = [1, 5, 6];
Dis.apply(null,a);
