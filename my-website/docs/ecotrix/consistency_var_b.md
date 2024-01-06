# Consistency of Var(b|X)

We have
$$
\begin{align*}
    \hat{\sigma}^2=\frac{\bold{e'e}}{(n-K)}&=\frac{\boldsymbol{\varepsilon'}\bold{M}\boldsymbol{\varepsilon}}{(n-K)}\\
    &=\frac{\boldsymbol{\varepsilon'}[\bold{I_n-X(X'X)^{-1}X'}]\boldsymbol{\varepsilon}}{(n-K)}\\
    &=\frac{\boldsymbol{\varepsilon'}\boldsymbol{\varepsilon}-\boldsymbol{\varepsilon'}\bold{X(X'X)^{-1}X'}\boldsymbol{\varepsilon}}{(n-K)}\\
\end{align*}
$$
Let's check the consistency of $\hat{\sigma}^2$ first
$$
\begin{align*}
    \text{plim }\hat{\sigma}^2&=\text{plim }\Big\{ \frac{\boldsymbol{\varepsilon'}\boldsymbol{\varepsilon}-\boldsymbol{\varepsilon'}\bold{X(X'X)^{-1}X'}\boldsymbol{\varepsilon}}{(n-K)}\Big\}\\
    &=\text{plim }\Big\{\frac{n}{(n-K)}\Big[\frac{\boldsymbol{\varepsilon'\varepsilon}}{n}-\Big(\frac{\boldsymbol{\varepsilon'}\bold{X}}{n}\Big)\Big(\frac{\bold{X'X}}{n}\Big)^{-1}\Big(\frac{\bold{X'}\boldsymbol{\varepsilon}}{n}\Big)\Big]\Big\}\\
\end{align*}
$$
$$
\Big(\frac{\bold{X'X}}{n}\Big)^{-1}
$$