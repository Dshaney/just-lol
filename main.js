import input from 'input'

function pyramid(char, maxHeight) {
      
    for (let height = 1 ; height <= maxHeight; height += 1) {
        let output = '';
        for (let len = 0; len < height; len += 1) {
            output += char;
        }
        console.log(output);
    }
}

async function main() {
    const char = await input.text ('what character would you like?')
    const height = await input.text('what is the height you would like ?')
    pyramid(char, height)


    }

main ()