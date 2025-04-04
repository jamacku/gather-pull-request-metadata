import { CustomOctokit } from './octokit';
import { PullRequestMetadata } from './schema';
export declare class PullRequest {
    readonly number: PullRequestMetadata['number'];
    readonly base: PullRequestMetadata['base'];
    readonly ref: PullRequestMetadata['ref'];
    readonly url: PullRequestMetadata['url'];
    readonly labels: PullRequestMetadata['labels'];
    readonly milestone: PullRequestMetadata['milestone'];
    readonly commits: PullRequestMetadata['commits'];
    readonly metadata: PullRequestMetadata['metadata'];
    private constructor();
    getMetadata(): PullRequestMetadata;
    static getPullRequest(octokit: CustomOctokit, request: {
        owner: string;
        repo: string;
        pull_number: number;
    }): Promise<PullRequest>;
}
