---
id: interview-reset-failed
title: Interview Reset Failed
description: Webhook payload sent when interview regeneration fails
sidebar_label: Interview Reset Failed
sidebar_position: 5
---

# Interview Reset Failed

**Event:** `interview.reset.failed`

Fired when an attempt to regenerate (reset) an interview fails.

## Webhook Payload

```json
{
    "id": "evt_01JNMQ2V7KXYZ1234567890AB",
    "clientId": "ucqcjbxnuk",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "eventType": "interview.reset.failed",
    "environment": "production",
    "version": "1.0",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "data": {
        "statusCode": 500,
        "status": "failed",
        "message": "something went wrong",
        "code": "INTERNAL_SERVER_ERROR",
        "interviewId": "intv_01JNMQ2V7K"
    },
    "meta": {
        "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
        "sourceService": "core-api"
    }
}
```

## Event Data Fields (`data`)

| Field         | Type    | Required | Description                              |
| ------------- | ------- | -------- | ---------------------------------------- |
| `statusCode`  | integer | Yes      | HTTP-equivalent error code (e.g. `500`)  |
| `status`      | string  | Yes      | Always `failed`                          |
| `message`     | string  | Yes      | Human-readable error description         |
| `code`        | string  | Yes      | Application-level error code             |
| `interviewId` | string  | Yes      | ID of the interview that failed to reset |
