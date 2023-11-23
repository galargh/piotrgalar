---
tags: post
layout: article.njk
title: "Automated GitHub Releases: The New Unified CI Feature"
date: 2023-02-08
---

## Deprecations

- ⚠️ **[math/rand.Seed](https://pkg.go.dev/math/rand#Seed)** is deprecated. If you’re using it, Go Check workflow will raise an issue about it. Since Go 1.20, the generator is seeded randomly at program startup. If that works for your program, you can remove the call altogether. Alternatively, you can create a generator with a fixed seed using `NewRand(NewSource(seed))`.

- ⚠️ **[math/rand.Read](https://pkg.go.dev/math/rand#Read)** is deprecated. If you’re using it, Go Check workflow will raise an issue about it. You can use [crypto/rand.Read](https://pkg.go.dev/crypto/rand#Read) instead.

- If you’re using `quic-go`, you’ll have to upgrade to a version that supports Go 1.20 - [quic-go v0.32.0](https://github.com/quic-go/quic-go/releases/tag/v0.32.0).

## Highlights

- 🔥 **Go 1.20 is out!** Go workflows will use Go 1.19 and Go 1.20 from now on. Testing with Go 1.18 is being dropped.

- 📦 **GitHub Releases will be created automatically!** Now GitHub Releases are created automatically whenever you update version.json.

- 🌍 **You can customize runners for Go workflows!** You can now configure the runners for Go workflows. This will allow you to use a specific system version or use PL self-hosted GitHub Actions runners!

- 💿 **Go version became configurable!** If you need to use a different set of Go versions in your module, now you can!

- 📝 **Unified CI workflows support templating!** Now you can template your workflows.

- 🚫 **Go test workflow can be skipped based on OS and/or architecture!** You can now configure the Go test workflow to skip certain operating systems and/or architectures.
