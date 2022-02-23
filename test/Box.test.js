const { expect } = require('chai');

const { BN, expectEvent, expectRevert } = require('@openzeppelin/test-helpers');
const { accounts, contract } = require('@openzeppelin/test-environment');

const [ owner, deployer, user ] = accounts;
const Box = contract.fromArtifact('Box');

// contract('Box', function ([ owner, other ]) {
//     const value = new BN('42');
//     beforeEach(async function () {
//         this.box = await Box.new({ from: owner });
//     });

//     it('retrieve returns a value previously stored', async function () {
//         const receipt = await this.box.store(value, { from: owner });

//         expect(await this.box.retrieve()).to.be.bignumber.equal(value);
//         expectEvent(receipt, 'ValueChanged', { value });
//     });

//     it('non owner cannot store a value', async function () {
//         await expectRevert(
//             this.box.store(value, { from: other }),
//             'Ownable: caller is not the owner',
//         );
//     });
// });

describe('Box', function () {
    const value = new BN('42');
    beforeEach(async function () {
        this.contract = await Box.new({ from: owner });
    });

    it('retrieves returns a value previously stored', async function () {
        const receipt = await this.contract.store(value, { from: owner });

        expect(await this.contract.retrieve()).to.be.bignumber.equal(value);
        expectEvent(receipt, 'ValueChanged', { value });
    });

    it('non owner cannot store a value', async function () {
        await expectRevert(
            this.contract.store(value, { from: user }),
            'Ownable: caller is not the owner'
        );
    });
});