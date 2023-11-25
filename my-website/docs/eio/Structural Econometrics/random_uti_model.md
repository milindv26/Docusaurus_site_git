---
sidebar_position: 3
---
# Random Utility Model

## Model Structure
- Based on the assumption of utility-maximizing behavior (or profit maximization for firms).
- **Components**:
  - Utility derived from each alternative.
  - Dependency on observed and unobserved characteristics.
  - Selection of the alternative providing maximum utility.
- **Flexibility**: RUM can include behavioral and informational parameters deviating from traditional models.

---
## Specifying a Random Utility Model

### Perspective of the Decision Maker
    
    *   A decision maker, denoted as $n$, faces a choice among $J$ alternatives.
    *   Each alternative $j$ provides a certain utility $U_{nj}$ (where j = $\{1, 2, ..., J\}$).
    *   The decision maker chooses the alternative offering the greatest utility.
    *   Formally, decision maker $n$ chooses alternative $i$ if and only if $U_{ni} > U_{nj}$, $\forall j \neq i$.
  
### Econometricians' Perspective
    
    *   As econometricians, certain elements are not observable:
        *   The actual utility $U_{nj}$ from each alternative is not directly observed.
    *   Observable data includes:
        *   The alternative that is chosen.
        *   Some attributes of each alternative.
        *   Some attributes of the decision maker.
    *   The goal is to use this data to infer $U_{nj}$ and how each attribute affects it.

---

## Model of Utility

### Decomposition of Utility
    *   Each alternative's utility $(U_{nj})$ consists of two parts:
        *   Observed factors: $V_{nj}$.
        *   Unobserved factors: $\epsilon_{nj}$.
    *   Utility equation: $U_{nj} = V_{nj} + \epsilon_{nj}$.
### Representative Utility
    *   Defined as $V(x_{nj}, s_n)$.
    *   $x_{nj}$: Vector of attributes of the alternative.
    *   $s_n$: Vector of attributes of the decision maker.
### Unobserved Utility Component
    *   Captures factors affecting utility not included in $V_{nj}$.
    *   Treated as a random variable.
    *   $f(\epsilon_n)$: Joint density of the random vector $\epsilon_n = \{\epsilon_{n1}, ..., \epsilon_{nJ}\}$ for decision maker $n$.

---

## Representative Utility

### Function of Representative Utility
    *   Modeled as a function of:
        *   $x_{nj}$: Vector of attributes of the alternative.
        *   $s_n$: Vector of attributes of the decision maker.
        *   $\beta$: Vector of structural parameters.
    *   Often specified as a linear function.
    *   Flexibility includes interactions, squared terms, etc.
### Advantages of Linear Function
    *   Closely approximates most utility functions.
    *   Non-linear utility complicates estimation.

---

## Structural Parameters

### Linear Representative Utility
    *   Total utility: $U_{nj} = \beta x_{nj} + \epsilon_{nj}$.
    *   $\beta$: Structural parameters connecting observable attributes to unobserved utility.
    *   Marginal utilities interpretation.
### Objective
    *   Find structural parameters consistent with observed choices.

---