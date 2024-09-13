# 2D Floorplan Viewer

## Overview

This is a simple interactive 2D floorplan viewer built using HTML, CSS, and JavaScript. It displays a floorplan with walls, doors, and furniture from a provided JSON file, allowing users to navigate and interact with the elements.

## Features

- Displays walls, doors, and furniture from a JSON file.
- Interactive features:
  - Navigation (panning around the canvas).
  - Zoom (zoom in/out functionality using the mouse wheel).
  - Hover feature: display the furniture name when hovering over items.

## Installation

1. Clone the repository:
    ```
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```
    cd 2D-Floorplan-Viewer
    ```

3. Run a local HTTP server to avoid CORS issues when loading the JSON file:
    ```
    http-server
    ```

4. Open the application in your browser:
    ```
    http://localhost:8080
    ```

## JSON Data Structure

The floorplan JSON file includes three main sections:
- **Regions**: Defines the walls using start and end points.
- **Doors**: Describes the doors' positions, width, and rotation.
- **Furniture**: Includes furniture items with their bounding boxes and placement.

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)

## License

This project is licensed under the MIT License.
