// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
import type { IIndexationPayload } from "./IIndexationPayload";
import type { IMilestonePayload } from "./IMilestonePayload";
import type { IReceiptPayload } from "./IReceiptPayload";
import type { ITransactionPayload } from "./ITransactionPayload";
import type { ITreasuryTransactionPayload } from "./ITreasuryTransactionPayload";

/**
 * All of the payload types.
 */
export type PayloadTypes = ITransactionPayload |
    IMilestonePayload |
    IReceiptPayload |
    IIndexationPayload |
    ITreasuryTransactionPayload;