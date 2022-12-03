function diagonal() {
    var diagonal = Math.sqrt(9 * 9 + 9 * 9);
    console.log(diagonal);
};

diagonal();

function area() {
    var a = 5;
    var b = 6;
    var c = 7;
    var p = (a + b + c) / 2;
    var area = Math.sqrt(p*(p - a)*(p - b)*(p - c))
    console.log(area);
}

area();

function circumference() {
    var radius = 4;
    var circumference = 2 * Math.PI * radius;
    var surface_area = Math.PI * radius*radius;
    console.log("circumference " + circumference+ " surface_area "+surface_area);
};

circumference();