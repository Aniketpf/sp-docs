---
id: candidate-creation-success
title: Candidate Creation Success
description: Webhook payload sent when a candidate record is created successfully
sidebar_label: Candidate Creation Success
sidebar_position: 9
---

# Candidate Creation Success

**Event:** `candidate.creation.succeeded`

Fired when a new candidate record has been created successfully.

## Webhook Payload

```json
{
    "id": "evt_01JNMQ2V7KXYZ1234567890AB",
    "clientId": "ucqcjbxnuk",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "eventType": "candidate.creation.succeeded",
    "environment": "production",
    "version": "1.0",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "data": {
        "statusCode": 200,
        "status": "succeeded",
        "message": "success",
        "entityId": "cand_01JNMQ2V7K",
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

| Field                 | Type    | Required | Description                       |
| --------------------- | ------- | -------- | --------------------------------- |
| `statusCode`          | integer | Yes      | Always `200`                      |
| `status`              | string  | Yes      | Always `succeeded`                |
| `message`             | string  | Yes      | Always `success`                  |
| `entityId`            | string  | Yes      | Internal Prism candidate ID       |
| `entityType`          | string  | Yes      | Always `candidate`                |
| `externalCandidateId` | string  | Yes      | Your client-supplied candidate ID |
