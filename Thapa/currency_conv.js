import https from "https";
import readline from "readline";
import chalk from "chalk";

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
})
const apiKey='f6fdeb9194d31c1894de6249';
const url=`https://v6.exchangerate-api.com/v6/f6fdeb9194d31c1894de6249/latest/USD`

const convertCurrency=(amount,rate)=>{
      return (amount*rate).toFixed(2);
}

https.get(url,(response)=>{
    let data="";
    response.on('data',(chunk)=>{
        data+=chunk;
    })
    response.on('end',()=>{
        const rates=JSON.parse(data).conversion_rates;

        rl.question('Enter the amount in USD: ',(amount)=>{
            rl.question("Enter the currency (e.g. INR,EUR,NPR)",(currency)=>{
                const rate=rates[currency.toUpperCase()];
                if(rate){
                    console.log(`${amount} USD is approximately ${convertCurrency(amount,rate)} ${currency}`);
                }
                     else{
                        console.log("invalid currency code");
                     }  
                     rl.close(); 
            })
        })
    })
})

