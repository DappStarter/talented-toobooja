require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner arena bone table edge rare remind mistake hunt beach swift stairs'; 
let testAccounts = [
"0xcda1a8d499e24b748441b03098caa2f369e8b819a00b2fe2173aba1b361e8dad",
"0xb571b85afb2666b79c72009f7a84c0155bf2f9a91f5522a5315d32c6ac457927",
"0xb340490551c02b8ef4b6c25db683bee3c0e15cd52c421ff3a9f6b9c77e72abee",
"0x0ee60704ac9bb891656946dd0dc34f4d71bbded57d6126526ffb1e66e0d6682f",
"0x27f79d2e864c60db79b21ce562f6ed245b60c2e2caee571b29d1c52b74ffae85",
"0xefb8cdb69cf5de656c91184cc4d1527c4f332aefe67ddafa81378cd85cb46391",
"0x129bd0033e8d9441aa440003b542593be011c1abebaa032ca636e9a5eb4906c2",
"0xcee85e117482d7ed08995b8cd12b099c35ea44eb8efe7b1c5304a3bca28dc4ec",
"0xf417e3f3cdcb4e536e7e099f515b0eae86dd429573b87e4836413251be8046f4",
"0x9e83899d4894a73380a3e0ae161f89a5d632874a58db78149db65d619a16e827"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
