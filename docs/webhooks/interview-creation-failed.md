---
id: interview-creation-failed
title: Interview Creation Failed
description: Webhook payload sent when interview creation fails
sidebar_label: Interview Creation Failed
sidebar_position: 3
---

# Interview Creation Failed

**Event:** `interview.creation.failed`

Fired when an attempt to create an interview link fails.

## Webhook Payload

```json
{
    "id": "evt_01JNMQ2V7KXYZ1234567890AB",
    "clientId": "ucqcjbxnuk",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "eventType": "interview.creation.failed",
    "environment": "production",
    "version": "1.0",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "data": {
        "statusCode": 500,
        "status": "failed",
        "message": "something went wrong",
        "code": "INTERNAL_SERVER_ERROR",
        "externalCandidateAssessmentId": "ext_ca_12345",
        "candidateAssessmentId": "ca_01JNMQ2V7K"
    },
    "meta": {
        "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
        "sourceService": "core-api"
    }
}
```

## Event Data Fields (`data`)

| Field                           | Type    | Required | Description                                                               |
| ------------------------------- | ------- | -------- | ------------------------------------------------------------------------- |
| `statusCode`                    | integer | Yes      | HTTP-equivalent error code (e.g. `500`)                                   |
| `status`                        | string  | Yes      | Always `failed`                                                           |
| `message`                       | string  | Yes      | Human-readable error description                                          |
| `code`                          | string  | Yes      | Application-level error code (e.g. `INTERNAL_SERVER_ERROR`)               |
| `externalCandidateAssessmentId` | string  | Yes      | Your client-supplied candidate assessment ID                              |
| `candidateAssessmentId`         | string  | No       | Internal Prism candidate assessment ID. Present when the record was found |
