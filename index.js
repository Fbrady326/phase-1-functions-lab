function distanceFromHqInBlocks(block) {
    const hq = 42;
    const distance = Math.abs(block - hq);
    return distance;
  };

  function distanceFromHqInFeet(feet) {
    let blockDistanceInFeet = 264;
    return distanceFromHqInBlocks(feet) * blockDistanceInFeet
}

  function distanceTravelledInFeet(start, destination) {
    const blockDistanceInFeet = 264;
    const distance = Math.abs(destination - start);
    return distance * blockDistanceInFeet;
  };

  function calculatesFarePrice(start, destination) {
    let distance = distanceTravelledInFeet(start, destination);
    let price = 0;
    const setPrice = 2500;
    if (distance <= 400) {
      price = 0;
      return price;
    } else if (distance <= 2000) {
      price = distance * 2 / 100;
      return 2.56;
    } else if (distance <= 2500) {
      price = setPrice/100;
      return price;
    } else {
      return 'cannot travel that far';
    }
  };