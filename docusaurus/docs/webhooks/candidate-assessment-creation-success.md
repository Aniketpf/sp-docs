---
id: candidate-assessment-creation-success
title: Candidate Assessment Creation Success
description: Webhook payload sent when a candidate is successfully attached to an assessment
sidebar_label: Assessment Creation Success
sidebar_position: 6
---

# Candidate Assessment Creation Success

**Event:** `candidate_assessment.creation.succeeded`

Fired when a candidate has been successfully linked to a job assessment.

## Webhook Payload

```json
{
    "id": "evt_01JNMQ2V7KXYZ1234567890AB",
    "clientId": "ucqcjbxnuk",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "eventType": "candidate_assessment.creation.succeeded",
    "environment": "production",
    "version": "1.0",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "data": {
        "statusCode": 200,
        "status": "succeeded",
        "message": "success",
        "entityId": "ca_01JNMQ2V7K",
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

| Field                           | Type    | Required | Description                                  |
| ------------------------------- | ------- | -------- | -------------------------------------------- |
| `statusCode`                    | integer | Yes      | Always `200`                                 |
| `status`                        | string  | Yes      | Always `succeeded`                           |
| `message`                       | string  | Yes      | Always `success`                             |
| `entityId`                      | string  | Yes      | Internal Prism candidate assessment ID       |
| `entityType`                    | string  | Yes      | Always `candidate-assessment`                |
| `externalCandidateAssessmentId` | string  | Yes      | Your client-supplied candidate assessment ID |
