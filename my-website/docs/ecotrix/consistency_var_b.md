# Consistency of Var(b|X)

We have
$$
\begin{align*}
    \hat{\sigma}^2=\frac{\bold{e'e}}{(N-K)}&=\frac{\boldsymbol{\varepsilon'}\bold{M}\boldsymbol{\varepsilon}}{(N-K)}\\
    &=\frac{\boldsymbol{\varepsilon'}[\bold{I_N-X(X'X)^{-1}X'}]\boldsymbol{\varepsilon}}{(N-K)}\\
    &=\frac{\boldsymbol{\varepsilon'}\boldsymbol{\varepsilon}-\boldsymbol{\varepsilon'}\bold{X(X'X)^{-1}X'}\boldsymbol{\varepsilon}}{(N-K)}\\
\end{align*}
$$
Let's check the consistency of $\hat{\sigma}^2$ first
$$
\begin{align*}
    \text{plim }\hat{\sigma}^2&=\text{plim }\Big\{ \frac{\boldsymbol{\varepsilon'}\boldsymbol{\varepsilon}-\boldsymbol{\varepsilon'}\bold{X(X'X)^{-1}X'}\boldsymbol{\varepsilon}}{(N-K)}\Big\}\\
    &=\text{plim }\Big\{\frac{N}{(N-K)}\Big[\frac{\boldsymbol{\varepsilon'\varepsilon}}{N}-\Big(\frac{\boldsymbol{\varepsilon'}\bold{X}}{N}\Big)\Big(\frac{\bold{X'X}}{N}\Big)^{-1}\Big(\frac{\bold{X'}\boldsymbol{\varepsilon}}{N}\Big)\Big]\Big\}\\
    &=\text{plim }\Big(\frac{N}{N-K}\Big)\text{ plim }\Big(\frac{\boldsymbol{\varepsilon'\varepsilon}}{N}-\Big(\frac{\boldsymbol{\varepsilon'}\bold{X}}{N}\Big)\Big(\frac{\bold{X'X}}{N}\Big)^{-1}\Big(\frac{\bold{X'}\boldsymbol{\varepsilon}}{N}\Big)\Big)\\
    &=1\cdot\text{ plim }\Big(\frac{\boldsymbol{\varepsilon'\varepsilon}}{N}-\Big(\frac{\boldsymbol{\varepsilon'}\bold{X}}{N}\Big)\Big(\frac{\bold{X'X}}{N}\Big)^{-1}\Big(\frac{\bold{X'}\boldsymbol{\varepsilon}}{N}\Big)\Big)\\
    &=\text{plim }\Big(\frac{\boldsymbol{\varepsilon'\varepsilon}}{N}\Big)-\Big[\text{ plim }\Big(\frac{\boldsymbol{\varepsilon'}\bold{X}}{N}\Big)\underbrace{\text{ plim }\Big(\frac{\bold{X'X}}{N}\Big)^{-1}}_{\bold{\tilde{Q}^{-1}}}\underbrace{\text{ plim }\Big(\frac{\bold{X'}\boldsymbol{\varepsilon}}{N}\Big)}_{=\bold{0}}\Big].\\
    \text{ plim }\Big(\frac{\boldsymbol{\varepsilon'}\bold{X}}{N}\Big)
    &=\text{plim}\Big(\frac{1}{N}
    \begin{bmatrix}
        \sum_{i=1}^N\varepsilon_ix_{1i}&\sum_{i=1}^N\varepsilon_ix_{2i}\cdots\sum_{i=1}^N\varepsilon_ix_{ki}
    \end{bmatrix}_{1\times k}\Big).
\end{align*}
$$
Using Weak Law of Large Numbers
$$
\begin{align*}
    \text{ plim }\Big(\frac{\boldsymbol{\varepsilon'}\bold{X}}{N}\Big)
    &=\bold{0}.
\end{align*}
$$
Hence
$$
\begin{align*}
    \text{plim }\hat{\sigma}^2&=\text{plim }\Big(\frac{\boldsymbol{\varepsilon'\varepsilon}}{N}\Big)\\
    &=\text{plim }\Big(\frac{1}{N}\sum_{i=1}^N\varepsilon_i^2\Big)\\
    &=\mathbb{E}[\varepsilon_i^2]\\
    &=\sigma^2
\end{align*}
$$
**Ques:** Find $\text{plim }\mathbb{Var}\bold{(b|X)}.$