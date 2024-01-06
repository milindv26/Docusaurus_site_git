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
    \frac{1}{N}\bold{X'X}=
    \frac{1}{N}
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
    \frac{1}{N}
    \begin{bmatrix}
    \langle C_1,C_1 \rangle & \langle C_1,C_2 \rangle & \cdots & \langle C_1,C_k \rangle \\
    \vdots& \vdots & \ddots & \vdots \\
    \langle C_k,C_1 \rangle &\langle C_k,C_2 \rangle& \cdots & \langle C_k,C_k \rangle
    \end{bmatrix}_{k\times k}
\end{align*}
$$
where $\langle C_m,C_m \rangle$ is the inner product of column $m$ and column $n$ of matrix $\bold{X}.$ Therefore
$$
\begin{align*}
    \frac{1}{N}\langle C_1,C_1 \rangle&=\frac{1}{N}\sum_{i=1}^Nx_{1i}^2\text{ and }\\
    \frac{1}{N}\langle C_m,C_n \rangle&=\frac{1}{N}\sum_{i=1}^Nx_{mi}x_{ni}.\\
\end{align*}
$$
Applying Weak Law of Large Numbers
$$
\begin{align*}
    \text{plim }\Big(\frac{1}{N}\bold{X'X}\Big)&=\text{plim }\Bigg(
    \frac{1}{N}
    \begin{bmatrix}
    \langle C_1,C_1 \rangle & \langle C_1,C_2 \rangle & \cdots & \langle C_1,C_k \rangle \\
    \vdots& \vdots & \ddots & \vdots \\
    \langle C_k,C_1 \rangle &\langle C_k,C_2 \rangle& \cdots & \langle C_k,C_k \rangle
    \end{bmatrix}_{k\times k}\Bigg)\\
    &=\mathbb{E}
    \begin{bmatrix}
    C_1^2 & C_1\cdot C_2 & \cdots & C_1\cdot C_k \\
    \vdots& \vdots & \ddots & \vdots \\
    C_k\cdot C_1 &C_k\cdot C_2& \cdots & C_k^2
    \end{bmatrix}_{k\times k}\\
    &=\mathbb{E}[\bold{x_i}\bold{x_i'}].
\end{align*}
$$
We know that $\frac{\bold{X'X}}{N}$ is a positive definite matrix. Let's assume that
$$
\begin{align*}
    \text{plim }\Big(\frac{1}{N}\bold{X'X}\Big)&=\bold{\tilde{Q}}\text{, a positive definite matrix}
\end{align*}
$$
Since $\bold{\tilde{Q}}$ is a positive definite matrix, it's inverse exists.

Using plim property
$$
\begin{align*}
    \text{plim }\Big(\frac{1}{N}\bold{X'X}\Big)^{-1}&=\Big\{\text{plim }\Big(\frac{1}{N}\bold{X'X}\Big)\Big\}^{-1}=\bold{\tilde{Q}^{-1}}.\tag{1}
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
    \text{plim }\frac{\bold{X'}\boldsymbol{\varepsilon}}{N}=0.\tag{2}
\end{align*}
$$

Using $(1)$ and $(2)$
$$
\begin{align*}
\text{plim }\bold{b}&=\boldsymbol{\beta}+\underbrace{\text{plim }\{\Big(\frac{\bold{X'X}}{N}\Big)^{-1}\}}_{\bold{\tilde{Q}^{-1}}}\underbrace{\text{ plim }\{\frac{\bold{X'}\boldsymbol{\varepsilon}}{N}\}}_{0}.\\
&=\boldsymbol{\beta}.\hspace{20px}\blacksquare
\end{align*}
$$