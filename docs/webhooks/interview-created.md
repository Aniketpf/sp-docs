---
id: interview-created
title: Interview Created
description: Webhook payload sent when an interview is created (legacy format)
sidebar_label: Interview Created
sidebar_position: 3
---

# Interview Created

**Event:** `interview.created`

:::note Legacy Format
This event uses a **legacy envelope** format — it does not include `id`, `clientId`, `environment`, `version`, or `meta` fields. Use [`interview.creation.succeeded`](./interview-creation-success) for new integrations.
:::

Fired when an interview link is created and ready for the candidate. This is an older variant of `interview.creation.succeeded`.

## Webhook Payload

```json
{
    "event": "interview.created",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "data": {
        "candidateAssessmentId": "ext_ca_12345",
        "interviewId": "intv_01JNMQ2V7K",
        "interviewLink": "https://app.prismforce.com/interview/intv_01JNMQ2V7K",
        "expiryDate": "2024-01-25T10:30:00.000Z"
    }
}
```

## Payload Fields

| Field                        | Type              | Required | Description                                      |
| ---------------------------- | ----------------- | -------- | ------------------------------------------------ |
| `event`                      | string            | Yes      | Always `interview.created`                       |
| `timestamp`                  | string (ISO 8601) | Yes      | When the event was generated                     |
| `pfTransactionId`            | string            | Yes      | ULID for end-to-end tracing                      |
| `data.candidateAssessmentId` | string            | Yes      | Client-supplied external candidate assessment ID |
| `data.interviewId`           | string            | Yes      | Prism interview ID                               |
| `data.interviewLink`         | string (uri)      | Yes      | URL the candidate uses to start the interview    |
| `data.expiryDate`            | string (ISO 8601) | Yes      | Date-time when the interview link expires        |
