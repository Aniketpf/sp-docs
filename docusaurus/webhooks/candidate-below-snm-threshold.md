---
id: candidate-below-snm-threshold
title: Candidate Below SnM Threshold
description: Webhook payload sent when a candidate's match score falls below the configured threshold
sidebar_label: Candidate Below SnM Threshold
sidebar_position: 16
---

# Candidate Below SnM Threshold

**Event:** `candidate.matchScore.belowThreshold`

:::note Legacy Format
This event uses a **legacy envelope** format — it does not include `id`, `clientId`, `environment`, `version`, or `meta` fields.
:::

Fired when a candidate's Search and Match score is below the threshold configured for your account. This event is only sent when:

- The candidate has a client-supplied `externalCandidateAssessmentId`
- A Search and Match threshold is configured for the client (`configs.searchAndMatchThreshold`)
- The `candidateBelowSnmThreshold` webhook is enabled

## Webhook Payload

```json
{
    "event": "candidate.matchScore.belowThreshold",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "data": {
        "candidateAssessmentId": "ext_ca_12345"
    }
}
```

## Payload Fields

| Field                        | Type              | Required | Description                                      |
| ---------------------------- | ----------------- | -------- | ------------------------------------------------ |
| `event`                      | string            | Yes      | Always `candidate.matchScore.belowThreshold`     |
| `timestamp`                  | string (ISO 8601) | Yes      | When the event was generated                     |
| `pfTransactionId`            | string            | Yes      | ULID for end-to-end tracing                      |
| `data.candidateAssessmentId` | string            | Yes      | Client-supplied external candidate assessment ID |
