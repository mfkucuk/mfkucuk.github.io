attribute  vec4 vPosition;
attribute  vec3 vNormal;
attribute vec2 vTexCoord;
varying vec4 fColor;
varying vec2 texCoord;

uniform vec4 ambientProduct, diffuseProduct, specularProduct;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec4 lightPosition;
uniform float shininess;
void main()
{
    texCoord = vTexCoord;

    vec3 pos = -(modelViewMatrix * vPosition).xyz;
    
    //fixed light postion
    
    vec3 light = lightPosition.xyz;
    vec3 L = normalize( light - pos );

	
    vec3 E = normalize( -pos );
    vec3 H = normalize( L + E );
    
    vec4 NN = vec4(vNormal,0);

    // Transform vertex normal into eye coordinates
       
    vec3 N = normalize( (modelViewMatrix*NN).xyz);

    // Compute terms in the illumination equation
    vec4 ambient = ambientProduct;

    float Kd = max( dot(L, N), 0.0 );
    vec4  diffuse = Kd*diffuseProduct;

    float Ks = pow( max(dot(N, H), 0.0), shininess );
    vec4  specular = Ks * specularProduct;
    
    if( dot(L, N) < 0.0 ) {
	specular = vec4(0.0, 0.0, 0.0, 1.0);
    } 

    gl_Position = projectionMatrix * modelViewMatrix * vPosition;
    fColor = ambient + diffuse +specular;
    
    fColor.a = 1.0;
}

$precision mediump float;

varying vec4 fColor;
varying vec2 texCoord;

uniform sampler2D texture;

void
main()
{
    gl_FragColor = fColor + texture2D(texture, texCoord);
}