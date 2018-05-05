function Graph () {};
var graph = new Graph();

// check if this Degree Sequence is graphic, based on Havel-Hakimi Theorem. 
Graph.prototype.isGraphic = function (arr) {
    if (arr instanceof Array === false) throw new Error("error: param type must be Array")
    let temp = [...arr].sort(function (a, b) {
        return b - a;
    });
    //The max degree cannot be equal to or bigger than the order of the graph
    if (temp[0] >= temp.length) return false;
    //The sum of degree must be even number. More precisely, it should be twice of the size(edge number).
    let sum = 0;
    for (let i=0; i<temp.length; i++) {
        sum += temp[i];
    }
    if (sum % 2 == 1) return false;

    //Havel-Hakimi Alogrithm
    let flag = true; //none of the number in processed sequence is negative 
    while (temp[0]!=0 && flag) {
        let num = temp.shift();
        for (let i=0; i<num; i++) {
            temp[i] -= 1;
            if (temp[i] < 0) {
                flag = false; //obtain a negative number, so it's not graphic
                break;
            }
        }
        temp.sort(function (a, b) {
            return b - a;
        });
    }
    return flag;
}
