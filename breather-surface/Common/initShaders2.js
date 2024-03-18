// Get a file as a string using  AJAX
function loadFileAJAX(name) {
    var xhr = new XMLHttpRequest(),
        okStatus = document.location.protocol === "file:" ? 0 : 200;
    xhr.open('GET', name, false);
    xhr.send(null);
    return xhr.status == okStatus ? xhr.responseText : null;
};


function initShadersFromFiles(gl, shaderSrc) {
    function getShader(gl, shaderName) {
        let vertexShader = gl.createShader(gl.VERTEX_SHADER),
            fragmentShader = gl.createShader(gl.FRAGMENT_SHADER),
            shaderScript = loadFileAJAX(shaderName);
        if (!shaderScript) {
            alert("Could not find shader source: "+shaderName);
        }

        // parsing logic
        let vertexScript = shaderScript.slice(0, shaderScript.indexOf('$'));
        let fragmentScript = shaderScript.slice(shaderScript.indexOf('$') + 1);

        gl.shaderSource(vertexShader, vertexScript);
        gl.compileShader(vertexShader);
        
        if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(vertexShader));
            return null;
        }

        gl.shaderSource(fragmentShader, fragmentScript);
        gl.compileShader(fragmentShader);

        if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
            alert(gl.getShaderInfoLog(fragmentShader));
            return null;
        }

        return [vertexShader, fragmentShader];
    }
    var shader = getShader(gl, shaderSrc),
        program = gl.createProgram();

    gl.attachShader(program, shader[0]);
    gl.attachShader(program, shader[1]);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        alert(gl.getProgramInfoLog(program));
        return null;
    }

    
    return program;
};