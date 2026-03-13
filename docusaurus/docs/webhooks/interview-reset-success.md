---
id: interview-reset-success
title: Interview Reset Success
description: Webhook payload sent when an interview is regenerated successfully
sidebar_label: Interview Reset Success
sidebar_position: 4
---

# Interview Reset Success

**Event:** `interview.reset.succeeded`

Fired when an existing interview has been regenerated (reset) and a new interview link is ready.

## Webhook Payload

```json
{
    "id": "evt_01JNMQ2V7KXYZ1234567890AB",
    "clientId": "ucqcjbxnuk",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "eventType": "interview.reset.succeeded",
    "environment": "production",
    "version": "1.0",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "data": {
        "statusCode": 200,
        "status": "succeeded",
        "message": "success",
        "entityId": "intv_01JNMQ2V7K",
        "entityType": "interview",
        "interviewId": "intv_01JNMQ2V7K",
        "previousInterviewId": "intv_01JNMPREV",
        "interviewLink": "https://app.prismforce.com/interview/intv_01JNMQ2V7K",
        "expiryDate": "2024-01-25T10:30:00.000Z"
    },
    "meta": {
        "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
        "sourceService": "core-api",
        "candidateAssessmentId": "ca_01JNMQ2V7K"
    }
}
```

## Event Data Fields (`data`)

| Field                 | Type              | Required | Description                               |
| --------------------- | ----------------- | -------- | ----------------------------------------- |
| `statusCode`          | integer           | Yes      | Always `200`                              |
| `status`              | string            | Yes      | Always `succeeded`                        |
| `message`             | string            | Yes      | Always `success`                          |
| `entityId`            | string            | Yes      | Same as `interviewId` (the new interview) |
| `entityType`          | string            | Yes      | Always `interview`                        |
| `interviewId`         | string            | Yes      | New Prism interview ID after reset        |
| `previousInterviewId` | string            | Yes      | Interview ID that was replaced            |
| `interviewLink`       | string (uri)      | Yes      | New interview URL for the candidate       |
| `expiryDate`          | string (ISO 8601) | Yes      | Expiry date of the new interview link     |
