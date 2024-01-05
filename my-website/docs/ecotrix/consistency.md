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
multiplying and dividing by N, we get
$$
\begin{align*}
\text{plim }\bold{b}&=\boldsymbol{\beta}+\underbrace{\text{plim }\{\Big(\frac{\bold{X'X}}{N}\Big)^{-1}\}}_{\text{term 1}}\underbrace{\text{ plim }\{\frac{\bold{X'}\boldsymbol{\varepsilon}}{N}\}}_{\text{term 2}}.\\
\end{align*}
$$
Let's analyze $\text{term 1}$ first
$$
\begin{align*}
    \bold{X'X}=
    \begin{bmatrix}
    x_{11} & \cdots & x_{1N} \\
    \vdots & \ddots & \vdots \\
    x_{k1} & \cdots & x_{kN}
    \end{bmatrix}_{k\times N}
    \begin{bmatrix}
    x_{11} & \cdots & x_{k1} \\
    \vdots & \ddots & \vdots \\
    x_{1N} & \cdots & x_{kN}
    \end{bmatrix}_{N\times k}=
\end{align*}
$$

Now let's analyze $\text{term 2}$
$$
\begin{align*}
    \frac{\bold{X'}\boldsymbol{\varepsilon}}{N}=\frac{1}{N}
    \begin{bmatrix}
    x_{11} & \cdots & x_{1N} \\
    \vdots & \ddots & \vdots \\
    x_{k1} & \cdots & x_{kN}
    \end{bmatrix}
    \begin{bmatrix}
    \varepsilon_1\\
    \vdots\\
    \varepsilon_N
    \end{bmatrix}=\frac{1}{N}
    \begin{bmatrix}
    x_{11}\varepsilon_1+\cdots+x_{1N}\varepsilon_N\\
    \vdots\\
    x_{k1}\varepsilon_1+\cdots+x_{kN}\varepsilon_N\\
    \end{bmatrix}.
\end{align*}
$$
Given
$$
\bold{x_i}=
\begin{bmatrix}
    x_{1i}\\
    \vdots\\
    x_{ki}
\end{bmatrix}
$$
$$
\begin{align*}
    \frac{\bold{X'}\boldsymbol{\varepsilon}}{N}=\frac{1}{N}
    \begin{bmatrix}
    x_{11}\varepsilon_1+\cdots+x_{1N}\varepsilon_N\\
    \vdots\\
    x_{k1}\varepsilon_1+\cdots+x_{kN}\varepsilon_N\\
    \end{bmatrix}=\frac{1}{N}
    \sum_{i=1}^N \bold{x_i}\varepsilon_i.
\end{align*}
$$
Applying Weak Law of Large Numbers
$$
\begin{align*}
    \text{plim }\frac{\bold{X'}\boldsymbol{\varepsilon}}{N}=\text{plim }\frac{1}{N}
    \sum_{i=1}^N \bold{x_i}\varepsilon_i=\mathbb{E}[\bold{x_i}\varepsilon_i].
\end{align*}
$$
Using Law of Iterated Expectations
$$
\begin{align*}
    \mathbb{E}[\bold{x_i}\varepsilon_i]&=\mathbb{E}_{\bold{X}}[\mathbb{E}[\bold{x_i}\varepsilon_i|\bold{X}]]\\
    &=\mathbb{E}_{\bold{X}}[\bold{x_i}\mathbb{E}[\varepsilon_i|\bold{X}]]\\
    &=\mathbb{E}_{\bold{X}}[\bold{x_i}0]\\
    &=0.
\end{align*}
$$
This implies
$$
\begin{align*}
    \text{plim }\frac{\bold{X'}\boldsymbol{\varepsilon}}{N}=0.
\end{align*}
$$
