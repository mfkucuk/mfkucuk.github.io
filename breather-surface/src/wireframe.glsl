attribute vec4 vPosition;
attribute vec3 vNormal;
varying vec3 fNormal;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vPosition;
    fNormal = normalize(mat3(modelViewMatrix) * vNormal);
}

$precision mediump float;
varying vec3 fNormal;

void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0); // Set the color of the filled triangles

    // Check if the fragment is near an edge and color it differently for wireframe
    if (length(fNormal) < 0.9) {
        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0); // Set the color for the wireframe
    }
}
