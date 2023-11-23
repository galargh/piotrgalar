---
tags: post
layout: article.njk
title: Key Updates from Git, Actions, and Project Management
date: 2022-10-21
---

It’s been a while but we’re back! Hold on to your seats, there’s been pleeeenty going on at GitHub 🎢

But first, let me tell you that we’re going to **Lab Week** 🎉 🌴 🍹 **Do reach out if you’re also there** and would like to discuss anything GitHub related 📣 We’d be thrilled to chat 🍄

And now… this: 🔓 [Git 2.38](https://github.blog/2022-10-03-highlights-from-git-2-38/) is out! And with it, [Scalar](https://github.blog/2022-10-13-the-story-of-scalar/) - a tool for large repo management. **DO upgrade immediately** if you’re cloning with `--recurse-submodules` from untrusted repositories or if you use git shell interactive mode. There were [security vulnerabilities](https://github.blog/2022-10-18-git-security-vulnerabilities-announced/) announced.

GitHub is trying to improve [code search](https://github.blog/2021-12-08-improving-github-code-search/)! The new portal is currently in technical preview. **Let me know if you wanted to see it**, I’m already in.

🤘 [Larger runners](https://github.blog/changelog/2022-09-01-github-actions-larger-runners-are-now-in-public-beta/) for GitHub Actions are in public beta. Unfortunately, it’s only available for Team and Enterprise level customers. It’d be great if they offered them on pay-as-you-go for Free plans.

🗄️ You can finally manage GitHub Actions [Caches](https://github.blog/changelog/2022-10-20-manage-caches-in-your-actions-workflows-from-web-interface/) from the UI! This is a great addition to the previously available options: [API](https://docs.github.com/en/rest/actions/cache) and [CLI](https://github.com/actions/gh-actions-cache#readme). These are not the only [improvements to the GitHub Actions UI](https://github.blog/changelog/2022-10-13-design-improvements-to-github-actions-navigation/) - I encourage you to visit some workflow page if you haven’t done that in a while.

🌓 Branch protections now understand the concept of [last pusher](https://github.blog/changelog/2022-10-20-new-branch-protections-last-pusher-and-locked-branch/#require-approval-from-someone-other-than-the-last-pusher) - you can require reviews from someone other than the last person who pushed to the branch. But that’s not all, you can now also [lock your branches](https://github.blog/changelog/2022-10-20-new-branch-protections-last-pusher-and-locked-branch/#lock-branch) and disallow any changes to them until the unlock.

🍏 GitHub App for Slack is getting some long awaited features:
  - [creating new issues](https://github.blog/changelog/2022-10-19-github-app-in-slack-issue-create-and-manage-experience/#create-issues-as-you-collaborate)
  - [updating existing issues](https://github.blog/changelog/2022-10-19-github-app-in-slack-issue-create-and-manage-experience/#issue-card-updates-and-threading)

🛌 The REST API allows [retrieving all Dependabot alerts](https://github.blog/changelog/2022-10-18-dependabot-alerts-organizational-level-rest-api/) now. It also allows [managing Codespaces](https://github.blog/changelog/2022-09-28-organization-level-apis-for-codespaces/). As far as I know, we don’t use the latter too much yet but it’d be definitely interesting to explore. You can also manage [code security features](https://github.blog/changelog/2022-08-31-update-and-configure-code-security-enablement-settings-via-the-organization-rest-api/) through the API.

🏖️ Personal Access Tokens can now be [configured much more precisely](https://github.blog/changelog/2022-10-18-introducing-fine-grained-personal-access-tokens/). You can choose which orgs and repos they relate too. On the other side, the org admins will now be able to control. These are in a public beta right now - the opt-in is very easy though so let me know if you want to try it out.

💪 `save-state` and `set-output` commands are now [deprecated](https://github.blog/changelog/2022-10-11-github-actions-deprecating-save-state-and-set-output-commands/). The removal date is not scheduled yet. IPDX will perform a sweep in the coming weeks. We will do a follow-up to suggest changes to your workflows. Some options include:
  - Storing data as an output in the action itself
  - Storing data in a file and attaching it as an artifact
  - Using environment variables

Have a great day!
