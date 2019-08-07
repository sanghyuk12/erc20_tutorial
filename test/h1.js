const contractName = artifacts.require('mytoken'); //컨트랙트 불러오기 'mytoken'

contract('mytoken 컨트랙트 테스트', async function ([철수, 영희, 민지]){ //컨트랙트로 테스트 그룹핑

    beforeEach (async function() { //컨트랙트 배포
        this.contract = await contractName.new();// this.contract 에  컨트렉트를 담는다.
    })
    describe("토큰 기본 정보", function() { //시나리오 묶기
        it ("토큰의 이름은 'mytoken'이어야 한다.", async function() { //postive test
            assert.equal(await this.contract.name(), 'mytoken', '토큰이름이 mytoken이 아닙니다.');// postive test 프로그램 실제기능 , 예상 결과 값, 실패시 출력 문자열 순서대로 넣는다.
        })
    })
    it ("토큰 심볼이 'mtn'이어야 한다.", async function() {
        assert.equal(await this.contract.symbol(), 'mtn', '토큰심볼이 mtn이 아닙니다.');// postive test 프로그램 실제기능 , 예상 결과 값, 실패시 출력 문자열 순서대로 넣는다.
    })

    describe("토큰 전송 기능", function () {
        it("철수가 영희에게 100개의 토큰을 전송하면 영희의 토큰잔액은 100개가 되어야 한다.", async function () {
            assert.equal(await this.contract.balanceOf(영희), 0, "영희의 잔액이 불일치");
            await this.contract.transfer(영희, 100, { from: 철수 });
            assert.equal(await this.contract.balanceOf(영희), 100, "영희의 잔액이 불일치");
        })
    })
})