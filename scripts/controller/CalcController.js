class CalcController {

    constructor(){
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize(){
    

    displayCalcEl.innerHTML = "4567";
    dateEl.innerHTML = "01/05/2022";
    timeEl.innerHTML = "11:00";
    }

    get displayCalc(){
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(valor){
        this._displayCalc = valor;
    }

    get dataAtual(){
        return this._currentDate;
    }

    set dataAtual(valor) {
        this._currentDate = valor;
    }

}