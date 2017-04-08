// `config/modules.ts` is a place where you place default module configurations
// which will be bootstrapped with your game loop.

export const bodyPartsBuilder: IModuleConfig = {
  tier1: {
    worker: [WORK, CARRY, CARRY, MOVE, MOVE],
    hauler: [CARRY, CARRY, CARRY, MOVE, MOVE, MOVE],
    miner: [WORK, WORK, MOVE, MOVE],
    defender: [TOUGH, TOUGH, MOVE, MOVE, RANGED_ATTACK]
  },
  tier2: {
    worker: [WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE],
    hauler: [CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE],
    miner: [WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE],
    defender: [TOUGH, TOUGH, MOVE, MOVE, RANGED_ATTACK, RANGED_ATTACK]
  },
  tier3: {
    worker: [WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE],
    hauler: [CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE],
    miner: [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE],
    defender: [
      TOUGH, TOUGH, MOVE, MOVE, MOVE, MOVE,
      RANGED_ATTACK, RANGED_ATTACK,
      RANGED_ATTACK, RANGED_ATTACK
    ]
  },
  tier4: {
    worker: [WORK, WORK, WORK, WORK, WORK, WORK, WORK, WORK,
      CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
      MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
      MOVE, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE
    ],
    hauler: [CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE, MOVE],
    miner: [WORK, WORK, WORK, WORK, WORK, MOVE, MOVE, MOVE, MOVE, MOVE, MOVE],
    defender: [
      TOUGH, TOUGH, TOUGH, TOUGH, TOUGH, TOUGH,
      MOVE, MOVE, MOVE, MOVE, MOVE, MOVE,
      RANGED_ATTACK, RANGED_ATTACK,
      HEAL, HEAL
    ]
  }
};