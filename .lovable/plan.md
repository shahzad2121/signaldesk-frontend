
## Add Trust Statements Below Pricing Cards

This plan adds three trust/benefit statements below the pricing cards grid and above the FAQ section.

### Summary of Changes

Three short statements will be added in a new section between the pricing cards and the FAQ:
1. "No contracts. Cancel anytime."
2. "Upgrade or downgrade as your work changes."
3. "Your FlowDesks stay intact across plans."

### Implementation Details

**File to modify:** `src/components/landing/PricingSection.tsx`

**Location:** After the pricing cards grid (line 286) and before the FAQ section (line 288).

**What will be added:**
- A new `<div>` container between the pricing cards grid and the FAQ section
- The container will have centered, muted text styling to distinguish it from the pricing cards
- The three statements will be displayed in a centered format with appropriate spacing
- Styling will follow the existing design patterns (using `text-muted-foreground`, `text-center`, etc.)

**Structure:**
```
<div className="text-center my-12 max-w-3xl mx-auto">
  <p className="text-muted-foreground">No contracts. Cancel anytime.</p>
  <p className="text-muted-foreground">Upgrade or downgrade as your work changes.</p>
  <p className="text-muted-foreground">Your FlowDesks stay intact across plans.</p>
</div>
```

The statements will be:
- Centered on the page
- Using muted foreground color for subtle prominence
- Spaced naturally between the pricing cards and FAQ sections
- Readable on all screen sizes

This creates a reassurance message that reinforces flexibility and commitment-free usage before the FAQ section.
