function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;

    //   this. weightDraft = this.weightCrew + this.draft;


    this.isWorthIt = function () {
        return this.draft - (this.craft * 1.5) > 20 ? true : false
    }
}


//YOUR CODE HERE...
var titanic = new Ship(15, 10);
titanic.isWorthIt() // return false
