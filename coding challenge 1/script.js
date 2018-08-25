const names = ['John', 'Mark'];
let heights = [];
let masses = [];
let bmis = [];

for (let i = 0; i < names.length; i++) {
    masses[i] = prompt('Enter ' + names[i] + '\'s mass');
    heights[i] = prompt('Enter ' + names[i] + '\'s height');
    console.log(heights[i], masses[i]);
    bmis[i] = masses[i] / (heights[i] * heights[i]);
    console.log(bmis[i]);
}

res = bmis[1] > bmis[0];

console.log('Is Mark\'s BMI higher than John\'s? ', res);