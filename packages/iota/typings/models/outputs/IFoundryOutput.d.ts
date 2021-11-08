import type { IAliasAddress } from "../addresses/IAliasAddress";
import type { IMetadataFeatureBlock } from "../featureBlocks/IMetadataFeatureBlock";
import type { INativeToken } from "../INativeToken";
import type { ITypeBase } from "../ITypeBase";
import type { TokenSchemeTypes } from "../tokenSchemes/tokenSchemeTypes";
/**
 * The global type for the foundry output.
 */
export declare const FOUNDRY_OUTPUT_TYPE = 5;
/**
 * Foundry output.
 */
export interface IFoundryOutput extends ITypeBase<5> {
    /**
     * The address associated with the output.
     */
    address: IAliasAddress;
    /**
     * The amount of IOTA tokens held by the output.
     */
    amount: number;
    /**
     * The native tokens held by the output.
     */
    nativeTokens: INativeToken[];
    /**
     * The serial number of the foundry with respect to the controlling alias.
     */
    serialNumber: number;
    /**
     * Data that is always the last 12 bytes of ID of the tokens produced by this foundry.
     */
    tokenTag: string;
    /**
     * Circulating supply of tokens controlled by this foundry.
     */
    circulatingSupply: string;
    /**
     * Maximum supply of tokens controlled by this foundry.
     */
    maximumSupply: string;
    /**
     * The token scheme for the foundry.
     */
    tokenScheme: TokenSchemeTypes;
    /**
     * Blocks contained by the output.
     */
    blocks: IMetadataFeatureBlock[];
}