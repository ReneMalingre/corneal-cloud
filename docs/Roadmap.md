# **Project Roadmap - Stage 1: Cornea Model Framework**

## **Objective**
Develop a foundational software tool to generate and visualize a **3D cornea model** based on **apical radius, asphericity, and principal meridia axes**. This model will serve as the basis for designing rigid contact lenses.

---

## **Phase 1: Project Setup**
### **1.1 Initialize the Project**
- Use **Vite with React and TypeScript** for a fast and scalable frontend.
- Install **Tailwind CSS** for styling.
- Install **Three.js and @react-three/fiber** for 3D visualization.

### **1.2 Define Project Structure**
- Organize the project into:
  - `models/` - Core mathematical calculations.
  - `components/` - UI and visualization components.
  - `pages/` - Main application views.
  - `utils/` - Helper functions.

---

## **Phase 2: Corneal Model Data Generation**
### **2.1 User Inputs for Cornea Definition**
- **Apical radius of curvature** for two principal meridia.
- **Asphericity factor** (e, Q, or p) for each meridian.
- **Axes of the two principal meridia** (default: 0° and 90°).
- **Resolution settings** (configurable point spacing).
- **Diameter settings** (maximum width of the model).

### **2.2 Corneal Surface Computation**
- Implement the sagittal height equation for a conic section:
  
  \[
  Z(r) = \frac{r^2}{R} \cdot \frac{1}{1 + \sqrt{1 - (1 + Q) \frac{r^2}{R^2}}}
  \]
  
- Compute a **3D array of corneal surface points** along two meridia.
- Use **interpolation to smoothly transition** between the meridia over 360°.

---

## **Phase 3: Visualization in 3D**
### **3.1 Set Up a Three.js Scene**
- Implement `@react-three/fiber` for **3D rendering**.
- Configure **camera, lighting, and interactive controls**.
- Use `OrbitControls` for zoom and rotation.

### **3.2 Render the Corneal Model**
- Convert computed **point cloud** into a `BufferGeometry` for smooth rendering.
- Implement **real-time updates** when input parameters change.
- Add **grid and reference markers** for scale visualization.

---

## **Phase 4: Functionality Expansion**
### **4.1 Corneal Height Calculation at Any Point**
- Implement a function: `getHeightAt(x, y): number`
- Uses **interpolation from the point array** to determine sagittal height at any coordinate.

### **4.2 Data Export Capabilities**
- Implement options to export the computed cornea model as:
  - **CSV** (for numerical analysis).
 
### **4.3 UI Enhancements**
- Add UI components for:
  - **Parameter input fields (radius, asphericity, meridian axes).**
  - **Sliders for resolution and diameter adjustments.**
  - **Real-time model updates.**

---

## **Phase 5: Testing and Validation**
### **5.1 Model Accuracy Testing**
- Validate **computed corneal heights** against known topography datasets.
- Compare results with **industry-standard software outputs**.

### **5.2 Performance Optimization**
- Optimize rendering for **real-time updates**.
- Ensure smooth interpolation for **high-resolution models**.

---

## **Expected Outcome for Stage 1**
✅ Functional corneal model that:
- Generates **a 3D point cloud** based on **conic section equations**.
- **Smoothly interpolates** between two principal meridia.
- **Renders in 3D with real-time adjustments**.
- **Allows exporting of the model data**.

🚀 **Next Steps (Stage 2)**: Implementing **back optic zone fitting and rigid lens design tools**.

