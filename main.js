import got from 'got';

async function main(){
    const responce = await got("httpbin.org/get")
    const data = responce.body;
   console.log(data)
}
main()