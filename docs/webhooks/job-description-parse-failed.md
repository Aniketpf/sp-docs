---
id: job-description-parse-failed
title: Job Description Parse Failed
description: Webhook payload sent when job description parsing fails
sidebar_label: JD Parse Failed
sidebar_position: 12
---

# Job Description Parse Failed

**Event:** `job_description.parse.failed`

Fired when parsing a job description submitted via `POST /job-assessments` fails. Common causes: duplicate assessment ID (`ASSESSMENT_ALREADY_EXISTS`) or internal processing error (`INTERNAL_SERVER_ERROR`).

## Webhook Payload

```json
{
    "id": "evt_01JNMQ2V7KXYZ1234567890AB",
    "clientId": "ucqcjbxnuk",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "eventType": "job_description.parse.failed",
    "environment": "production",
    "version": "1.0",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "data": {
        "statusCode": 500,
        "status": "failed",
        "message": "something went wrong",
        "code": "INTERNAL_SERVER_ERROR",
        "entityId": "ja_01JNMQ2V7K",
        "entityType": "job-assessment",
        "externalJobAssessmentId": "ext_jd_56789"
    },
    "meta": {
        "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
        "sourceService": "job-assessment-service"
    }
}
```

## Event Data Fields (`data`)

| Field                     | Type    | Required | Description                                                                               |
| ------------------------- | ------- | -------- | ----------------------------------------------------------------------------------------- |
| `statusCode`              | integer | Yes      | HTTP-equivalent error code (e.g. `500`)                                                   |
| `status`                  | string  | Yes      | Always `failed`                                                                           |
| `message`                 | string  | Yes      | Human-readable error description                                                          |
| `code`                    | string  | Yes      | Application-level error code. One of `INTERNAL_SERVER_ERROR`, `ASSESSMENT_ALREADY_EXISTS` |
| `entityId`                | string  | Yes      | Internal Prism job assessment ID                                                          |
| `entityType`              | string  | Yes      | Always `job-assessment`                                                                   |
| `externalJobAssessmentId` | string  | Yes      | Client-supplied job assessment ID                                                         |
