# Consistency of OLS estimator

Consider the model
$$
\bold{y=X}\boldsymbol{\beta+\varepsilon}.
$$
The OLS estimator $\bold{b}$ of $\boldsymbol{\beta}$ is
$$
\bold{b=(X'X)^{-1}X'y}.
$$

To prove: $\text{plim }\bold{b}=\boldsymbol{\beta}.$

**Proof:**

$$
\begin{align*}
\text{plim }\bold{b}&=\text{plim }\{\bold{(X'X)^{-1}X'y}\}\\
&=\text{plim }\{\bold{(X'X)^{-1}X'(X}\boldsymbol{\beta+\varepsilon})\}\\
&=\text{plim }\{\boldsymbol{\beta}+\bold{(X'X)^{-1}X'}\boldsymbol{\varepsilon}\}\\
&=\text{plim }\boldsymbol{\beta}+\text{plim }\{\bold{(X'X)^{-1}X'}\boldsymbol{\varepsilon}\}\\
&=\boldsymbol{\beta}+\text{plim }\{\bold{(X'X)^{-1}}\}\text{ plim }\{\bold{X'}\boldsymbol{\varepsilon}\}\\
\end{align*}
$$
