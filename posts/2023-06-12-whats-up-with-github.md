---
tags: post
layout: article.njk
title: New Self-Hosted Runners
date: 2023-06-12
---

**What’s new in GitHub?** other than GitHub Universe 2023 submissions 😁😉

🤖 To all the JS devs out there, you can now [automatically dismiss dependabot updates to devDependencies](https://github.blog/2023-05-02-dependabot-relieves-alert-fatigue-from-npm-devdependencies/).

🧊 [GitHub Actions self-hosted runners Kubernetes controller](https://github.blog/changelog/2023-05-10-github-actions-actions-runner-controller-public-beta/) reached public beta. We’re not considering moving our self-hosted runners infra to Kubernetes at this time but it’s nice to see development in this area.

📱 GitHub Mobile App development is gaining pace! New features such as [GHA workflow editor](https://github.blog/changelog/2023-05-11-edit-workflow-files-on-github-mobile/), [pronouns support](https://github.blog/changelog/2023-05-10-display-pronouns-on-github-mobile-profile/), or [UI for tasklists](https://github.blog/changelog/2023-05-25-github-issues-projects-may-25th-update/#%F0%9F%93%B1-tasklists-on-mobile) getting released daily.

🎨 We can now create [GitHub Project Templates](https://github.blog/changelog/2023-05-25-github-issues-projects-may-25th-update/#%F0%9F%8E%A8-project-templates-for-organizations) for orgs. We could encompass the best practices that work for our other projects already using GitHub Projects to make sure any new project we need it for doesn’t have to start from scratch 🚀

💪 💨 [Bulk updates in the board view](https://github.blog/changelog/2023-05-25-github-issues-projects-may-25th-update/#%F0%9F%92%AA-%E2%8C%A8%EF%B8%8F-bulk-updates-and-keyboard-navigation-on-boards) are finally supported in GitHub projects! cc @biglep @Prithvi Shahi

👓 You can now inspect all [pushes in GitHub UI via the repo Activity tab](https://github.blog/changelog/2023-05-31-view-repository-pushes-on-the-new-activity-view/).

⏲️ GitHub Self-Hosted Runners can now be started in a just-in-time/ephemeral mode. That’s how we’ve been using them. And it was already supported by the self-hosted runners implementation we’re using. But it might make a nice little contribution for us to make to that impl.

🔐 There are some changes affecting what it means for a PR to be [approved](https://github.blog/changelog/2023-06-06-security-enhancements-to-required-approvals-on-pull-requests):
  - The branch protection for dismissing stale reviews now dismisses approvals whenever a merge base changes after a review.
  - A pull request approval now only counts towards the pull request it was submitted against.
  - Merge commits created locally and pushed to a protected branch will be rejected if the contents differ from the system-created merge.

🔍 If you were using GitHub API to search code without auth, you might need to update your scripts. [The code search API requires authentication](https://github.blog/changelog/2023-06-07-code-search-now-requires-login/) now.

🎰 [SMS 2FA can no longer be used to confirm dangerous operations in GitHub](https://github.blog/changelog/2023-06-09-sms-has-been-removed-from-the-github-com-sudo-page/). You should update to other 2FA methods if you’re still using texts only.

📰 [Developer experience: what is it and why should you care?](https://github.blog/2023-06-08-developer-experience-what-is-it-and-why-should-you-care?) It’s a really cool article about our field 🍄 Also, a great reminder about where, why and how, we should focus; just in time for the H2 planning cc @Laurent Senta
  - *DevEx puts developers at the center and works to understand how they feel and think about the work that they do.*

❤️ [All In CHAOSS DEI Badging initiative](https://github.blog/2023-06-07-announcing-the-all-in-chaoss-dei-badging-pilot-initiative/) calls for project maintainers to reflect on how accessible a project is, how transparent communication is, what’s the experience for newcomers, and whether project’s leadership is inclusive; and to write down the results in a form of DEI.md file. It’s a part of a larger [All In for Maintainers](https://github.blog/2023-02-01-announcing-the-launch-of-the-all-in-for-maintainers-dei-resource-hub/) initiative. cc @biglep

♻️ There’s a new official GitHub Action that helps identify [stale repos](https://github.blog/2023-06-05-announcing-the-stale-repos-action/).

🌐 [Applying GitOps to Ops](https://github.blog/2023-06-02-applying-gitops-principles-to-your-operations/) - a pretty generic article. What’s interesting is they mention and praise GitHub Entitlements here - I really hope my talk on GitHub Management gets accepted to Universe.

⛸️ GitHub navigation got more accessible with [better screen readers support and better keyboard navigation](https://github.blog/2023-05-11-navigation-and-search-improvements-for-accessibility/).

✈️ If you’re interested in what’s behind Copilot, [an article about it](https://github.blog/2023-05-17-how-github-copilot-is-getting-better-at-understanding-your-code/) just came out.

⚰️ Last but not least, [a little post-mortem after recent GitHub issues](https://github.blog/2023-05-16-addressing-githubs-recent-availability-issues/).
