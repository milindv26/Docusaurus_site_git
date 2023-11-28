---
sidebar_position: 1
---

# Important results

## Mean independence and Covariance

**Prove:** If $X$ and $U$ are mean independent and $\mathbb{E}[U]=0$ then $Cov(X,U)=0$.

*Note:* Mean independence is defined as $\mathbb{E}[U∣X]=\mathbb{E}[U]$.

**Proof:**
$$
\begin{align*}
Cov(X, U) &= \mathbb{E}\left[(X - \mathbb{E}[X])(U - \mathbb{E}[U])\right] \\
&= \mathbb{E}[XU - X\mathbb{E}[U] - \mathbb{E}[X]U + \mathbb{E}[X]\mathbb{E}[U]] \\
&= \mathbb{E}[XU] - \mathbb{E}[X]\mathbb{E}[U] - \mathbb{E}[X]\mathbb{E}[U] + \mathbb{E}[X]\mathbb{E}[U] \\
&= \mathbb{E}[XU] - \mathbb{E}[X]\mathbb{E}[U] \\
&= \mathbb{E}[XU] - \mathbb{E}[X]\mathbb{E}[\mathbb{E}[U|X]] \\
&= \mathbb{E}[XU] - \mathbb{E}[X]\mathbb{E}[0] \\
&= \mathbb{E}[XU] \\
&= \mathbb{E}[\mathbb{E}[XU|X]] \\
&= \mathbb{E}[X\mathbb{E}[U|X]] \\
&= \mathbb{E}[X \cdot 0] \\
&= 0
\end{align*}
$$
---

