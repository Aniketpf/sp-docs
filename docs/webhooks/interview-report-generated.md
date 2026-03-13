---
id: interview-report-generated
title: Interview Report Generated
description: Webhook payload sent when an interview report is generated
sidebar_label: Interview Report Generated
sidebar_position: 7
---

# Interview Report Generated

**Event:** `interview.report.generated`

:::note Legacy Format
This event uses a **legacy envelope** format — it does not include `id`, `clientId`, `environment`, `version`, or `meta` fields.
:::

Fired when the AI-generated interview report for a completed interview is ready.

## Webhook Payload

```json
{
    "event": "interview.report.generated",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "data": {
        "interviewReportId": "report_01JNMQ2V7K"
    }
}
```

## Payload Fields

| Field                    | Type              | Required | Description                                                                                          |
| ------------------------ | ----------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| `event`                  | string            | Yes      | Always `interview.report.generated`                                                                  |
| `timestamp`              | string (ISO 8601) | Yes      | When the event was generated                                                                         |
| `pfTransactionId`        | string            | Yes      | ULID for end-to-end tracing                                                                          |
| `data.interviewReportId` | string            | Yes      | ID of the generated interview report. Use this to call `GET /interviews/results/{interviewReportId}` |
