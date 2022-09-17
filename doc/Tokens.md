# Tokens management

All the tokens are in `/config/constants/tokens.ts`. They are instances of the `Token` class defined in the SDK.
Before adding a new **farm** or **pool** you need to make sure the Tokens are in this file.
To add a Token to the exchange lists:

- For the default list: `@plexswap/lists/baseList/plex-default.tokenlist.json`
- To blacklist a token: `@plexswap/lists/baseList/plex-unsupported.tokenlist.json`
