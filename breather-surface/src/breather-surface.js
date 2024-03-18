

var canvas;
var gl;

var numVertices  = 0;

var pointsArray = [];
var normalsArray = [];
var texCoordArray = [];

var lightPosition = vec4(10.0, 10.0, 10.0, 0.0 );
var lightAmbient = vec4(0.2, 0.2, 0.2, 1.0 );
var lightDiffuse = vec4( 1.0, 1.0, 1.0, 1.0 );
var lightSpecular = vec4( 1.0, 1.0, 1.0, 1.0 );

var materialAmbient = vec4( 1.0, 0.0, 1.0, 1.0 );
var materialDiffuse = vec4( 1.0, 0.8, 0.0, 1.0);
var materialSpecular = vec4( 1.0, 0.8, 0.0, 1.0 );
var materialShininess = 100.0;

var ctm;
var ambientColor, diffuseColor, specularColor;
var modelView, projection;
var viewerPos;
var program;

var zoom = 10;

var xAxis = 0;
var yAxis = 1;
var zAxis = 2;
var axis = 0;
var theta =[0, 0, 0];

var flag = true;

let aa = 0.5;
let uStep = 0.2;
let vStep = 0.2;
let vRange = 34;
let uRange = 17;

let blackTexture;
let customTexture;
let useTexture = false;
let isWireframe = false;


