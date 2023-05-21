import { ChainMap, ChainMetadata } from '@hyperlane-xyz/sdk';

// A map of chain names to ChainMetadata
export const chains: ChainMap<ChainMetadata> = {
  // ----------- Add your chains here -----------------
  mumbai: {
    name: 'mumbai',
    // anvil default chain id
    chainId: 80001,
    // Used to configure a Warp Route to bridge anvil1 ETH
    // to anvil2 in CI tests.
    nativeToken: {
      name: 'matic',
      symbol: 'MATIC',
      decimals: 18,
    },
    publicRpcUrls: [
      {
        http: 'https://polygon-mumbai.g.alchemy.com/v2/YSO_NsiNTjiA-6thPC2RXS9NoBbjjDKC',
      },
    ],
  }
};
