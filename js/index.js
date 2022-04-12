// Iteration 1: Names and Input
let hacker1 = 'Alfredo';
console.log(`"The driver's name is ${hacker1}".` );
let hacker2 = 'Nico';
console.log(`The navigator's name is ${hacker2}.`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
}


// Iteration 3: Loops
console.log(hacker1.split('').join(' '));
console.log(hacker1.split('').reverse().join(''))

if (hacker1.localeCompare(hacker2) < 0) {
    console.log(`The driver's name goes first.`);
} else if (hacker1.localeCompare(hacker2) > 0) {
    console.log(`Yo, the navigator goes first definitely.`);
} else {
    console.log(`What?! You both hve the same name?`);
}

let paraLoren = "Lorem ipsum Lorem dolor sit amet, consectetur adipiscing elit. Ut nec lectus sit amet turpis malesuada aliquet quis quis urna. Morbi gravida, ligula quis mattis blandit, ipsum nibh imperdiet sem, in gravida tellus erat ac libero. Donec at aliquam erat. Praesent eleifend orci sit amet sapien volutpat facilisis. Fusce tempus convallis ante ultrices pretium. Curabitur placerat nec orci ac semper. Nullam vulputate enim at ex rutrum, vel dictum lectus molestie. Vestibulum porttitor, tortor aliquet interdum luctus, ante purus tempor ligula, ut interdum urna erat eu est. Nullam tempus vel est a dapibus. Cras aliquet quam condimentum orci aliquam, nec molestie felis consectetur. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque vel mattis nunc. Fusce fermentum, mauris malesuada commodo venenatis, magna est mollis tortor, ut ullamcorper dui eros eget nulla. Morbi leo lectus, maximus in orci mollis, aliquet tempus nisl. Donec nec est ac ligula rutrum faucibus. Aenean ultricies augue eget nisi lacinia, id efficitur lacus pulvinar. Morbi varius orci dolor, ac pulvinar enim vestibulum id. Nulla elementum rutrum risus, nec vestibulum nibh varius eu. Vivamus malesuada nulla in eros rhoncus facilisis. Quisque aliquam tristique vestibulum. Sed eget ultrices dui. Donec vitae lorem tristique magna finibus blandit. Nulla interdum, velit in fringilla viverra, felis diam condimentum ante, eu sodales orci ex sit amet nibh. Suspendisse malesuada dapibus sapien, eget hendrerit elit varius a. Duis id velit at erat cursus gravida. Pellentesque auctor erat in leo eleifend, convallis varius dui fringilla. Nam rhoncus enim nec justo egestas, sit amet tincidunt risus ultricies. Praesent congue convallis odio, eu rhoncus nulla egestas nec. Quisque vulputate interdum odio ac pharetra. Ut pellentesque finibus nisl. Nullam non urna tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed risus nulla, varius sed dolor ac, imperdiet fringilla augue. Etiam non vehicula odio. Nulla sapien tellus, ultrices ac enim sed, iaculis fringilla nisl. Ut ante nunc, scelerisque in ante sit amet, cursus laoreet orci. Aenean pretium nunc et fermentum eleifend. In metus dui, pellentesque eget feugiat et, ornare vitae orci. Sed at iaculis dolor.";

console.log(paraLoren.split(' ').length)

let counter = 0;
let array = paraLoren.toLowerCase().split(' ');
array.forEach(word => {if (word == 'lorem') { counter += 1}});
console.log(counter);