const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = (oddsAndEvens) => {
    for (let index = 1; index < oddsAndEvens.length; index += 1){
       for (let second = 0; second < index; second += 1) {
            if (oddsAndEvens[index] < oddsAndEvens[second]){
                let auxiliar = oddsAndEvens[index];
                oddsAndEvens[index] = oddsAndEvens[second];
                oddsAndEvens[second] = auxiliar;
            }
       } 
    }
    return oddsAndEvens;
}; 
console.log(sortOddsAndEvens(oddsAndEvens));
