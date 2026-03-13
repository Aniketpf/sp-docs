---
id: recording-data-generated
title: Recording Data Generated
description: Webhook payload sent when interview recording data is available
sidebar_label: Recording Data Generated
sidebar_position: 8
---

# Recording Data Generated

**Event:** `recording.data.generated`

:::note Legacy Format
This event uses a **legacy envelope** format — it does not include `id`, `clientId`, `environment`, `version`, or `meta` fields.
:::

Fired when the recording for a completed interview has been processed and is available.

## Webhook Payload

```json
{
    "event": "recording.data.generated",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "data": {
        "recordingDetails": {
            "recordingId": "rec_01JNMQ2V7K",
            "recordingUrl": "https://recordings.prismforce.com/rec_01JNMQ2V7K",
            "recordingStatus": "completed",
            "interviewId": "intv_01JNMQ2V7K"
        }
    }
}
```

## Payload Fields

| Field                                   | Type              | Required | Description                                        |
| --------------------------------------- | ----------------- | -------- | -------------------------------------------------- |
| `event`                                 | string            | Yes      | Always `recording.data.generated`                  |
| `timestamp`                             | string (ISO 8601) | Yes      | When the event was generated                       |
| `pfTransactionId`                       | string            | Yes      | ULID for end-to-end tracing                        |
| `data.recordingDetails.recordingId`     | string \| null    | Yes      | ID of the recording                                |
| `data.recordingDetails.recordingUrl`    | string \| null    | Yes      | URL to access the recording                        |
| `data.recordingDetails.recordingStatus` | string \| null    | Yes      | Status of the recording session (e.g. `completed`) |
| `data.recordingDetails.interviewId`     | string \| null    | Yes      | ID of the associated interview                     |
