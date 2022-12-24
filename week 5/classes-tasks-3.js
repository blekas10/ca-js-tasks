console.groupCollapsed("https://edabit.com/challenge/2FF7RKw9RLwc3EBY9");
{
  class Challenge {
    constructor(id, level) {
      this.id = id;
      this.level = level;
    }
    points() {
      switch (this.level) {
        case "VE":
          return 5;
        case "EA":
          return 10;
        case "ME":
          return 20;
        case "HA":
          return 40;
        case "VH":
          return 80;
        case "EX":
          return 120;
      }
    }
  }
  class User {
    constructor(name, xp, log) {
      this.name = name;
      this.xp = xp;
      this.log = log;
    }

    newSolvedChallenge(challenge) {
      this.xp += challenge.points();
      this.log.push(challenge.id);
    }
  }
  const user1 = new User("Madam", 0, []);
  const user2 = new User("Steve", 0, []);

  const challenge1 = new Challenge(1, "VE");
  const challenge2 = new Challenge(2, "EA");
  const challenge3 = new Challenge(3, "ME");
  const challenge4 = new Challenge(4, "HA");
  const challenge5 = new Challenge(5, "VH");
  const challenge6 = new Challenge(6, "EX");

  user1.newSolvedChallenge(challenge1);
  user1.newSolvedChallenge(challenge4);
  user1.newSolvedChallenge(challenge6);

  user2.newSolvedChallenge(challenge5);
  user2.newSolvedChallenge(challenge3);
  user2.newSolvedChallenge(challenge2);

  console.log(user1.name + " " + user1.xp + "xp " + user1.log);
  console.log(user2.name + " " + user2.xp + "xp " + user2.log);
}

console.groupEnd();

console.groupCollapsed("https://edabit.com/challenge/ifDM26p25bqS8EsFu");
{
  // ... code
}
console.groupEnd();
