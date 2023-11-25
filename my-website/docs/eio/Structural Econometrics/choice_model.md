---
sidebar_position: 4
---
# Choice Probabilities

### Role of Choice Probabilities
    *   Essential in modeling discrete choices.
    *   Cannot predict choices definitively from representative utility alone because of the unobserved component.
    *   Choice probabilities crucial in discrete choice models.

---

## General Formula for Choice Probabilities

### Calculation
    *   Probability of choosing alternative $i$: $P_{ni}$.
    *   Considers the cumulative distribution of unobserved utility components.
### Formula
    * The probability that decision maker $n$ chooses alternative $i$ is:
<div style={{ textAlign: 'left' }}>
    $$
    \begin{align*}
    P_{ni} &= Pr(U_{ni} > U_{nj}, \forall j \neq i)\\
    &=Pr(V_{ni} + \epsilon_{ni} > V_{nj} + \epsilon_{nj} , \forall j \neq i)\\
    &=Pr(\epsilon_{nj} - \epsilon_{ni} < V_{ni} - V_{nj}, \forall j \neq i)\\
    &=\int_{\epsilon} \mathbb{1}(\epsilon_{nj} - \epsilon_{ni} < V_{ni} - V_{nj} \quad \forall j \neq i) f(\epsilon_n) d\epsilon_n
    \end{align*}
    $$
</div>
Note: Above integral is multi-dimensional integral and $f(\epsilon_n)$ is joint density function of $\epsilon_{n1},\epsilon_{n2},...,\epsilon_{nj}$.
We have to make assumptions about this joint density function.

### Example from statistics

Let,
$$
\begin{align*}
f_{X,Y}(x,y) &= 
\begin{cases} 
6e^{-(2x+3y)}, & x, y \geq 0 \\
0, & \text{otherwise}
\end{cases}\\\\
\text{then, }
P(X > Y) &= \int_{0}^{\infty} \int_{y}^{\infty} 6e^{-(2x+3y)} \, dx \, dy \\
&= \int_{0}^{\infty} 3e^{-3y} \, dy \\
&= \frac{3}{5}.
\end{align*}
$$

---
## Choice Probabilities Example

**Scenario**:
    
    *   A person decides whether to take a car $(c)$ or a bus $(b)$ to work.
    *   Observable attributes: time $(T)$ and cost $(M)$ for each mode of transport.

**Representative Utility Specification**:
    
    *   Car: $V_{nc} = \beta_{0c} + \beta_1T_{nc} + \beta_2M_{nc}$.
    *   Bus: $V_{nb} = \beta_{0b} + \beta_1T_{nb} + \beta_2M_{nb}$.

**Assuming Known Coefficients**:
    
    *   If $\beta$ coefficients are known, $V_{nc}$ and $V_{nb}$ can be calculated.
    *   However, unobserved factors $(\epsilon_{nc}$ and $\epsilon_{nb})$ also affect the decision.

**Choice Probability Calculation**:
    
    *   For driving:
        *   $P_{nc} = Pr(\epsilon_{nb} - \epsilon_{nc} < V_{nc} - V_{nb})$.
        *   Expanded: $P_{nc} = Pr(\epsilon_{nb} - \epsilon_{nc} < (\beta_{0c} - \beta_{0b}) + \beta_1(T_{nc} - T_{nb}) + \beta_2(M_{nc} - M_{nb}))$.