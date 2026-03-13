---
id: proctoring-data-generated
title: Proctoring Data Generated
description: Webhook payload sent when proctoring data for an interview is available
sidebar_label: Proctoring Data Generated
sidebar_position: 9
---

# Proctoring Data Generated

**Event:** `proctoring.data.generated`

:::note Legacy Format
This event uses a **legacy envelope** format — it does not include `id`, `clientId`, `environment`, `version`, or `meta` fields.
:::

Fired when AI proctoring analysis for a completed interview has been processed. Use the `interviewId` from this event to call `GET /interviews/{interviewId}/proctoring` to fetch the full proctoring data.

## Webhook Payload

```json
{
    "event": "proctoring.data.generated",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "data": {
        "clientId": "ucqcjbxnuk",
        "interviewId": "intv_01JNMQ2V7K"
    }
}
```

## Payload Fields

| Field              | Type              | Required | Description                                          |
| ------------------ | ----------------- | -------- | ---------------------------------------------------- |
| `event`            | string            | Yes      | Always `proctoring.data.generated`                   |
| `timestamp`        | string (ISO 8601) | Yes      | When the event was generated                         |
| `pfTransactionId`  | string            | Yes      | ULID for end-to-end tracing                          |
| `data.clientId`    | string            | Yes      | Internal Prism client ID                             |
| `data.interviewId` | string            | Yes      | Interview ID for which proctoring data was generated |
