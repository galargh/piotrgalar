---
tags: post
layout: article.njk
title: How to work within GitHub Actions Free Plan limits?
date: 2022-04-20
---

**📚 Did you know?**

**GitHub Actions usage in private repos on a Free Plan is limited to [2000 minutes per month](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions#included-storage-and-minutes)!** Unfortunately, we recently hit this limit in the IPFS org 😢 Not to worry though, there are things we can do about it! Above all, we recommend setting a [timeout](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idtimeout-minutes) on your GitHub Actions jobs. In the future, we also want to set up [GitHub Actions monitoring](https://github.com/protocol/w3dt-stewards/issues/29) across our orgs.

**🥕 What’s up with IPDX?**

**We got a new name!** Now that the team has grown beyond 1 we carefully thought about our identity and chose a new name that better encompasses our goals and values. Without further ado, the IP Productivity team becomes the **IPDX** team. Channel renames etc. incoming. If you’re interested in our reasoning behind the change, check out [this discussion](https://www.notion.so/Meta-4e5424fc25554069b6c36bb200e38508?pvs=21).

**Unified CI for Go uses Go 1.17 and Go 1.18 now!** This was shipped with a release of 2022-04-04. Friendly reminder that we now also offer Unified CI for JS. If you’re interested in joining, check out the [setup instructions](https://github.com/protocol/.github#usage).

💯 **Stats!**

**Unified CI:** 175 Go projects and 35 Javascript Projects are using the [github.com/protocol/.github](http://github.com/protocol/.github) to manage their workflow and get automatic updates.
