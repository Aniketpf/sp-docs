---
id: job-description-parse-success
title: Job Description Parse Success
description: Webhook payload sent when a job description is parsed successfully
sidebar_label: JD Parse Success
sidebar_position: 11
---

# Job Description Parse Success

**Event:** `job_description.parse.succeeded`

Fired when a job description (JD) submitted via `POST /job-assessments` has been successfully parsed and the job assessment is ready.

## Webhook Payload

```json
{
    "id": "evt_01JNMQ2V7KXYZ1234567890AB",
    "clientId": "ucqcjbxnuk",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "eventType": "job_description.parse.succeeded",
    "environment": "production",
    "version": "1.0",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "data": {
        "statusCode": 200,
        "status": "succeeded",
        "message": "success",
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

| Field                     | Type    | Required | Description                                                                |
| ------------------------- | ------- | -------- | -------------------------------------------------------------------------- |
| `statusCode`              | integer | Yes      | Always `200`                                                               |
| `status`                  | string  | Yes      | Always `succeeded`                                                         |
| `message`                 | string  | Yes      | Always `success`                                                           |
| `entityId`                | string  | Yes      | Internal Prism job assessment ID                                           |
| `entityType`              | string  | Yes      | Always `job-assessment`                                                    |
| `externalJobAssessmentId` | string  | Yes      | Client-supplied job assessment ID (`assessmentId` from the create request) |
