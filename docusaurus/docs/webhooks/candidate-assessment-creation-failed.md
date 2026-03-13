---
id: candidate-assessment-creation-failed
title: Candidate Assessment Creation Failed
description: Webhook payload sent when attaching a candidate to an assessment fails
sidebar_label: Assessment Creation Failed
sidebar_position: 7
---

# Candidate Assessment Creation Failed

**Event:** `candidate_assessment.creation.failed`

Fired when linking a candidate to a job assessment fails.

## Webhook Payload

```json
{
    "id": "evt_01JNMQ2V7KXYZ1234567890AB",
    "clientId": "ucqcjbxnuk",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "eventType": "candidate_assessment.creation.failed",
    "environment": "production",
    "version": "1.0",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "data": {
        "statusCode": 500,
        "status": "failed",
        "message": "something went wrong",
        "code": "INTERNAL_SERVER_ERROR",
        "entityType": "candidate-assessment",
        "externalCandidateAssessmentId": "ext_ca_12345"
    },
    "meta": {
        "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
        "sourceService": "job-assessment-service"
    }
}
```

## Event Data Fields (`data`)

| Field                           | Type    | Required | Description                                                |
| ------------------------------- | ------- | -------- | ---------------------------------------------------------- |
| `statusCode`                    | integer | Yes      | HTTP-equivalent error code (e.g. `500`)                    |
| `status`                        | string  | Yes      | Always `failed`                                            |
| `message`                       | string  | Yes      | Human-readable error description                           |
| `code`                          | string  | Yes      | Application-level error code                               |
| `entityType`                    | string  | Yes      | Always `candidate-assessment`                              |
| `externalCandidateAssessmentId` | string  | No       | Your client-supplied candidate assessment ID, if available |
