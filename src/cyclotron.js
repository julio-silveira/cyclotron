function cyclotronWithoutParticles(matrix_size) {
  for (let _ = 0; _ < matrix_size; _++) {
    console.log(Array(matrix_size).fill('1'));
  }
}

function accelerateElectron(matrix_size) {
  for (let i = 0; i < matrix_size; i++) {
    if (i === 0) {
      console.log(Array(matrix_size).fill('e'));
    } else {
      console.log(Array(matrix_size - 1).fill('1').concat('e'));
    }
  }
}

function accelerateProton(matrix_size) {
  for (let i = 0; i < matrix_size; i++) {
    if (i === 0) {
      console.log(Array(matrix_size).fill('p'));
    } else if (i === matrix_size - 1) {
      console.log(Array(matrix_size - 1).fill('p').concat('1'));
    } else if (i === matrix_size - 2) {
      console.log(['p'].concat(Array(matrix_size - 3).fill('1'), Array(2).fill('p')));
    } else {
      console.log(['p'].concat(Array(matrix_size - 2).fill('1'), 'p'));
    }
  }
}

function accelerateNeutron(matrix_size) {
  for (let i = 0; i < matrix_size; i++) {
    if (i === 0) {
      console.log(Array(matrix_size).fill('n'));
    } else {
      console.log(Array(matrix_size - 1).fill('1').concat('1'));
    }
  }
}

function cyclotron({particle, matrix_size}) {
  if (!particle) {
    return cyclotronWithoutParticles(matrix_size);
  } else if (particle === 'e') {
    return accelerateElectron(matrix_size);
  } else if (particle === 'p') {
    return accelerateProton(matrix_size);
  } else if (particle === 'n') {
    return accelerateNeutron(matrix_size);
  } else {
    console.log('Invalid particle');
  }
}
console.log('----------------------------------');
console.log(' Cyclotron without particles');
console.log('----------------------------------');
cyclotron({particle: null, matrix_size: 4});

console.log('----------------------------------');
console.log(' Cyclotron with neutrons');
console.log('----------------------------------');
cyclotron({particle: 'n', matrix_size: 4});

console.log('----------------------------------');
console.log(' Cyclotron with protons');
console.log('----------------------------------');
cyclotron({particle: 'p', matrix_size: 4});

console.log('----------------------------------');
console.log(' Cyclotron with electrons');
console.log('----------------------------------');
cyclotron({particle: 'e', matrix_size: 4});



