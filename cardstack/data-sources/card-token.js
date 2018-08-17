const JSONAPIFactory = require('@cardstack/test-support/jsonapi-factory');
const tokenAbi = require("../token-abi");
let factory = new JSONAPIFactory();

factory.addResource('data-sources', 'card-token')
  .withAttributes({
    'source-type': '@cardstack/ethereum',
    params: {
      branches: {
        master: { jsonRpcUrl: "ws:localhost:8546" }
      },
      contract: {
        abi: tokenAbi,
        addresses: { master: "0x013c05c37d24d96e4cc23e5d0efcd2aa13d81d7c" },
        eventContentTriggers: {
          Mint: [],
          WhiteList: [ "card-token-approved-buyers", "card-token-custom-buyer-limits" ],
          Transfer: [ "card-token-balance-ofs" ]
        }
      }
    }
  });

module.exports = factory.getModels();

