class Preferences {
    golani: number = 1;
    armor: number = 1;
    artillery: number = 1;
    searchAndRescue: number = 1;
  }
  
  class SupportPreferences {
    targetingNCO: number = 1;
    nimrodiSergeant: number = 1;
    cook: number = 1;
    sandwichFiller: number = 1;
  }
  
  class TechPreferences {
    fullstack: number = 1;
    data: number = 1;
    devops: number = 1;
    duty: number = 1;
  }
  
  class User {
    name: string = "";
    personalNote: string = "";
    combatPreferences: Preferences = new Preferences();
    supportPreferences: SupportPreferences = new SupportPreferences();
    techPreferences: TechPreferences = new TechPreferences();
  }

  export default User