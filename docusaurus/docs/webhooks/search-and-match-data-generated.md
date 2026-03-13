---
id: search-and-match-data-generated
title: Search and Match Data Generated
description: Webhook payload sent when Search and Match scoring is complete for a candidate
sidebar_label: SnM Data Generated
sidebar_position: 15
---

# Search and Match Data Generated

**Event:** `search.and.match.data.generated`

Fired when the Search and Match (SnM) scoring process has completed for a candidate assessment. Includes the numerical match score between the candidate and the job description.

## Webhook Payload

```json
{
    "id": "evt_01JNMQ2V7KXYZ1234567890AB",
    "clientId": "ucqcjbxnuk",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "eventType": "search.and.match.data.generated",
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
        "externalCandidateAssessmentId": "ext_ca_12345",
        "matchScore": 78.5
    },
    "meta": {
        "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
        "sourceService": "core-api"
    }
}
```

## Event Data Fields (`data`)

| Field                           | Type           | Required | Description                             |
| ------------------------------- | -------------- | -------- | --------------------------------------- |
| `statusCode`                    | integer        | Yes      | Always `200`                            |
| `status`                        | string         | Yes      | Always `succeeded`                      |
| `message`                       | string         | Yes      | Always `success`                        |
| `entityId`                      | string         | Yes      | Same as `candidateAssessmentId`         |
| `entityType`                    | string         | Yes      | Always `candidate-assessment`           |
| `candidateAssessmentId`         | string         | Yes      | Internal Prism candidate assessment ID  |
| `externalCandidateAssessmentId` | string         | Yes      | Client-supplied candidate assessment ID |
| `matchScore`                    | number \| null | Yes      | Numerical match score between 0 and 100 |

:::tip
If `matchScore` falls below your configured threshold, a separate [`candidate.matchScore.belowThreshold`](./candidate-below-snm-threshold) event is also fired.
:::
