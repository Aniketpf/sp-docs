import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebar: SidebarsConfig = {
    webhookssidebar: [
        {
            type: 'doc',
            id: 'webhooks/overview',
            label: 'Overview',
        },
        {
            type: 'category',
            label: 'Interview Events',
            collapsed: false,
            items: [
                {
                    type: 'doc',
                    id: 'webhooks/interview-creation-success',
                    label: 'interview.creation.succeeded',
                },
                {
                    type: 'doc',
                    id: 'webhooks/interview-creation-failed',
                    label: 'interview.creation.failed',
                },
                {
                    type: 'doc',
                    id: 'webhooks/interview-reset-success',
                    label: 'interview.reset.succeeded',
                },
                {
                    type: 'doc',
                    id: 'webhooks/interview-reset-failed',
                    label: 'interview.reset.failed',
                },
                {
                    type: 'doc',
                    id: 'webhooks/interview-created',
                    label: 'interview.created',
                },
                {
                    type: 'doc',
                    id: 'webhooks/interview-report-generated',
                    label: 'interview.report.generated',
                },
                {
                    type: 'doc',
                    id: 'webhooks/recording-data-generated',
                    label: 'recording.data.generated',
                },
                {
                    type: 'doc',
                    id: 'webhooks/proctoring-data-generated',
                    label: 'proctoring.data.generated',
                },
            ],
        },
        {
            type: 'category',
            label: 'Job Assessment Events',
            collapsed: false,
            items: [
                {
                    type: 'doc',
                    id: 'webhooks/job-description-parse-success',
                    label: 'job_description.parse.succeeded',
                },
                {
                    type: 'doc',
                    id: 'webhooks/job-description-parse-failed',
                    label: 'job_description.parse.failed',
                },
            ],
        },
        {
            type: 'category',
            label: 'Candidate Assessment Events',
            collapsed: false,
            items: [
                {
                    type: 'doc',
                    id: 'webhooks/candidate-assessment-creation-success',
                    label: 'candidate_assessment.creation.succeeded',
                },
                {
                    type: 'doc',
                    id: 'webhooks/candidate-assessment-creation-failed',
                    label: 'candidate_assessment.creation.failed',
                },
                {
                    type: 'doc',
                    id: 'webhooks/candidate-assessment-interview-ready',
                    label: 'candidate_assessment.interview.ready',
                },
            ],
        },
        {
            type: 'category',
            label: 'Candidate Events',
            collapsed: false,
            items: [
                {
                    type: 'doc',
                    id: 'webhooks/candidate-creation-success',
                    label: 'candidate.creation.succeeded',
                },
                {
                    type: 'doc',
                    id: 'webhooks/candidate-creation-failed',
                    label: 'candidate.creation.failed',
                },
                {
                    type: 'doc',
                    id: 'webhooks/candidate-update-success',
                    label: 'candidate.update.succeeded',
                },
                {
                    type: 'doc',
                    id: 'webhooks/candidate-update-failed',
                    label: 'candidate.update.failed',
                },
                {
                    type: 'doc',
                    id: 'webhooks/candidate-resume-parsing-success',
                    label: 'candidate.resume.parsing.succeeded',
                },
                {
                    type: 'doc',
                    id: 'webhooks/candidate-resume-parsing-failed',
                    label: 'candidate.resume.parsing.failed',
                },
            ],
        },
        {
            type: 'category',
            label: 'Search and Match Events',
            collapsed: false,
            items: [
                {
                    type: 'doc',
                    id: 'webhooks/search-and-match-data-generated',
                    label: 'search.and.match.data.generated',
                },
                {
                    type: 'doc',
                    id: 'webhooks/candidate-below-snm-threshold',
                    label: 'candidate.matchScore.belowThreshold',
                },
            ],
        },
    ],
};

export default sidebar.webhookssidebar;
