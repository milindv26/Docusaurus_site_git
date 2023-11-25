---
sidebar_position: 1
---
# Introduction
<div style={{ textAlign: 'justify' }}>
These notes are taken from YouTube video lectures by [Matt Woerman.](https://www.youtube.com/@ResEcon703UMassAmherst)

## What is Structural Econometrics?

### Definition
- Structural econometrics is defined as combining explicit economic theories with statistical models to identify parameters of economic models based on individual choices or aggregate relations.

### Contrast with Nonstructural (reduced form) Econometrics
Reduced form econometrics emphasises on:
- Less direct incorporation of economic theory.
- More focus on data-driven, empirical findings without a strong theoretical foundation.

---

## Why Add Structure to an Econometric Model?

### Purposes
1. **Estimation of Unobservable Parameters:**
   - Examples include marginal utility, marginal cost, risk preferences, discount rates, etc.
2. **Counterfactual Simulations:**
   - Assessing what would happen under different economic scenarios.
3. **Comparing Economic Theories:**
   - Testing competing theories by modeling their implications.

### Balance and Credibility
- The choice between structural and nonstructural approaches depends on research context and questions.
- Structural models can sometimes add credibility, especially in policy analysis or forecasting.

---

## Constructing a Structural Econometric Model

**Steps**
1. **Start with Economic Theory:**
   - Define economic setting, list primitives (preferences, technologies), and equilibrium concepts.
2. **Transform into Econometric Model:**
   - Incorporate statistical elements like unobservables and errors.
3. **Estimation:**
   - Define functional forms, distributional assumptions, and select estimation methods.

---

## A Simple Example of a Structural Model

This example demonstrates the estimation of output elasticities of capital and labor for a firm using a structural econometric model.

### Observations
- **Output $(Y_t)$**
- **Capital $(K_t)$**
- **Labor $(L_t)$**

### Steps

#### 1. Start with a Cobb-Douglas Production Function
The initial economic model is based on the Cobb-Douglas production function, which is a common representation in economics to describe the relationship between outputs and inputs.

- **Functional Form:** 
  $$ Y_t = A K_t^\alpha L_t^\beta $$

- **Rewritten as a Log-Linear Model:**
  To facilitate estimation and interpretation, this production function is transformed into a log-linear form.

  $$ \ln(Y_t) = \gamma + \alpha \ln(K_t) + \beta \ln(L_t) $$

#### 2. Incorporate an Error Term
An error term $(\varepsilon_t)$ is added to the model to account for measurement error and other unobserved factors.

- **Assumptions on Error Term:**
  - The error term is assumed to follow a normal distribution with mean zero and variance $\sigma^2: \varepsilon_t \sim N(0, \sigma^2)$.
  - It is assumed that the expectation of the error term, given capital and labor, is zero: $E(\varepsilon_t | K_t, L_t) = 0$.

#### 3. Estimation Using Ordinary Least Squares (OLS)
The final step involves estimating the output elasticities $\alpha$ and $\beta$ using OLS, a standard method in econometrics for estimating the parameters of a linear regression model.

- **OLS Estimation Model:**
  
  $$ \ln(Y_t) = \gamma + \alpha \ln(K_t) + \beta \ln(L_t) + \varepsilon_t $$

---

## A More Complex Example of a Structural Model

This example demonstrates a more complex structural model involving procurement auctions with risk-neutral bidders and the goal of estimating the underlying common distribution of costs known to all bidders.

### Observations
- **Winning Bid $(w_t)$:** Observed in T procurement auctions with $(N_t)$ risk-neutral bidders.

### Steps

#### 1. Economic Theory and Expected Profit Maximization
- Each firm is assumed to maximize its expected profit.
- The expected profit for firm $(i)$ with bid $(b_i)$ and cost $(c_i)$ is given by:

$$
E[\pi_i(b_1, ..., b_N)] = (b_i - c_i) . Pr(b_i < b_j , \forall j \neq i | c_i)
$$

#### 2. First-Order Condition for the Bid Function
- Differentiating the expected profit with respect to the bid gives the first-order condition, leading to the bid function:

$$
b_i = \beta(c_i) = c_i + \frac{\int_{c_i}^{\infty} [1 - F(\tau)]^{N-1} . d\tau ]}{ [1- F(c_i)]^{N-1}}
$$

#### 3. Distribution of the Winning Bid
- The distribution of the winning bid is derived from the bid function.

$$
h(w) = \frac{N[1 - F(\beta^{-1}(w))]^{N-1} f(\beta^{-1}(w))}{\beta'(\beta^{-1}(w))}
$$

---

## Miller and Weinberg (2017) Case Study: Analysis of the MillerCoors Merger

### Research Setting and Question

*   **Industry:** US beer industry, dominated by three major firms: Miller, Coors, and ABI.
*   **Event:** Miller and Coors merged their US operations in a new joint venture.
*   **Regulatory Review:** Approved by the US DOJ in June 2008 amidst concerns about potential consumer harm vs. cost efficiencies.
*   **Research Question:** Did the MillerCoors merger lead to new coordinated pricing between MillerCoors and ABI?

### Data

*   **Retail Scanner Data:** Weekly revenue and unit sales by UPC code, week, and store (2001–2011 across 39 geographic regions, covering 13 flagship brands). Data aggregated to region-month or region-quarter levels.
*   **American Community Survey:** Household demographics (income) from a subsample of US households.
*   **Geographic Data:** Locations of regions and breweries, including driving distance from the nearest brewery to market.
*   **Fuel Prices:** Diesel fuel prices from US EIA and US DOE to account for transportation costs.

### Descriptive Evidence of Price Effects

*   **Observations Post-Merger:** Prices of Miller Lite, Coors Light, and Bud Light increased by 8%, stopping a downward trend.
*   **Comparative Analysis:** No change in price levels or trends for Corona Extra and Heineken.
*   **Preliminary Conclusion:** Descriptive evidence suggests possible coordinated pricing by MillerCoors and ABI, but also consistent with other explanations like unilateral pricing effects, retail practices, or macroeconomic conditions.

### Regression Evidence of Time-Series and Cross-Sectional Price Effects

*   **Time-Series Analysis:** Difference-in-differences regression design to quantify time-series price effects and analyze more brands. Results show MillerCoors prices increased 5–10% relative to import brands, with ABI prices increasing similarly.
*   **Cross-Sectional Analysis:** Reduced-form regression to examine market-level factors (industry concentration, transportation costs). Findings show price increases largely unexplained by these factors, suggesting that unilateral effects may not fully account for observed price increases.

### Additional Analyses and Structural Estimation

*   **Event Studies:** Ashenfelter, Hosken, and Weinberg (2015) conducted further analyses to characterize factors explaining unilateral price effects.
*   **Demand and Supply Models:** Structural econometric models used to estimate consumer demand and supply-side parameters, including marginal costs and pricing conduct.
*   **Results:** Increased markups for MillerCoors and ABI beers post-merger, but not for imports. Estimated demand elasticities and supply model parameters suggest substantial coordinated pricing effects.

### Counterfactual Simulations and Welfare Calculations

*   **Simulation:** Price trajectories simulated under various market assumptions.
*   **Findings:** ABI price increases largely due to coordinated pricing.
*   **Welfare Effects:** Calculated for different scenarios, indicating that the merger could improve total surplus under certain conditions, depending on cost efficiencies and pricing coordination
</div>