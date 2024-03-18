attribute vec4 vPosition;
attribute vec3 vNormal;
attribute vec2 vTexCoord;
varying vec3 fragPos;
varying vec3 normal;
varying vec2 texCoord;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;

void main() {
    fragPos = (modelViewMatrix * vPosition).xyz;
    normal = mat3(modelViewMatrix) * vNormal;
    texCoord = vTexCoord;
    
    gl_Position = projectionMatrix * modelViewMatrix * vPosition;
}

$precision mediump float;

varying vec3 fragPos;
varying vec3 normal;
varying vec4 fColor;
varying vec2 texCoord;

uniform vec4 ambientProduct, diffuseProduct, specularProduct;
uniform vec4 lightPosition;
uniform float shininess;

uniform sampler2D texture;

void main() {
    vec3 L = normalize(lightPosition.xyz - fragPos);
    vec3 E = normalize(-fragPos);
    vec3 H = normalize(L + E);
    vec3 N = normalize(normal);

    vec4 ambient = ambientProduct;

    float Kd = max(dot(L, N), 0.0);
    vec4 diffuse = Kd * diffuseProduct;

    float Ks = pow(max(dot(N, H), 0.0), shininess);
    vec4 specular = Ks * specularProduct;

    if (dot(L, N) < 0.0) {
        specular = vec4(0.0, 0.0, 0.0, 1.0);
    }

    gl_FragColor = (ambient + diffuse + specular) + texture2D(texture, texCoord);
    gl_FragColor.a = 1.0;
}
