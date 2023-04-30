const getRandomElement2 = <T,>(list: T[]): T => {
    const randInx = Math.floor(Math.random() * list.length);
    return list[randInx];
  }