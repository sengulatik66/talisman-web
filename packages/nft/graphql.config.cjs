const extensions = outDir => ({
  codegen: {
    emitLegacyCommonJSImports: false,
    generates: {
      [outDir]: {
        preset: 'client',
        config: {
          useTypeImports: true,
        },
      },
    },
    hooks: { afterOneFileWrite: ['prettier --write'] },
  },
})

/** @type {import('graphql-config').IGraphQLConfig } */
module.exports = {
  projects: {
    rmrk2: {
      overwrite: true,
      schema: 'https://squid.subsquid.io/marck/v/v2/graphql',
      documents: 'src/generators/rmrk2.ts',
      extensions: extensions('generated/gql/rmrk2/'),
    },
    statemine: {
      overwrite: true,
      schema: 'https://squid.subsquid.io/statemine-uniques/v/3/graphql',
      documents: 'src/generators/statemine.ts',
      extensions: extensions('generated/gql/statemine/'),
    },
    'substrate-nft-kusama-asset-hub': {
      overwrite: true,
      schema: 'https://query-stick.stellate.sh/',
      documents: 'src/generators/substrate-nft-kusama-asset-hub.ts',
      extensions: extensions('generated/gql/substrate-nft-kusama-asset-hub/'),
    },
    'substrate-nft-polkadot-asset-hub': {
      overwrite: true,
      schema: 'https://squid.subsquid.io/speck/graphql',
      documents: 'src/generators/substrate-nft-polkadot-asset-hub.ts',
      extensions: extensions('generated/gql/substrate-nft-polkadot-asset-hub/'),
    },
    unique: {
      overwrite: true,
      schema: 'https://api-unique.uniquescan.io/v1/graphql',
      documents: 'src/generators/unique.ts',
      extensions: extensions('generated/gql/unique/'),
    },
  },
}
