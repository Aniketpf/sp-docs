---
id: interview-creation-success
title: Interview Creation Success
description: Webhook payload sent when an interview is created successfully
sidebar_label: Interview Creation Success
sidebar_position: 2
---

# Interview Creation Success

**Event:** `interview.creation.succeeded`

Fired when an interview link has been created and is ready for the candidate.

## Webhook Payload

```json
{
    "id": "evt_01JNMQ2V7KXYZ1234567890AB",
    "clientId": "ucqcjbxnuk",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "eventType": "interview.creation.succeeded",
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
        "interviewLink": "https://app.prismforce.com/interview/intv_01JNMQ2V7K",
        "expiryDate": "2024-01-25T10:30:00.000Z",
        "candidateAssessmentId": "ca_01JNMQ2V7K",
        "externalCandidateAssessmentId": "ext_ca_12345"
    },
    "meta": {
        "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
        "sourceService": "core-api",
        "candidateAssessmentId": "ca_01JNMQ2V7K"
    }
}
```

## Event Data Fields (`data`)

| Field                           | Type              | Required | Description                                   |
| ------------------------------- | ----------------- | -------- | --------------------------------------------- |
| `statusCode`                    | integer           | Yes      | Always `200`                                  |
| `status`                        | string            | Yes      | Always `succeeded`                            |
| `message`                       | string            | Yes      | Always `success`                              |
| `entityId`                      | string            | Yes      | Same as `interviewId`                         |
| `entityType`                    | string            | Yes      | Always `interview`                            |
| `interviewId`                   | string            | Yes      | Prism interview ID                            |
| `interviewLink`                 | string (uri)      | Yes      | URL the candidate uses to start the interview |
| `expiryDate`                    | string (ISO 8601) | Yes      | Date-time when the interview link expires     |
| `candidateAssessmentId`         | string            | Yes      | Internal Prism candidate assessment ID        |
| `externalCandidateAssessmentId` | string            | Yes      | Your client-supplied candidate assessment ID  |
