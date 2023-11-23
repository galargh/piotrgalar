---
tags: post
layout: article.njk
title: GitHub Universe Reveal and Action Caches Management
date: 2023-05-10
---

😃🐙🐾 [GITHUB UNIVERSE](https://githubuniverse.com/) WAS OFFICIALLY ANNOUNCED!
  - It’s happening November 8-9 in San Francisco 🇺🇸
  - Call for speakers is open until June 7 🏃‍♂️ We’re thinking of submitting the following proposals. If you have any other suggestions for us, please do reach out!
    - How to manage comprehensively manage GitHub as code at scale?
    - How to monitor GitHub Actions activity in real time?
    - How to manage a fleet of self-hosted runners for Open Source orgs?
    - How can a team of 2 manage CI for hundreds of repositories?

🍠 [GitHub Actions VS Code Extension is in public beta](https://github.blog/changelog/2023-03-28-github-actions-visual-studio-code-extension-is-now-in-public-beta/) - it makes editing GHA workflows way nicer!

💁‍♀️ If you’re an admin and you bypass branch protection, [git will now let you know what rules were bypassed](https://github.blog/changelog/2023-03-29-info-messages-for-bypassing-branch-protections-in-git/). They also made it [stand out more in the UI when you bypass any rules](https://github.blog/changelog/2023-04-20-enhancements-for-admins-bypassing-branch-protections-on-github-com/).

♻️ [Orgs can now be deleted via REST API](https://github.blog/changelog/2023-03-30-delete-organizations-with-rest-api/). I haven’t checked in a while but maybe it means we could now create an org just for testing and then clean it all up, all via API?

🔐 [Private vulnerability reports are available via REST API and webhooks](https://github.blog/changelog/2023-03-30-repository-security-advisories-rest-api/) 🤩 This means we can reopen the discussion on mass-enabling private vulnerability reporting. It will enable us to periodically check for new private vulnerability reports, creating summaries and sending them to appropriate emails. cc [@Alain](https://filecoinproject.slack.com/team/U04MHS29ANT)

🍬 [New navigation is in public beta](https://github.blog/changelog/2023-04-05-redesigned-navigation-available-in-public-beta/).

🗄️ GitHub Projects now support [bulk editing in table view](https://github.blog/changelog/2023-04-06-github-issues-projects-april-6th-update/). cc @biglep @Prithvi Shahi

🔕 [Some notification for at-team mentions can be disabled now](https://github.blog/changelog/2023-04-07-notifications-for-team-mentions-can-now-be-disabled/).

🌈 You can now [manage GitHub Actions Caches through web UI](https://github.blog/changelog/2023-04-10-manage-caches-in-your-actions-workflows-from-web-interface/) 🙏

⏩ [Webhook forwarding in GitHub CLI reached GA](https://github.blog/changelog/2023-04-12-webhook-forwarding-in-the-github-cli/). It’s a great feature when you need to test GitHub webhooks.

🤖 [Dependabot will now stop with rebases after 30 days of inactivity](https://github.blog/changelog/2023-04-13-automatic-rebases-on-dependabot-pull-requests-stop-after-30-days-of-inactivity/) 😌

📏 [GitHub announced public beta for rule sets](https://github.blog/changelog/2023-04-17-introducing-repository-rules-public-beta/) - think generic version of branch protections that can also be applied to tags.

🕵️ [Private vulnerability reports can be submitted through REST API](https://github.blog/changelog/2023-04-18-open-a-private-vulnerability-report-with-rest-api/).

🧾 [NPM packages can now be published together with provenance](https://github.blog/changelog/2023-04-19-npm-provenance-public-beta/) using `npm publish --provenance --access public`

🧰 We’re not using GitHub merge queues much yet but it’s nice to see it’s being worked on - [most recently they improved API interaction with the queue and shipped a bunch of usability fixes](https://github.blog/changelog/2023-04-19-pull-request-merge-queue-public-beta-api-support-and-recent-fixes/).

📧 GitHub’s working on custom [Deployment protection rules](https://github.blog/changelog/2023-04-20-github-actions-create-and-share-your-own-deployment-protection-rules-for-safe-and-controlled-deployments/). The beta is currently open for GHES only.

😃🐙🐾 [One-click codespaces setup is here](https://github.blog/changelog/2023-04-24-one-click-into-github-codespaces/). I really wish I had some time to play with codespaces more.

🍎 [New macOS GitHub Actions runners](https://github.blog/changelog/2023-04-24-github-actions-macos-13-is-now-available/) (13) are available. Also, [bigger macOS runners](https://github.blog/changelog/2023-04-24-github-actions-faster-macos-runners-are-now-available-in-open-public-beta/) (relevant to filecoin-project only).

📚 Lastly some reading:
  - [Companies boosting productivity with AI](https://github.blog/2023-05-09-how-companies-are-boosting-productivity-with-generative-ai/)
  - [Push protections X secrets scanning](https://github.blog/2023-05-09-push-protection-is-generally-available-and-free-for-all-public-repositories/) 💖 We’ll be discussing mass-enabling secrets scanning and push protection with [@Alain](https://filecoinproject.slack.com/team/U04MHS29ANT) on Friday. In my opinion, it’s very likely we’ll be proceeding with this soon after.
  - [Code search in GA](https://github.blog/2023-05-08-github-code-search-is-generally-available/)
