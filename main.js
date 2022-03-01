import got from 'got';


async function main(){
    const responce = await got("https://api.github.com/users/dshaney/repos")
    const data = await got('https://api.github.com/users/dshaney/repos').json()
    console.log(data)
  }


main()