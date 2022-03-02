// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
/**
 * Response from the /info endpoint.
 */
export interface INodeInfoStatus {
    /**
     * Is the node healthy.
     */
    isHealthy: boolean;

    /**
     * The latest milestone timestamp.
     */
    latestMilestoneTimestamp: number;

    /**
     * The latest milestone index.
     */
    latestMilestoneIndex: number;

    /**
     * The confirmed milestone index.
     */
    confirmedMilestoneIndex: number;

    /**
     * The pruning index.
     */
    pruningIndex: number;
}