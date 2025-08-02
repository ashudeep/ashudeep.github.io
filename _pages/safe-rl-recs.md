---
layout: page
permalink: /safe-rl-recs
title: Safe RL for Recommendations
description: Published at FAccTRec @ RecSys 2020 
---

**Building Healthy Recommendation Sequences for Everyone: A Safe Reinforcement Learning Approach**
Authors: Ashudeep Singh, Yoni Halpern, Nithum Thain, Konstantina Christakopoulou, Ed H. Chi, Jilin Chen, Alex Beutel (Cornell, Google)

[URL](publications/facctrec2020_singh_et_al.pdf), [Slides](assets/pdf/facctrec2020_singh_et_al_slides.pdf)


**Abstract**: A key consideration in the design of recommender systems is the long term well-being of users. In this work, we formalize this challenge as a multi-objective, safe reinforcement learning problem, balancing positive user feedback and the “healthiness” of user trajectories. We note that in some cases, naively balancing these objectives can lead to unhealthy experiences, even if unlikely, still occurring in a small subset of users leading us to examine a distributional notion of recommendation safety. Thus, we propose a reinforcement learning approach that optimizes for positive feedback from users while simultaneously optimizing for the health of worst-case users to remain high. To empirically validate our method, we develop a novel research simulation environment motivated by a movie recommendation setting that considers exposure to violence as a proxy for unhealthy recommendations. We demonstrate how our method reduces unhealthy recommendations to the most vulnerable users, without sacrificing much user satisfaction.

<img src="/assets/img/safe-recs.png" alt="image" width="75%" height="auto">

Code: [https://github.com/google/ml-fairness-gym/](https://github.com/google/ml-fairness-gym/)
