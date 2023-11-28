---
tags: post
layout: article.njk
title: GitHub Projects Beta and Notion Synced Blocks
date: 2022-05-17
---

**📚 Did you know?**

**GitHub is revamping the projects experience with [GitHub Projects (Beta)](https://docs.github.com/en/issues/trying-out-the-new-projects-experience)!** The feature we absolutely love about it is the ability to add issues cross-org. However, there’s much more to like - for example, recently announced, an option to [bulk add issues](https://github.blog/changelog/2022-04-07-the-new-github-issues-april-7th-update/) from a repository or an action to [automate project population](https://github.com/marketplace/actions/add-to-github-projects-beta) within the same org. If you’re thinking about migrating, check out our [GitHub Project migration project](https://github.com/pl-strflt/projects-migration).

**Notion supports [Synced Blocks](https://www.notion.so/blog/designing-synced-blocks)!** The transclusion feature lets you reference a block in another page. The content will be live sync’d between both pages. We use this heavily in our [IPDX page](https://www.notion.so/IPDX-122073392dce454e9ca4b87231034483?pvs=21) to surface high levels details.

**🥕 What’s up with IPDX?**

**We released a [Chrome Extension called Gadder](https://github.com/galargh/gadder#-gadder) which extends GitHub Projects (Beta) with the ability to search for and add issues cross-org!** With the extension installed, you can search for and add all the issues you can access by typing in *q=* followed by your search query in the text input box.

**We created a GitHub Actions workflow which tracks [status changes](https://github.com/protocol/w3dt-stewards/issues/43) on GitHub Projects (Beta).** Let us know if it’d be useful for you to have in your project.

We found a way to disable GitHub Actions workflows in go-ipfs forks by default. Check out [this PR](https://github.com/ipfs/go-ipfs/pull/8955) if you’re interested in the approach.

💯 **Stats!**

**GitHub Management:** [9 organizations](https://github.com/pl-strflt/github-mgmt-template/network/dependents?package_id=UGFja2FnZS0zMDE2NzcyMDQ4) have github-mgmt repositories, which allow managing GitHub configuration as code, set up. ****We’re going to be concentrating on updating the memberships/access levels and UX improvements next.
