---
layout: post
title: "Developing Balanced Dungeon — Part 4: Pen, pencil, papper and my approach for level design"
date: 2026-02-16
categories: devlog
tags: [indie, gamedev, reflection]
---

I've been working in software for more than fourteen years and, during my career, I have struggled with projects that had no architecture at all, but also with projects that had an overly complex one.

I've always believed that a clean and solid architecture is the correct way to structure a software project — not only to keep it organized, but also to make it easier to maintain over time.

At least, that's what the books say.

But I'm not going to start a big discussion about software architecture here. Instead, I just want to talk about what helped me this time.

For this project, I took a different approach.

My initial thought was simple:

> "There's no time for architecture."

Why?

Because in game development — especially during the prototype phase — **failing fast is king**.

But there was another reason as well.

In many of my previous prototypes I spent a lot of time designing complex systems and thinking about how to structure the project properly from the beginning. Once again, the real problem was time — or rather, my lack of it (as I mentioned in the first post).

Why spend hours designing systems for something that might never see the light of day?

Why not just try to **make it work first**, see if the idea is fun, and only then think about organizing things better?

Of course, I know what that means.

Spaghetti code will appear faster than a monkey eating a banana.

But in this case, that’s not really a problem.

This is a small game. Something that probably won’t grow much bigger in the future. And if, for some unexpected reason, it does… well, then there will be time to refactor things later (and rewrite all the ugly code).

So in the end, why didn't I spend too much time designing a proper architecture?

- I prefer to spend the small amount of time I have creating **levels** (which is a whole different topic).
- This is a **short game**. I just need to make it playable.
- It's **single-player** and definitely **not a game as a service**.
- And most importantly: **I really want to release something online and finish a first version.**

Time goes by quickly, and I already have other — more complex — ideas waiting in line.

In the end, my goal with this project is simple:

**Finish it.**

- Not make it perfect.
- Not make it scalable.
- Just finish it.

Because finishing a small game teaches you more than designing the perfect architecture for a game that never ships.