function transcribir(adn) {
  let arn = "";
  for (let i = 0; i < adn.length; i++) {
    let base = adn[i];
    if (base === 'G') { arn += 'C'; }
    else if (base === 'C') { arn += 'G'; }
    else if (base === 'T') { arn += 'A'; }
    else if (base === 'A') { arn += 'U'; }
  }
  return arn;
}

// Pruebas
console.log(transcribir("ACGT")); // "UGCA"
console.log(transcribir("ACGTGGTCTTAA")); // "UGCACCAGAAUU"