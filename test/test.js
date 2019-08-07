//컨트랙트 테스트!!
const contractName = artifacts.require('mytoken');

contract('mytoken 컨트랙트 테스트', async function ([철수, 영희, 민지, 길동]) {
    before(async function (){
        this.contract = await contractName.new();
    
    })

        describe("함수 호출 법", function() {
            it ("토큰 이름을 확인하는 함수 호출", async function() {
                var token_name = await this.contract.name();//
                console.log(token_name);
            })
            it ("토큰 심볼을 확인하는 함수 호출", async function() {
                var token_symbol = await this.contract.symbol();
                console.log(token_symbol);
            })
        })
        describe("함수 호출 법 -2:", function() {
            it ("파라메타가 존재하는 함수 호출", async function(){
                var account_balance = await this.contract.balanceOf(철수);
                console.log(parseInt (account_balance));
            })
        })
        describe("함수 호출 법 -3:", function() {
            it ("서명을 필요로하는 함수 호출", async function(){
                var 영희토큰잔액 = await this.contract.balanceOf(영희);
                console.log('영희 토큰 잔액 :',parseInt(영희토큰잔액));
                var 철수토큰잔액 = await this.contract.balanceOf(철수);
                console.log('철수 토큰 잔액 :',parseInt(철수토큰잔액));
                
                await this.contract.transfer(영희, 100, {from: 철수});

                var 영희토큰잔액 = await this.contract.balanceOf(영희);
                console.log('영희 토큰 잔액 :',parseInt(영희토큰잔액));
                var 철수토큰잔액 = await this.contract.balanceOf(철수);
                console.log('철수 토큰 잔액 :',parseInt(철수토큰잔액));
            })
        })
    })