window.onload = function init() {
   canvas = document.getElementById( "gl-canvas" );
   
   gl = WebGLUtils.setupWebGL( canvas );
   if ( !gl ) { alert( "WebGL isn't available" ); }

   gl.viewport( 0, 0, canvas.width, canvas.height );
   gl.clearColor( 0.7, 0.7, 0.7, 1.0 );
   
   gl.enable(gl.DEPTH_TEST);

   modelView = mat4();

   blackTexture = gl.createTexture();
   gl.bindTexture(gl.TEXTURE_2D, blackTexture);
   gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 0, 255]));

   // Set texture parameters (e.g., filtering and wrapping modes)
   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
   gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

   gl.bindTexture(gl.TEXTURE_2D, null);

   customTexture = gl.createTexture();
   
   let image = new Image();
   image.src = '/src/texture.jpg';
   image.addEventListener('load', (event) => {
      gl.bindTexture(gl.TEXTURE_2D, customTexture);

      
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
      
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      
      //gl.generateMipmap(gl.TEXTURE_2D);
      
      gl.bindTexture(gl.TEXTURE_2D, null);
   });
   

   //
   //  Load shaders and initialize attribute buffers
   //
   program = initShadersFromFiles( gl, '/src/gouraud.glsl'); 
   gl.useProgram( program );

   drawBreather();

   projection = ortho(-10, 10, -10, 10, -100, 100);
   
   ambientProduct = mult(lightAmbient, materialAmbient);
   diffuseProduct = mult(lightDiffuse, materialDiffuse);
   specularProduct = mult(lightSpecular, materialSpecular);

   gl.uniform4fv(gl.getUniformLocation(program, "ambientProduct"),
      flatten(ambientProduct));
   gl.uniform4fv(gl.getUniformLocation(program, "diffuseProduct"),
      flatten(diffuseProduct) );
   gl.uniform4fv(gl.getUniformLocation(program, "specularProduct"), 
      flatten(specularProduct) );	
   gl.uniform4fv(gl.getUniformLocation(program, "lightPosition"), 
      flatten(lightPosition) );
      
   gl.uniform1f(gl.getUniformLocation(program, 
      "shininess"),materialShininess);
   
   gl.uniformMatrix4fv( gl.getUniformLocation(program, "projectionMatrix"),
      false, flatten(projection));
   
   render();

   window.addEventListener('keydown', (event) => {
      if (event.key == 'w') 
      {
         modelView = mult(modelView, rotate(-3, [1, 0, 0] ));
      }

      if (event.key == 's') 
      {
         modelView = mult(modelView, rotate(3, [1, 0, 0] ));
      }

      if (event.key == 'a') 
      {
         modelView = mult(modelView, rotate(3, [0, 1, 0] ));
      }

      if (event.key == 'd') 
      {
         modelView = mult(modelView, rotate(-3, [0, 1, 0] ));
      }

      if (event.key == 'q') 
      {
         modelView = mult(modelView, rotate(3, [0, 0, 1]));
      }

      if (event.key == 'e') 
      {
         modelView = mult(modelView, rotate(-3, [0, 0, 1]));
      }
   });

   canvas.addEventListener('wheel', (event) => {
      if (event.deltaY > 0) 
      {
         zoom++;
         zoom = Math.min(zoom, 20);
         projection = ortho(-zoom, zoom, -zoom, zoom, -100, 100);

         gl.uniformMatrix4fv( gl.getUniformLocation(program, "projectionMatrix"),
      false, flatten(projection));
      }
      else if (event.deltaY < 0)
      {
         zoom--;
         zoom = Math.max(zoom, 1);
         projection = ortho(-zoom, zoom, -zoom, zoom, -100, 100);

         gl.uniformMatrix4fv( gl.getUniformLocation(program, "projectionMatrix"),
      false, flatten(projection));
      }
   });

   document.getElementById('aaSlider').addEventListener('input', (event) => {
      aa = parseFloat(event.target.value);
      drawBreather();
   });

   document.getElementById('uRangeSlider').addEventListener('input', (event) => {
      uRange = event.target.value;
      drawBreather();
   });

   document.getElementById('uPrecisionSlider').addEventListener('input', (event) => {
      uStep = parseFloat(event.target.value);
      drawBreather();
   });

   document.getElementById('vRangeSlider').addEventListener('input', (event) => {
      vRange = event.target.value;
      drawBreather();
   });

   document.getElementById('vPrecisionSlider').addEventListener('input', (event) => {
      vStep = parseFloat(event.target.value);
      drawBreather();
   });

   document.getElementById('wireframeButton').addEventListener('click', () => {
      program = initShadersFromFiles(gl, '/src/wireframe.glsl');

      document.getElementById('useTexture').checked = false;
      document.getElementById('useTexture').disabled = true;

      document.getElementById('currentShader').innerText = 'Wireframe';
      
      gl.useProgram( program );

      useTexture = false
      isWireframe = true;

      drawBreather();

      gl.uniformMatrix4fv( gl.getUniformLocation(program, "projectionMatrix"),
      false, flatten(projection));
   });

   document.getElementById('gouraudButton').addEventListener('click', () => {
      program = initShadersFromFiles(gl, '/src/gouraud.glsl');

      document.getElementById('useTexture').disabled = false;

      document.getElementById('currentShader').innerText = 'Gouraud';

      gl.useProgram( program );

      gl.uniform4fv(gl.getUniformLocation(program, "ambientProduct"),
      flatten(ambientProduct));
      gl.uniform4fv(gl.getUniformLocation(program, "diffuseProduct"),
         flatten(diffuseProduct) );
      gl.uniform4fv(gl.getUniformLocation(program, "specularProduct"), 
         flatten(specularProduct) );	
      gl.uniform4fv(gl.getUniformLocation(program, "lightPosition"), 
         flatten(lightPosition) );
         
      gl.uniform1f(gl.getUniformLocation(program, 
         "shininess"),materialShininess);

      isWireframe = false;

      drawBreather();

      gl.uniformMatrix4fv( gl.getUniformLocation(program, "projectionMatrix"),
      false, flatten(projection));
   });

   document.getElementById('phongButton').addEventListener('click', () => {
      program = initShadersFromFiles(gl, '/src/phong.glsl');

      document.getElementById('currentShader').innerText = 'Phong';

      document.getElementById('useTexture').disabled = false;

      gl.useProgram( program );

      gl.uniform4fv(gl.getUniformLocation(program, "ambientProduct"),
      flatten(ambientProduct));
      gl.uniform4fv(gl.getUniformLocation(program, "diffuseProduct"),
         flatten(diffuseProduct) );
      gl.uniform4fv(gl.getUniformLocation(program, "specularProduct"), 
         flatten(specularProduct) );	
      gl.uniform4fv(gl.getUniformLocation(program, "lightPosition"), 
         flatten(lightPosition) );
         
      gl.uniform1f(gl.getUniformLocation(program, 
         "shininess"),materialShininess);

      isWireframe = false;

      drawBreather();

      gl.uniformMatrix4fv( gl.getUniformLocation(program, "projectionMatrix"),
      false, flatten(projection));
   });

   document.getElementById('useTexture').addEventListener('click', () => {
      useTexture = document.getElementById('useTexture').checked;

      drawBreather();
   });

   document.getElementById('imageInput').addEventListener('change', handleFileSelect);

    function handleFileSelect(event) {
        const selectedFile = event.target.files[0];

        if (selectedFile) {
            let image = new Image();
            image.src = URL.createObjectURL(selectedFile);
            image.onload = () => {
               gl.bindTexture(gl.TEXTURE_2D, customTexture);
               
               gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
               
               gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
               gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
               gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
               gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
               
               //gl.generateMipmap(gl.TEXTURE_2D);
               
               gl.bindTexture(gl.TEXTURE_2D, null);
            }
        }
    }
}

var render = function(){
            
   gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    
   gl.uniformMatrix4fv( gl.getUniformLocation(program,
            "modelViewMatrix"), false, flatten(modelView) );

            
   // Draw filled triangles
   gl.drawArrays(gl.TRIANGLES, 0, numVertices);
   
   // Enable polygon offset for wireframe
   gl.enable(gl.POLYGON_OFFSET_FILL);
   gl.polygonOffset(1.0, 1.0);
            
   if (useTexture) 
   {
      gl.bindTexture(gl.TEXTURE_2D, customTexture);
      var uTexture = gl.getUniformLocation(program, 'texture');
      gl.uniform1i(uTexture, 0);
   }
   else 
   {
      gl.bindTexture(gl.TEXTURE_2D, blackTexture);
      var uTexture = gl.getUniformLocation(program, 'texture');
      gl.uniform1i(uTexture, 0);
   }
   // Draw wireframe
   gl.drawArrays(gl.LINE_LOOP, 0, numVertices);

   // Disable polygon offset
   gl.disable(gl.POLYGON_OFFSET_FILL);

   //gl.drawArrays( gl.LINE_LOOP, 0, numVertices );
               
   requestAnimFrame(render);
}

