let canvas = document.getElementById('floorplanCanvas');
let ctx = canvas.getContext('2d');

// Fetch the floorplan JSON file
fetch('floorplan.json')
    .then(response => response.json())
    .then(data => {
        drawFloorplan(data);
    })
    .catch(error => {
        console.error('Error loading JSON file:', error);
    });

function drawFloorplan(data) {
    if (!data) {
        console.error("No data available to draw");
        return;
    }

    // Draw walls, doors, and furniture (simplified example)
    drawRegions(data.regions);
    drawDoors(data.doors);
    drawFurniture(data.furnitures);
}

function drawRegions(regions) {
    regions.forEach(region => {
        ctx.beginPath();
        ctx.moveTo(region.start.x, region.start.y);
        ctx.lineTo(region.end.x, region.end.y);
        ctx.stroke();
    });
}

function drawDoors(doors) {
    doors.forEach(door => {
        ctx.beginPath();
        ctx.rect(door.location.x, door.location.y, door.width, 5); // Simplified door drawing
        ctx.stroke();
    });
}

function drawFurniture(furnitures) {
    furnitures.forEach(furniture => {
        ctx.beginPath();
        ctx.rect(furniture.xPlacement, furniture.yPlacement, furniture.maxBound.x - furniture.minBound.x, furniture.maxBound.y - furniture.minBound.y);
        ctx.stroke();
    });
}
