---
id: candidate-resume-parsing-success
title: Candidate Resume Parsing Success
description: Webhook payload sent when a candidate resume is parsed successfully
sidebar_label: Resume Parsing Success
sidebar_position: 13
---

# Candidate Resume Parsing Success

**Event:** `candidate.resume.parsing.succeeded`

Fired when a candidate's uploaded resume has been parsed successfully.

## Webhook Payload

```json
{
    "id": "evt_01JNMQ2V7KXYZ1234567890AB",
    "clientId": "ucqcjbxnuk",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "eventType": "candidate.resume.parsing.succeeded",
    "environment": "production",
    "version": "1.0",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "data": {
        "statusCode": 200,
        "status": "succeeded",
        "message": "success",
        "entityId": "resume_01JNMQ2V7K",
        "entityType": "candidate-upload",
        "candidateId": "cand_01JNMQ2V7K",
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
| `entityId`            | string  | Yes      | Internal resume / upload ID       |
| `entityType`          | string  | Yes      | Always `candidate-upload`         |
| `candidateId`         | string  | Yes      | Internal Prism candidate ID       |
| `externalCandidateId` | string  | Yes      | Your client-supplied candidate ID |
