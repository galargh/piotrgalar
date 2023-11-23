---
tags: post
layout: article.njk
title: Action Cache Management, Git 2.37 Release, and Copilot for All
date: 2022-07-11
---

Better late than never, right? I’ve been a bit preoccupied with IPFS Things 2022 preparations lately, but I’m back and ready to bring you the news from the GitHub world! Let’s go!

♻️ You can finally [list and delete GitHub Actions caches](https://github.blog/changelog/2022-06-27-list-and-delete-caches-in-your-actions-workflows/)! I’ve been waiting for this one for a loooooong time.

🚤 [Git 2.37 is out](https://github.blog/2022-06-27-highlights-from-git-2-37/)! If you’re on macOS or Windows and you’re working with big repos, you might want to upgrade and do:
  ```
  git config core.fsmonitor true
  git config core.untrackedcache true # optional
  ```

  It enables file system monitor which should speed up your git commands going forward.

🎊 [Git Merge](https://git-merge.com/) is coming back as an in-person event. It’s going to be held in Chicago, September 14-15. Get your tickets here if you’re interested.

💑 [GitHub Copilot](https://github.com/features/copilot) is generally available now. By this time, you probably have already heard about AI programming help from GitHub. It just left its beta and is being offered for $10/month (free for OS contributors).

📈 The dependency graph is not limited to static dependency analysis anymore. You can use the new [Submissions API](https://docs.github.com/en/code-security/supply-chain-security/understanding-your-software-supply-chain/using-the-dependency-submission-api) to inject additional information about dependencies during build time.

🚰 While we’re on dependencies, you can now [filter dependabot alerts by scope](https://github.blog/changelog/2022-06-23-dependabot-alerts-filter-alerts-by-the-scope-of-the-dependency-runtime-and-development/). JS and Rust are supported, among others.

🍴 You can now [create forks in the same organization](https://github.blog/changelog/2022-06-27-improved-innersource-collaboration-and-enterprise-fork-policies/) as the original repo and see what forks you have access to through [a new dropdown UI element](https://github.blog/changelog/2022-06-29-the-repository-fork-button-now-displays-existing-forks/).

📊 GitHub Projects (Beta) keeps improving. Now it gets [support for charts](https://github.blog/changelog/2022-06-30-the-new-github-issues-june-30th-update/) on all plans.

Last but not least, a few reading items that look interesting at a first glance:
  - A [chat with multiple open source maintainers](https://github.blog/2022-06-30-what-to-do-when-your-open-source-project-becomes-a-community/) about how they cater to their community's needs.
  - A surprisingly [detailed analysis of what makes a good commit message](https://github.blog/2022-06-30-write-better-commits-build-better-projects/).
  - A cool little [story of how a game project is built by an open source community through GitHub Actions](https://iznaut.com/littlemario) - [https://iznaut.com/littlemario](https://iznaut.com/littlemario).

Till the next time!
