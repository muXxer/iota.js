// Copyright 2020 IOTA Stiftung
// SPDX-License-Identifier: Apache-2.0
import { Blake2b } from "@iota/crypto.js";
import { Converter, WriteStream } from "@iota/util.js";
import { serializeMessage } from "../binary/message";
import { serializeMilestoneEssence } from "../binary/payloads/milestonePayload";
import type { IMessage } from "../models/IMessage";
import type { IMilestonePayload } from "../models/payloads/IMilestonePayload";

/**
 * Compute a milestoneId from a milestone payload.
 * @param payload The milestone payload.
 * @returns The milestone id hex prefixed string.
 */
export function milestoneIdFromMilestonePayload(payload: IMilestonePayload): string {
    const writeStream = new WriteStream();
    serializeMilestoneEssence(writeStream, payload);
    const essenceFinal = writeStream.finalBytes();
    const essenceHash = Blake2b.sum256(essenceFinal);

    return Converter.bytesToHex(essenceHash, true);
}

/**
 * Compute a messageId from a milestone payload.
 * @param protocolVersion The protocol version to use.
 * @param payload The milestone payload.
 * @returns The messageId of the message with the milestone payload.
 */
export function messageIdFromMilestonePayload(protocolVersion: number, payload: IMilestonePayload) {
    const writeStream = new WriteStream();
    const message: IMessage = {
        protocolVersion,
        parentMessageIds: payload.parentMessageIds,
        payload,
        nonce: "0"
    };
    serializeMessage(writeStream, message);

    const messageFinal = writeStream.finalBytes();
    const messageHash = Blake2b.sum256(messageFinal);

    return Converter.bytesToHex(messageHash, true);
}