function drawBreather() 
{
   pointsArray = [];
   normalsArray = [];
   numVertices = 0;

   let w = Math.sqrt(1 - aa * aa);

   for (let v = -vRange; v <= vRange; v += vStep) {
      for (let u = -uRange; u <= uRange; u += uStep) {

         const { du, dv } = computePartialDerivatives(u, v);
         let normal = cross(du, dv);
         normal = normalize(normal);

         const denom = aa * ((w * Math.cosh(aa * u)) * (w * Math.cosh(aa * u)) + (aa * Math.sin(w * v)) * (aa * Math.sin(w * v)));

         const x = -u + (Math.cosh(aa * u) * Math.sin(aa * u) * (2 * (1 - aa * aa)) / denom);
         const y = ((2 * w * Math.cosh(aa * u)) / (denom)) * ((-w * Math.cos(v) * Math.cos(w * v)) - (Math.sin(v) * Math.sin(w * v)));
         const z = ((2 * w * Math.cosh(aa * u)) / (denom)) * ((-w * Math.sin(v) * Math.cos(w * v)) + (Math.cos(v) * Math.sin(w * v)));

         const uTexCoord = (u + uRange) / (2 * uRange);
         const vTexCoord = (v + vRange) / (2 * vRange);

         pointsArray.push(vec4(x, y, z, w));
         normalsArray.push(normal);
         texCoordArray.push(vec2(uTexCoord, vTexCoord));

         numVertices++;
      }
   }

   buffer();
}

function computePartialDerivatives(u, v) {

   let w = Math.sqrt(1 - aa * aa);

    // Calculate denominator
    const denom = aa * ((w * Math.cosh(aa * u)) * (w * Math.cosh(aa * u)) + (aa * Math.sin(w * v)) * (aa * Math.sin(w * v)));

    const partialXU = -1 + (Math.cosh(aa * u) * Math.sin(aa * u) * (2 * (1 - aa * aa))) / denom;
    const partialXV = 0; // Since there is no v term in the expression for x
    const partialYU = (2 * w * Math.sin(aa * u) * (w * Math.cos(v) * Math.cos(w * v) + Math.sin(v) * Math.sin(w * v))) / denom;
    const partialYV =
  (2 * w * Math.cosh(aa * u) / denom) *
  (w ** 2 * Math.sin(v) * Math.sin(w * v) - w * Math.cos(v) * Math.cos(w * v));
   const partialZU = (2 * w * Math.sin(aa * u) * (w * Math.sin(v) * Math.cos(w * v) - Math.cos(v) * Math.sin(w * v))) / denom;
   const partialZV =
  (2 * w * Math.cosh(aa * u) / denom) *
  (w ** 2 * Math.cos(v) * Math.sin(w * v) + w * Math.sin(v) * Math.cos(w * v));

    // Calculate partial derivatives
    const du = vec3(
        partialXU,
        partialYU,
        partialZU,
    );

    const dv = vec3(
        partialXV,
        partialYV,
        partialZV,
    );

    return { du, dv };
}

function buffer() 
{
   var nBuffer = gl.createBuffer();
   gl.bindBuffer( gl.ARRAY_BUFFER, nBuffer );
   gl.bufferData( gl.ARRAY_BUFFER, flatten(normalsArray), gl.DYNAMIC_DRAW );
   
   var vNormal = gl.getAttribLocation( program, "vNormal" );
   gl.vertexAttribPointer( vNormal, 3, gl.FLOAT, false, 0, 0 );
   gl.enableVertexAttribArray( vNormal );

   var vBuffer = gl.createBuffer();
   gl.bindBuffer( gl.ARRAY_BUFFER, vBuffer );
   gl.bufferData( gl.ARRAY_BUFFER, flatten(pointsArray), gl.DYNAMIC_DRAW );
   
   var vPosition = gl.getAttribLocation(program, "vPosition");
   gl.vertexAttribPointer(vPosition, 4, gl.FLOAT, false, 0, 0);
   gl.enableVertexAttribArray(vPosition);

   if (!isWireframe) 
   {
      var tBuffer = gl.createBuffer();
      gl.bindBuffer( gl.ARRAY_BUFFER, tBuffer );
      gl.bufferData( gl.ARRAY_BUFFER, flatten(texCoordArray), gl.DYNAMIC_DRAW );
   
      var vTexCoord = gl.getAttribLocation(program, "vTexCoord");
      gl.vertexAttribPointer(vTexCoord, 2, gl.FLOAT, false, 0, 0);
      gl.enableVertexAttribArray(vTexCoord);
   }
}