import got from 'got';
import http from 'http';
async function main(){
    const responce = await got("httpbin.org/get")
    const data = responce.body;
    const options = {
        method: 'get',
        hostname: 'httpbin.org/get',
        path: '/',
    };
    http.request(options, (res) =>{
        let data = '';
        res.on('data', (chunk) =>{
            data += chunk.toString();
        });
        res.on('end', () =>{
            console.log('All done !');
            console.log(`Here is the data ${data}`)
        })
    })
}

main()