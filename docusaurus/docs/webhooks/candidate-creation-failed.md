---
id: candidate-creation-failed
title: Candidate Creation Failed
description: Webhook payload sent when candidate creation fails
sidebar_label: Candidate Creation Failed
sidebar_position: 10
---

# Candidate Creation Failed

**Event:** `candidate.creation.failed`

Fired when creating a new candidate record fails.

## Webhook Payload

```json
{
    "id": "evt_01JNMQ2V7KXYZ1234567890AB",
    "clientId": "ucqcjbxnuk",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "eventType": "candidate.creation.failed",
    "environment": "production",
    "version": "1.0",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "data": {
        "statusCode": 500,
        "status": "failed",
        "message": "something went wrong",
        "code": "INTERNAL_SERVER_ERROR",
        "entityType": "candidate",
        "externalCandidateId": "ext_cand_98765"
    },
    "meta": {
        "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
        "sourceService": "candidate-service"
    }
}
```

## Event Data Fields (`data`)

| Field                 | Type    | Required | Description                                     |
| --------------------- | ------- | -------- | ----------------------------------------------- |
| `statusCode`          | integer | Yes      | HTTP-equivalent error code (e.g. `500`)         |
| `status`              | string  | Yes      | Always `failed`                                 |
| `message`             | string  | Yes      | Human-readable error description                |
| `code`                | string  | Yes      | Application-level error code                    |
| `entityType`          | string  | Yes      | Always `candidate`                              |
| `externalCandidateId` | string  | No       | Your client-supplied candidate ID, if available |
