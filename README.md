# propsoch-assignment

## PART 1 — WEBSITE ANALYSIS

### 1️⃣ Current Lighthouse Scores

#### 💻 Desktop Scores

| Performance | Accessibility | Best Practices | SEO |
|-------------|--------------|---------------|-----|
| 61          | 77           | 54            | 100 |

---

#### 📱 Mobile Scores

| Performance | Accessibility | Best Practices | SEO |
|-------------|--------------|---------------|-----|
| 26          | 71           | 54            | 100 |


### 2️⃣ UX/UI Issues Observed

1. **Heavy Media on Homepage**  
   The homepage loads large videos and media files, significantly slowing down page load time.

2. **Excessive JavaScript Usage**  
   Too much JavaScript blocks initial rendering and delays user interactions such as clicks and scrolling.

3. **Accessibility Issues**  
   Low color contrast and buttons without proper labels reduce usability and accessibility compliance.

4. **Poor Mobile Performance**  
   The mobile version experiences very slow loading times and reduced responsiveness.

5. **Third-Party Tracking Scripts**  
   Multiple third-party scripts increase page load time and negatively impact performance.

### 3️⃣ How I Would Fix Each Issue

1. **Optimize Media Content**  
   Replace autoplay videos with optimized images where possible and lazy-load videos to improve initial load speed.

2. **Reduce JavaScript Blocking**  
   Minimize JavaScript usage and load analytics or non-critical scripts after the main page content has loaded.

3. **Improve Accessibility**  
   Enhance color contrast, add proper `aria-label` attributes, and use semantic HTML elements to improve usability and compliance.

4. **Adopt a Mobile-First Approach**  
   Redesign the layout using a responsive, mobile-first strategy to ensure better performance and usability on smaller devices.

5. **Optimize Third-Party Scripts**  
   Load third-party scripts using `async` and remove any unused or unnecessary tools to reduce load time.
