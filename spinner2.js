const symbols = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r\\   ",
  "\r|   ",
];

let timer = 0;
for (let i = 0; i < symbols.length; i++) {
  timer = timer + 200;
  setTimeout(() => {
    process.stdout.write(symbols[i]);
  }, timer);
}
