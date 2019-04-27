//  Constraining the type of T
//  ==========================

enum ClubHomeCountry {
    England,
    Germany
}

interface IFootballClub {
    getName() : string;
    getHomeCountry(): ClubHomeCountry;
}

interface IFootballClubPrinter < T extends IFootballClub > {
    print(arg : T) : any;
    IsEnglishTeam(arg : T) : any;
}

abstract class FootballClub implements IFootballClub {
    protected _name: string;
    protected _homeCountry: ClubHomeCountry;
    getName() { return this._name };
    getHomeCountry() { return this._homeCountry };
}

class Liverpool extends FootballClub {
    constructor() {
        super();
        this._name = "Liverpool F.C.";
        this._homeCountry = ClubHomeCountry.England;
    }
}

class BorussiaDortmund extends FootballClub {
    constructor() {
        super();
        this._name = "Borussia Dortmund";
        this._homeCountry = ClubHomeCountry.Germany;
    }
}

class FootballClubPrinter< T extends IFootballClub  >
    implements IFootballClubPrinter< T > {
    print(arg : T) {
        console.log(` ${arg.getName()} is ` +
            `${this.IsEnglishTeam(arg)}` +
            ` an English football team.`
        );
    }
    
    IsEnglishTeam(arg : T) : string {
        if ( arg.getHomeCountry() == ClubHomeCountry.England ) 
            return "";
        else
            return "NOT"
    }
}

let clubInfo = new FootballClubPrinter();
clubInfo.print(new Liverpool());
clubInfo.print(new BorussiaDortmund());