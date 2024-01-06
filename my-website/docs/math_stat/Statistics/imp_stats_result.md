---
sidebar_position: 1
---

# Important results

## Covariance properties

$$
\begin{align*}
Cov(X, a) &= 0\\
Cov(X, X) &= Var(X)\\
Cov(X, Y) &= Cov(Y, X)\\
Cov(aX, bY) &= ab \, Cov(X, Y)\\
Cov(X + a, Y + b) &= Cov(X, Y)\\
Cov(aX + bY, cW + dV) &= ac \, Cov(X, W) + ad \, Cov(X, V) + bc \, Cov(Y, W) + bd \, Cov(Y, V)
\end{align*} 
$$

---

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

## Unbiased estimator of Variance

Let the population variance and mean are $\sigma^2$ and $\mu$. The sample variance is given by:
$$
S^2=\frac{1}{n-1}\sum_{i=1}^n(X_i-\bar{X})^2
$$
To prove the unbiasedness of $S^2$ we have to prove that $\mathbb{E}[S^2]=\sigma^2$.
$$
S^2=\frac{1}{n-1}\sum_{i=1}^n(X_i^{2}+\bar{X}^2-2X_i\bar{X})
$$
Taking expectation both sides:
$$
\begin{align*}
\mathbb{E}[S^2]&=\mathbb{E}\bigg[\frac{1}{n-1}\sum_{i=1}^n(X_i^{2}+\bar{X}^2-2X_i\bar{X})\bigg]\\
&=\frac{1}{n-1}\mathbb{E}\bigg[\sum_{i=1}^n(X_i^{2})+\sum_{i=1}^n(\bar{X}^2)-2\bar{X}\sum_{i=1}^n(X_i)\bigg]\\
&=\frac{1}{n-1}\mathbb{E}\bigg[\sum_{i=1}^n(X_i^{2})+n(\bar{X}^2)-2\bar{X}n(\bar{X})\bigg]\\
&=\frac{1}{n-1}\mathbb{E}\bigg[\sum_{i=1}^n(X_i^{2})-n(\bar{X}^2)\bigg]\\
&=\frac{1}{n-1}\bigg[\sum_{i=1}^n\mathbb{E}[X_i^{2}]-n\mathbb{E}[\bar{X}^2]\bigg]\text{ as }\mathbb{E}\text{ operator is linear.}
\end{align*}
$$
We know that $Var[X_i]=\mathbb{E}[X_i^2] - (\mathbb{E}[X_i])^2$, that is $\sigma^2=\mathbb{E}[X_i^2] - \mu^2$, hence
$$
\begin{align*}
\frac{1}{n-1}\bigg[\sum_{i=1}^n\mathbb{E}[X_i^{2}]-n\mathbb{E}[\bar{X}^2]\bigg]&=\frac{1}{n-1}\bigg[\sum_{i=1}^n(\sigma^2 + \mu^2)-n\mathbb{E}[\bar{X}^2]\bigg]\\
&=\frac{1}{n-1}\bigg[n(\sigma^2 + \mu^2) - n\mathbb{E}[\bar{X}^2]\bigg]\\
&=\frac{n}{n-1}\bigg[(\sigma^2 + \mu^2) - \mathbb{E}[\bar{X}^2]\bigg]
\end{align*}
$$
Also, $Var[\bar{X}]=\mathbb{E}[\bar{X}^2]-(\mathbb{E}[\bar{X}])^2$, $\implies \mathbb{E}[\bar{X}^2]=Var[\bar{X}]+(\mathbb{E}[\bar{X}])^2$.

Now
* Consider $Var[\bar{X}]$,

  *Note: $\bar{X}$ is a random variable*

$$
\begin{align*}
Var[\bar{X}]&=Var\bigg[\frac{\sum_{i=1}^nX_i}{n}\bigg]\\
&=\frac{1}{n^2}Var[\sum_{i=1}^nX_i]\\
&=\frac{1}{n^2}\sum_{i=1}^nVar[X_i]\\
&\text{( as }X_i \text{'s are  i.i.d)}\\
&=\frac{n\sigma^2}{n^2}=\frac{\sigma^2}{n}
\end{align*}
$$

* Consider $(\mathbb{E}[\bar{X}])^2$, 
  
$$
\begin{align*}
\mathbb{E}[\bar{X}]&=\mathbb{E}\bigg[\frac{\sum_{i=1}^n X_i}{n}\bigg]\\
&=\frac{1}{n}\mathbb{E}[\sum_{i=1}^nX_i]\\
&=\frac{1}{n}\sum_{i=1}^n \mathbb{E}[X_i]\\
&=\frac{1}{n}\sum_{i=1}^n \mathbb{E}[X_i]\\
&=\mu\\
(\mathbb{E}[\bar{X}])^2&=\mu^2
\end{align*}
$$
Finally, we have
$$
\begin{align*}
\frac{n}{n-1}\bigg[(\sigma^2 + \mu^2) - \mathbb{E}[\bar{X}^2]\bigg]&=\frac{n}{n-1}\bigg[(\sigma^2 + \mu^2) - Var[\bar{X}]-(\mathbb{E}[\bar{X}])^2\bigg]\\
&=\frac{n}{n-1}\bigg[(\sigma^2 + \mu^2) - \frac{\sigma^2}{n}-\mu^2\bigg]\\
&=\frac{n}{n-1}\bigg[\frac{(n-1)\sigma^2}{n}\bigg]\\
\mathbb{E}[S^2]&=\sigma^2 \qquad \qquad \blacksquare
\end{align*}
$$
**Exercise:** Find $\mathbb{E}[S^2]$, where $S$ is given by:
$$
\frac{1}{n}\sum_{i=1}^n(X_i-\bar{X})^2
$$

---
## Q is positive definite

**Prove:** 

If $\bold{X}_{N\times k}$ has full column rank, then $\bold{Q:=}\frac{1}{N}\bold{(X'X)}$ is a positive definite matrix.

A matrix $\bold{A}$ is positive definite if for all non-zero vector $v_{k\times 1}$, the quadratic form $\bold{v′Av}$ is positive.

**Proof:**

We have to show

$$
\bold{v'}\frac{\bold{(X'X)}}{N}\bold{v}>0.
$$
Above inequality can be written as
$$
\begin{align*}
    \frac{1}{N}\bold{v'X'Xv}&>0\\
    \frac{1}{N}\bold{(Xv)'Xv}&>0\\
\end{align*}
$$
Since $\bold{(Xv)}$ is vector of dimension $N \times 1$, $\bold{(Xv)'Xv}$ is the inner product of $\bold{(Xv)}$ with itself, which is always non-negative $(\geq)$ by the definition of inner product.

If $\bold{X}$ has full column rank, then the equation $\bold{Xv}=\bold{0}$ only holds true if $\bold{v=0}$. Therefore $\bold{Xv}\neq\bold{0}$ for $\bold{v\neq0}$.

Hence
$$
\begin{align*}
    \frac{1}{N}\bold{v'(X'X)v}&>0.\hspace{20px}\blacksquare\\
\end{align*}
$$

---

## Law of Total Probability