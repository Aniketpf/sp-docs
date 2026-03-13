---
id: overview
title: Webhooks Overview
description: Overview of outbound webhook events sent by SelectPrism to your configured endpoints
sidebar_label: Overview
sidebar_position: 1
---

# Webhooks Overview

SelectPrism sends outbound HTTP POST requests to your configured webhook URLs when key events occur.

## Envelope Formats

There are two envelope formats depending on the event.

### Standard Envelope (most events)

```json
{
    "id": "evt_01JNMQ2V7KXYZ1234567890AB",
    "clientId": "your_client_id",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "eventType": "interview.creation.succeeded",
    "environment": "production",
    "version": "1.0",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "data": {},
    "meta": {
        "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
        "sourceService": "core-api"
    }
}
```

| Field             | Type              | Description                                              |
| ----------------- | ----------------- | -------------------------------------------------------- |
| `id`              | string            | Unique event ID with `evt_` prefix                       |
| `clientId`        | string            | Your client identifier                                   |
| `pfTransactionId` | string            | ULID for end-to-end tracing                              |
| `eventType`       | string            | The webhook event name                                   |
| `environment`     | string            | Deployment environment                                   |
| `version`         | string            | Payload version. Currently `1.0`                         |
| `timestamp`       | string (ISO 8601) | When the event was generated                             |
| `data`            | object            | Event-specific payload                                   |
| `meta`            | object            | Metadata including `pfTransactionId` and `sourceService` |

### Legacy Envelope

Some older events use a simplified format without `id`, `clientId`, `environment`, `version`, or `meta`. These are clearly marked with a **Legacy Format** note on their individual pages.

```json
{
    "event": "interview.created",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "pfTransactionId": "01JNMQ2V7KXYZ1234567890AB",
    "data": {}
}
```

## Authentication

Webhooks are authenticated using an `X-Api-Key` header containing your webhook secret. Validate this header on every incoming request.

## Retry Policy

SelectPrism retries failed webhook deliveries with exponential backoff:

| Setting              | Value                        |
| -------------------- | ---------------------------- |
| Max attempts         | 5                            |
| Base delay           | 1 s                          |
| Max delay            | 30 s                         |
| Timeout per attempt  | 10 s                         |
| Retryable HTTP codes | 408, 429, 500, 502, 503, 504 |

Return a `2xx` status code to acknowledge receipt. Any other status code triggers a retry.

---

## Event Reference

### Interview Events

| Event                                                          | Format   | Trigger                                        |
| -------------------------------------------------------------- | -------- | ---------------------------------------------- |
| [`interview.creation.succeeded`](./interview-creation-success) | Standard | Interview link created successfully            |
| [`interview.creation.failed`](./interview-creation-failed)     | Standard | Interview creation failed                      |
| [`interview.reset.succeeded`](./interview-reset-success)       | Standard | Interview regenerated successfully             |
| [`interview.reset.failed`](./interview-reset-failed)           | Standard | Interview regeneration failed                  |
| [`interview.created`](./interview-created)                     | Legacy   | Interview link created (older variant)         |
| [`interview.report.generated`](./interview-report-generated)   | Legacy   | AI interview report is ready                   |
| [`recording.data.generated`](./recording-data-generated)       | Legacy   | Interview recording is processed and available |
| [`proctoring.data.generated`](./proctoring-data-generated)     | Legacy   | AI proctoring analysis is ready                |

### Job Assessment Events

| Event                                                                | Format   | Trigger                             |
| -------------------------------------------------------------------- | -------- | ----------------------------------- |
| [`job_description.parse.succeeded`](./job-description-parse-success) | Standard | Job description parsed successfully |
| [`job_description.parse.failed`](./job-description-parse-failed)     | Standard | Job description parsing failed      |

### Candidate Assessment Events

| Event                                                                                | Format   | Trigger                                       |
| ------------------------------------------------------------------------------------ | -------- | --------------------------------------------- |
| [`candidate_assessment.creation.succeeded`](./candidate-assessment-creation-success) | Standard | Candidate attached to assessment successfully |
| [`candidate_assessment.creation.failed`](./candidate-assessment-creation-failed)     | Standard | Candidate assessment attachment failed        |
| [`candidate_assessment.interview.ready`](./candidate-assessment-interview-ready)     | Standard | Candidate assessment ready for interview      |

### Candidate Events

| Event                                                                      | Format   | Trigger                               |
| -------------------------------------------------------------------------- | -------- | ------------------------------------- |
| [`candidate.creation.succeeded`](./candidate-creation-success)             | Standard | Candidate record created successfully |
| [`candidate.creation.failed`](./candidate-creation-failed)                 | Standard | Candidate creation failed             |
| [`candidate.update.succeeded`](./candidate-update-success)                 | Standard | Candidate record updated successfully |
| [`candidate.update.failed`](./candidate-update-failed)                     | Standard | Candidate update failed               |
| [`candidate.resume.parsing.succeeded`](./candidate-resume-parsing-success) | Standard | Resume parsed successfully            |
| [`candidate.resume.parsing.failed`](./candidate-resume-parsing-failed)     | Standard | Resume parsing failed                 |

### Search and Match Events

| Event                                                                    | Format   | Trigger                                        |
| ------------------------------------------------------------------------ | -------- | ---------------------------------------------- |
| [`search.and.match.data.generated`](./search-and-match-data-generated)   | Standard | SnM scoring complete for a candidate           |
| [`candidate.matchScore.belowThreshold`](./candidate-below-snm-threshold) | Legacy   | Candidate SnM score below configured threshold |
