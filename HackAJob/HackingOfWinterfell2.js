function run(first_strike_army_name, no_of_dragons, no_of_white_lords) {
  let moves = 0;
  let names = {
    attacker: first_strike_army_name,
    defender:
      first_strike_army_name === "Seven Kingdom Army"
        ? "White Walker Army"
        : "Seven Kingdom Army"
  };
  let sevenArmy = {
    boss: {
      no: no_of_dragons,
      damage: 600,
      defence: 600
    },
    infantry: {
      no: 5000,
      damage: 2,
      defence: 2
    }
  };

  let walkerArmy = {
    boss: {
      no: no_of_white_lords,
      damage: 50,
      defence: 100
    },
    infantry: {
      no: 10000,
      damage: 1,
      defence: 3
    }
  };

  const turnResult = (attacker, defender) => {
    let totalDmg = 0;
    let totalDefence = 0;
    for (let unit in attacker) {
      totalDmg += attacker[unit]["no"] * attacker[unit]["damage"];
    }

    for (let unit in defender) {
      totalDefence += defender[unit]["no"] * defender[unit]["defence"];
    }

    if (totalDmg >= totalDefence) return moves++;
    else {
      if (defender["boss"]["no"] > 0) {
        totalDmg -= defender["boss"]["no"] * defender["boss"]["defence"];
        if (totalDmg <= 0) {
          defender["boss"]["no"] = Math.abs(
            Math.ceil(totalDmg / defender["boss"]["defence"])
          );
        } else {
          totalDmg -=
            defender["infantry"]["no"] * defender["infantry"]["defence"];

          if (totalDmg <= 0) {
            defender["boss"]["no"] = 0;
            defender["infantry"]["no"] = Math.abs(
              Math.ceil(totalDmg / defender["infantry"]["defence"])
            );
          }
        }
      } else {
        totalDmg -=
          defender["infantry"]["no"] * defender["infantry"]["defence"];
        if (totalDmg <= 0) {
          defender["boss"]["no"] = 0;
          defender["infantry"]["no"] = Math.abs(
            Math.ceil(totalDmg / defender["infantry"]["defence"])
          );
        }
      }

      moves++;
      turnResult(defender, attacker);
    }
  };

  if (first_strike_army_name === "Seven Kingdom Army")
    turnResult(sevenArmy, walkerArmy);
  else turnResult(walkerArmy, sevenArmy);

  return `${moves % 2 === 0 ? names["defender"] : names["attacker"]}|${moves}`;
}
