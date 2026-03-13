---
id: candidate-assessment-interview-ready
title: Candidate Assessment Interview Ready
description: Webhook payload sent when a candidate assessment is ready for an interview
sidebar_label: Assessment Interview Ready
sidebar_position: 8
---

# Candidate Assessment Interview Ready

**Event:** `candidate_assessment.interview.ready`

Fired when a candidate assessment has been fully configured and is ready for an interview to be created against it.

## Webhook Payload

```json
{
    "id": "evt_01JNMQ2V7KXYZ1234567890AB",
    "clientId": "ucqcjbxnuk",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "eventType": "candidate_assessment.interview.ready",
    "environment": "production",
    "version": "1.0",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "data": {
        "statusCode": 200,
        "status": "succeeded",
        "message": "success",
        "entityId": "ca_01JNMQ2V7K",
        "entityType": "candidate-assessment",
        "candidateAssessmentId": "ca_01JNMQ2V7K",
        "externalCandidateAssessmentId": "ext_ca_12345"
    },
    "meta": {
        "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
        "sourceService": "core-api"
    }
}
```

## Event Data Fields (`data`)

| Field                           | Type    | Required | Description                                  |
| ------------------------------- | ------- | -------- | -------------------------------------------- |
| `statusCode`                    | integer | Yes      | Always `200`                                 |
| `status`                        | string  | Yes      | Always `succeeded`                           |
| `message`                       | string  | Yes      | Always `success`                             |
| `entityId`                      | string  | Yes      | Same as `candidateAssessmentId`              |
| `entityType`                    | string  | Yes      | Always `candidate-assessment`                |
| `candidateAssessmentId`         | string  | Yes      | Internal Prism candidate assessment ID       |
| `externalCandidateAssessmentId` | string  | Yes      | Your client-supplied candidate assessment ID |

:::tip
Use `externalCandidateAssessmentId` from this event to trigger a `POST /interviews` call to create the interview link for the candidate.
:::
