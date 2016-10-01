function powerSet( list ){
    var set = [],
        listSize = list.length,
        combinationsCount = (Math.pow( 2, listSize )),
        combination;

    for (var i = 1; i < combinationsCount ; i++ ){
        combination = [];
        for (var j=0;j<listSize;j++){
            if ((i & (Math.pow( 2, j )))){
                combination.push(list[j]);
            }
        }
        set.push(combination);
    }
    return set;
}
var sets = powerSet(["a", "b", "c", "d"]);
sets;