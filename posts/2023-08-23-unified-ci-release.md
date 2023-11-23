---
tags: post
layout: article.njk
title: "Upgrading with Ease: The Launch of Unified CI 2.0 for Developer Workflows"
date: 2023-08-23
---

**[Unified CI 2.0](https://github.com/pl-strflt/uci)** has been released and rolled out to all [229](https://github.com/pl-strflt/uci/actions/workflows/list-repositories.yml) participating repositories! It's been quite an upgrade but we made it through in one piece 💪

**What's new in Unified CI 2.0?** -> **New Repository**: https://github.com/protocol/.github has been archived, long live **https://github.com/pl-strflt/uci**! Moving to a new repository allowed us to ensure stability throughout the rollout. It will also help in future management of the repo since we'll be able to quickly introduce org-level changes that the new uci repo might require.

🎈 **Self-service Sign Up**: All you have to do to enroll in Unified CI is to give [@web3-bot](https://github.com/web3-bot) push access to your repository. That's it!

🧩 **Configurable Workflows**: The core logic of the workflows distributed through Unified CI has been packaged up as reusable workflows. Thanks to this, you're now free to modify the workflows that Unified CI creates however you wish and your changes will survive the next update. In particular, you can customise trigger events, provide inputs, and attach dependent jobs.

🤖 **Dependabot-like Updates**: Now that the distributed workflows are only calling reusable workflows, all we have to do to update CI is to update the version of the reusable workflow that the distributed workflow is calling. This promotes smaller and safer updates.

🔗 **Decoupled Upgrades**: Language specific changes, like Go version upgrade for example, will be performed separately from CI updates. This means we can keep your CI up to date even if you need a little bit more time to prepare the repository for the newest version of your favourite language.

🆚 **Versioning**: Unified CI started following semantic versioning! In particular, all reusable workflows are properly versioned. By default, we're pinning the reusable workflows to a minor version which allows us to silently distribute patches without having to go through a full-blown rollout.

🎨 **New Logo**: Just have a look at [this beauty](https://avatars.githubusercontent.com/u/81333946?v=4) 😻😻😻

**What do I have to do to get on Unified CI 2.0?**

If your repositories were **previously enrolled** in Unified CI, *absolutely nothing*! We have pushed out the upgrade to all participating repos and all the workflow upgrade PRs have already been merged.

If you want to **enroll a new repository** in Unified CI, *invite [@web3-bot](https://github.com/web3-bot) as a collaborator with push access*, sit back, and wait for Unified CI workflows to make their way to your repository. Note that if your repository is in one of the orgs to which [@web3-bot](https://github.com/web3-bot) was not invited before, the invitation will have to be accepted. In that case, please drop us an issue in https://github.com/pl-strflt/uci.

**What about Go 1.21?**

Worry not, we took care of that too (as much as we could). Thanks to the brand new configurability, we've been able to upgrade Go in more repositories than ever before. The Go repositories participating in Unified CI are now configured for Go 1.20 and tested with both Go 1.20 and Go 1.21 as per our policies.


**What's next?**

We hope you enjoy the new and improved Unified CI ❤️ We'll be shifting our main focus to the IPFS Observability initiative now but we'll definitely keep an eye on your feedback and, as always, we'll try to act on it immediately if possible 💪
