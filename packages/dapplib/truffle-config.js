require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remain hole hockey problem breeze that'; 
let testAccounts = [
"0x3a525ff3665f06522cc01f0e3376ddf0050ed01a7186ded2e6d6d79ea08e27d8",
"0x061fba55648ea2741730cb4196a71102502e02d03671fdc93aaffb0ba28fe162",
"0x61d755fa8e87b8bbad9321a4a5b254d41096c24cf21bb6bc6a8b59c5079c16c7",
"0xc8f275519b0344c11605f115250891ddd6c1172efe66b5138a89131ff4e635f7",
"0x3aa5a6491401d000249fbb8cf5cbb03dccdfb172b70c1f24d372bc0a978a9b62",
"0x42a922fa97fffa8ea44faa549f66cff700258eb9c25af1695da5e2a3462af1cb",
"0x368dbeffc652e062ccbde1857aab9e72d206450765b8070a3876d21b196f9f09",
"0x772c877df41f741a9c63d4088d0e1da75958887be52e5bac514f114e6dd60a2e",
"0xa4880c00cc63b663ef4bfb8de62c339caeec3e96a6ee074928595f3a8e82dc5a",
"0x07b9c5504f9ba8eada0488e5df470b9c530aad212623f0ca69937ae8cf68d6d3"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


